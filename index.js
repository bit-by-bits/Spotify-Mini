// JAVASCRIPT FILE

// VARIABLE DECLARATION
let number = 0;
let shuffleCount = 0;
let loopCount = 0;
let music = new Audio();
let play = document.getElementById('playPause');
let track = document.getElementById('name1');
let author = document.getElementById('name2');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let loop = document.getElementById('loop');
let mute1 = document.getElementById('mute1');
let mute2 = document.getElementById('mute2');
let mute3 = document.getElementById('mute3');
let shuffle = document.getElementById('shuffle');
let volumeBar = document.getElementById('volumeBar');
let start = document.getElementById('start');
let end = document.getElementById('end');
let lyr = document.getElementById('lyricsLink');
let button = document.querySelector('.hamburger');
let menu = document.querySelector('.sideMenu');
let progressBar = document.getElementsByClassName('progress');
let image = document.getElementsByClassName('playerImg');
let songSelect = document.getElementsByClassName('song');
let song = Array.from(document.getElementsByClassName('songName'));
let add = Array.from(document.getElementsByClassName('fa-heart'));

// SONG INFO STORAGE
let songs = [
    { time: "02:56", trackName: "Excuses", artists: "AP Dhillon, Gurinder Gill, Insane" },
    { time: "03:50", trackName: "Raatan Lambiyaan", artists: "Jubin Nautiyal, Others" },
    { time: "02:48", trackName: "Desires", artists: "AP Dhillon, Gurinder Gill, Insane" },
    { time: "03:39", trackName: "Doobey", artists: "OAFF, Kausar Munir, Lothika" },
    { time: "03:48", trackName: "Ranjha", artists: "B Praak, Jasleen, Romy, Anvita Dutt" },
    { time: "03:26", trackName: "Insane", artists: "AP Dhillon, Gurinder Gill, Others" },
    { time: "03:44", trackName: "Srivalli", artists: "Javed Ali, Devi Sri Prasad" },
    { time: "03:58", trackName: "Heat Waves", artists: "Glass Animals (Dreamland)" },
    { time: "01:54", trackName: "Tere Te", artists: "AP Dhillon, Gurinder Gill, Insane" },
    { time: "03:43", trackName: "Oo Antava", artists: "Indravathi Chauhan" },
    { time: "04:14", trackName: "Brown Munde", artists: "AP Dhillon, Gurinder Gill, Others" },
    { time: "02:21", trackName: "Stay", artists: "The Kid Laroi, Justin Bieber" },
    { time: "02:48", trackName: "Bijlee Bijlee", artists: "Harrdy Sandhu" },
    { time: "04:51", trackName: "Rait Zara Si", artists: "AR Rahman, Arijit Singh, Sashaa" },
    { time: "02:04", trackName: "Spaceship", artists: "AP Dhillon, Ghinda Kahlon, Gminxr" },
    { time: "04:30", trackName: "Tu Aake Dekhle", artists: "King" },
    { time: "04:32", trackName: "Adiye", artists: "Dhibu Ninan Thomas, Kapil Kapilan" },
    { time: "03:32", trackName: "Industry Baby", artists: "Lil Nas X, Jack Harlow" },
    { time: "02:40", trackName: "Ma Belle", artists: "AP Dhillon, Amari, Others" },
    { time: "02:59", trackName: "Gehraiyaan", artists: "OAFF, Ankur Tiwari, Lothika" },
    { time: "03:19", trackName: "We Rollin", artists: "Shubh" },
    { time: "03:50", trackName: "Jugnu", artists: "Badshah, Nikhita Gandhi" },
    { time: "05:41", trackName: "Agar Tum Saath Ho", artists: "Arijit Singh" },
    { time: "03:08", trackName: "Love Nwantiti", artists: "CKay, DJ Yo!, Ax'el" },
    { time: "02:53", trackName: "Enemy", artists: "Imagine Dragons, JID, Arcane" },
    { time: "02:49", trackName: "Let Me Down Slowly", artists: "Alec Benjamin" },
    { time: "03:51", trackName: "Dil Ko Karaar Aaya", artists: "Yasser Desai, Neha Kakkar" },
    { time: "03:04", trackName: "Toxic", artists: "AP Dhillon, Intense, Others" },
    { time: "03:36", trackName: "Kina Chir", artists: "The ProcheC" },
    { time: "03:14", trackName: "Ykwim", artists: "Karan Aujla, KR$NA, Mehar" }
]

// UPDATE SONG INFO
var playingTemp, playingTime;
let playerUpdate = function () {
    music.src = `Songs/song${number}.mp3`;
    image[0].src = `Images/song${number}.jpg`;
    track.innerText = songs[number - 1].trackName;
    author.innerText = songs[number - 1].artists;
    end.innerText = songs[number - 1].time;

    lyr.addEventListener('click', () => {
        location.href = `Lyrics/lyrics${number}.html`;
    })

    playingTemp = number;
    songSelect[playingTemp - 1].classList.add('songBg');

    playingTime = window.setInterval(() => {
        let mins = Math.floor(music.currentTime / 60);
        let secs = Math.floor(music.currentTime - mins * 60);

        if (secs < 10) { secs = "0" + secs; }
        if (mins < 10) { mins = "0" + mins; }

        start.textContent = mins + ":" + secs;
    }, 100);

    music.play();
    music.currentTime = 0;
    play.classList.replace('fa-play-circle', 'fa-pause-circle');
}

