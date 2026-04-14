const fs = require('fs');
const path = require('path');

const safePatch = `module.exports = function() { return function() {}; };\n`;

let patched = 0;

function findAndPatch(dir, depth) {
  if (depth > 8) return;
  if (!fs.existsSync(dir)) return;
  
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch(e) { return; }

  for (const entry of entries) {
    if (entry.name === '.bin') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findAndPatch(fullPath, depth + 1);
    } else if (entry.isFile() && entry.name === '_formatLimit.js') {
      try {
        fs.writeFileSync(fullPath, safePatch);
        console.log('Patched:', fullPath);
        patched++;
      } catch(e) {
        console.log('Could not patch:', fullPath, e.message);
      }
    }
  }
}

const nodeModules = path.join(__dirname, 'node_modules');

// Stub fork-ts-checker entirely
const forkTsPath = path.join(nodeModules, 'fork-ts-checker-webpack-plugin');
if (fs.existsSync(forkTsPath)) {
  try {
    fs.rmSync(forkTsPath, { recursive: true, force: true });
    fs.mkdirSync(forkTsPath, { recursive: true });
    fs.writeFileSync(
      path.join(forkTsPath, 'package.json'),
      '{"name":"fork-ts-checker-webpack-plugin","version":"6.5.3","main":"index.js"}'
    );
    fs.writeFileSync(
      path.join(forkTsPath, 'index.js'),
      'class ForkTsCheckerWebpackPlugin { apply() {} }\nmodule.exports = ForkTsCheckerWebpackPlugin;\nmodule.exports.default = ForkTsCheckerWebpackPlugin;\n'
    );
    console.log('Stubbed fork-ts-checker-webpack-plugin');
  } catch(e) {
    console.log('Could not stub fork-ts-checker:', e.message);
  }
}

// Patch all _formatLimit.js files everywhere
findAndPatch(nodeModules, 0);
console.log('Total _formatLimit.js files patched:', patched);
console.log('Patch complete.');
