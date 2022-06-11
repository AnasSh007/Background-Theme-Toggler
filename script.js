
function theme() {

var toggle = document.getElementById('toggle');
var body = document.getElementById('body');

    if (toggle.checked == true) {
        body.classList.add('body-dark');
        body.classList.remove('body-light');
    }
    else {
        body.classList.add('body-light');
        body.classList.remove('body-dark');
    }
}
