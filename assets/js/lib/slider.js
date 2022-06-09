function sliderTransitionLeft(currentTrack) {
    sliderImgNext.src = playlist[currentTrack].cover;
    ///sliderImgOriginal.style.opacity = "0";
    sliderImgNext.style.opacity = "0";
    sliderImgOriginal.style.left = "200%";
    fullImageNext.style.backgroundImage = "url(" + sliderImgNext.src + ")";
    ///fullImage.style.opacity = "0";
    setTimeout(function () {
        sliderImgOriginal.src = playlist[currentTrack].cover;
        ///sliderImgOriginal.style.opacity = "1";
        sliderImgOriginal.style.left = "50%";
        fullImage.style.backgroundImage = "url(" + sliderImgOriginal.src + ")";
        ///fullImage.style.opacity = "1";
    }, 400);
}

function sliderTransitionRight(currentTrack) {
    sliderImgNext.src = playlist[currentTrack].cover;
    ///sliderImgOriginal.style.opacity = "0";
    sliderImgNext.style.opacity = "0";
    sliderImgOriginal.style.left = "-150%";
    fullImageNext.style.backgroundImage = "url(" + sliderImgNext.src + ")";
    ///fullImage.style.opacity = "0";
    setTimeout(function () {
        sliderImgOriginal.src = playlist[currentTrack].cover;
        ///sliderImgOriginal.style.opacity = "1";
        sliderImgOriginal.style.left = "50%";
        fullImage.style.backgroundImage = "url(" + sliderImgOriginal.src + ")";
        ///fullImage.style.opacity = "1";
    }, 400);
}

function sliderEffect() {
    const sliderImgOriginal = document.createElement("img");
    globalThis.sliderImgOriginal = sliderImgOriginal;
    const fullImage = document.querySelector(".fullImage");
    globalThis.fullImage = fullImage;
    const fullImageNext = document.querySelector(".fullImageNext");
    globalThis.fullImageNext = fullImageNext;
    const sliderImgNext = document.createElement("img");
    globalThis.sliderImgNext = sliderImgNext;
    slider.append(sliderImgOriginal);
    slider.style.position = "relative";
    slider.style.overflow = "hidden";
    sliderImgNext.src = playlist[currentTrack].cover;
    sliderImgNext.style.position = "absolute";
    sliderImgNext.style.zIndex = "-1";
    slider.append(sliderImgNext);
    fullImageNext.style.backgroundImage = "url(" + sliderImgNext.src + ")";
    sliderImgOriginal.src = playlist[currentTrack].cover;
    sliderImgOriginal.style.position = "absolute";
    hammerSwipe.get("swipe").set({ direction: Hammer.DIRECTION_HORIZONTAL });

    // listen to events...
    hammerSwipe.on("swipeleft swiperight", function (ev) {
        if (ev.type === "swiperight") {
            if (currentTrack === 0) {
                currentTrack = playlist.length - 1;
                sliderTransitionLeft(currentTrack);
            } else {
                currentTrack -= 1;
                sliderTransitionLeft(currentTrack);
            }
        } else {
            if (currentTrack === playlist.length - 1) {
                currentTrack = 0;
                sliderTransitionRight(currentTrack);
            } else {
                currentTrack += 1;
                sliderTransitionRight(currentTrack);
            }
        }
    });

    next.addEventListener("click", function () {
        if (currentTrack === playlist.length - 1) {
            currentTrack = 0;
            sliderTransitionLeft(currentTrack);
        } else {
            currentTrack += 1;
            sliderTransitionLeft(currentTrack);
        }
    });

    prev.addEventListener("click", function () {
        if (currentTrack === 0) {
            currentTrack = playlist.length - 1;
            sliderTransitionRight(currentTrack);
        } else {
            currentTrack -= 1;
            sliderTransitionRight(currentTrack);
        }
    });
}

export { sliderEffect };
