import inquirer from "inquirer";

const exchangeRate = {
    "PKR": {
      "USD": 0.004434589800443458980044345898,
      "GBP": 0.0037,
      "PKR": 1
    },
    "GBP": {
      "USD": 1.21,
      "PKR": 271.79,
      "GBP": 1
    },
    "USD": {
      "PKR": 225.50,
      "GBP": 0.83,
      "USD": 1
    }
  };

async function main (){
  const answer: {
    from: "PKR"| "USD" | "GBP",
    to: "PKR"| "USD" | "GBP",
    amount: number
  } = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your convertion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your convertion amount: "
    }
  ]);

  if(answer.from && answer.to && answer.amount) {
    let result = exchangeRate[answer.from][answer.to] * answer.amount;
    console.log(`Your convertion from ${answer.from} to ${answer.to} is ${result}`)
  } else {
    console.log("Invalid inputs");
  }
}
main().catch((err) => {
     console.error(err);
   });