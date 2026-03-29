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
// 2. Texto de escritura automática
const anniversaryText = `Mi niña hermosa, hoy es un día increíblemente especial. Ha pasado un año entero a tu lado, un año lleno de sonrisas, de sueños compartidos, de abrazos que reinician mi alma y de momentos que jamás olvidaré. 

Me pediste el mejor regalo, y aunque ninguna palabra ni detalle físico puede abarcar lo mucho que significas para mí, he querido crear este rincón en el mundo digital solo para ti y para nosotros.

Eres y siempre serás mi vida entera. Desde el momento en que llegaste a mí, mi mundo se llenó de colores que no sabía que existían. Eres mi refugio seguro, mi tranquilidad en medio del caos, la persona con la que quiero despertar todos los días de mi existencia. 

Este Pikachu con el corazón gigante representa cómo me siento: pequeño ante lo inmenso del universo, pero abrazando el amor más enorme y puro que podría existir, que es el nuestro. Eres mi sol en los días nublados y la estrella que más brilla en mis noches. Prometo cuidarte, respetarte y hacerte sonreír cada día.

A veces no encuentro las palabras exactas, pero quiero que este pequeño mensaje de amor te recuerde siempre que te amo con locura. Te elijo hoy en nuestro aniversario, y te elegiré cada día de mi vida. Gracias por soportarme, por cuidarme, por ser la luz que me guía. Todo lo que hago cobra sentido si es para verte feliz, hermosa mía.

Feliz aniversario amor mío. Que este sea solo el primero de muchísimos, hasta que seamos viejitos juntitos y sigamos agarrados de la mano. Que nuestro amor sea siempre tan fuerte e inquebrantable. ❤️`;

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
function openModal() { 
    document.getElementById('custom-modal').style.display = 'flex'; 
    createExplosion();
}
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

// 6. Fondo animado estrellado e corazones
function createBackgroundAnimations() {
    const starsContainer = document.getElementById('stars');
    if (starsContainer) {
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const size = Math.random() * 3 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDuration = `${Math.random() * 3 + 2}s`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            starsContainer.appendChild(star);
        }
    }

    const heartsContainer = document.getElementById('hearts-bg');
    if (heartsContainer) {
        function createHeartBg() {
            const heart = document.createElement('div');
            heart.classList.add('heart-float');
            heart.style.left = `${Math.random() * 100}%`;
            const duration = Math.random() * 10 + 10;
            heart.style.animationDuration = `${duration}s`;
            heart.style.opacity = Math.random() * 0.5 + 0.3;
            const scale = Math.random() * 0.5 + 0.5;
            heart.style.transform = `scale(${scale}) rotate(45deg)`;
            heartsContainer.appendChild(heart);
            setTimeout(() => heart.remove(), duration * 1000);
        }
        setInterval(createHeartBg, 800);
        for(let i=0; i<10; i++) setTimeout(createHeartBg, i*300);
    }
}

// 7. Explosión de amor
function createExplosion() {
    for(let i=0; i<40; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.classList.add('explosion-heart');
        heart.style.left = '50%';
        heart.style.top = '50%';
        const angle = Math.random() * Math.PI * 2;
        const velocity = 150 + Math.random() * 250;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        heart.style.setProperty('--tx', `${tx}px`);
        heart.style.setProperty('--ty', `${ty}px`);
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
    }
}

window.onload = () => {
    setInterval(updateClock, 1000);
    typing();
    createParticles();
    createBackgroundAnimations();
};

function startExperience() {
    const enterScreen = document.getElementById('enter-screen');
    const audio = document.getElementById('bg-music');
    
    enterScreen.style.opacity = '0';
    
    if (audio) {
        audio.play().catch(e => console.log("Audio autoplay prevented", e));
        audio.volume = 0.5;
    }

    setTimeout(() => {
        enterScreen.style.display = 'none';
    }, 1500);
}