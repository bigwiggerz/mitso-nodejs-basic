import { existsSync } from 'fs';
import { unlink } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const filePath = join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    if (!existsSync(filePath)) throw new Error('FS operation failed');

    await unlink(filePath);
  } catch (e) {
    console.error(e.message);
  }
};


remove();
