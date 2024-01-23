let segundoClic = false; 

const encendido = () => {
  let screen = document.getElementById("screen");
  if (screen.classList.contains("onOff")) {
    screen.innerHTML = "";
    screen.classList.remove("onOff");
    segundoClic = false; 
  } else {
    screen.innerHTML = "<img src='img/imagen1 copy.jpg' class='img-fluid'>";
    screen.classList.add("onOff");
  }
}

const gif = () => {
  let elementoPantalla = document.getElementById("screen");

  if (elementoPantalla.classList.contains("onOff")) {
    elementoPantalla.innerHTML = '<img src="img/gif.gif" alt="GIF">';
  }
}

const gameOver = () => {
  let elementoPantalla = document.getElementById("screen");

  if (elementoPantalla.classList.contains("onOff")) {
    if (segundoClic) {
    
      elementoPantalla.innerHTML = '<img src="img/gif2.gif" alt="GIF 2">';
      segundoClic = false;
    } else {
     
      elementoPantalla.innerHTML = '<img src="img/imagen2.jpeg" alt="GIF 1">';
      segundoClic = true;
    }
  }
}
