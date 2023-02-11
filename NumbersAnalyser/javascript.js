let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let result = document.querySelector('div#resultado');
let valores = [];

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false;
    }
}

function inLista(n, i) {
    if(i.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        alert('kpw')
    } else {
        alert('Valor inválido ou já encontrado na lista.');
    }
};