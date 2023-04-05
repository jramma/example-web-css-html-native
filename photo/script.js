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
        smooth: true },

      smartphone: {
        smooth: true } });



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
  }}



window.addEventListener('DOMContentLoaded', event => {
  const example = new Example({
    root: document.querySelector('.scroll-animations-example') });

});

document.getElementById("logo").addEventListener("click", function() {
  document.querySelector('body').classList.add('transition-right');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
});
document.getElementById("link").onclick = function() {
  window.location.href = "https://www.linkedin.com/in/peperamos090922/";
};
document.getElementById("insta").onclick = function() {
  window.location.href = "https://www.instagram.com/jramma97/";
};
document.getElementById("shutter").onclick = function() {
  window.location.href = "https://www.shutterstock.com/es/g/TheArtOfLie";
};

