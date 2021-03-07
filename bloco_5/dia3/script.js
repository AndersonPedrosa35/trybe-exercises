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
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDaysList () {
  let daysPAi = document.getElementById("days");
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let list = document.createElement("li");
    list.innerHTML = day;
    list.className = "day";
    daysPAi.appendChild(list);
     if (day == 24 | day == 25 | day == 31) {
       list.className = "holiday";
     }
     if (day == 4 | day == 11 | day == 18 | day == 25) {
      list.className = "friday";
    }
  }
} createDaysList();

function btnHoliday (feriados) {
  let btnPai = document.querySelector(".buttons-container");
  let btn = document.createElement("button");
  btn.innerHTML = feriados;
  btn.className = "btn-holiday";
  btnPai.appendChild(btn);
} btnHoliday("Feriados");

let btnHolidays = document.querySelector(".btn-holiday");
let listHoliday = document.querySelectorAll(".holiday");
function btnClickHoliday () {
  for (let index = 0; index < listHoliday.length; index += 1) {
    listHoliday[index].style.backgroundColor = "green";
  }
} 

function btnClickHolidayInverse () {
  for (let index = 0; index < listHoliday.length; index += 1) {
    listHoliday[index].style.backgroundColor = "rgb(238, 238, 238)";
  }
} 

btnHolidays.addEventListener("click", btnClickHoliday);
btnHolidays.addEventListener("dblclick", btnClickHolidayInverse);

function buttonFriday (friday) {
  let btnPai = document.querySelector(".buttons-container");
  let btnFriday = document.createElement("button");
  btnFriday.innerHTML = friday;
  btnFriday.className = "btn-friday";
  btnPai.appendChild(btnFriday);
} buttonFriday("Sexta-Feira");

let btnFridays = document.querySelector(".btn-friday");
let listFridays = document.querySelectorAll(".friday");

function btnFridayClick () {
  for (let index = 0; index < listFridays.length; index += 1) {
    listFridays[index].innerHTML = "SEXTOU";
  } 
}

// function btnFridayClickInverse () {
//   for (let index = 0; index < listFridays.length; index += 1) {
//     listFridays[index].innerHTML = reset;
// }

btnFridays.addEventListener("click", btnFridayClick);
//btnFridays.addEventListener("dblclick", btnFridayClickInverse);

function adicionaTarefa (tarefa) {
  let tarefaPai = document.querySelector(".my-tasks");
  let tarefas = document.createElement("span");
  tarefas.innerText = tarefa;
  tarefaPai.appendChild(tarefas);    
} adicionaTarefa("cozinhar");

function adicionaLegendaTarefa (cor) {
  let tarefaPai = document.querySelector(".my-tasks");
  let legenda = document.createElement("div");
  legenda.style.backgroundColor = cor;
  legenda.className = "task";
  tarefaPai.appendChild(legenda);
} adicionaLegendaTarefa("yellow");