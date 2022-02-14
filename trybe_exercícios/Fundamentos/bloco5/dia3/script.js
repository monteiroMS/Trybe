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


// Exercício 1
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
  where[25].className += ' holiday';
  where[26].className += ' holiday';
  where[32].className += ' holiday';
}

addsFeriados();

function addsSextou() {
  let where = document.getElementsByClassName('day');
  where[5].className += ' friday';
  where[12].className += ' friday';
  where[19].className += ' friday';
  where[26].className += ' friday';
}

addsSextou();

// Exercício 2
function addsButtonWith(string) {
  let where = document.getElementsByClassName('buttons-container')[0];
  let createsSon = document.createElement('button');
  createsSon.innerText = string;
  createsSon.id = 'btn-holiday';
  where.appendChild(createsSon);
}

// Exercício 3
addsButtonWith('Feriados');

function addsEventOnButton() {
  let where = document.querySelector('#btn-holiday');
  where.addEventListener('click', changesBackgroundColor);

  function changesBackgroundColor() {
    let element = document.getElementsByClassName('holiday');
    for (let index in element) {
      element[index].classList.toggle('itsHoliday');
    }
  }

}

addsEventOnButton();

// Exercício 4
  function createsButtonFriday(string) {
    let where = document.querySelector('.buttons-container');
    let createsButton = document.createElement('button');
    createsButton.innerText = string;
    createsButton.className = 'btn-friday';
    where.appendChild(createsButton);
  }

  createsButtonFriday('sextoooou');

// Exercício 5
  function addsClickEvent() {
    let where = document.querySelector('.btn-friday');
    where.addEventListener('click', modifiesText);
    let sextou = 'SEXTOU O/';
    let fridayArrays = [4, 11, 18, 25];

    function modifiesText() {
      let where = document.getElementsByClassName('friday');
      for (let index in where) {
        if (where[index].innerText !== sextou) {
          where[index].innerText = sextou;
        } else {
          where[index].innerText = fridayArrays[index];
        }
      }
    }
  }

  addsClickEvent();
