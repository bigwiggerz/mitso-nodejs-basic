import { existsSync } from 'fs';
import { readdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dirPath = join(__dirname, 'files');

const list = async () => {
  try {
    if (!existsSync(dirPath)) throw new Error('FS operation failed');

    const files = await readdir(dirPath);
    console.log(files);
  } catch (e) {
    console.error(e.message);
  }
};

await list();
