
const fibo = function(number) {
    let num1 = 0, num2 = 1, fib;
    if (number < 0) {
        number = number * -1;
    }

    for (let i = 1; i <= number; i++) {
        fib = num1 + num2;
        num1 = num2;
        num2 = fib;
    }

    console.log(num1);
}

console.log("The fibonacci of 30 is : ")
fibo(30);
console.log("\nThe fibonacci of -15 is : ")
fibo(-15);

