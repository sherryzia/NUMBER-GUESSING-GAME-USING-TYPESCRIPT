import inquirer from "inquirer";
import figlet from 'figlet';
let playAgain;
do {
    let x = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "\nSelect your choice from the list:",
            choices: ["1-10", "1-100", "1-1000", "1-10000"]
        },
        {
            name: "value",
            type: "number",
            message: "\nEnter your value:"
        }
    ]);
    let y;
    switch (x.choice) {
        case "1-10":
            y = Math.floor(Math.random() * 10 + 1);
            break;
        case "1-100":
            y = Math.floor(Math.random() * 100 + 1);
            break;
        case "1-1000":
            y = Math.floor(Math.random() * 1000 + 1);
            break;
        case "1-10000":
            y = Math.floor(Math.random() * 10000 + 1);
            break;
        default:
            console.log("\nInvalid choice.\n");
            continue; // Continue the loop if an invalid choice is made
    }
    if (x.value < y) {
        console.log("\nValue you entered is too less\n");
    }
    else if (x.value > y) {
        console.log("\nValue you entered is too high\n");
    }
    else {
        console.log("Value you entered is correct\n");
    }
    // Ask the user if they want to play again
    let playAgainResponse = await inquirer.prompt([
        {
            name: "playAgain",
            type: "confirm",
            message: "Do you want to play again?",
            default: true
        }
    ]);
    playAgain = playAgainResponse.playAgain;
} while (playAgain);
console.log("\nThanks for playing!\n");
figlet('\n BY :  SHAHEER   ZIA   QAZI', function (err, data) {
    if (err) {
        console.log('\nSomething went wrong...\n');
        console.dir(err);
        return;
    }
    console.log(data);
});
