function range_vision() { 
    /* let n = parseInt(prompt("Ingrese un número positivo:"));

    while (isNaN(n) || n < 0) {
        n = parseInt(prompt("ERROR! De nuevo:"));
    } */

    n = 34315;
    m = n.toString();
/*     let ulti = m.slice(-1) */
    let arr = [];
    console.log(n);
    console.log(m);

    for (let i = 0; i < m.length; i++) {
        let sub = m.substring(i, i+1)

        
        arr.push(sub)

        /* while (sub) {
            
        }
        if (sub) {} */
        
    }
    
    let sum = []

    arr.forEach((e, i) => {
        console.log(e,i)
        /* while (e != i) {
            sum.push(e)
        } */
    });

    console.log(arr);
}