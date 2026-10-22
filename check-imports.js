import fs from 'fs';
import path from 'path';

console.log('Testing JSX syntax and imports across all files in src/pages and src/components...');

function checkImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Check relative imports
  const importRegex = /import\s+(?:(?:{[^}]+})|(?:[a-zA-Z0-9_$]+))\s+from\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    if (importPath.startsWith('.')) {
      const resolved = path.resolve(path.dirname(filePath), importPath);
      // check if resolved or resolved.jsx or resolved.js or resolved.css exists
      const exists = fs.existsSync(resolved) ||
                     fs.existsSync(resolved + '.jsx') ||
                     fs.existsSync(resolved + '.js') ||
                     fs.existsSync(resolved + '.css') ||
                     fs.existsSync(resolved + '/index.jsx') ||
                     fs.existsSync(resolved + '/index.js');
      if (!exists) {
        console.error(`BROKEN IMPORT in ${filePath}: "${importPath}" (resolved to ${resolved})`);
      }
    }
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) {
      walk(full);
    } else if (f.name.endsWith('.jsx') || f.name.endsWith('.js')) {
      checkImports(full);
    }
  }
}

walk(path.resolve('src'));
console.log('Finished import check.');
