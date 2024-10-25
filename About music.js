// Array to hold the song data
const songs = [
    {
        title: "Song Title 1",
        artist: "Artist 1",
        file: "song1.mp3",
        cover: "song1-cover.jpg"
    },
    {
        title: "Song Title 2",
        artist: "Artist 2",
        file: "song2.mp3",
        cover: "song2-cover.jpg"
    },
    {
        title: "Song Title 3",
        artist: "Artist 3",
        file: "song3.mp3",
        cover: "song3-cover.jpg"
    }
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const titleDisplay = document.getElementById('titleDisplay');
const artistDisplay = document.getElementById('artistDisplay');
const coverImage = document.getElementById('coverImage');

function loadSong(songIndex) {
    const song = songs[songIndex];
    titleDisplay.textContent = song.title;
    artistDisplay.textContent = song.artist;
    audioPlayer.src = song.file;
    coverImage.src = song.cover;
}

function playSong() {
    audioPlayer.play();
}

function pauseSong() {
    audioPlayer.pause();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

// Event listeners
audioPlayer.addEventListener('ended', nextSong);

// Load the first song on page load
window.onload = () => {
    loadSong(currentSongIndex);
};
