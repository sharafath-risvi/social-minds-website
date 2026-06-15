import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirsToProcess = [
  path.join(__dirname, 'public', 'clientlogos'),
  path.join(__dirname, 'public', 'process')
];

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, file.replace(new RegExp(`\\${ext}$`, 'i'), '.webp'));
      try {
        await sharp(inputPath)
          .webp({ quality: 80, effort: 6 }) // good quality and compression
          .toFile(outputPath);
        console.log(`Converted: ${file} -> ${path.basename(outputPath)}`);
      } catch (e) {
        console.error(`Error processing ${file}:`, e);
      }
    }
  }
}

async function run() {
  for (const dir of dirsToProcess) {
    await processDirectory(dir);
  }
  console.log('Done.');
}
run();
