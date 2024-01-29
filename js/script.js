


function dayNap() {
    var chen = document.getElementById('chen');
    var hot1 = document.getElementById('hot1');
    var hot2 = document.getElementById('hot2');
    var hot3 = document.getElementById('hot3');
    chen.style.display = 'block';
    hot1.style.display = 'none';
    hot2.style.display = 'none';
    hot3.style.display = 'none';
    return true;
}
function moNap() {
    var chen = document.getElementById('chen');
    var hot1 = document.getElementById('hot1');
    var hot2 = document.getElementById('hot2');
    var hot3 = document.getElementById('hot3');
    chen.style.display = 'none';
    hot1.style.display = 'block';
    hot2.style.display = 'block';
    hot3.style.display = 'block';
}
function xoc() {
    dayNap();
    var index = [
        '../images/hot/nai.png',
        '../images/hot/bau.png',
        '../images/hot/ga.png',
        '../images/hot/ca.png',
        '../images/hot/cua.png',
        '../images/hot/tom.png'
    ];

    var hot1 = document.getElementById('hot1');
    var hot2 = document.getElementById('hot2');
    var hot3 = document.getElementById('hot3');

    var num1 = Math.floor(Math.random() * 6);
    var num2 = Math.floor(Math.random() * 6);
    var num3 = Math.floor(Math.random() * 6);

    hot1.src = index[num1];
    hot2.src = index[num2];
    hot3.src = index[num3];
}