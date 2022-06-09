function infos() {
    title.innerHTML = playlist[currentTrack].titre + " - " + playlist[currentTrack].artiste;
    moreInfos.innerHTML =  playlist[currentTrack].genre + " - " +  playlist[currentTrack].année;

    hammerSwipe.on("swipeleft swiperight", function (ev) {
        title.innerHTML = playlist[currentTrack].titre + " - " + playlist[currentTrack].artiste;
        moreInfos.innerHTML =  playlist[currentTrack].genre + " - " +  playlist[currentTrack].année;
    });
    
    next.addEventListener("click", function () {
        title.innerHTML = playlist[currentTrack].titre + " - " + playlist[currentTrack].artiste;
        moreInfos.innerHTML =  playlist[currentTrack].genre + " - " +  playlist[currentTrack].année;
    });
    prev.addEventListener("click", function () {
        title.innerHTML = playlist[currentTrack].titre + " - " + playlist[currentTrack].artiste;
        moreInfos.innerHTML =  playlist[currentTrack].genre + " - " +  playlist[currentTrack].année;
    });
}

export {infos};