// PLAY-PAUSE BUTTON
play.addEventListener("click", () => {

    if (music.paused) {
        if (number == 0) {
            number = 1;
            playerUpdate();

        } else {
            let temp = music.currentTime;
            music.play();
            music.currentTime = temp;
            play.classList.replace('fa-play-circle', 'fa-pause-circle');
        }

    } else {
        music.pause();
        play.classList.replace('fa-pause-circle', 'fa-play-circle');
    }
})

// SHUFFLE BUTTON
var randomNum;
shuffle.addEventListener('click', () => {

    shuffleCount += 1;

    if (shuffleCount % 2 === 1) {
        if (music.currentTime != 0) songSelect[playingTemp - 1].classList.remove('songBg');

        loopOff();
        shuffleOn();
    } else shuffleOff();
})

// BUTTON ON //
function shuffleOn() {

    shuffle.style.color = 'greenyellow';
    number = Math.ceil(Math.random() * 30);
    playerUpdate();

    randomNum = window.setInterval(() => {
        number = Math.ceil(Math.random() * 30);
    }, 999);
}

// BUTTON OFF //
function shuffleOff() {

    shuffle.style.color = 'grey';
    clearInterval(randomNum);
    number = playingTemp;
}

// LOOP BUTTON
var sameNum;
loop.addEventListener('click', () => {

    loopCount += 1;
    if (loopCount % 2 === 1) {
        shuffleOff();
        loopOn();
    } else loopOff();
})

// BUTTON ON //
function loopOn() {

    loop.style.color = 'greenyellow';
    sameNum = window.setInterval(() => { number = playingTemp - 1 }, 1);
}

// BUTTON OFF //
function loopOff() {

    loop.style.color = 'grey';
    clearInterval(sameNum);
    number = playingTemp - 1;
}

// MUTE BUTTON

mute1.addEventListener('click', () => {
    music.volume = 1;
    volumeBar.value = 100;
    mute3.classList.remove('hidden');
    mute1.classList.add('hidden');
})

mute2.addEventListener('click', () => {
    music.volume = 0;
    volumeBar.value = 0;
    mute1.classList.remove('hidden');
    mute2.classList.add('hidden');
})

mute3.addEventListener('click', () => {
    music.volume = 0;
    volumeBar.value = 0;
    mute1.classList.remove('hidden');
    mute3.classList.add('hidden');
})

// MOVE PROGRESS BAR
music.addEventListener('timeupdate', () => {

    let progress = parseInt((music.currentTime / music.duration) * 100);
    progressBar[0].value = progress;

    if (music.currentTime === music.duration) {
        songSelect[playingTemp - 1].classList.remove('songBg');
        number += 1;
        playerUpdate();
    }
})

// CONTROL PROGRESS BAR
progressBar[0].addEventListener('change', () => {
    music.currentTime = progressBar[0].value * music.duration / 100;
})

// CONTROL VOLUME BAR
volumeBar.addEventListener('change', () => {
    music.volume = volumeBar.value / 100;

    if (music.volume == 0) {
        mute1.classList.remove('hidden');
        mute2.classList.add('hidden');
        mute3.classList.add('hidden');
    }
    if (music.volume > 50) {
        mute1.classList.add('hidden');
        mute2.classList.add('hidden');
        mute3.classList.remove('hidden');
    }
    else{
        mute1.classList.add('hidden');
        mute2.classList.remove('hidden');
        mute3.classList.add('hidden');
    }
    })


// LIKE SONGS
add.forEach((element) => {

    element.addEventListener('click', (i) => {
        element.classList.toggle('green');
    })
})

// SELECT SONGS
song.forEach((element) => {

    element.addEventListener('click', (i) => {
        if (music.currentTime != 0) songSelect[playingTemp - 1].classList.remove('songBg');

        number = parseInt(i.target.id);
        playerUpdate();
        loopOff();
        shuffleOff();
        shuffleCount += 1;
        loopCount += 1;

        number = parseInt(i.target.id);
    })
})

// MOVE NEXT
next.addEventListener('click', () => {
    songSelect[playingTemp - 1].classList.remove('songBg');

    if (number > 29) number = 1;
    else number += 1;
    playerUpdate();
})

// MOVE PREV
prev.addEventListener('click', () => {
    songSelect[playingTemp - 1].classList.remove('songBg');

    if (loop.style.color == 'greenyellow') next.click();
    else {
        if (number < 2) number = 30;
        else number -= 1;
        playerUpdate();
    }
})

// MENU BUTTON
button.addEventListener('click', function () {
    button.classList.toggle('mode');
    menu.classList.toggle('mode');
});