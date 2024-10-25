function playSong(songId) {
    alert(`Playing ${songId}`);
    // Add logic to play the song
}

function pauseSong(songId) {
    alert(`Pausing ${songId}`);
    // Add logic to pause the song
}

function removeSong(songElement) {
    const songDiv = songElement.closest('.song');
    songDiv.remove();
    alert('Song removed from library');
}
