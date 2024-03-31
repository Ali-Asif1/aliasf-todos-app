#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let condition = true;
while (condition) {
    let user = await inquirer.prompt([
        {
            name: "add",
            type: "input",
            message: "what do you want to add in your todo list? ",
        },
        {
            name: "addmore",
            type: "confirm",
            message: "do you want to addmore in your todo list? ",
        },
    ]);
    let { add, addmore } = user;
    condition = addmore;
    if (add) {
        todoList.push(add);
    }
    else {
        console.log("Please Enter valid Input");
    }
}
if (todoList.length > 0) {
    console.log("...Your ToDo List...");
    console.log(todoList.join("\n").toUpperCase());
}
else {
    console.log("Empty ToDo List");
}
