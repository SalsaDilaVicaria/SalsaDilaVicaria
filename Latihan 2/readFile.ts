import { promises as fs, readFile, readFileSync } from 'fs';

async function bacaFile(filePath: string): Promise<void> {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log(data);
  } catch (error) {
    console.error(`Gagal membaca file: ${error.message}`);
  }
}

bacaFile('baca.txt');   

