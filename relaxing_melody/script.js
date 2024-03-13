document.addEventListener('DOMContentLoaded', function() {
  const audioElements = [
    new Audio('https://github.com/Dream-World-Coder/Proper-Music/raw/main/Piano.mp3'),
    new Audio('https://github.com/Dream-World-Coder/Proper-Music/raw/main/rain.mp3'),
    new Audio('https://github.com/Dream-World-Coder/Proper-Music/raw/main/deep_forest.mp3'),
    new Audio('https://github.com/Dream-World-Coder/Proper-Music/raw/main/wind_chime.mp3'),
    new Audio('https://github.com/Dream-World-Coder/Proper-Music/raw/main/sea_beach.mp3')
  ];

  const playButtons = [
    document.getElementById('b1'),
    document.getElementById('b2'),
    document.getElementById('b3'),
    document.getElementById('b4'),
    document.getElementById('b5')
  ];

  audioElements.forEach((audioElement, index) => {
    audioElement.loop = true; // Set loop attribute
    audioElement.volume = 1.0; // Set volume to 100% 

    playButtons[index].addEventListener('click', () => {
      if (audioElement.paused) {
        audioElement.play();
        playButtons[index].textContent = 'Pause';
      } else {
        audioElement.pause();
        playButtons[index].textContent = 'Play';
      }
    });

    audioElement.addEventListener('ended', () => {
      audioElement.currentTime = 0; // Reset playback to the beginning
      audioElement.play(); // Start playing again
    });
  });

  function handlePlaybackError(error) {
    console.error('Error playing audio:', error);
    alert('Error playing audio. Please check your network connection.');
  }
});
