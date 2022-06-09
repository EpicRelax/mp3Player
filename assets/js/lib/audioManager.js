function volManager() {
    audio.volume = 0.5;
    console.log(audio.volume);
    volUp.addEventListener("click", function () {
        if (audio.volume > 1) {
            audio.volume = 1;
        }else {
            console.log(audio.volume);
            audio.volume += 0.1;
        }
    });
    volDown.addEventListener("click", function () {
        if (audio.volume < 0) {
            audio.volume = 0;
        }else {
            console.log(audio.volume);
            audio.volume -= 0.1;
        }
    });
    volMute.addEventListener("click", function () {
        audio.volume = 0;
        console.log(audio.volume)
    });
}

function play() {
    audio.play();
    playPause.innerHTML = "<i class='fa-solid fa-pause'></i>";
}

function pause() {
    audio.pause();
    playPause.innerHTML = "<i class='fa-solid fa-play'></i>";
}

function audioManager() {
    playPause.addEventListener("click", function () {
        if (audio.paused) {
            play();
        } else {
            pause();
        }
    });

    hammerSwipe.on("swipeleft swiperight", function (ev) {
        pause();
        audio = new Audio(playlist[currentTrack].mp3);
        play();
    });

    next.addEventListener("click", function () {
        pause();
        audio = new Audio(playlist[currentTrack].mp3);
        play();
    });
    prev.addEventListener("click", function () {
        pause();
        audio = new Audio(playlist[currentTrack].mp3);
        play();
    });
}

export { play, pause, audioManager, volManager };
