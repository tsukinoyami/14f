document.addEventListener('DOMContentLoaded', function() {
  var botonNo = document.getElementById('botonNo');
  var botonSi = document.getElementById('botonSi');

  function changePosition() {
    var maxX = window.innerWidth - botonNo.offsetWidth;
    var maxY = window.innerHeight - botonNo.offsetHeight;
    var x = Math.floor(Math.random() * maxX);
    var y = Math.floor(Math.random() * maxY);
    botonNo.style.position = 'absolute';
    botonNo.style.left = x + 'px';
    botonNo.style.top = y + 'px';
  }

  botonNo.addEventListener('click', changePosition);
  botonNo.addEventListener('mouseover', changePosition);
  botonNo.addEventListener('touchstart', changePosition);
  // Make siClick globally accessible
  function siClick() {
    document.getElementsByTagName('h1')[0].innerHTML = 'awww que linda! teamo <3 \n redirigiendo a tu sorpresita...';
    setTimeout(function() {
      location.replace('carta.html');
    }, 2000);
  }

  botonSi.addEventListener('click', siClick);
});

