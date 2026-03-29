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
const anniversaryText = `Mi niña hermosa, hoy es un día increíblemente especial. Ha pasado un año entero a tu lado, un año lleno de sonrisas, de sueños compartidos, de abrazos que reinician mi alma y de momentos que jamás olvidaré. 

Me pediste el mejor regalo, y aunque ninguna palabra ni detalle físico puede abarcar lo mucho que significas para mí, he querido que sepas que eres mi vida entera. Eres mi refugio seguro, mi tranquilidad en medio del caos, la persona con la que quiero despertar todos los días.

Este Pikachu con el corazón gigante que te acabo de regalar representa cómo me siento: pequeño ante lo inmenso del universo, pero abrazando el amor más enorme y puro que podría existir, que es el nuestro.

A veces no encuentro las palabras exactas, pero quiero que este testamento te recuerde siempre que te amo con locura. Feliz aniversario amor mío. Que este sea el primero de muchísimos, hasta que seamos viejitos juntitos. ¡Te elijo hoy y siempre! ❤️`;

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

function startExperience() {
    const enterScreen = document.getElementById('enter-screen');
    // Si queremos intentar que el iframe suene si o si, a veces funciona recargar el src añadiendo autoplay, 
    // pero con la interaccion del usuario ya deberia bastar si le pasamos mensaje a la API.
    // Usaremos un truco simple:
    const iframe = document.getElementById('music-player');
    
    // Al tocar el boton, el DOM ya registra interaccion del usuario para el autoplay
    enterScreen.style.opacity = '0';
    
    // Try posting message to iframe to play if stopped
    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

    setTimeout(() => {
        enterScreen.style.display = 'none';
    }, 1500);
}