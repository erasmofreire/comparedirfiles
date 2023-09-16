// Importa os módulos path e fs
const path = require('path');
const fs = require('fs');

// Define a função compareFiles()
function compareFiles(dir1, dir2, file1, file2, fileType) {
    // Abre os arquivos
    const file1Data = fs.readFileSync(path.join(dir1, file1), fileType);
    const file2Data = fs.readFileSync(path.join(dir2, file2), fileType);
  
    // Compara os arquivos
    if (file1Data === file2Data) {
      return true;
    } else {
      return false;
    }
  }
  
  // Cria um diretório para armazenar os arquivos
  const dir1 = path.join(__dirname, "./dir1");
  fs.mkdirSync(dir1);
  
  // Cria os arquivos
  const file1 = path.join(dir1, "arquivo1.txt");
  fs.writeFileSync(file1, "Eu amo comer lasanha");
  const file2 = path.join(dir1, "arquivo2.txt");
  fs.writeFileSync(file2, "Não gosto de comer pepino");
  
  // Compara os arquivos
  const result = compareFiles(
    path.join(__dirname, "./dir1"),
    path.join(__dirname, "./dir1"),
    "arquivo1.txt",
    "arquivo2.txt",
    "utf-8"
  );
  
  // Imprime o resultado
  if (result) {
    console.log("Os arquivos são iguais.");
  } else {
    console.log("Os arquivos são diferentes.");
  }
  