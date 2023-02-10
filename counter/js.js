function count() {
    let init = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    if(init.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        console.log('Something went wrong.');
        res.innerHTML += `Impossible counting.`;
    } else {
        res.innerHTML = 'Counting';
        let i = Number(init.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(p <= 0) {
            alert('Invalid step.');
            p = 1;
        }

        if(i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F449}`;
    }
};