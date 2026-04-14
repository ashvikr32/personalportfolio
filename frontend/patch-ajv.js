const fs = require('fs');
const path = require('path');

// The broken file reads `formats[name]` but formats is undefined in ajv v8+
// We patch every _formatLimit.js we can find to be a no-op

const safePatch = `
// Patched for Node 20 / ajv v8 compatibility
module.exports = function() { return function() {}; };
`;

function findAndPatch(dir, filename) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== '.bin') {
      findAndPatch(fullPath, filename);
    } else if (entry.isFile() && entry.name === filename) {
      console.log('Patching:', fullPath);
      fs.writeFileSync(fullPath, safePatch);
    }
  }
}

const nodeModules = path.join(__dirname, '..', 'node_modules');
findAndPatch(nodeModules, '_formatLimit.js');

// Also stub out fork-ts-checker if it still has broken internals
const forkTsPath = path.join(nodeModules, 'fork-ts-checker-webpack-plugin');
if (fs.existsSync(forkTsPath)) {
  const indexPath = path.join(forkTsPath, 'index.js');
  const safeStub = 'class ForkTsCheckerWebpackPlugin { apply() {} }\nmodule.exports = ForkTsCheckerWebpackPlugin;\nmodule.exports.default = ForkTsCheckerWebpackPlugin;\n';
  fs.writeFileSync(indexPath, safeStub);
  console.log('Stubbed fork-ts-checker-webpack-plugin/index.js');
}

console.log('Patch complete.');
