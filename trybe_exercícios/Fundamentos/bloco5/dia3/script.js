function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

function createsDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let index in dezDaysList) {
    let where = document.getElementById('days');
    let createsDays = document.createElement('li');
    createsDays.innerText = dezDaysList[index];
    createsDays.className = 'day';
    where.appendChild(createsDays);
  }
}

createsDaysOfTheMonth();

function addsFeriados() {
  let where = document.getElementsByClassName('day');
  where[25].className = 'day holiday';
  where[26].className = 'day holiday';
  where[32].className = 'day holiday';
}

addsFeriados();

function addsSextou() {
  let where = document.getElementsByClassName('day');
  where[5].className = 'day friday';
  where[12].className = 'day friday';
  where[19].className = 'day friday';
  where[26].className = 'friday day holiday';
}

addsSextou();

function addsButtonWith(string) {
  let where = document.getElementsByClassName('buttons-container')[0];
  let createsSon = document.createElement('button');
  createsSon.innerText = string;
  createsSon.className = 'btn-holiday';
  where.appendChild(createsSon);
}

addsButtonWith('Feriados');