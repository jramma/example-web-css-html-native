window.onload = function () {
	//Obtiene el elemento de notificación por ID
	var notificacion = document.getElementById("notificacion");

	//Muestra la notificación utilizando CSS
	notificacion.classList.add("mostrar");

	//Establece un temporizador para ocultar la notificación después de 3 segundos
	setTimeout(function () {
		notificacion.classList.remove("mostrar");
	}, 3000);
};


// Obtiene los enlaces de Frontend y Backend por ID
var frontendLink = document.getElementById("frontend-link");
var backendLink = document.getElementById("backend-link");
var moreWorkBtn = document.getElementById("morework");
moreWorkBtn.addEventListener("click", function () {
	window.location.href = "https://github.com/jramma";
});
// Obtiene el contenedor de la galería por ID
var gallery = document.getElementById("gallery");

// Agrega un controlador de eventos clic para el enlace de Frontend
frontendLink.addEventListener("click", function (event) {
	// Evita que el enlace cargue una nueva página
	event.preventDefault();

	// Cambia el contenido de la galería para mostrar imágenes de Frontend
	gallery.innerHTML = `
    <div class="row">
                    <div class="pics" id="p1"></div>
                    <div class="pics" id="p2"></div>
                    <div class="pics" id="p3"></div>
                </div>
                <br> <br>
                <div id="contenido">
                    <h2>Frontend</h2><br>
                    <p>Aunque frontend no sea mi fuerte, esta web está programada por<br>
                        mi con CSS, HTML5 y Java Script.<br> <br>En el primer vídeo
                        puedes ver el apartado <a href="photo.html">"fotografía"</a> que puedes ver también <br>si navegas
                        desde un ordenador. El segundo vídeo es otro portfolio, ya que este <br>
                        no es el primero que hago. El tercero es un proyecto en el que trabaje <br>
                        en el ITAcademy de Barcelona, está hecho con Angular y el back es Java.<br><br>
                    En las hackathons suelo usar plantillas de terceros y construir sobre ellas,<br>
               actualmente estoy aprendiendo Angular y ojeando un poco de react porque <br>
               creo que me serían útiles. </p>
                </div>
                <br> <br> <br> <br> <br>
                <div class="row">
                    <div class="pics" id="v1"><video src="mp4/slide.mp4" autoplay loop controls></video></div>
                    <div class="pics" id="v2"><video src="mp4/3.mp4" loop controls></video></div>
                    <div class="pics" id="v3"><video src="mp4/proyect.mp4" loop controls></video></div>
                </div>
  `;
});

// Agrega un controlador de eventos clic para el enlace de Backend
backendLink.addEventListener("click", function (event) {
	// Evita que el enlace cargue una nueva página
	event.preventDefault();

	// Cambia el contenido de la galería para mostrar videos de Backend
	gallery.innerHTML = `
    <div class="row">
      <div class="pics" id="v1"><video src="tesla.mp4" autoplay loop controls></video></div>
      <div class="pics" id="v2"><video src="dc.mp4" loop controls></video></div>
    </div>
    <div class="row">
      <div class="pics" id="v3"><video src="micro.mp4" loop controls></video></div>
      <div class="pics" id="v4"><video src="neu.mp4" loop controls></video></div>
    </div>
  `;
});

console.log("oo");
var menubar = document.querySelector("#cross");
var sidenav = document.querySelector("#sidenav");
var overlay = document.querySelector("#overlay");
var close = document.querySelector("#close");
var navlink = document.querySelectorAll("#sidenav a");
menubar.addEventListener('click', function (value) {
	console.log(value);
	navlink.forEach(function (v) {
		v.style.color = "black";
	});
	//sidenav.style.display="initial";
	overlay.style.display = "initial";
	overlay.style.background = "rgba(0, 0, 0, 0.39)";
	sidenav.style.width = '100%';

});




console.log(navlink);
close.addEventListener('click', function (value) {
	overlay.style.display = "none";
	navlink.forEach(function (v) {
		v.style.color = "rgb(255,217,0)";
	});
	overlay.style.background = "transparent";
	//navlink.target.style.color="transparent";

	sidenav.style.width = '0%';

});

//var myimg=document.querySelector("#myimg");

var typo = document.querySelector('#typing');

var options = {
	strings: ["Full Stack Developer", "Philosopher.", "Back End Developer", "Photographer."],
	typeSpeed: 100,
	backSpeed: 100,// backspacing speed
	backDelay: 500,// time before backspacing
	loop: true,
	loopCount: false,// false = infinite
	showCursor: true,
	cursorChar: "|",
	backDelay: 1000,
};

var typed = new Typed('#typing', options);
$(function () {
	$("#typing").typed({
		strings: ["Developers.", "Designers.", "People."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 40,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function () { },
		// starting callback function before each string
		preStringTyped: function () { },
		//callback for every typed string
		onStringTyped: function () { },
		// callback for reset
		resetCallback: function () { }
	});
});



