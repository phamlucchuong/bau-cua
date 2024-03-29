

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

    handleAudio();
    mainSound.pause();

    songList.addEventListener("change", function () {
        var pause = document.getElementById('pauseIcon').style.display = 'block';
        var play = document.getElementById('playIcon').style.display = 'none';
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


    document.addEventListener('keydown', function(event) {
        switch(event.key) {
        case 'Z':
        case 'z':
            prevSong();
            break;
        case 'X':
        case 'x':
            PlayPause();
            break;
        case 'C':
        case 'c':
            changeSong();
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

    function prevSong() {
        if(songList.selectedIndex > 0) {
            songList.selectedIndex--;
        } else {
            songList.selectedIndex = songList.options.length - 1;
        }
        if(!mainSound.paused) {
            handleAudio();
        } else {
            mainSound.src = songList.value;
        }
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
        if(!mainSound.paused) {
            handleAudio();
        } else {
            mainSound.src = songList.value;
        }
    }
});


var duocDayNap = false;
var duocMoNap = true;


function dayNap() {
    if(duocDayNap === true) {
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
            duocMoNap = true;
        },500);
        duocDayNap = false;
    }
}


var num1, num2, num3;

function xoc() {
    var chen = document.getElementById('chen');
    if(chen.classList.contains('moNap')) {
        dayNap();
    }

    rungChen();

    var index = [
        './images/hot/bau.png',
        './images/hot/cua.png',
        './images/hot/tom.png',
        './images/hot/ca.png',
        './images/hot/ga.png',
        './images/hot/nai.png',
    ];
    
    var hot1 = document.getElementById('hot1');
    var hot2 = document.getElementById('hot2');
    var hot3 = document.getElementById('hot3');
    
    num1 = Math.floor(Math.random() * index.length);
    num2 = Math.floor(Math.random() * index.length);
    num3 = Math.floor(Math.random() * index.length);

    setTimeout(() => {
        hot1.src = index[num1];
        hot2.src = index[num2];
        hot3.src = index[num3];
    }, 350);

    var sound = document.getElementById('sound');
    sound.play();
}


function moNap() {
    if(duocMoNap === true) {
        var chen = document.getElementById('chen');
        var hot1 = document.getElementById('hot1');
        var hot2 = document.getElementById('hot2');
        var hot3 = document.getElementById('hot3');
        
        chen.classList.add('moNap');
        chen.classList.remove('dayNap');
        
        hot1.style.display = "block";
        hot2.style.display = "block";
        hot3.style.display = "block";
        setTimeout( () => {
            duocDayNap = true;
        },500);
        duocMoNap = false;
    }
}


function rungChen() {
    var chenDia = document.getElementById('bau-cua');
    chenDia.classList.add('shake');
    setTimeout(function() {
        chenDia.classList.remove('shake');
    }, 500);
}


// bắt sự kiện vuốt lên hoặc vuốt xuống để mở nắp hoặc đậy nắp

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