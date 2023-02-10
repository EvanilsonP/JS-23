function load() {
    const msg = window.document.getElementById('msg');
    const photo = window.document.getElementById('image');
    const body = document.body;

    let date = new Date();
    let hour = date.getHours();
    msg.innerHTML = `It's ${hour} O'clock.`;

    if(hour > 00 && hour < 12) {
        photo.src = '../imgs/fotomanha.png';
        body.style.background = '#e2cd9f';
    } else if(hour >= 12 && hour < 18) {
        photo.src = '../imgs/fototarde.png';
        body.style.background = '#b9846f';
    } else {
        photo.src = '../imgs/fotonoite.png';
        body.style.background = '515154';
    }
};