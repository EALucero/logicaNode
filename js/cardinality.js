function cardinality() {
    let n = parseInt(prompt("Ingrese un número:"));

    while (isNaN(n)) {
        n = parseInt(prompt("ERROR! Un número:"));
    }

    m = n.toString();
    let ulti = m.slice(-1);

    let clasificar = () => {
        let mess;

        switch (parseInt(ulti)) {
            case 0:
                mess = "zero";
                break;
            case 5:
                mess = "five";
                break;
            default:
                mess = n % 2 == 0 && n != 0 ? "even" : (n % 2 != 0 && n != 5 ? "odd" : ulti);
        }

        return mess;
    }

    alert('Input: ' + n + '\nOutput: ' + clasificar());
}

cardinality();