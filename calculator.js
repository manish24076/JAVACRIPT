// Create a simple calculator using prompt and alert

/*let nam = prompt("What is your name?", "Guest");
alert("Hello, " + nam+ "!");*/

 /*function calculator() {
    let a=prompt("enter value a" , "1,2,3....");
    let b=prompt("enter value b" , "1,2,3....");
    let sum = a+b;
    let minus = a-b;
   
}


console.log(addition());
console.log(minus());*/


// Function to perform the calculation
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input! Please enter valid numbers.");
        return;
    }

    let operation = prompt("Choose an operation: +, -, *, /");

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Error! Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation! Please choose +, -, *, or /.");
            return;
    }

    alert(`Result: ${num1} ${operation} ${num2} = ${result}`);
}

// Call the calculator function
calculator();



