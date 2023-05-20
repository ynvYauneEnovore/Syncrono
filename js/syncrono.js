
// Lógica del temporizador
$(document).ready(function() {
  var pomodoroMinutes = 2; // Duración del pomodoro en minutos
  var breakMinutes = 1; // Duración del descanso en minutos
  
  var pomodoroSeconds = pomodoroMinutes * 60; // Convertir minutos a segundos
  var breakSeconds = breakMinutes * 60; // Convertir minutos a segundos
  
  var countdownSeconds; // Segundos restantes en el temporizador
  var isBreak = false; // Indica si es tiempo de descanso
  var countdownInterval; // Referencia al intervalo del temporizador
  
  function startTimer() {
    countdownSeconds = isBreak ? breakSeconds : pomodoroSeconds;
    updateTimer();
    
    countdownInterval = setInterval(function() {
      countdownSeconds--;
      updateTimer();
      
      if (countdownSeconds <= 0) {
        clearInterval(countdownInterval);
        isBreak = !isBreak; // Alternar entre pomodoro y descanso
        playSound();
        startTimer();
      }
    }, 1000);
  }
  
  function updateTimer() {
    var minutes = Math.floor(countdownSeconds / 60);
    var seconds = countdownSeconds % 60;
    
    // Actualizar el temporizador en la interfaz
    $('#timer').text(('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2));
  }
  
  function playSound() {
    var audio;
    if (isBreak) {
      audio = new Audio('audio/descanso.mp3'); // Ruta al archivo de sonido para el descanso
    } else {
      audio = new Audio('audio/inicio.mp3'); // Ruta al archivo de sonido para el pomodoro
    }
    audio.play();
  }
  
  $('#start').click(function() {
    startTimer();
  });
  
  $('#stop').click(function() {
    clearInterval(countdownInterval);
  });
  
  $('#reset').click(function() {
    clearInterval(countdownInterval);
    countdownSeconds = isBreak ? breakSeconds : pomodoroSeconds;
    updateTimer();
  });
});