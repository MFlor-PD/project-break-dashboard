const img = [
  "images/alex-robertson-OvZNUHneGhc-unsplash.jpg",
  "images/andrei-r-popescu-_JELXtwx0vQ-unsplash (1).jpg",
  "images/cody-boileau-Powgsxla7Es-unsplash.jpg",
  "images/daniel-j-schwarz-UK-EzGvEZIk-unsplash (1).jpg",
  "images/david-clode-gCNEUzIQ4bI-unsplash.jpg",
  "images/howard-senton-eY3n72NcIUo-unsplash.jpg",
  "images/kevin-grieve-wZyHpLToZrI-unsplash.jpg",
  "images/martin-bennie-pUOW-fNcNZ0-unsplash.jpg",
  "images/nicolas-pinilla-9laXSn5FeSM-unsplash.jpg",
  "images/peter-thomas-rzPOOSDNBM4-unsplash.jpg",
  "images/robert-arellano-12Z-0Kc6tKM-unsplash.jpg",
  "images/valentin-bolder-_LYyAFMuovg-unsplash.jpg"
];

let currentImage = -1;

function randomBackground () {
    do {
        newImg = Math.floor(Math.random() * img.length);
    } while (newImg === currentImage);

    currentImage = newImg;

  document.body.style.backgroundImage = `url('${img[currentImage]}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.transition = "background-image 1s ease-in-out";
}
randomBackground();

setInterval(randomBackground, 15000);