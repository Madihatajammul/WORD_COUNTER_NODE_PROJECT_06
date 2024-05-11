import inquirer from 'inquirer';
import chalk from 'chalk';


async function main(){
    let exitLoop = false;
    while(!exitLoop){
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: chalk.blue('Enter some text(or  "exit" to quit):'),
            },
        ]);
        const text = answers.text;
        if(text.toLowerCase() === 'exit'){
            console.log(chalk.red('Exiting...'));
            exitLoop = true;
            continue;
        }
        const words = text.trim().split(/\s+/);
        const wordCount = words.length;

        console.log(chalk.yellow(`Word count: ${wordCount}`));
    }
}
main();

