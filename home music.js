function playSong(song) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = song;
    audioPlayer.play();
}
