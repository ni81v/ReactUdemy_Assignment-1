'use strict';


let money = prompt("What is your budget for a month?"),
    time = prompt("Enter a date in a format YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let bidingCost = prompt("Enter biding cost"),
    howMuch = prompt("How much?"),
    daysInMonth = 30;

appData.expenses[bidingCost] = howMuch;
alert(appData.budget / daysInMonth);