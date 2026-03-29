// 1. Contador de tiempo (Desde el 29 de Marzo 2025)
const startDate = new Date("March 29, 2025 00:00:00").getTime();

function updateClock() {
    const now = new Date().getTime();
    const diff = now - startDate;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("clock").innerHTML = `${d}d ${h}h ${m}m ${s}s DE AMOR`;
}

// 2. Texto de escritura automática
const anniversaryText = `Mi niña hermosa, estos 365 días han sido lo mejor de mi vida. 
Hemos reído, hemos crecido y, sobre todo, hemos aprendido que nuestro amor puede con todo. 
A través de los altos y bajos, siempre has sido mi luz. 

Hoy celebramos nuestro primer año y te prometo que es solo el inicio de nuestra gran aventura. 
Eres mi Pokemona favorita y mi razón de ser. ¡Te amo Jennyra! ❤️`;

let i = 0;
function typing() {
    if (i < anniversaryText.length) {
        document.getElementById("typing-text").innerHTML += anniversaryText.charAt(i);
        i++;
        setTimeout(typing, 45);
    }
}

// 3. Lógica Pikachu
document.getElementById('pika-trigger').addEventListener('click', () => {
    const pika = document.getElementById('pikachu-popup');
    pika.classList.remove('pika-hide');
    pika.classList.add('pika-show');
    
    setTimeout(() => {
        pika.classList.remove('pika-show');
        pika.classList.add('pika-hide');
    }, 3500);
});

// 4. Modales
function openModal() { document.getElementById('custom-modal').style.display = 'flex'; }
function closeModal() { document.getElementById('custom-modal').style.display = 'none'; }

// 5. Partículas
function createParticles() {
    const container = document.getElementById('particles-container');
    for (let j = 0; j < 40; j++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.opacity = Math.random() * 0.3;
        heart.style.pointerEvents = 'none';
        container.appendChild(heart);
    }
}

window.onload = () => {
    setInterval(updateClock, 1000);
    typing();
    createParticles();
};