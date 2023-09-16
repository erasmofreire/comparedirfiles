// Importa os módulos path e fs
const path = require('path');
const fs = require('fs');

// Cria uma lista de arquivos do diretório 1
const dir1Files = fs.readdirSync(path.join(__dirname, "./dir1"));

// Cria uma lista de arquivos do diretório 2
const dir2Files = fs.readdirSync(path.join(__dirname, "./dir2"));

// Compara os arquivos de cada lista
for (const file1 of dir1Files) {
  for (const file2 of dir2Files) {
    // Compara os arquivos
    const result = compareFiles(
      path.join(__dirname, "./dir1"),
      path.join(__dirname, "./dir2"),
      file1,
      file2,
      "utf-8"
    );

    // Imprime o resultado
    if (result) {
      console.log(`Os arquivos ${file1} e ${file2} são iguais.`);
    } else {
      console.log(`Os arquivos ${file1} e ${file2} são diferentes.`);
    }
  }
}

// Função para comparar dois arquivos
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
