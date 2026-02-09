// CONFIGURACIÓN DE FECHA
const fechaInicio = new Date(2025, 5, 14, 0, 0, 0); 

const frases = [
    "Para el hombre que se robó mi corazón:",
    "Si pudiera elegir un lugar seguro, sería a tu lado.",
    "Cuanto más tiempo estoy contigo,",
    "más te quiero ❤️"
];

let animacionIniciada = false;

async function escribir(texto, id, velocidad = 70) {
    const el = document.getElementById(id);
    for(let i=0; i < texto.length; i++) {
        el.innerHTML += texto.charAt(i);
        await new Promise(r => setTimeout(r, velocidad + Math.random()*20));
    }
}

function comenzar() {
    if (animacionIniciada) return;
    animacionIniciada = true;

    document.getElementById('pantalla-inicio').classList.add('oculto');
    setTimeout(() => document.getElementById('pantalla-inicio').style.display = 'none', 800);
    document.getElementById('contenido-regalo').classList.add('visible');
    
    const m = document.getElementById('musica');
    m.play().catch(() => console.log("Música en pausa hasta interacción"));

    setTimeout(() => {
        animarCorazon();
        iniciarTextos();
    }, 500);
}

async function iniciarTextos() {
    await escribir(frases[0], 'L1');
    await new Promise(r => setTimeout(r, 800));
    await escribir(frases[1], 'L2');
    await new Promise(r => setTimeout(r, 800));
    await escribir(frases[2], 'L3');
    await new Promise(r => setTimeout(r, 800));
    await escribir(frases[3], 'L4', 110);

    document.getElementById('contador').style.opacity = '1';
    actualizarContador();
    setInterval(actualizarContador, 1000);
}

function animarCorazon() {
    const canvas = document.getElementById('corazonCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    const w = canvas.width;
    const h = canvas.height;
    const scale = Math.min(w, h) / 35;
    let dibujados = 0;

    function dibujarUno() {
        if(dibujados < 250) {
            const t = Math.random() * Math.PI * 2;
            let r = Math.sqrt(Math.random());
            if (Math.random() < 0.2) r = 1;

            const x = 16 * Math.pow(Math.sin(t), 3);
            const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
            
            const posX = (w/2) + x * scale * r;
            const posY = (h/2 + 20) + y * scale * r;

            const size = Math.random() * 5 + 3;
            ctx.fillStyle = `hsl(${Math.random() * 30 + 330}, 80%, 60%)`;
            
            ctx.beginPath();
            ctx.moveTo(posX, posY + size * 0.3);
            ctx.bezierCurveTo(posX - size/2, posY - size/2, posX - size, posY + size/3, posX, posY + size);
            ctx.bezierCurveTo(posX + size, posY + size/3, posX + size/2, posY - size/2, posX, posY + size * 0.3);
            ctx.fill();
            
            dibujados++;
            setTimeout(dibujarUno, 15);
        }
    }
    dibujarUno();
}

function actualizarContador() {
    const ahora = new Date();
    let dif = ahora - fechaInicio;
    if (dif < 0) dif = 0;

    const d = Math.floor(dif / (1000 * 60 * 60 * 24));
    const h = Math.floor((dif / (1000 * 60 * 60)) % 24);
    const m = Math.floor((dif / 1000 / 60) % 60);
    const s = Math.floor((dif / 1000) % 60);

    document.getElementById('d').innerText = d;
    document.getElementById('h').innerText = h.toString().padStart(2, '0');
    document.getElementById('m').innerText = m.toString().padStart(2, '0');
    document.getElementById('s').innerText = s.toString().padStart(2, '0');
}
