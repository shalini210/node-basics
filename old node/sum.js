var prompt = require('prompt-sync')();

do {    
a = parseInt(prompt("Enter first no "));
b=  parseInt(prompt("Enter second no "));
console.log("press \n + for addition");
console.log(" - for substraction");
console.log("* for multiplicaiton");
console.log("/ for division ");
o = prompt();
switch (o) {
    case '+':
        c = a+b;
        console.log("sum is "+c);
        break;

     case '-':
        c = a-b;
        console.log("difference is "+c);
        break;
        case '*':
            c = a*b;
            console.log("product is "+c);
            break;
            case '/':
                c = a/b;
                console.log("division is "+c);
                break;
   default:
        console.log("invalid option ");
        break; 
}
console.log("do you want to continue press y/n");
ch = prompt();
} while (ch=='y');
console.log("thank you ");
// c=a+b;
// // c=parseInt(a)+parseInt( b);
// console.log("sum is "+c);