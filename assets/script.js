function toggleSongs() {
    let moreSongs = document.getElementById("more-songs");
    moreSongs.style.display = "block";
    document.getElementById("toggle-button").style.display = "none";
}
document.getElementById("toggle-button").onclick = toggleSongs;
