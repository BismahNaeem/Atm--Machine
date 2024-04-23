#! /usr/bnv/env node
//SHABANG
import inquirer from "inquirer";
//create a variable for balance
let myBalance = 10000; //dollar
//variable for pin code
let myPin = 1234;
//1st  question,                                inquirer ap sy mangta h ye 3no cheezien name ,type ,message
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
//condition  checking 
if (pinAnswer.pin == myPin) {
    console.log("correct pin code");
}
else {
    console.log("incorrect pin number");
}
//2nd question what do yu want to do witdraw or cash
let operationAns = await inquirer.prompt({
    name: "operation",
    message: "pelease select option",
    type: "list",
    choices: ["withdraw", "check balance"]
});
console.log(operationAns.operation);
//if condition is true how much amount do you want to withdraw ?
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([{
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    // =- =+
    myBalance -= amountAns.amount;
    console.log("your remaining balance is " + myBalance);
    //2nd condition if user want to check balance
}
else if (operationAns.operation === "check balance") {
    console.log("your current  balance is Rs:10000/- only");
}
