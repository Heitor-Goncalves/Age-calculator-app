// const day = document.getElementById("#day");
// const month = document.getElementById("#month");
// const year = doocument.getElementById("#year");

// const today = date.getDay();
// const currentMonth = date.getMonth() + 1; 
// const currentYear = date.getFullYear();

// var dateNasc = new Date (day/month/year);
// var dateFim = new Date(today/currentMonth/currentYear);
// var timeDiff = Math.abs(dateFim.getTime() - dateNasc.getTime());
// var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

var date1 = new Date("7/11/2010");
var date2 = new Date("12/12/2022");
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
alert(diffDays);