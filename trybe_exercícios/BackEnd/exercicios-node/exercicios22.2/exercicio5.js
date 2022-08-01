const fs = require('fs').promises;

async function main() {
  const text = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  try {
    const createPromises = text.map((texto, index) => fs.writeFile(`file${index + 1}.txt`, texto));
    await Promise.all(createPromises);

    const fileNames = [
      'file1.txt',
      'file2.txt',
      'file3.txt',
      'file4.txt',
      'file5.txt',
    ];

    const readFiles = fileNames.map((file) => fs.readFile(file, 'utf-8'));
    const fileContents = await Promise.all(readFiles);
    
    const finalText = fileContents.join(' ');
    
    await fs.writeFile('fileAll.txt', finalText);

  } catch (error) {
    console.log(error.message); 
  }
}

main();
