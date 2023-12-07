
function sayHello(name, lastName){
    console.log("Hello "+name+" "+lastName);
    let color = "blue";
}

function sum(num1, num2){
const result = num1 + num2;
return result;
}

let numbers = [12,4,123,4567,234,56,12,87,124,865,233,788,43,91,544,782,653,845];
//print numbers from 1 to 20 except 7 and 13
function printNumbers()
{
   
    for (let i = 0; i < 21; i++)
    {
        if (i!= 7 && i!= 13)
        {
            console.log(i);
        }
    }
    for (let i = 0; i < numbers.length; i++)
    {
        let num = numbers[i];
        console.log(num);
    }

}

function init()
{
    console.log("hello world!");
    let anything = "Adrian";
    sayHello(anything, "Aguinaga");   
    const result = sum(12,22); 
    console.log(result);
    printNumbers();
}


window.onload = init;//we are forcing the computer to wait