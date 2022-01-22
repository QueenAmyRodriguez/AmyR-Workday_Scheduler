// the current day is displayed at the top
var currentDay = document.querySelector("#currentDay");
var today = moment().format('MMMM Do YYYY');
currentDay.innerHTML = today;
console.log(today);

// there are time blocks from 9am - 5pm

// time blocks are color-coded to indicate past, present, and future

// when i click on time block, I can enter event

// when i click on the save button, the text is saved in local storage

// when i refresh the page the saved events persist