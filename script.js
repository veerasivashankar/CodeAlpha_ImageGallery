const images = [
  "images/photo1.jpeg",
  "images/photo2.jpeg",
  "images/photo3.jpeg",
  "images/photo4.jpeg",
  "images/photo5.jpeg",
  "images/photo6.jpeg",
  "images/photo7.jpeg",
  "images/photo8.jpeg",
  "images/photo9.jpeg",
  "images/photo10.jpeg",
  "images/photo11.jpeg",
  "images/photo12.jpeg",
  "images/photo13.jpeg"
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const closeBtn = document.querySelector(".close");

let currentIndex = 0;

images.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Photo ${index + 1}`;
  img.dataset.index = index;
  img.addEventListener("click", () => openLightbox(index));
  gallery.appendChild(img);
});

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = images[currentIndex];
  lightbox.style.display = "flex";
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex];
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex];
}

nextBtn.onclick = showNext;
prevBtn.onclick = showPrev;
closeBtn.onclick = closeLightbox;
lightbox.onclick = (e) => {
  if (e.target === lightbox) closeLightbox();
};

document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "flex") {
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "Escape") closeLightbox();
  }
});