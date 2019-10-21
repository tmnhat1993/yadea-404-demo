$(document).ready(function() {
    console.log(window.innerWidth, window.innerHeight);
    let $video = document.getElementById('vid');
    console.log($video);
    if(window.innerWidth <= 768){
        $video.src = 'video/Mobile.mp4';
    }
});