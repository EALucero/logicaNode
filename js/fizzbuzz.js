function fizz_buzz() {
    let n = parseInt(prompt("Ingrese un número:"));

    while (isNaN(n)) {
        n = parseInt(prompt("ERROR! Un número:"));
    }

    let sec = [];

    for (let i = n; i >= 0; i--) {
        if (i != 0) {
            sec.push(i % 3 == 0 && i % 5 == 0 ? 'FizzBuzz' : (i % 3 == 0 ? 'Fizz' : (i % 5 == 0 ? 'Buzz' : i)));
        } else {
            sec.push(i);
        }
    }

    sec.reverse();
    alert('Input: ' + n + '\nOutput: [ ' + sec + ' ]');
}

fizz_buzz();