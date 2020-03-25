'use strict';


var money = prompt("What is your budget for a month?");
var time = prompt("Enter a date in a format YYYY-MM-DD");
var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var bidingCost = prompt("Enter biding cost");
var howMuch = prompt("How much?");
var daysInMonth = 30;

appData.expenses.bidingCost = howMuch;
alert(money / daysInMonth);