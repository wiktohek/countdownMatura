const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

function countdown()
{
    EndSchoolExamDate = new Date('4/5/2022');
    currentDate = new Date();
    let seconds = Math.floor(EndSchoolExamDate - currentDate) / 1000;
    let minutes = (Math.floor(seconds / 60) % 24) % 60;
    let hours = (Math.floor(seconds / 3600) % 24);
    let days = (Math.floor(seconds / 3600 / 24));
    let second = Math.floor(seconds) % 60;
    if(second<10) second = "0"+second;
    if(minutes<10) minutes = "0"+minutes;
    if(hours<10) hours = "0"+hours;
    if(days<10) days = "0"+days;
    daysElement.innerHTML = days
    hoursElement.innerHTML = hours
    minutesElement.innerHTML = minutes
    secondsElement.innerHTML = second
}
countdown();
setInterval(countdown, 1000)