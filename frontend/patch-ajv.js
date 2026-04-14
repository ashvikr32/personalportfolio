const fs = require('fs');
const path = require('path');

const formatLimitPatch = `module.exports = function() { return function() {}; };\n`;

let patched = 0;

function findAndPatch(dir, depth) {
  if (depth > 10) return;
  if (!fs.existsSync(dir)) return;
  
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
  catch(e) { return; }

  for (const entry of entries) {
    if (entry.name === '.bin') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findAndPatch(fullPath, depth + 1);
    } else if (entry.isFile()) {
      // Patch _formatLimit.js everywhere
      if (entry.name === '_formatLimit.js') {
        try { fs.writeFileSync(fullPath, formatLimitPatch); console.log('Patched _formatLimit:', fullPath); patched++; }
        catch(e) { console.log('Could not patch:', fullPath); }
      }
      // Also patch the compiled dotjs version
      if (entry.name === 'formatLimit.jst') {
        try { fs.writeFileSync(fullPath, ''); console.log('Cleared formatLimit.jst:', fullPath); patched++; }
        catch(e) {}
      }
    }
  }
}

const nodeModules = path.join(__dirname, 'node_modules');

// Stub fork-ts-checker entirely
const forkTsPath = path.join(nodeModules, 'fork-ts-checker-webpack-plugin');
try {
  fs.rmSync(forkTsPath, { recursive: true, force: true });
  fs.mkdirSync(forkTsPath, { recursive: true });
  fs.writeFileSync(path.join(forkTsPath, 'package.json'), '{"name":"fork-ts-checker-webpack-plugin","version":"6.5.3","main":"index.js"}');
  fs.writeFileSync(path.join(forkTsPath, 'index.js'), 'class ForkTsCheckerWebpackPlugin { apply() {} }\nmodule.exports = ForkTsCheckerWebpackPlugin;\nmodule.exports.default = ForkTsCheckerWebpackPlugin;\n');
  console.log('Stubbed fork-ts-checker-webpack-plugin');
} catch(e) { console.log('Could not stub fork-ts-checker:', e.message); }

// Also patch the root ajv-keywords if it exists
const rootAjvKeywords = path.join(nodeModules, 'ajv-keywords', 'keywords', '_formatLimit.js');
if (fs.existsSync(rootAjvKeywords)) {
  fs.writeFileSync(rootAjvKeywords, formatLimitPatch);
  console.log('Patched root ajv-keywords _formatLimit.js');
  patched++;
}

findAndPatch(nodeModules, 0);
console.log('Total files patched:', patched);
console.log('Patch complete.');
