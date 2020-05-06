const musicVids = document.querySelectorAll(".musicVid")

console.log(musicVids)

musicVids.forEach(musicVid => {
    playTeaser(musicVid, 1, 2); //what is the 1 and 2 for?

    musicVid.onmouseover = () => playVid(musicVid); //video starts playing when mouse hovers
    musicVid.onmouseleave = () => pauseVideo(musicVid); //video stops playing when mouse leaves the video
    musicVid.onclick = () => playFullScreen(musicVid); //clicking the video brings the video into fullscreen, call the fullscreen function onclick
})


//Play Video Fullscreen
function playFullScreen(musicVid) {
    if (musicVid.requestFullScreen) {
        musicVid.requestFullScreen();
    } else if (musicVid.mozRequestFullScreen) {
        musicVid.mozRequestFullScreen();
    } else if (musicVid.webkitRequestFullScreen) {
        musicVid.webkitRequestFullscreen();
    }

//if in full screen, unmute the video and set the volume to 75%; basically play the video with sound
    musicVid.muted = false;
    musicVid.volume = 0.75;
    return musicVid.play();
}

//Play Video //if the video is in full screen, don't mute the sound and play it.
function playVid(musicVid) {
    if (document.fullscreenElement) {
        document.fullscreenElement.muted = false;
        document.fullscreenElement.play();
    }
    else {
        musicVid.muted = true;
        musicVid.play();
    }
}

//Pause Video
function pauseVideo(musicVid) {
    musicVid.pause();
}

//Play Teaser Function
function playTeaser(musicVid, start, end) {
    musicVid.currentTime = start;
    musicVid.play();

    //set up a stop function to stop playing video after interval
    var stopTeaser = (end - start) * 2000;
    setTimeout(function () {
        musicVid.pause();
    }, stopTeaser);
}