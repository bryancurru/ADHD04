"use strict";
function calculateAverage() {
    const num1 = parseFloat(document.getElementById('avg-num1').value);
    const num2 = parseFloat(document.getElementById('avg-num2').value);
    const num3 = parseFloat(document.getElementById('avg-num3').value);
    const avg = (num1 + num2 + num3) / 3;
    document.getElementById('avg-result').innerText = `The average is: ${avg}`;
}
function clearScreen() {
    const num1 = document.getElementById('avg-num1');
    num1.value = '';
    const num2 = document.getElementById('avg-num2');
    num2.value = '';
    const num3 = document.getElementById('avg-num3');
    num3.value = '';
    document.getElementById('avg-result').innerText = "";
}
function calculateTriangleArea() {
    const base = parseFloat(document.getElementById('triangle-base').value);
    const height = parseFloat(document.getElementById('triangle-height').value);
    const area = (base * height) / 2;
    document.getElementById('triangle-result').innerText = `The area of the triangle is: ${area}`;
}
function clearScreen2() {
    const num1 = document.getElementById('triangle-base');
    num1.value = '';
    const num2 = document.getElementById('triangle-height');
    num2.value = '';
    document.getElementById('triangle-result').innerText = "";
}
function isEvenOrOdd() {
    const num = parseFloat(document.getElementById('even-odd-num').value);
    const result = num % 2 === 0 ? "even" : "odd";
    document.getElementById('even-odd-result').innerText = `The number is: ${result}`;
}
function clearScreen3() {
    const num = document.getElementById('even-odd-num');
    num.value = '';
    document.getElementById('even-odd-result').innerText = "";
}
function findNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Please enter valid numbers");
        return;
    }
    if ((num1) == (num2) && (num2) == (num3) && (num1) == (num3)) {
        alert("Equals numbers");
        return;
    }
    let numbers = [num1, num2, num3];
    numbers.sort((a, b) => a - b);
    const smallest = numbers[0];
    const middle = numbers[1];
    const largest = numbers[2];
    const result = `Smallest: ${smallest}, Middle: ${middle}, Largest: ${largest}`;
    document.getElementById('result').textContent = result;
}
function clearScreen4() {
    const num1 = document.getElementById('num1');
    num1.value = '';
    const num2 = document.getElementById('num2');
    num2.value = '';
    const num3 = document.getElementById('num3');
    num3.value = '';
    document.getElementById('result').innerText = "";
}
function calculatePower() {
    const base = parseFloat(document.getElementById('base').value);
    const exponent = parseFloat(document.getElementById('exponent').value);
    if (isNaN(base) || isNaN(exponent)) {
        alert("Please enter valid numbers");
        return;
    }
    const result = Math.pow(base, exponent);
    document.getElementById('result').textContent = `Result: ${result}`;
}
function clearScreen5() {
    const base = document.getElementById('base');
    base.value = '';
    const exp = document.getElementById('exponent');
    exp.value = '';
    document.getElementById('result').innerText = "";
}
function reverseText() {
    const inputText = document.getElementById('inputText').value;
    if (inputText === '') {
        alert("Please enter some text");
        return;
    }
    const reversedText = inputText.split('').reverse().join('');
    document.getElementById('result').textContent = `Reversed Text: ${reversedText}`;
}
function clearScreen6() {
    const base = document.getElementById('inputText');
    base.value = '';
    document.getElementById('result').innerText = "";
}
function calculateFactorial() {
    const number = parseInt(document.getElementById('number').value);
    if (isNaN(number) || number < 0) {
        alert("Please enter a valid non-negative integer");
        return;
    }
    const result = factorial(number);
    document.getElementById('result').textContent = `Factorial: ${result}`;
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
function clearScreen7() {
    const num = document.getElementById('number');
    num.value = '';
    document.getElementById('result').innerText = "";
}
function checkPerfectNumber() {
    const number = parseInt(document.getElementById('number').value);
    if (isNaN(number) || number <= 0) {
        alert("Please enter a valid positive integer");
        return;
    }
    const result = isPerfectNumber(number);
    document.getElementById('result').textContent = result ? `${number} is a perfect number` : `${number} is not a perfect number`;
}
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
function clearScreen8() {
    const num = document.getElementById('number');
    num.value = '';
    document.getElementById('result').innerText = "";
}
function checkPrimeNumber() {
    const number = parseInt(document.getElementById('number').value);
    if (isNaN(number) || number <= 1) {
        alert("Please enter a valid positive integer greater than 1");
        return;
    }
    const result = isPrime(number);
    document.getElementById('result').textContent = result ? `${number} is a prime number` : `${number} is not a prime number`;
}
function isPrime(num) {
    if (num <= 1)
        return false;
    if (num <= 3)
        return true;
    if (num % 2 === 0 || num % 3 === 0)
        return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
    }
    return true;
}
function clearScreen9() {
    const num = document.getElementById('number');
    num.value = '';
    document.getElementById('result').innerText = "";
}
function countVowels() {
    const inputText = document.getElementById('inputText').value;
    if (inputText === '') {
        alert("Please enter some text");
        return;
    }
    const vowelCount = getVowelCount(inputText);
    document.getElementById('result').textContent = `The text contains ${vowelCount} vowel(s)`;
}
function getVowelCount(text) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
