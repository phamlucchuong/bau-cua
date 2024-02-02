

document.addEventListener("DOMContentLoaded", function () {
    var mainSound = document.getElementById('mainSound');
    var songList = document.getElementById('list');

    function handleAudio() {
        mainSound.src = songList.value;
        mainSound.play();

        mainSound.addEventListener("ended", function () {
            changeSong();
        });
    }

    songList.addEventListener("change", function () {
        handleAudio();
    });

    document.addEventListener("click", function (event) {
        if (event.target.id === 'playIcon' || event.target.id === 'pauseIcon') {
            PlayPause();
        }
        if(event.target.id === 'prevIcon') {
            prevSong();
        }
        if(event.target.id === 'nextIcon') {
            changeSong();
        }
    });

    function prevSong() {
        if(songList.selectedIndex > 0) {
            songList.selectedIndex--;
        } else {
            songList.selectedIndex = songList.options.length - 1;
        }
        handleAudio();
    }

    function PlayPause() {
        mainSound.paused ? mainSound.play() : mainSound.pause();
        var pause = document.getElementById('pauseIcon');
        var play = document.getElementById('playIcon');
        if (mainSound.paused) {
            pause.style.display = 'none';
            play.style.display = 'block';
        } else {
            play.style.display = 'none';
            pause.style.display = 'block';
        }
    }

    function changeSong() {
        if (songList.selectedIndex < songList.options.length - 1) {
            songList.selectedIndex++;
        } else {
            songList.selectedIndex = 0;
        }
        handleAudio();
    }
});


document.addEventListener('keydown', function(event) {
    var mainSound = document.getElementById('mainSound');
    switch(event.key) {
    case 'X':
    case 'x':
        mainSound.paused ? mainSound.play() : mainSound.pause();
        break;
    case 'S':
    case 's':
        moNap();
        break;
    case 'A':
    case 'a':
        dayNap();
        break;
    case 'D':
    case 'd':
        xoc();
        break;
    }
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
    chenDia.classList.add('shake');
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
    /* var num1 = Math.floor(Math.random() * 6);
    var num2 = Math.floor(Math.random() * 6);
    var num3 = Math.floor(Math.random() * 6);
    
    setTimeout(() => {
        hot1.src = index[num1];
        hot2.src = index[num2];
        hot3.src = index[num3];
    }, 350); */



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
        var num1 = Math.floor(Math.random() * index.length);
        var num2 = Math.floor(Math.random() * index.length);
        var num3 = Math.floor(Math.random() * index.length);
    
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


let startY;

document.addEventListener('touchstart', function (e) {
    startY = e.touches[0].clientY;
});

document.addEventListener('touchmove', function (e) {
    let currentY = e.touches[0].clientY;
    let deltaY = currentY - startY;

    if (deltaY > 0) {
        dayNap();
    } else if (deltaY < 0) {
        moNap();
    }
    startY = currentY;
});