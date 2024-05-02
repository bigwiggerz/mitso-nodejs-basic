import { existsSync } from 'fs';
import { rename as fsRename } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const srcFile = join(__dirname, 'files', 'wrongFilename.txt');
const newFilename = 'properFilename.md';
const newFilenamePath = join(__dirname, 'files', newFilename);

const rename = async () => {
  try {
    if (existsSync(newFilenamePath) || !existsSync(srcFile))
      throw new Error('FS operation failed');

    await fsRename(srcFile, newFilenamePath);
  } catch (e) {
    console.error(e.message);
  }
};

await rename();
