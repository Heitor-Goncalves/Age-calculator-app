// const day = document.getElementById("#day");
// const month = document.getElementById("#month");
// const year = doocument.getElementById("#year");

const day = 27;
const month = 1;
const year = 1996;

// const today = date.getDay();
// const currentMonth = date.getMonth() + 1; 
// const currentYear = date.getFullYear();

// var date1 = new Date(´${day}/${month}/${year}´);
// var date2 = new Date(´${today}/${currentMonth}/${currentYear}´);
// var timeDiff = Math.abs(date2.getTime() - date1.getTime());
// var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

// var diffDays = Math.floor((diffDays/365)); 
var nascimento = `${month}/${day}/${year}`;
var date1 = new Date(nascimento);

var diff = Date.now() - date1;
var idade = new Date(diff);

var idadeAno = idade.getUTCFullYear() - 1970;
var idadeMês = idade.getUTCMonth();
var idadeDias = idade.getUTCDay();

console.log(idadeAno, idadeMês, idadeDias);


// alert(diffDays);