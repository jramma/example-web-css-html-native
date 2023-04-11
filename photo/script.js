class Example {
  constructor(options) {
    this.root = options.root;

    this.init();

    setTimeout(this.showImages.bind(this), 1000);
  }

  init() {
    this.scroll = new LocomotiveScroll({
      el: this.root,
      direction: 'horizontal',
      smooth: true,
      lerp: 0.05,
      tablet: {
        smooth: true
      },

      smartphone: {
        smooth: true
      }
    });



    this.images = this.root.querySelectorAll('.image');

    [].forEach.call(this.images, image => {
      image.addEventListener('click', () => {
        image.classList.add('-clicked');
        this.hideImages();
      });
    });
  }

  showImages() {
    [].forEach.call(this.images, image => {
      image.classList.remove('-clicked');
      image.classList.add('-active');
    });
  }

  hideImages() {
    [].forEach.call(this.images, image => {
      image.classList.remove('-active');
    });

    setTimeout(this.showImages.bind(this), 2000);
  }
}



window.addEventListener('DOMContentLoaded', event => {
  const example = new Example({
    root: document.querySelector('.scroll-animations-example')
  });

});

document.getElementById("logo").addEventListener("click", function () {
  document.querySelector('body').classList.add('transition-right');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
});
document.getElementById("link").onclick = function () {
  window.location.href = "https://www.linkedin.com/in/peperamos090922/";
};
document.getElementById("insta").onclick = function () {
  window.location.href = "https://www.instagram.com/jramma97/";
};
document.getElementById("shutter").onclick = function () {
  window.location.href = "https://www.shutterstock.com/es/g/TheArtOfLie";
};


var image1 = document.getElementById("1");
var image2 = document.getElementById("2");
var image3 = document.getElementById("3");
var image4 = document.getElementById("4");
var image5 = document.getElementById("5");
var image6 = document.getElementById("6");
var image7 = document.getElementById("7");
var image8 = document.getElementById("8");
var image9 = document.getElementById("9");
var image10 = document.getElementById("10");
var image11 = document.getElementById("11");
var image12 = document.getElementById("12");
var image13 = document.getElementById("13");
var image14 = document.getElementById("14");
var image15 = document.getElementById("15");
var image16 = document.getElementById("16");
var image17 = document.getElementById("17");
var image18 = document.getElementById("18");
var image19 = document.getElementById("19");
var image20 = document.getElementById("20");

var myFooter = document.getElementById("myFooter");

image1.addEventListener("mouseover", function () {
  myFooter.innerHTML = "El duomo de Firenze";
});

image2.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Napoli";
});

image3.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Tres árboles en el acueducto antiguo<br>de Roma";
});

image4.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Plaza Cataluña";
});
image5.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Exposición No hay replay, artista:<br>Carlos Pazos";
});
image6.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Jóvenes haciendo surf en <br> Donosti";
});
image7.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Artista nostálgico";
});
image8.addEventListener("mouseover", function () {
  myFooter.innerHTML = "El antiguo paseo del puerto<br> de Alicante";
});
image9.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Rompeolas de Alicante";
});
image10.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Un molino en ruinas";
});
image11.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Atracción turística";
});
image12.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Escritor";
});
image13.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Musics de carrer";
});
image14.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Las ramblas de Barcelona en un momento<br> poco concurrido";
});
image15.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Tres barcos navegando en el levante";
});
image16.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Fotógrafo";
});
image17.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Las tres chimeneas de <br> Sant Adrià del Besòs";
});
image18.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Donosti";
});
image19.addEventListener("mouseover", function () {
  myFooter.innerHTML = "La concha";
});
image20.addEventListener("mouseover", function () {
  myFooter.innerHTML = "Vigilante de playa";
});

if (window.innerWidth < 600) {
  const elemento = document.querySelector('html');
  elemento.innerHTML = `
  
<head>
<meta charset="UTF-8">
<title>Fotografía</title>
<link rel="stylesheet" href="photo/grid.css">
<link href="https://fonts.googleapis.com/css?family=Plaster&display=swap" rel="stylesheet">
<link rel="icon" type="image/png" href="img/icon.png">
</head>

<body>
<nav>
    <a href="index.html" class="logo">PR</a>
    <a href="https://www.linkedin.com/in/peperamos090922/" class='item' id="link">Linkedin</a>
</nav>
<br><br><br><br><br>
<p>Para una mejor experiéncia<br> consulta este mismo enlace <br> en tu ordenador.</p>
<br>
<div class="grid-gallery">
    <!-- Repeat structure -->
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/1.jpg">
    </a>
    <p>El duomo de Firenze</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/2.jpg">
    </a>
    <p>Napoli</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/3.jpg">
    </a>
    <p>Tres árboles en el acueducto antiguo<br>de Roma</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/4.jpg">
    </a>
    <p>Plaza Cataluña</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/5.jpg">
    </a>
    <p>Las ramblas de Barcelona en un momento<br> poco concurrido</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/6.jpg">
    </a>
    <p>Artista nostálgico</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/7.jpg">
    </a>
    <p>Exposición No hay replay, artista:<br>Carlos Pazos</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/8.jpg">
    </a>
    <p>El antiguo paseo del puerto<br> de Alicante</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/9.jpg">
    </a>
    <p>Rompeolas de Alicante</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/10.jpg">
    </a>
    <p>Atracción turística</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/11.jpg">
    </a>
    <p>Escritor</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/12.jpg">
    </a>
    <p>Un molino en ruinas</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/13.jpg">
    </a>
    <p>Tres barcos navegando en el levante</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/14.jpg">
    </a>
    <p>Musics de carrer</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/15.jpg">
    </a>
    <p>La concha</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/a.jpg">
    </a>
    <p>Las tres chimeneas de <br> Sant Adrià del Besòs</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/17.jpg">
    </a>
    <p>Fotógrafo</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/b.jpg">
    </a>
    <p>Vigilante de playa</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/19.jpg">
    </a>
    <p>Jóvenes haciendo surf en <br> Donosti</p>
    <a class="grid-gallery__item" href="#">
        <img class="grid-gallery__image" src="photo/img/20.jpg">
    </a>
    <p>Donosti</p>
</div>
</body>
  `;
}
