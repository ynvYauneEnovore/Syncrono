  // Obtener el botón y el texto oculto
  var showTextButton = document.getElementById('showText');
  var hiddenText = document.getElementById('text');

  // Agregar un evento de clic al botón
  showTextButton.addEventListener('click', function() {
    // Alternar la visibilidad del texto oculto al hacer clic en el botón
    hiddenText.classList.toggle('hidden-text');
    
    // Modificar el tamaño del texto si se muestra
    if (!hiddenText.classList.contains('hidden-text')) {
      hiddenText.style.fontSize = '24px'; // Modificar el tamaño del texto aquí
    }
  });