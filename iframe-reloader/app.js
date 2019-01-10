// https://stackoverflow.com/questions/7853904/how-to-detect-when-a-youtube-video-finishes-playing
function onYouTubePlayerAPIReady() {
  var player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'ruzaAbu-A80',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// Called when player is loaded.
function onPlayerReady(event) {
  // Autoplay. I hesitated to even include this. 
  // This is cursed code. Abandon all hope, ye who enter here...
  // event.target.playVideo();
}

// Called when video finishes playing
function onPlayerStateChange(event) {        
  if(event.data === 0) {  
    // Force iframe to reload by updating src attribute
    // https://stackoverflow.com/questions/86428/what-s-the-best-way-to-reload-refresh-an-iframe
    document.getElementById('player').src = document.getElementById('player').src
      
    // Reset the player API for repeated calls
    onYouTubePlayerAPIReady();
  }
}
