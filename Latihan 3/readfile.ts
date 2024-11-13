import { promises as fs } from 'fs';

async function bacaFile(filePath: string): Promise<void> {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log(data);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Gagal membaca file: ${error.message}`);
    } else {
      console.error('Terjadi kesalahan yang tidak diketahui');
    }
  }
}

// Ganti 'teks.txt' dengan nama file yang ingin dibaca
bacaFile('teks.txt');
