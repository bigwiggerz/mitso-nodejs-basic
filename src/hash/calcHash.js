import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const fileContent = await readFile(filePath);
  const hash = createHash('sha256').update(fileContent).digest('hex');

  console.log('SHA256 hash of %s is: %s', filePath, hash);
};

await calculateHash();
