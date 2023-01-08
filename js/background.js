const images = [
    "00.jpg",
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg"
];

const IMG_DIR = "img/";
const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(${IMG_DIR}${images[Math.floor(Math.random() * images.length)]})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.color = "white";

/*
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
// prepend
*/