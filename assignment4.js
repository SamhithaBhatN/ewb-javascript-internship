for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

let number = 11;


while (true) {
    if (number > 10 && number % 6 === 0) {
        console.log("First number greater than 10 divisible by 6:", number);
        break;
    }

    number++;
}


let count = 0;

do {
    count++;

    if (count === 3) {
        continue;
    }

    console.log("Count:", count);
} while (count < 5);

