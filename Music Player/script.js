window.addEventListener('load', function() {
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const stopButton = document.getElementById('stopButton');
    const backwardButton = document.getElementById('backwardButton');
    const forwardButton = document.getElementById('forwardButton');
    const musicFileInput = document.getElementById('musicFileInput');
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    const progressBar = document.getElementById('progressBar');
    const lyricsContainer = document.getElementById('lyricsContainer');
    let currentFileIndex = 0;
    let audioFiles = [];
    let backgroundIndex = 0;
    const backgrounds = ['background-1.jpg', 'background-2.jpg', 'background-3.jpg'];
  
    playButton.addEventListener('click', function() {
      audioPlayer.play();
    });
  
    pauseButton.addEventListener('click', function() {
      audioPlayer.pause();
    });
  
    stopButton.addEventListener('click', function() {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    });
  
    backwardButton.addEventListener('click', function() {
      currentFileIndex = (currentFileIndex - 1 + audioFiles.length) % audioFiles.length;
      loadAudioFile(audioFiles[currentFileIndex]);
    });
  
    forwardButton.addEventListener('click', function() {
      currentFileIndex = (currentFileIndex + 1) % audioFiles.length;
      loadAudioFile(audioFiles[currentFileIndex]);
    });
  
    musicFileInput.addEventListener('change', function(e) {
      const files = Array.from(e.target.files);
      audioFiles = files.filter(file => file.type.startsWith('audio/'));
      currentFileIndex = 0;
      if (audioFiles.length > 0) {
        loadAudioFile(audioFiles[currentFileIndex]);
        updateBackground(backgrounds[backgroundIndex]);
        clearLyrics();
      }
    });
  
    audioPlayer.addEventListener('timeupdate', function() {
      const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      progressBar.style.width = progress + '%';
      displayLyricsForTime(audioPlayer.currentTime);
    });
  
    function loadAudioFile(file) {
      const fileURL = URL.createObjectURL(file);
      audioSource.src = fileURL;
      audioPlayer.load();
      audioPlayer.play();
      updateBackground(backgrounds[backgroundIndex]);
    }
  
    function updateBackground(backgroundURL) {
      document.body.style.backgroundImage = `url(${backgroundURL})`;
    }
  
    function displayLyricsForTime(currentTime) {
      const lyrics = getLyricsForTime(currentTime);
      lyricsContainer.textContent = lyrics;
    }
  
    function getLyricsForTime(currentTime) {
      // Replace this function with your logic to retrieve the lyrics based on the current time of the song
      // You can use an array, object, or any other data structure to store the lyrics and their corresponding time
      // Example: return lyricsArray.find(lyric => lyric.time === currentTime)?.text || '';
      // Ensure that the lyrics are synchronized with the audio time for accurate display
      return '';
    }
  
    function clearLyrics() {
      lyricsContainer.textContent = '';
    }
  
    setInterval(changeBackground, 5000);
  
    function changeBackground() {
      backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
      updateBackground(backgrounds[backgroundIndex]);
    }
  });
  