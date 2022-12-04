#!usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"

const sleep =()=>{
    return new Promise((res)=>{
    setTimeout(res, 3000) 

                    })  
}
async function welcome(){
    let rainbowTitle = chalkAnimation.rainbow("let start calculator for you")
    await sleep()
    rainbowTitle.stop()

    let rainTitle = chalkAnimation.karaoke(`
    
    ███    ███  █████  ██████  ███████     ██████  ██    ██     ██████  ██     ██  █████  ██ ███████ 
    ████  ████ ██   ██ ██   ██ ██          ██  ██  ██  ██      ██    ██ ██     ██ ██   ██ ██ ██ 
    ██ ████ ██ ███████ ██   ██ █████       ██████    ████      ██    ██ ██  █  ██ ███████ ██ ███████ 
    ██  ██  ██ ██   ██ ██   ██ ██          ██  ██    ██        ██    ██ ██ ███ ██ ██   ██ ██      ██ 
    ██      ██ ██   ██ ██████  ███████     ██████    ██         ██████  █████████ ██   ██ ██ ███████    `)
    await sleep()
    rainTitle.stop()

    console.log(` 
     __________
    | ________ |
    ||12345678||
    |""""""""""|
    |[M|#|C][-]|
    |[7|8|9][+]|
    |[4|5|6][x]|
    |[1|2|3][%]|
    |[.|O|:][=]|
    "----------"`)
}
await welcome()

async function askQuestion (){
    const ans = await inquirer
    .prompt([
        {type:"list",
        name:"operator",
        message:"choose your operation then enter your number",
        choices:["+ Addittion","- Substraction","* Multiplication","/ Division","^ Power"]
    },
        {
            type:"number",
            name:"num1",
            message:"enter num 1: "
        },
        
        {
            type:"number",
            name:"num2",
            message:"enter num 2: "
        }
    ])
    if (ans.operator == "+ Addittion"){
        console.log(chalk.bgBlack(`${ans.num1} + ${ans.num2} = ${ans.num1 + ans.num2}`))
    }
    if (ans.operator == "- Substraction"){
        console.log(chalk.bgBlue(`${ans.num1} - ${ans.num2} = ${ans.num1 - ans.num2}`))
    }
    if (ans.operator == "* Multiplication"){
        console.log(chalk.bgCyan(`${ans.num1} * ${ans.num2} = ${ans.num1 * ans.num2}`))
    }
    if (ans.operator == "/ Division"){
        console.log(chalk.bgGray(`${ans.num1} / ${ans.num2} = ${ans.num1 / ans.num2}`))
    }
    if (ans.operator == "^ Power"){
        console.log(chalk.bgGreen(`${ans.num1} ^ ${ans.num2} = ${Math.pow(ans.num1, ans.num2)}`))
    }

}

async function startAgain(){
    do{
        await askQuestion()
        var again = await inquirer
        .prompt({
            type:"input",
            name:"restart",
            message:"do you want to start again then press 'y' or press 'n' for no?"
        })
    }while(again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES' )
}

await startAgain()






