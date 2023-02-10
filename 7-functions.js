function evenOrOdd(n) {
    if(n%2 == 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
};

console.log(evenOrOdd(4));

function addUp(n1=0, n2=0) {
    return n1+n2;
};

console.log(addUp(7));

const multiple = (x) => {
    return x * 2;
}

console.log(multiple(5));

function factorial(n) {
    let fat = 1;
    for(let c = n; c > 1; c--) {
        fat *= c;
    }

    return fat;
}

console.log(factorial(5)); // 120