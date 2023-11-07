import readline from 'readline-sync';

let input = 0;

do {
    input = readline.questionInt('1: store 2: getAll 5: exit: ');
    switch(input) {
        case 1 : let name = readline.question('Enter name: ');
                    console.log(name);
            break;
        case 2: 
        break;
    }
} while(input != 5);
