// DOM Manipulation

var div = document.querySelector('.div');
var button = document.querySelector('button');

var btnswitch = 0;

button.addEventListener('click', function() {
    if (btnswitch === 0) {
        div.style.backgroundColor = 'transparent';
        button.innerHTML = "OFF";
        btnswitch = 1;
    }
    else {
        div.style.backgroundColor = 'yellow';
        button.innerHTML = "ON";
        btnswitch = 0;
    }
})