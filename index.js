let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
for(i=0; i < weeklyExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer
}
