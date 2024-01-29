


window.addEventListener("DOMContentLoaded", function () {
    var mainSound = document.getElementById('mainSound');

    // Bắt sự kiện "ended" bằng cách sử dụng hàm callback
    mainSound.addEventListener("ended", function() {
        mainSound.currentTime = 0;
        mainSound.play();
    });

    // Phát âm thanh khi trang được tải
    mainSound.play();
});


function dayNap() {
    var chen = document.getElementById('chen');
    var hot1 = document.getElementById('hot1');
    var hot2 = document.getElementById('hot2');
    var hot3 = document.getElementById('hot3');
    
    chen.classList.add('dayNap');
    chen.classList.remove('moNap');
    setTimeout( () => {
        hot1.style.display = 'none';
        hot2.style.display = 'none';
        hot3.style.display = 'none';
    } ,500);
}


function moNap() {
    var chen = document.getElementById('chen');
    var hot1 = document.getElementById('hot1');
    var hot2 = document.getElementById('hot2');
    var hot3 = document.getElementById('hot3');
    
    chen.classList.add('moNap');
    chen.classList.remove('dayNap');
    
    hot1.style.display = 'block';
    hot2.style.display = 'block';
    hot3.style.display = 'block';
}


function rungChen() {
    var chenDia = document.getElementById('bau-cua');

    // Thêm lớp CSS 'shake' để kích hoạt chuyển động lắc
    chenDia.classList.add('shake');

    // Xóa lớp 'shake' sau khi chuyển động hoàn thành
    setTimeout(function() {
        chenDia.classList.remove('shake');
    }, 500);
}


var i = 0;
var iRate = Math.floor(Math.random() * (16 - 10 + 1) + 10);

function xoc() {
    var chen = document.getElementById('chen');
    if(chen.classList.contains('moNap')) {
        dayNap();
    }

    rungChen();

    var index = [
        './images/hot/nai.png',
        './images/hot/bau.png',
        './images/hot/ga.png',
        './images/hot/ca.png',
        './images/hot/cua.png',
        './images/hot/tom.png'
    ];
    
    var hot1 = document.getElementById('hot1');
    var hot2 = document.getElementById('hot2');
    var hot3 = document.getElementById('hot3');
    
    // tỉ lệ tự nhiên
    // var num1 = Math.floor(Math.random() * 6);
    // var num2 = Math.floor(Math.random() * 6);
    // var num3 = Math.floor(Math.random() * 6);
    
    // setTimeout(() => {
    //     hot1.src = index[num1];
    //     hot2.src = index[num2];
    //     hot3.src = index[num3];
    // }, 350);



    // tỉ lệ có can thiệp
    if(i == iRate) {
        var num = Math.floor(Math.random() * 6);

        setTimeout(() => {
            hot1.src = index[num];
            hot2.src = index[num];
            hot3.src = index[num];
        }, 350);
        i = 0;
    } else {
        var num1 = Math.floor(Math.random() * 6);
        var num2 = Math.floor(Math.random() * 6);
        var num3 = Math.floor(Math.random() * 6);
    
        setTimeout(() => {
            hot1.src = index[num1];
            hot2.src = index[num2];
            hot3.src = index[num3];
        }, 350);
        i++;
    }

    var sound = document.getElementById('sound');
    sound.play();
}