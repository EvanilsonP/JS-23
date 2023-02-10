function check() {
    let date = new Date();
    let year = date.getFullYear();
    let fullYear = document.getElementById('txtano');
    let res = document.getElementById('res');

    if(fullYear.value.length == 0 || fullYear.value > year) {
        alert('Something went wrong.');

    } else {
        const fsex = document.getElementsByName('radsex');
        let age = year - Number(fullYear.value);
        res.innerHTML = `You are ${age} years old.`;

        let genrer = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'photo');

        if(fsex[0].checked) {
            genrer = 'Man';
            if(age >= 0 && age <= 10) {
                // kid
                // img.setAttribute('src', 'foto-bebe-f.png');
            } else if(age < 21) {
                // young
            } else if(age < 50) {
                // adulto
            } else {
                // idoso
            }

        } else if(fsex[1].checked) {
            genrer = 'Woman';

            if(age >= 0 && age <= 10) {
                // kid
            } else if(age < 21) {
                // young
            } else if(age < 50) {
                // adulto
            } else {
                // idoso
            }
        }
        res.innerHTML = `We detected a ${genrer} ${age} years old.`;
    }
};