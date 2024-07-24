function calculateAverage(): void {
    const num1 = parseFloat((document.getElementById('avg-num1') as HTMLInputElement).value);
    const num2 = parseFloat((document.getElementById('avg-num2') as HTMLInputElement).value);
    const num3 = parseFloat((document.getElementById('avg-num3') as HTMLInputElement).value);
    const avg = (num1 + num2 + num3) / 3;
    document.getElementById('avg-result')!.innerText = `The average is: ${avg}`;
}

function clearScreen(): void {
    const num1 = document.getElementById('avg-num1') as HTMLInputElement;
    num1.value = '';
    const num2 = document.getElementById('avg-num2') as HTMLInputElement;
    num2.value = '';
    const num3 = document.getElementById('avg-num3') as HTMLInputElement;
    num3.value = '';
    document.getElementById('avg-result')!.innerText = "";
}

function calculateTriangleArea(): void {
    const base = parseFloat((document.getElementById('triangle-base') as HTMLInputElement).value);
    const height = parseFloat((document.getElementById('triangle-height') as HTMLInputElement).value);
    const area = (base * height) / 2;
    document.getElementById('triangle-result')!.innerText = `The area of the triangle is: ${area}`;
}

function clearScreen2(): void {
    const num1 = document.getElementById('triangle-base') as HTMLInputElement;
    num1.value = '';
    const num2 = document.getElementById('triangle-height') as HTMLInputElement;
    num2.value = '';
    document.getElementById('triangle-result')!.innerText = "";
}

function isEvenOrOdd(): void {
    const num = parseFloat((document.getElementById('even-odd-num') as HTMLInputElement).value);
    const result = num % 2 === 0 ? "even" : "odd";
    document.getElementById('even-odd-result')!.innerText = `The number is: ${result}`;
}

function clearScreen3(): void {
    const num = document.getElementById('even-odd-num') as HTMLInputElement;
    num.value = '';
    document.getElementById('even-odd-result')!.innerText = "";
}

function findNumbers(): void {
    const num1 = parseFloat((document.getElementById('num1') as HTMLInputElement).value);
    const num2 = parseFloat((document.getElementById('num2') as HTMLInputElement).value);
    const num3 = parseFloat((document.getElementById('num3') as HTMLInputElement).value);

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
    (document.getElementById('result') as HTMLParagraphElement).textContent = result;
}

function clearScreen4() {
    const num1 = document.getElementById('num1') as HTMLInputElement;
    num1.value = '';
    const num2 = document.getElementById('num2') as HTMLInputElement;
    num2.value = '';
    const num3 = document.getElementById('num3') as HTMLInputElement;
    num3.value = '';
    document.getElementById('result')!.innerText = "";
}

function calculatePower(): void {
    const base = parseFloat((document.getElementById('base') as HTMLInputElement).value);
    const exponent = parseFloat((document.getElementById('exponent') as HTMLInputElement).value);

    if (isNaN(base) || isNaN(exponent)) {
        alert("Please enter valid numbers");
        return;
    }

    const result = Math.pow(base, exponent);
    (document.getElementById('result') as HTMLParagraphElement).textContent = `Result: ${result}`;
}

function clearScreen5() {
    const base = document.getElementById('base') as HTMLInputElement;
    base.value = '';
    const exp = document.getElementById('exponent') as HTMLInputElement;
    exp.value = '';
    document.getElementById('result')!.innerText = "";
}

function reverseText(): void {
    const inputText = (document.getElementById('inputText') as HTMLInputElement).value;

    if (inputText === '') {
        alert("Please enter some text");
        return;
    }

    const reversedText = inputText.split('').reverse().join('');
    (document.getElementById('result') as HTMLParagraphElement).textContent = `Reversed Text: ${reversedText}`;
}

function clearScreen6() {
    const base = document.getElementById('inputText') as HTMLInputElement;
    base.value = '';
    document.getElementById('result')!.innerText = "";
}

function calculateFactorial(): void {
    const number = parseInt((document.getElementById('number') as HTMLInputElement).value);

    if (isNaN(number) || number < 0) {
        alert("Please enter a valid non-negative integer");
        return;
    }

    const result = factorial(number);
    (document.getElementById('result') as HTMLParagraphElement).textContent = `Factorial: ${result}`;
}

function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function clearScreen7() {
    const num = document.getElementById('number') as HTMLInputElement;
    num.value = '';
    document.getElementById('result')!.innerText = "";
}

function checkPerfectNumber(): void {
    const number = parseInt((document.getElementById('number') as HTMLInputElement).value);

    if (isNaN(number) || number <= 0) {
        alert("Please enter a valid positive integer");
        return;
    }

    const result = isPerfectNumber(number);
    (document.getElementById('result') as HTMLParagraphElement).textContent = result ? `${number} is a perfect number` : `${number} is not a perfect number`;
}

function isPerfectNumber(num: number): boolean {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

function clearScreen8() {
    const num = document.getElementById('number') as HTMLInputElement;
    num.value = '';
    document.getElementById('result')!.innerText = "";
}

function checkPrimeNumber(): void {
    const number = parseInt((document.getElementById('number') as HTMLInputElement).value);

    if (isNaN(number) || number <= 1) {
        alert("Please enter a valid positive integer greater than 1");
        return;
    }

    const result = isPrime(number);
    (document.getElementById('result') as HTMLParagraphElement).textContent = result ? `${number} is a prime number` : `${number} is not a prime number`;
}

function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function clearScreen9() {
    const num = document.getElementById('number') as HTMLInputElement;
    num.value = '';
    document.getElementById('result')!.innerText = "";
}

function countVowels(): void {
    const inputText = (document.getElementById('inputText') as HTMLInputElement).value;

    if (inputText === '') {
        alert("Please enter some text");
        return;
    }

    const vowelCount = getVowelCount(inputText);
    (document.getElementById('result') as HTMLParagraphElement).textContent = `The text contains ${vowelCount} vowel(s)`;
}

function getVowelCount(text: string): number {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (const char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}