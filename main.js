'use strict';
let money, time;

function start() {
  money = +prompt("What is your budget for a month?");
  time = prompt("Enter a date in a format YYYY-MM-DD");

  while(isNaN(money) || money === '' || money === null) {
    money = +prompt("What is your budget for a month?");
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let bindingCost = prompt("Enter a binding cost in this month"),
          howMuch = prompt("How much does it take?");
    
      if ( (typeof(bindingCost)) === 'string' &&  (typeof(bindingCost)) !== null && !isNaN(howMuch) 
          && (typeof(howMuch)) !== null && bindingCost !== '' && howMuch !== ''
          && bindingCost.length < 50 ) {
    
          console.log('Done');
          appData.expenses[bindingCost] = howMuch;
        } else {
            console.log("unproper data");
            i--;
        }
    }
  },
  detectDyaBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Your daily budget is " + appData.moneyPerDay);
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
        console.log('Low Profit');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Middle Profit');
    } else if (appData.moneyPerDay > 2000) {
        console.log('High Profit');
    } else {
        console.log('ERROR! Revise your data');
    }
  },
  checkSavings: function() {
    if (appData.savings) {
      let save = +prompt("What is your savings?"),
          interest = +prompt("What is your interest?");
    
        appData.monthIncome = save / 100 / 12 * interest;
        alert("Deposit income per month is: " + appData.monthIncome);
    }  
  },
  chooseOptExpenses: function() {
    for (let i = 1; i < 3; i++) {
      let opt = prompt("What is your non-binding cost?");
      appData.optionalExpenses[i] = opt;
    }
  },
  chooseIncome: function() {
    let items = prompt("What are the sources of your additional income? (Make a comma-separated list)", "");
    if (typeof(items) != 'string' || items == '' || typeof(items) == null) {
        console.log("Incorrect data!");
    } else {
        appData.income = items.split(', ');
        appData.income.push(prompt("Anything else?"));
        appData.income.sort();
    }
    appData.income.forEach(function(itemmassive, i) {
        alert("List of your additional income soruces: " + (i + 1) + " - " + itemmassive);
    });
  }
};

for (let key in appData) {
    console.log("Our App includes the following data: " + key + " - " + appData[key]);
}