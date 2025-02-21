document.addEventListener("DOMContentLoaded", function () {
    const heart = document.getElementById("heart");
    const images = document.querySelectorAll(".background-image");
    let currentImageIndex = 0;

    // Animasi hati muncul
    setTimeout(() => {
        heart.style.opacity = "1";
        heart.style.animation = "heartBeat 1.5s infinite alternate ease-in-out";
    }, 500);

    // Animasi berganti gambar latar belakang
    setInterval(() => {
        images.forEach((img, index) => {
            img.style.opacity = index === currentImageIndex ? "1" : "0";
        });
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 5000);

    // Efek ketikan untuk teks "Sayang Vero dari Hanif"
    const loveMessage = document.querySelector(".love-message");
    const messageText = "Sayang Vero dari Hanif";
    let index = 0;

    function typeEffect() {
        if (index < messageText.length) {
            loveMessage.innerHTML += `<span>${messageText.charAt(index)}</span>`;
            index++;
            setTimeout(typeEffect, 120);
        }
    }
    typeEffect();
});
