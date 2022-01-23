// the current day is displayed at the top

//create a variable to store the element
var currentDay = document.querySelector("#currentDay");
//store class name results in variable
var hoursList = document.querySelectorAll(".hour");

var textArea = document.querySelectorAll("textarea");
console.log(textArea);

// creates a variable to store today's date
var today = moment().format('dddd, MMMM Do, YYYY');

// set the innerHTML of the element to reflect todays date on the page
currentDay.innerHTML = today;

var currentHour = moment();
// there are time blocks from 9am - 5pm

// create a function that will display business hours
var businessHours = function () {
    //store time in a variable
    var bHours = moment().set('hour', 8);

    // loop adds an hour to bhours and adds the time to the page
    for (var i = 0; i < 8; i++) {
        //add hours
        hoursList[i].innerHTML = bHours.add(1, "hour").format("hA");
    }
// time blocks are color-coded to indicate past, present, and future
    if (bHours.isBefore(currentHour)) {
        $('textarea').addClass('past');
    }
    else if (bHours.isSame(currentHour)) {
        $('textarea').addClass('present');
    } else if (bHours.isAfter(currentHour)) {
        $('textarea').addClass('future');
    }
}
businessHours();

// when I click on the timeblock then i can enter an event 
var dailyTasks = [];

$(".time-block").on("click", ".description", function(){
    var addTask = $(this).text().trim();
    console.log(addTask);

    var textInput = $("textarea")
    .addClass("description")
    .val(addTask);
});

// when i click the save button the tasks are saved

var saveTasks = $('.time-block').on('click', '.saveBtn', function(){
    localStorage.setItem("dailyTasks", JSON.stringify(dailyTasks));
});


// when i refresh the page the tasks are displayed
var loadTasks = function() {
    var savedTasks = localStorage.getItem("dailyTasks");

  if (!savedTasks) {
    return false;
  }

  savedTasks = JSON.parse(savedTasks);

    // loop through savedTasks array
    for (var i = 0; i < savedTasks.length; i++) {
        // pass each task object into the `createTaskEl()` function
        createTaskEl(savedTasks[i]);
    }
}





