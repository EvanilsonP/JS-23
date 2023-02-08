var area = document.getElementById('area');

area.addEventListener('click', clic);
area.addEventListener('mouseenter', enter);
area.addEventListener('mouseout', leave);

function clic() {
    area.innerText = 'Clicked';
    area.style.background = 'blue';
}

function enter() {
    area.innerText = 'entered';
    area.style.background = 'black';
}

function leave() {
    area.innerText = 'left';
    area.style.background = 'red';
}

