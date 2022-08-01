const fs = require('fs').promises;

async function getData() {
  const response = await fs.readFile('simpsonsBackup.json', 'utf8');
  return JSON.parse(response);
}

function getCharacter(stringCharId) {
  return new Promise(async (resolve, reject) => {
    const data = await getData();
    if (!data.some(({ id }) => id === stringCharId)) {
      reject(new Error('id não encontrado'));
    }

    resolve(data.find(({ id }) => stringCharId === id));
  });
}

// 4.1
async function getAllCharacters() {
  const data = await getData();
  data.forEach(({ id, name }) => {
    console.log(`${id} - ${name}`);
  });
}

// 4.2
async function getNameById(id) {
  try {
    const { name } = await getCharacter(id);
    console.log(name);
  } catch (error) {
    console.log(error.message);
  }
} 

// 4.3
async function removeChar(id1, id2) {
  const data = await getData();
  const newData = data.filter(({ id }) => id !== id1 && id !== id2);
  try {
    await fs.writeFile('simpsons.json', JSON.stringify(newData));
    console.log('Personagens removidos com sucesso!');
  } catch (error) {
    console.log(error.message);
  }
}

// 4.4
async function createSimpsonsFamily() {
  const data = await getData();
  const simpsonFamily = data.filter(({ id }) => id <= 4);
  try {
    const fileName = 'simpsonsFamily.json';
    await fs.writeFile(fileName, JSON.stringify(simpsonFamily));
    console.log(`Arquivo ${fileName} criado com sucesso!`);
  } catch (error) {
    console.log(error.message);
  }
}

// 4.5
async function addToSimpsonsFamily(stringCharId) {
  const data = await getData();
  const { id: newId, name: newName } = data.find(({ id }) => stringCharId === id);

  const newData = [
    ...data.filter(({ id }) => id <= 4),
    { id: newId, name: newName },
  ];

  try {
    const fileName = 'simpsonsFamily.json';
    await fs.writeFile(fileName, JSON.stringify(newData));
    console.log(`Arquivo ${fileName} alterado com sucesso!`);
  } catch (error) {
    console.log(error.message);
  }
}

// 4.6
async function nelsonToMaggie() {
  await addToSimpsonsFamily('8');
  const simpsonFamily = async () => {
    const response = await fs.readFile('simpsonsFamily.json', 'utf8');
    return JSON.parse(response);
  }
  const family = await simpsonFamily();
  family.splice(4, 1, { id: '5', name: 'Maggie Simpson' });
  try {
    const fileName = 'simpsonsFamily.json';
    await fs.writeFile(fileName, JSON.stringify(family));
    console.log(`Maggie foi inserida em ${fileName} com sucesso!`);
  } catch (error) {
    console.log(error.message);
  }
}
