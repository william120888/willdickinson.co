

// Is jQuery on

// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }


//Video play/pause when in/out of view 

var videos = document.getElementsByClassName("video"),
fraction = 0.8;
function checkScroll() {

    for(var i = 0; i < videos.length; i++) {

        var video = videos[i];

        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible > fraction) {
                video.play();
            } else {
                video.pause();
            }
    }
}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);







var video = document.getElementById("video");

var duration = 0;

if (video.duration) {
  setDuration();
} else {
  video.addEventListener('loadedmetadata', setDuration);
}


document.addEventListener('scroll', handleScroll);

function handleScroll() {
  var y = window.pageYOffset;
  var currentTime = y / 100;
  var playTo = currentTime;
  duration = Math.sqrt(Math.abs(video.currentTime - currentTime)) / 4;
  TweenLite.to(video, duration, {currentTime: currentTime, ease: Linear.easeInOut});
}

function setDuration() {
  duration = video.duration;
  console.log('duration: ' + duration);
}






