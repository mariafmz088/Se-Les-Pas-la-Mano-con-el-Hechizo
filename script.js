// ==========================================
// 1. CONFIGURACIÓN Y CONSTANTES GLOBALES
// ==========================================
const FECHA_INICIO = new Date(2025, 10, 18, 15, 4, 0);
const canvas = document.getElementById("confetti-canvas"); 
const konamiCode = "arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightba";

// ==========================================
// 2. BANCOS DE DATOS, TEXTOS Y LISTAS (ARRAYS)
// ==========================================

const v2AcrosticoPistas = [
    "Pregunta [01/15]: Existe una sola pantalla famosa que detesto y jamás compraría para nuestra casa, o considero innecesaria en una casa. ¿Cuál es?",
    "Pregunta [02/15]: ¿El continente al que sería lindo viajar?",
    "Pregunta [03/15]: Es tu adicción amor, creo, si es que no llegaste a comer es lo primero que pides.",
    "Pregunta [04/15]: Elemento químico metálico y radiactivo, número atómico 92, de alto peso, primordial como combustible en reactores nucleares. (Sabrá cristo, solo me quedé sin ideas, se vale googlear)",
    "Pregunta [05/15]: Amor, la universidad nos tiene:...",
    "Pregunta [06/15]: La letra más rara del año en que nos volvimos novios.",
    "Pregunta [07/15]: El tonito de ropa que mejor te queda y con el que más me encanta verte.",
    "Pregunta [08/15]: ESTA ES FÁCIL, amm, siempre te digo que me tiene mal y que la amo con mi alma.",
    "Pregunta [09/15]: A ver amor, otra fácil, es el mineral compuesto de carbono que me tienes que dar al terminar de estudiar",
    "Pregunta [10/15]: ¿Cómo te pones cada que te hablo de algún ser masculino?.",
    "Pregunta [11/15]: No amor, es el curso que más odio y del que menos entiendo, yo creo que si es que nuestros hijos lo llevan en el cole y usted no está para enseñarles, seremos historia.",
    "Pregunta [12/15]: Nombre de la super poderosa memoria portatil chiquita en la que pones musiquita.",
    "Pregunta [13/15]: Línea imaginaria equidistante de los polos geográficos que divide el planeta en los hemisferios Norte y Sur. (No me pida mucho ya exprimí mi cabecita)",
    "Pregunta [14/15]: Amor, sonidito/acción (?) de resignación absoluta que hago cuándo me pregunto qué es lo que ando pagando.",
    "Pregunta [15/15]: Es lo que hace que parezca un pandita."
];
const jokeList = [
    "Compilando al hombre más guapo del mundo... Espera tantito. ❤️",
    "¿Sabías que un Main bien alimentado rinde hasta un 300% más? Ve a comer. 😠",
    "Escaneando... No se encontraron operadores más preciosos que el actual.",
    "Inicializando protocolo de mimos... Carga completada. 🫂",
    "Verificando nivel de guapura... Error: el valor excede el límite permitido.",
    "Buscando defectos en Main... 0 resultados encontrados. (Bueno, quizá uno: el piercing de toro.)",
    "Optimizando el sistema... Eliminando inseguridades. Instalando más besitos.",
    "Advertencia: Este programa detectó que el usuario tiene una novia intensita. Proceda con abrazos.",
    "Compilando relación... Puede tardar toda una vida porque pienso quedarme contigo.",
    "Si llegaste hasta aquí es porque eres oficialmente mi hombre perfecto. ❤️"
];
const bootLines = [
    "$ ./mi_hombre.exe\n",
    "Inicializando...\n",
    "Buscando al operador más guapo...\n",
    "Encontrado. ❤️\n",
    "Sincronizando dos cerebritos medio dañados...\n",
    "Compilando amor...\n",
    "100% completado.\n",
    "Bienvenido de vuelta, Main ♡\n",
    "Espero que esto te saque una sonrisita.\n",
    "Debes dejar de ser amargado.\n"
];
const exeLines = [
    "Inicializando proyecto...", "", 
    "Importando dependencia: confianza ✔", 
    "Importando dependencia: respeto ✔", 
    "Importando dependencia: admiración ✔", 
    "Importando dependencia: risas ✔", 
    "Importando dependencia: paciencia ✔", "", 
    "Compilando relación...", "", 
    "✔ Trabajo en equipo",
    "✔ Conversaciones incómodas", 
    "✔ Reconciliaciones", 
    "✔ Bromas bobas", 
    "✔ Bullying", 
    "✔ Apapachos", 
    "✔ Muchísimo amor", 
    "✔ Planes para el futuro","", 
    "Buscando bugs...", "", 
    "Se encontraron algunos errores de comunicación.", "Aplicando parches...", "Corrigiendo con abrazos...", "Compilación finalizada.", "", 'RelationshipStatus = \"Seguimos eligiéndonos todos los días. ❤️. \"'
];
const easterEggsList = {
    "teamo": { pts: 100, usado: false, num: 1, titulo: "🏆 PISTA 1: LOGRO DESBLOQUEADO (+100 pts)", pista: "Te amo con todo mi corazón. El hombre más guapo del mundo. ❤️\n\n💡 Pista para la PISTA 2: ¿Qué me dices cuando ya gastaste el te quiero y el te amo?" },
    "teadoro": { pts: 100, usado: false, num: 2, titulo: "💖 PISTA 2: LOGRO DESBLOQUEADO (+100 pts)", pista: "Te adoro infinitamente y te adoro mucho mas🥰\n\n💡 Pista para la PISTA 3: Una palabra corta de 4 letras que rima con flor." },
    "amor": { pts: 100, usado: false, num: 3, titulo: "🌹 PISTA 3: LOGRO DESBLOQUEADO (+100 pts)", pista: "Amor... :3🌹\n\n💡 Pista para la PISTA 4: ¿Cómo me dices cuando me pongo consentida o mimada?" },
    "cariño": { pts: 100, usado: false, num: 4, titulo: "🧸 PISTA 4: LOGRO DESBLOQUEADO (+100 pts)", pista: "Cariño mío, antes me podría inducir a un coma diabetico. 🧸\n\n💡 Pista para la PISTA 5: Cuando te pongo de mal genio eres un..." },
    "gruñon": { pts: 100, usado: false, num: 5, titulo: "😠 PISTA 5: LOGRO DESBLOQUEADO (+100 pts)", pista: "En efecto, y te amo, aunque seas un amargado de cuidado. 😠\n\n💡 Pista para la PISTA 6: Con esto te molesto desde tiempos inmemorables, eres mi ..." },
    "viejito": { pts: 100, usado: false, num: 6, titulo: "👴 PISTA 6: LOGRO DESBLOQUEADO (+100 pts)", pista: "Un viejito aburrido de más... pero lo perdono por setsy 👴\n\n💡 Pista para la PISTA 7: El primer apodo bonito que atiné a ponerte." },
    "mivida": { pts: 100, usado: false, num: 7, titulo: "🪐 PISTA 7: LOGRO DESBLOQUEADO (+100 pts)", pista: "Lo peor es que al final terminaste siendo más que eso -.- Brujería 🪐\n\n💡 Pista para la PISTA 8: Apodito que empieza con una nota musical y termina donde vuelan los pájaros..." },
    "micielo": { pts: 100, usado: false, num: 8, titulo: "🌌 PISTA 8: LOGRO DESBLOQUEADO (+100 pts)", pista: "Y en efecto, soy tu cielo, solo me falta estar sobre ti siempre. Y también lo de vigilarte 24/7 🌌\n\n💡 Pista para la PISTA 9: Tú eres..." },
    "mibien": { pts: 100, usado: false, num: 9, titulo: "🍀 PISTA 9: LOGRO DESBLOQUEADO (+100 pts)", pista: "De verdad me haces bien:c 🍀\n\n💡 Pista para la PISTA 10: El día del mes en el que mi precioso cumple meses de vida (dos dígitos)." },
    "09": { pts: 100, usado: false, num: 10, titulo: "🎂 PISTA 10: CÓDIGO CORRECTO (+100 pts)", pista: "El 09: El día exacto en el que mi noviecito amado cumple un mes más de vida. 🎂\n\n💡 Pista para la PISTA 11: El día en el que tu noviecita trae un mes más de sol al mundo." },
    "15": { pts: 100, usado: false, num: 11, titulo: "☀️ PISTA 11: CÓDIGO CORRECTO (+100 pts)", pista: "El 15: El día en el que este mundo celebra un mes más siendo iluminado por mi existencia. ☀️\n\n💡 Pista para la PISTA 12: El número del día en el que te pude decir mío." },
    "18": { pts: 100, usado: false, num: 12, titulo: "📅 PISTA 12: CÓDIGO CORRECTO (+100 pts)", pista: "El 18: Preciosos momentos junto al único al que puedo llamar orgullosamente mi novio. 📅\n\n💡 Pista para la PISTA 13: Lo que me dices cuando estoy a punto de hacer algo :3." },
    "animo": { pts: 100, usado: false, num: 13, titulo: "✨ PISTA 13: LOGRO DESBLOQUEADO (+100 pts)", pista: " 'Ánimo'Adoro que lo digas. 🥺✨\n\n💡 Pista para la PISTA 14: Una confirmación tierna." },
    "simiamor": { pts: 100, usado: false, num: 14, titulo: "🥰 PISTA 14: LOGRO DESBLOQUEADO (+100 pts)", pista: "Sí mi amor, Deberías darme la razón en todo y consentirme. 🥰\n\n💡 Pista para la PISTA 15: Mi pequeñito..." },
    "miniño": { pts: 100, usado: false, num: 15, titulo: "👶 PISTA 15: LOGRO DESBLOQUEADO (+100 pts)", pista: "Mi niño precioso, mi pequeñito amado, mi nenito engreido (wácalaquecursi). 👶❤️\n\n💡 Pista para la PISTA 16: La fecha exacta de nuestro primer beso." },
    "11/09": { pts: 100, usado: false, num: 16, titulo: "💋 PISTA 16: EFEMÉRIDE MEMORABLE (+100 pts)", pista: "Si tardaste en recordarlo tendrás problemas. 💋✨\n\n💡 Pista para la PISTA 17: Teclea el nombre de la mujer de tu vida." },
    "maria": { pts: 100, usado: false, num: 17, titulo: "👑 PISTA 17: DECLARACIÓN ACERTADA (+100 pts)", pista: "Maria. La mujer de tu vida, tu novia, futura esposa, y dueña de todo tu ser. 👑💜\n\n💡 Pista para la PISTA 18: Algo que siempre te mando a hacer pero que evitas por puerco." },
    "bañate": { pts: 100, usado: false, num: 18, titulo: "🧼 PISTA 18: LOGRO HIGIÉNICO (+100 pts)", pista: "En serio amor, ya báñese, hasta acá huele. 🧼🐷\n\n💡 Pista para la PISTA 19: Nuestro primer dibujo juntos." },
    "gusanitoborracho": { pts: 100, usado: false, num: 19, titulo: "🐛 PISTA 19: MEMORIA ARTÍSTICA (+100 pts)", pista: "A decir verdad, lo considero una obra maestra 🐛🍷\n\n💡 Pista para la PISTA 20: Cosa que haces y que repites una y otra vez hasta por lo mas bobo amor." },
    "perdon": { pts: 100, usado: false, num: 20, titulo: "🤝 PISTA 20: LOGRO DESBLOQUEADO (+100 pts)", pista: "Creo que si sigues pidiendolo de a gratis te cortaré la lengua 🤝💜\n\n💡 Pista para la PISTA 21: La fruta de la paz." },
    "mandarina": { pts: 100, usado: false, num: 21, titulo: "🍊 PISTA 21: LOGRO FRUTAL (+100 pts)", pista: "Quizá funcionaría más si te la pudiera tirar en la cabeza. 🍊✨\n\n💡 Pista para la PISTA 22:Soy la reina en eso amor (si lo niegas te asesino)" },
    "drama": { pts: 100, usado: false, num: 22, titulo: "🎭 PISTA 22: LOGRO DRAMÁTICO (+100 pts)", pista: "Sí, me paso a veces, pero así me amas. 🎭😼\n\n💡 Pista para la PISTA 23: Me paso de ello, a veces te estreso por eso." },
    "indecisa": { pts: 100, usado: false, num: 23, titulo: "🤔 PISTA 23: ESTADO IDENTIFICADO (+100 pts)", pista: "Mi poder para colapsar hilos de conversación es indiscutible. 🤔💭\n\n💡 Pista para la PISTA 24: Cómo me pones con tus bromitas:)." },
    "esponjada": { pts: 100, usado: false, num: 24, titulo: "🎈 PISTA 24: LOGRO ADVERTIDO (+100 pts)", pista: "Deberías cuidar mejor tu vida❤️\n\n💡 Pista para la PISTA 25: Se puede averiguar entrando a la papelera" },
    "mimujermanda": { pts: 100, usado: false, num: 25, titulo: "👑 PISTA 25: SUMISIÓN ABSOLUTA (+100 pts)", pista: "✔ Sincronización absoluta restablecida de forma definitiva. ¡Felicidades! Has completado el juego exitosamente. 👑❤️", isFinalCode: true },
    [konamiCode]: { pts: 100, usado: false, num: 99, titulo: "🕹️ ¡HACKER SÚPER AMOROSO! (+100 pts)", pista: "¡Has activado el Konami Code secreto! Eres oficialmente el novio más inteligente del mundo. 🕹️" }
};

// ==========================================
// 3. CONTROL DE INTERFAZ Y CAPAS (UI)
// ==========================================
let highestZIndex = 25;
let spaceClickCount = 0;
let currentTaskStep = 1;

// ==========================================
// 4. ESTADO DEL JUEGO, TIEMPOS Y PUNTAJES
// ==========================================
let totalScore = 0;
let keysPressed = "";
let timeRemaining = 50;
let esquivesContador = 0;
let punishClicks = 0;

// ==========================================
// 5. BANCO DE 15 ACERTIJOS EN CADENA SECUENCIAL
// ==========================================
let v2AcrosticoLetras = ["t", "e", "q", "u", "e", "ñ", "o", "s", "d", "e", "q", "u", "e", "s", "o"];
let v2AcrosticoIdx = 0;
let v2PalabrasRegistradasArray = [];

// ==========================================
// 6. EFECTOS VISUALES (MATRIX Y GLITCH)
// ==========================================
let matrixInterval = null;
let isGlitchActive = false;
let isMatrixFrozen = false;
let charGlitchIdx = 0;
let textoGlitchAcumulado = "";

// ==========================================
// 7. CONFIGURACIÓN DE TERMINAL Y TEXTO ANIMADO
// ==========================================
// --- CONFIGURACIÓN DE VARIABLES MAESTRAS DEL INICIO ---
let lineIndex = 0;
let charIndex = 0;
let currentTextHtml = "";
let terminalStep = "question"; // "question" o "password"

// ==========================================
// 8. AUDIO Y EFECTOS DE SONIDO
// ==========================================
let audioBackgroundInterval = null;
let typingSoundInterval = null;

// ==========================================
// 9. SISTEMA DE TIMEOUTS E INTERVALOS DE CONTROL
// ==========================================
let papeleraTimeout = null;
let confettiInterval = null;
let jokeInterval = null;
let progressInterval = null;
let currentProgress = 0;

// Temporizadores en línea de ejecución
let cartaTimeout = null;
let jsonTimeout = null;
let logTimeout = null;
let exeTimeout = null;

// Arreglos de efectos
let confettiArr = [];

// =========================================================================
// SECCIÓN A: EFECTOS DE AUDIO (Música y sonidos del teclado)
// =========================================================================

/*Genera un pitido rápido y seco usando ondas cuadradas para simular el sonido mecánico de un teclado gaming mientras la terminal escribe en la pantalla de carga [A].*/
function startContinuousTypingSound() {
    if (typingSoundInterval) return;
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        typingSoundInterval = setInterval(() => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain); gain.connect(audioCtx.destination);

            // Tipo de onda mecánica y frecuencia aleatoria rápida
            osc.type = "square";
            osc.frequency.setValueAtTime(Math.random() * 200 + 800, audioCtx.currentTime);

            // Simular el "clack" seco del teclado gaming
            gain.gain.setValueAtTime(0.003, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.015);

            osc.start(); 
            osc.stop(audioCtx.currentTime + 0.015);
        }, 90);
    } catch(e) { /* Respaldo en caso de error de audio */ }
}
function stopContinuousTypingSound() {
    if (typingSoundInterval) {
        clearInterval(typingSoundInterval);
        typingSoundInterval = null;
    }
}
/*Enciende una melodía retro suave de 8 bits (onda triangular) que se repite en bucle para crear una atmósfera misteriosa de hacker mientras arranca el sistema operativo.*/
function startCyberambientMusic() {
    const miMusica = document.getElementById("musica-cyber");
    const musicaCarga = document.getElementById("musica-carga");
    const musicaMatrix = document.getElementById("musica-matrix");
    if (!miMusica) return;

    // 🌟 REPARADO: Antes de encender la música normal, apagamos obligatoriamente las de carga y Matrix
    if (musicaCarga) { musicaCarga.pause(); musicaCarga.currentTime = 0; }
    if (musicaMatrix) { musicaMatrix.pause(); musicaMatrix.currentTime = 0; }

    try {
        miMusica.volume = 0.15; 
        miMusica.play().catch(e => {});
    } catch(e) {}
}

function stopCyberambientMusic() {
    const miMusica = document.getElementById("musica-cyber");
    if (miMusica) {
        // 🌟 REPARADO: Apagamos tu archivo de música real por completo
        miMusica.pause();
        miMusica.currentTime = 0; // Regresa la canción al segundo cero para el próximo inicio
    }
}



// =========================================================================
// SECCIÓN B: EFECTOS VISUALES Y ANIMACIONES (Glitch, Matrix, Scroll)
// =========================================================================

function glitchScreenScrollTerminal() {
    const activeTerminal = document.querySelector(".terminal-active-body");
    if (activeTerminal) {
        activeTerminal.scrollTop = activeTerminal.scrollHeight;
    }
}
function typeBootLetter() {
    const bootTextDiv = document.getElementById("boot-text");
    const zone = document.getElementById("terminal-input-zone");
    if (!bootTextDiv) return;
    if (zone) zone.classList.add("hidden"); // Oculta la zona de entrada al arrancar

    startContinuousTypingSound();

    function runType() {
        if (lineIndex >= bootLines.length) {
            stopContinuousTypingSound();
            startCyberambientMusic();
            activateTerminalInteractivity();
            glitchScreenScrollTerminal();
            return;
        }

        let currentLineText = bootLines[lineIndex];

        if (charIndex < currentLineText.length) {
            let character = currentLineText.charAt(charIndex);
            currentTextHtml += (character === "\n") ? "<br>" : character;
            bootTextDiv.innerHTML = currentTextHtml;
            charIndex++;
            glitchScreenScrollTerminal();
            setTimeout(runType, 40);
        } else {
            lineIndex++;
            charIndex = 0;
            setTimeout(runType, 300);
        }
    }

    runType();
}
function triggerGlobalSparkles() {
    for (let i = 0; i < 25; i++) {
        const sparkle = document.createElement("div");
        
        // Elegir emoji brillante al azar
        sparkle.innerText = ["✨", "⭐", "🌟"][Math.floor(Math.random() * 3)];

        // Inyectar todos los estilos base de golpe
        Object.assign(sparkle.style, {
            position: "fixed",
            zIndex: "999999999",
            pointerEvents: "none",
            opacity: "1",
            fontSize: `${Math.floor(Math.random() * 12 + 14)}px`,
            left: `${Math.random() * window.innerWidth}px`,
            top: `${Math.random() * window.innerHeight}px`,
            transition: "all 1.2s ease-out"
        });

        document.body.appendChild(sparkle);

        // Activar la animación de flotación hacia arriba y desvanecido
        setTimeout(() => {
            sparkle.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * -150 - 50}px) scale(0.2)`;
            sparkle.style.opacity = "0";
        }, 40);

        // Limpiar el elemento del HTML al terminar
        setTimeout(() => sparkle.remove(), 1250);
    }
}
function triggerFullscreenGlitch(archivoNombre) {
    const glitchScreen = document.getElementById("fullscreen-matrix-glitch");
    const chaosBox = document.getElementById("matrix-falling-chaos");
    if (!glitchScreen || !chaosBox) return;

    // 🌟 EFECTO DE CINE: Apagamos tu música de fondo normal
    const musicaNormal = document.getElementById("musica-cyber");
    if (musicaNormal) musicaNormal.pause();

    // 🌟 EFECTO DE CINE: Encendemos la música de tensión de Matrix
    const musicaMatrix = document.getElementById("musica-matrix");
    if (musicaMatrix) {
        musicaMatrix.volume = 0.20; // Un volumen imponente para el susto
        musicaMatrix.currentTime = 0;
        musicaMatrix.play().catch(e => {});
    }

    // Resetear estados internos del colapso
    isGlitchActive = true;
    isMatrixFrozen = false;
    currentTaskStep = 1;
    spaceClickCount = 0;
    
    if (matrixInterval) clearInterval(matrixInterval);

    // Encabezado de alerta inicial fijo
    chaosBox.innerHTML = `
        <span class="matrix-red-alert">[CRITICAL FAULT]: FORZANDO ACCESO EN SECTOR /Trash/${archivoNombre}...</span><br>
        <span class="matrix-red-alert">🔥 CORE_DUMP: COLAPSO CRÍTICO. VOLCADO DE MEMORIA EN CURSO...</span><br>
        <span style="color:#4fc1ff;">[AVISO]: Presione la tecla (Fn) o Ctrl para detener la inyección de datos...</span><br>
        --------------------------------------------------------------------------------<br>
    `;

    const frasesMatrixInfinitas = [
        "🚨 [OVERFLOW ALERT]: Se detectaron altos niveles de drama y terquedad acumulados.<br>",
        "ERROR_DATA_CORRUPT // modo_indecision_infinito == true // clearing_cache<br>",
        "⚠️ [WARNING]: Alerta del sistema. La usuaria se esponja demasiado rápido.<br>",
        "🔥 [CRITICAL]: El sistema se resiste a almacenar discusiones obsoletas. Destruyendo logs...<br>",
        "Exception in thread 'Love': TerquedadTemporaryError // safe_mode_failed<br>",
        "🚨 [SECURITY VIOLATION]: Acceso restringido. No se puede revivir el pasado aquí dentro.<br>",
        "⚠️ [ALERTA CONSOLA]: Demasiados procesos de indecisión colapsando el hilo principal.<br>",
        "01001110 01010101 01001110 01000011 01000001 // baches_superados_con_exito == true<br>",
        "Refrescando entorno... Estabilizando hilos principales de la relación... [OK]<br>"
    ];

    glitchScreen.classList.remove("hidden");

    // BUCLE DE CAÍDA OPTIMIZADO
    matrixInterval = setInterval(() => {
        if (isMatrixFrozen) return;

        let fraseAlAzar = frasesMatrixInfinitas[Math.floor(Math.random() * frasesMatrixInfinitas.length)];
        let caracteresBasura = Math.random().toString(36).substring(2, 10).toUpperCase();
        let lineaCompleta = `<span>[${caracteresBasura}] ${fraseAlAzar}</span>`;

        chaosBox.innerHTML += lineaCompleta.replace(/🚨|🔥|\[CRITICAL\]/g, '<span class="matrix-red-alert">$&</span>')
                                           .replace(/⚠️|\[WARNING\]/g, '<span class="matrix-yellow-warn">$&</span>')
                                           .replace(/\[OK\]/g, '<span style="color:#27c93f;">[OK]</span>');

        glitchScreen.scrollTop = glitchScreen.scrollHeight;

        if (chaosBox.innerHTML.length > 9000) {
            chaosBox.innerHTML = chaosBox.innerHTML.substring(3000);
        }
    }, 25);
}

function startServerRebootAnimation() {
    const rebootScreen = document.getElementById("server-reboot-screen");
    const bar = document.getElementById("reboot-progress-bar");
    const statusTxt = document.getElementById("reboot-status-text");
    
    if (!rebootScreen || !bar || !statusTxt) return;
    rebootScreen.classList.remove("hidden");

    // 🌟 REPARADO: Apagamos estrictamente la música bonita de fondo antes de prender la de carga
    const musicaNormal = document.getElementById("musica-cyber");
    if (musicaNormal) { 
        musicaNormal.pause(); 
        musicaNormal.currentTime = 0; 
    }

    // 🌟 EFECTO DE CINE: Encendemos la música divertida de espera para el reinicio azul
    const musicaCarga = document.getElementById("musica-carga");
    if (musicaCarga) {
        musicaCarga.volume = 0.20; 
        musicaCarga.currentTime = 0; 
        musicaCarga.play().catch(e => {});
    }

    const estadosServidor = [
        "Estado: Aplicando parches en caliente de la base de datos...",
        "Estado: Conectando nodos de comunicación interpersonal... [OK]",
        "Estado: Eliminando historial de indecisiones y dramas... Éxito.",
        "Estado: Sincronizando entorno de producción: Novios_Perfectos_S.A.",
        "Estado: Levantando todos los servicios esenciales... Listo. ❤️"
    ];

    let progreso = 0;
    let tiempoRestante = 35;

    let progressInterval = setInterval(() => {
        progreso += 0.2857;
        if (progreso > 100) progreso = 100;
        
        bar.style.width = `${progreso}%`;
        tiempoRestante = Math.max(0, 35 - Math.floor((progreso / 100) * 35));
        
        let indexEstado = Math.floor((progreso / 100) * (estadosServidor.length - 1));
        let estadoActual = estadosServidor[indexEstado];

        statusTxt.innerHTML = `${estadoActual} <br> <span style="color:var(--accent-yellow); font-size:11px;">Tiempo estimado de restauración: ${tiempoRestante}s</span>`;

        if (progreso >= 100) {
            clearInterval(progressInterval);
            
            // 🌟 REPARADO: Apagamos por completo la música de espera al terminar el reinicio azul
            if (musicaCarga) {
                musicaCarga.pause();
                musicaCarga.currentTime = 0;
            }

            // 🌟 REPARADO: Devolvemos tu música favorita normal de fondo usando su función oficial limpia
            if (typeof startCyberambientMusic === "function") {
                startCyberambientMusic();
            }

            setTimeout(() => {
                rebootScreen.classList.add("hidden");
                closeWindow("win-papelera");
                if (typeof readPapelera === "function") readPapelera(); 
                if (typeof showRestorationWarningWindow === "function") showRestorationWarningWindow();

                if (totalScore >= 2500) {
                    setTimeout(() => {
                        openWindow("win-premio-cita");
                        if (typeof startConfetti === "function") startConfetti();
                    }, 1200);
                }
            }, 600);
        }
    }, 100);
} 

function startConfetti() {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Configurar el lienzo al tamaño de la pantalla completa
    Object.assign(canvas.style, { display: "block", opacity: "1" });
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    confettiArr = [];

    // Generamos 120 papelitos de colores brillantes
    for (let i = 0; i < 120; i++) {
        const rc = () => Math.floor(Math.random() * 255); // Función rápida para colores
        confettiArr.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * canvas.height,
            color: `rgba(${rc()}, ${rc()}, ${rc()}, 1)`,
            tilt: Math.random() * 10 - 5
        });
    }

    if (confettiInterval) clearInterval(confettiInterval);
    confettiInterval = setInterval(() => drawConfetti(ctx), 20);

    // A los 5 segundos limpiamos el lienzo y lo volvemos a esconder en paz
    setTimeout(() => {
        clearInterval(confettiInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.display = "none";
    }, 5000);
}
function drawConfetti(ctx) {
    if (!canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiArr.forEach((p) => {
        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.stroke();

        p.y += Math.cos(p.d) + 1 + p.r / 2;
        p.x += Math.sin(p.d);

        if (p.y > canvas.height) {
            p.y = -20;
            p.x = Math.random() * canvas.width;
        }
    });
}


// =========================================================================
// SECCIÓN C: LÓGICA DEL JUEGO Y EVENTOS (Botones, Clicks, Respuestas)
// =========================================================================

function activateTerminalInteractivity() {
    const zone = document.getElementById("terminal-input-zone");
    const promptTxt = document.getElementById("terminal-prompt-text");
    const inputField = document.getElementById("terminal-user-input");
    const bootTextDiv = document.getElementById("boot-text");
    if (!zone || !promptTxt || !inputField || !bootTextDiv) return;
    
    zone.classList.remove("hidden");
    inputField.focus();

    const actualizarPrompt = () => {
        if (terminalStep === "question") {
            promptTxt.innerHTML = `<span style="color: #fff;">Primero ¿Me ama mucho? (Y/N):</span>`;
        } else if (terminalStep === "password") {
            promptTxt.innerHTML = `<span style="color:var(--accent-yellow);">${v2AcrosticoPistas[v2AcrosticoIdx]}</span><br><span style="color:#fff;">Ingrese palabra clave:</span>`;
        }
    };
    actualizarPrompt();

    inputField.onkeydown = (e) => {
        if (e.key !== "Enter") return;

        let valor = inputField.value.trim().toLowerCase();
        inputField.value = ""; 
        const rootPrompt = `<br><span style="color: var(--accent-purple); font-weight: bold;">$ root@main_os: ~ </span>`;

        // 🛠️ COMANDO superusuario: Ir directo al escritorio principal
        if (valor === "superusuario") {
            if (jokeInterval) clearInterval(jokeInterval);
            if (progressInterval) clearInterval(progressInterval);
            
            const loadScreen = document.getElementById("loading-screen");
            const jokeScreen = document.getElementById("joke-loading-screen");
            const desktop = document.getElementById("desktop-screen");

            if (loadScreen) loadScreen.style.setProperty("display", "none", "important");
            if (jokeScreen) jokeScreen.style.setProperty("display", "none", "important");
            
            // 🌟 CORREGIDO: Usamos "block" para mantener el diseño original de tu fondo de pantalla
            if (desktop) desktop.style.setProperty("display", "block", "important");
            
            if (typeof closeWindow === "function") closeWindow("win-viejito");
            return;
        }

        // 🛠️ COMANDO supercarga: Ir directo a la pantalla de chistes
        if (valor === "supercarga") {
            const loadScreen = document.getElementById("loading-screen");
            const jokeScreen = document.getElementById("joke-loading-screen");

            if (loadScreen) loadScreen.style.setProperty("display", "none", "important");
            if (jokeScreen) {
                jokeScreen.classList.remove("hidden");
                // 🌟 CORREGIDO: Usamos "block" para que la ventana interna del contador no se deforme
                jokeScreen.style.setProperty("display", "block", "important");
            }
            
            // 🌟 CORREGIDO: Movimos esta línea ADENTRO del bloque para que solo se ejecute con el comando real
            if (typeof startJokeLoading === "function") startJokeLoading();
            return;
        }

        // [FASE A]: Pregunta de amor inicial
        if (terminalStep === "question") {
            if (["y", "si", "s"].includes(valor)) {
                bootTextDiv.innerHTML += `${rootPrompt}<span style="color: #00ff00;">${valor}</span><br><br><span style='color:var(--accent-green);'>✔ Conexión establecida.</span><br><span style='color:var(--accent-purple);'>[SISTEMA]: Inicializando Protocolo de Encriptación Secuencial...</span><br><span style='color:#abb2bf;'>[INFO]: Descifre las siguientes transmisiones para autorizar el escritorio.</span><br><br>`;
                terminalStep = "password";
                v2AcrosticoIdx = 0; 
                actualizarPrompt();
                glitchScreenScrollTerminal();
            } else {
                const loadingScreen = document.getElementById("loading-screen");
                if (loadingScreen) { loadingScreen.style.backgroundColor = "#000"; loadingScreen.innerHTML = ""; }
            }
        } 
        // [FASE B]: 15 Acertijos en Cadena
        else if (terminalStep === "password") {
            let letraRequerida = v2AcrosticoLetras[v2AcrosticoIdx];
            
            if (valor.length > 0 && valor.charAt(0) === letraRequerida) {
                v2PalabrasRegistradasArray.push(valor);
                
                const contenedorLista = document.getElementById("v2-lista-palabras-guardadas");
                if (contenedorLista) {
                    contenedorLista.innerHTML = v2PalabrasRegistradasArray.map((palabra, i) => 
                        `<div style="color:#27c93f;">✔ [REG_${i+1}]: <span style="color:#fff; font-weight:bold;">${palabra}</span></div>`
                    ).join("");
                }

                bootTextDiv.innerHTML += `${rootPrompt}<span style="color: #00ff00;">${valor}</span><br><span style='color:var(--accent-green);'>✔ Transmisión [${v2AcrosticoIdx + 1}] guardada con éxito.</span><br>`;
                v2AcrosticoIdx++;

                if (v2AcrosticoIdx < v2AcrosticoLetras.length) {
                    actualizarPrompt();
                } else {
                    zone.classList.add("hidden");
                    bootTextDiv.innerHTML += "<br><span style='color:var(--accent-purple); font-weight:bold; font-size:14px;'>🧠 [TRANS_COMPLETADA]: LA RESPUESTA ESTÁ EN TUS RESPUESTAS.</span><br><span style='color:#abb2bf;'>Revisa el historial de registros a tu derecha para descifrar el código maestro.</span>";
                    if (typeof spawnFinalPasswordBox === "function") setTimeout(spawnFinalPasswordBox, 1200);
                }
                glitchScreenScrollTerminal();
            } else {
                bootTextDiv.innerHTML += `${rootPrompt}<span style="color: #ff5f56;">${valor}</span><br><span style='color:var(--red-dot);'>❌ Error de descifrado: Entrada no válida para la transmisión actual.</span><br>`;
                glitchScreenScrollTerminal();
            }
        }
    };
}
function spawnFinalPasswordBox() {
    const msgBox = document.createElement("div");
    msgBox.id = "win-popup-login-final";
    msgBox.className = "window";

    Object.assign(msgBox.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "360px",
        zIndex: "999999999",
        borderColor: "var(--accent-purple)",
        boxShadow: "0 0 25px rgba(186, 85, 211, 0.4)"
    });
    msgBox.innerHTML = `
        <div class="window-header">
            <div class="dot-group"><span class="dot red"></span></div>
            <span class="window-title">Security_Gateway.exe</span>
        </div>
        <div class="window-body text-center" style="background-color: #202026; padding: 25px; color:#fff; font-family: monospace;">
            <p style="font-size:14px; font-weight:bold; color:var(--accent-purple); margin-bottom:10px; text-align: center;">🔐 CONTROL DE ACCESO AL ESCRITORIO</p>
            <p style="font-size:12px; color:#abb2bf; margin-bottom:15px; text-align: center;">Descifra el acertijo de la consola para obtener la llave maestra de desencriptación.</p>
            <input type="password" id="popup-final-pass-input" style="background:#151518; border:1px solid #444; color:#00ff00; font-family:monospace; padding:8px; width:100%; text-align:center; outline:none; border-radius:4px; font-size:14px;" placeholder="Ingrese clave oculta..." autofocus>
            <div id="popup-final-error-txt" style="color:var(--red-dot); font-size:11px; margin-top:8px; font-weight:bold; text-align: center;"></div>
        </div>
    `;
    document.body.appendChild(msgBox);
    
    const inputField = document.getElementById("popup-final-pass-input");
    if (!inputField) return;

    inputField.focus();
    inputField.onkeydown = (e) => {
        if (e.key !== "Enter") return;

        let claveIngresada = inputField.value.trim().toLowerCase();
        const errorTxt = document.getElementById("popup-final-error-txt");
        
        // 🌟 OPTIMIZADO: Simplificamos la validación usando .includes() en una sola línea corta
        if (["tequeñosdequeso", "tequeños de queso"].includes(claveIngresada)) {
            msgBox.remove(); 
            
            const bootTextDiv = document.getElementById("boot-text");
            if (bootTextDiv) {
                bootTextDiv.innerHTML += "<br><span style='color:var(--accent-green); font-weight:bold;'>✔ LLAVE MAESTRA CORRECTA. Cargando escritorio...</span>";
            }
            
            const mainLoadingScreen = document.getElementById("loading-screen");
            if (mainLoadingScreen) {
                mainLoadingScreen.classList.add("hidden");
                mainLoadingScreen.style.setProperty("display", "none", "important"); 
            }
            
            const jokeScreen = document.getElementById("joke-loading-screen");
            if (jokeScreen) {
                jokeScreen.classList.remove("hidden");
                // Aseguramos que herede el display correcto para que no se altere el contador azul
                jokeScreen.style.setProperty("display", "block", "important");
                if (typeof startJokeLoading === "function") startJokeLoading();
            }
        } else {
            if (errorTxt) errorTxt.innerText = "❌ Clave incorrecta. Revisa las iniciales de tus respuestas.";
        }
    };
}
function startJokeLoading() {
    const jokeDisplay = document.getElementById("joke-display");
    const progressBar = document.getElementById("progress-bar");
    const countdownText = document.getElementById("countdown-text");
    if (!jokeDisplay || !progressBar || !countdownText) return;

    // 🌟 REPARADO: Apagamos estrictamente la música bonita de fondo antes de prender la de carga
    const musicaNormal = document.getElementById("musica-cyber");
    if (musicaNormal) { musicaNormal.pause(); musicaNormal.currentTime = 0; }

    const musicaCarga = document.getElementById("musica-carga");
    if (musicaCarga) {
        musicaCarga.volume = 0.20; 
        musicaCarga.currentTime = 0;
        musicaCarga.play().catch(e => {});
    }

    // Mostrar el primer chiste de golpe al arrancar
    jokeDisplay.innerText = jokeList[Math.floor(Math.random() * jokeList.length)];
    
    // Cambiar de chiste cada 1.5 segundos
    jokeInterval = setInterval(() => { 
        jokeDisplay.innerText = jokeList[Math.floor(Math.random() * jokeList.length)]; 
    }, 1500);

    // Intervalo de la barra de progreso
    progressInterval = setInterval(() => {
        currentProgress += 0.20; 
        if (currentProgress > 100) currentProgress = 100;
        
        progressBar.style.width = `${currentProgress}%`;
        timeRemaining = Math.max(0, 50 - Math.floor((currentProgress / 100) * 50));
        countdownText.innerText = `Tiempo restante de indexación: ${timeRemaining}s`;
        
        if (currentProgress >= 100) { 
            clearLoadingIntervals(); 
            goToDesktop(); 
        }
    }, 100);
}


function clearLoadingIntervals() { 
    clearInterval(jokeInterval); 
    clearInterval(progressInterval); 
}
function goToDesktop() { 
    const jokeScreen = document.getElementById("joke-loading-screen");
    const desktopScreen = document.getElementById("desktop-screen");

    // 🌟 REPARADO: Apagamos por completo la música de la pantalla de carga
    const musicaCarga = document.getElementById("musica-carga");
    if (musicaCarga) {
        musicaCarga.pause();
        musicaCarga.currentTime = 0;
    }

    // 🌟 REPARADO: Devolvemos tu hermosa música de fondo original al escritorio
    if (typeof startCyberambientMusic === "function") {
        startCyberambientMusic();
    }

    if (jokeScreen) {
        jokeScreen.style.setProperty("display", "none", "important");
    }
    
    if (desktopScreen) {
        desktopScreen.classList.remove("hidden");
        desktopScreen.style.setProperty("display", "block", "important");
    }
    
    if (typeof closeWindow === "function") closeWindow("win-viejito"); 
}

function confirmSkip(isViejitoAburrido) { 
    if (isViejitoAburrido) { 
        clearLoadingIntervals(); 
        goToDesktop(); 
        closeWindow("win-viejito"); // 🌟 REPARADO: Obliga a la alerta a apagarse al ir al escritorio
    } else { 
        closeWindow("win-viejito"); // 🌟 REPARADO: Obliga a la alerta a apagarse si decide quedarse a leer
    }
}
function openWindow(id) {
    const win = document.getElementById(id);
    if (!win) return;

    highestZIndex++;
    win.style.zIndex = highestZIndex;
    win.classList.remove("hidden"); 
    win.style.setProperty("display", "block", "important"); 

    if (id === "win-viejito") {
        win.style.setProperty("z-index", "99999999", "important");
    }

    // Revisa que tu openWindow tenga este reinicio limpio para el perdón:
    if (id === "win-perdonar") {
        const btnNo = document.getElementById("btn-no");
        if (btnNo) {
            btnNo.classList.remove("explode-animation");
            Object.assign(btnNo.style, {
                display: "inline-block",
                position: "relative",
                transform: "translate(0px, 0px)", // 🌟 Regresa al centro matemático exacto de la ventana
                left: "auto",
                top: "auto",
                margin: "0"
            });
        }
        esquivesContador = 0; 
    }



    const dockItem = document.getElementById(`dock-${id}`);
    if (dockItem) { 
        dockItem.classList.remove("minimized"); 
        dockItem.classList.add("running"); 
    }
}
function closeWindow(id) {
    const win = document.getElementById(id);
    if (!win) return;
    
    win.style.setProperty("display", "none", "important");
    win.classList.add("hidden"); 
    
    // 🌟 REPARADO: Si cierran la ventana de mimos, escondemos al limón del fondo de pantalla al instante
    if (id === "win-perdonar") {
        const btnNo = document.getElementById("btn-no");
        if (btnNo) {
            btnNo.style.setProperty("display", "none", "important");
        }
    }
    
    const dockItem = document.getElementById(`dock-${id}`); 
    if (dockItem) dockItem.className = "dock-item"; 
}
function minimizeWindow(id) {
    const win = document.getElementById(id);
    if (!win) return;

    // 🌟 VOLVEMOS AL ESTADO PERFECTO: Usamos la clase hidden nativa que antes te corría genial
    win.classList.add("hidden"); 
    win.style.setProperty("display", "none", "important");

    const dockItem = document.getElementById(`dock-${id}`); 
    if (dockItem) { 
        dockItem.classList.remove("running"); 
        dockItem.classList.add("minimized"); 
    } 
}
function toggleMinimize(id, textLoaderFunctionName) {
    const win = document.getElementById(id); 
    if (!win) return;
    
    // 🌟 REPARADO: Si la ventana tiene la clase hidden o el display apagado, la restaura de inmediato
    if (win.classList.contains("hidden") || win.style.display === "none") { 
        openWindow(id); 
        if (textLoaderFunctionName && typeof window[textLoaderFunctionName] === "function") { 
            window[textLoaderFunctionName](); 
        } 
    } else { 
        minimizeWindow(id); 
    }
}
function forgiveAccepted() { 
    document.getElementById("huge-yes-panel").classList.remove("hidden"); 
    startConfetti(); 
}
function closeHugeYes() { 
    document.getElementById("huge-yes-panel").classList.add("hidden"); 
    closeWindow("win-perdonar"); 
}
function readCarta() {
    if (cartaTimeout) clearTimeout(cartaTimeout);
    const body = document.getElementById("body-carta"); if(!body) return; body.innerHTML = "";
    const textoCarta = "Hola, mi amor. ❤️ \n\nQuería dejarte un pedacito de mi bobada aquí, escondida entre tanto código.\n\nGracias por cuidarme tanto. Gracias por tenerme tanta paciencia, por escucharme incluso cuando ni yo sé cómo explicar lo que siento y por hacerme sentir tan bonito todos los días.\n\n Me gusta sentir que medio aprendemos juntos y que aunque a veces tengamos días medio raros, siempre terminamos siendo un par de bobos cursis y acaramelados (damosdiabetesamor). \n\nPerdóname si a veces me cierro o me cuesta explicar lo que siento, también por las veces en las que mi orgullo, mis nervios o mi terquedad hablan antes de que reaccione como tal, prometo que ya estoy y que seguiré aprendiendo :D. \n\nY amor, no sé muy bien a qué voy, pero bueno, de pasito le recuerdo que nunca, pero nunca puedes dudar de todo lo que te amo, de verdad, eres de las cosas más bonitas que me pudo haber pasado, mi persona favorita, mi lugar seguro. \n\n PD: Ojalá pierdas este programa, aunque de no hacerlo, sé que al menos te sacará una sonrisa y sabrás que te salió bien la brujería.\n\n Te amo muchísimo, mi vida ";
    let idx = 0;
    function type() { if(idx < textoCarta.length) { let char = textoCarta.charAt(idx); body.innerHTML += char === "\n" ? "<br>" : char; idx++; cartaTimeout = setTimeout(type, 25); } }
    type();
}
function readJson() {
    if (jsonTimeout) clearTimeout(jsonTimeout);
    
    const pre = document.getElementById("body-json"); 
    if (!pre) return; 
    pre.innerHTML = "";

    // 🌟 OPTIMIZADO: Tu JSON ahora se lee en vertical sin estirar la pantalla hacia los lados
    const textoJson = `{
  "responsable": true,
  "tierno": true,
  "guapo": true,
  "inteligente": true,
  "trabajador": true,
  "paciente": true,
  "noble": true,
  "atento": true,
  "me_hace_reir": true,
  "me_hace_sentir_segura": true,
  "mi_lugar_seguro": true,
  "operador_mas_guapo": true,
  "me_enamora_todos_los_dias": true,
  "lo_amo": "Infinity"
}`;

    let idx = 0;
    function typeHtmlJson() {
        if (idx < textoJson.length) { 
            pre.innerHTML += textoJson.charAt(idx); 
            idx++; 
            jsonTimeout = setTimeout(typeHtmlJson, 15); 
        } else {
            // 🌟 OPTIMIZADO: Coloreado en bloque directo usando clases de tu CSS
            pre.innerHTML = pre.innerHTML
                .replace(/"([^"]+)":/g, '<span class="j-key">"$1"</span>:')
                .replace(/: (true|false|"Infinity")/g, ': <span class="j-val">$1</span>');
        }
    }
    typeHtmlJson();
}
function readLog() {
    if (logTimeout) clearTimeout(logTimeout);
    
    const body = document.getElementById("body-log"); 
    if (!body) return; 
    body.innerHTML = "";

    // 🌟 OPTIMIZADO: Tus logs ahora se leen en vertical con total claridad
    const textoLogs = `[WARNING] La usuaria puede ponerse necia cuando cree tener la razón.
[WARNING] Tiende a dramatizar un poquito (solo un poquito).
[WARNING] Tiene un miedo absurdo a conocer suegras.
[INFO] Ama demasiado al operador actual.
[INFO] Se derrite cuando él sonríe.
[INFO] A veces expresa mejor el amor haciendo estas tonterías que diciéndolo.
[INFO] Sigue aprendiendo a comunicar lo que siente.
[FIX] Aplicar abrazos largos.
[FIX] Dar besitos en la frente.
[FIX] Recordarle que todo estará bien.
[STATUS] Error corregido temporalmente.`;

    let idx = 0;
    function typeHtmlLog() {
        if (idx < textoLogs.length) { 
            let char = textoLogs.charAt(idx);
            body.innerHTML += char === "\n" ? "<br>" : char; 
            idx++; 
            logTimeout = setTimeout(typeHtmlLog, 20); 
        } else {
            // 🌟 OPTIMIZADO: Coloreado instantáneo en un solo viaje de escaneo
            body.innerHTML = body.innerHTML
                .replace(/\[WARNING\]/g, '<span class="log-warn">[WARNING]</span>')
                .replace(/\[INFO\]/g, '<span class="log-info">[INFO]</span>')
                .replace(/\[FIX\]/g, '<span class="log-fix">[FIX]</span>');
        }
    }
    typeHtmlLog();
}
function runNovioExe() {
    if (exeTimeout) clearTimeout(exeTimeout);
    
    const body = document.getElementById("exe-body"); 
    if (!body) return; 
    body.innerHTML = ""; 
    
    let lIdx = 0;
    function typeExeLine() { 
        if (lIdx < exeLines.length) { 
            let div = document.createElement("div"); 
            div.innerText = exeLines[lIdx]; 
            div.style.margin = "4px 0"; 
            
            // Colorear según el contenido de la línea informático
            if (exeLines[lIdx].includes("✔")) div.style.color = "#6a9955"; 
            if (exeLines[lIdx].includes("Resultado")) div.style.color = "#ff79c6"; 
            
            body.appendChild(div); 
            lIdx++; 
            exeTimeout = setTimeout(typeExeLine, 400); 
        } 
    }
    typeExeLine();
}
function setupButtonNo() {
    let btnNo = document.getElementById("btn-no"); 
    if (!btnNo) return;
    
    // Clonación para mantener el botón limpio de eventos repetidos
    const nuevoBtnNo = btnNo.cloneNode(true);
    btnNo.parentNode.replaceChild(nuevoBtnNo, btnNo);
    btnNo = nuevoBtnNo;

    btnNo.addEventListener("mouseover", () => {
        esquivesContador++;
        
        // 🔹 NIVEL 1: Brincos pequeños e inocentes dentro de la ventana (Primeros 2 toques)
        if (esquivesContador <= 2) { 
            let randomX = Math.random() * 80 - 40; 
            let randomY = Math.random() * 30 - 15;
            btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`; 
        } 
        // 🚀 NIVEL 2: ¡EL ESCAPE DIVERTIDO POR TODO EL ESCRITORIO! (Del toque 3 al 14)
        else if (esquivesContador < 15) { 
            // 🌟 MATEMÁTICA CALIBRADA EN PÍXELES VISIBLES:
            // Usamos distancias fijas intermedias para que el botón salga de la ventana 
            // volando hacia la papelera, hacia arriba o hacia el dock, pero sin irse al infinito.
            let desplazarX, desplazarY;

            // Alternamos saltos gigantes a la izquierda y derecha de la ventana
            if (esquivesContador % 2 === 0) {
                desplazarX = Math.random() * 150 + 250; // Salto largo a la derecha (Dock)
            } else {
                desplazarX = -(Math.random() * 150 + 280); // Salto largo a la izquierda (Papelera)
            }

            // Alternamos saltos gigantes hacia arriba y hacia abajo de la ventana
            if (esquivesContador % 3 === 0) {
                desplazarY = Math.random() * 100 + 150; // Salto hacia abajo
            } else {
                desplazarY = -(Math.random() * 120 + 180); // Salto hacia arriba (Barra superior)
            }
            
            // Mantenemos al botón libre flotando por encima con un z-index gigante
            Object.assign(btnNo.style, {
                position: "absolute",
                zIndex: "9999999",
                margin: "0",
                display: "inline-block"
            });
            
            // Lanzamos el cohete de posición directo al monitor
            btnNo.style.transform = `translate(${desplazarX}px, ${desplazarY}px)`;
        } 
        // 💥 NIVEL 3: ¡Puff! El botón explota y desaparece
        else {
            btnNo.style.transform = "none";
            btnNo.classList.add("explode-animation"); 
            setTimeout(() => { btnNo.style.display = "none"; }, 400);
        }
    });

    // La trampa del clic
    btnNo.addEventListener("click", (e) => {
        e.preventDefault(); 
        punishClicks = 0; 
        const punishScreen = document.getElementById("punishment-screen");
        if (punishScreen) punishScreen.classList.remove("hidden");
    });
}
function clickPunishmentHeart() {
    const heart = document.getElementById("broken-heart-clicker"); 
    const bar = document.getElementById("punish-progress-bar"); 
    const text = document.getElementById("punish-clicks-text");
    if (!heart || !bar || !text) return;

    punishClicks++;
    
    // Animación rápida de latido al hacer clic
    heart.classList.add("heart-beat-click"); 
    setTimeout(() => heart.classList.remove("heart-beat-click"), 100);
    
    // Actualizar barra de progreso
    let porcentaje = (punishClicks / 15) * 100; 
    bar.style.width = `${porcentaje}%`; 
    text.innerText = `Progreso de reparación: ${punishClicks} / 15 clics`;
    
    // Evolución del corazón roto
    if (punishClicks === 8) heart.innerText = "❤️‍🩹"; 
    
    // ¡Victoria! El corazón se repara por completo
    if (punishClicks >= 15) {
        heart.innerText = "👑";
        const panelCastigo = document.getElementById("punishment-screen").querySelector(".terminal-window");
        
        if (panelCastigo) {
            // 🌟 OPTIMIZADO: Ordenamos el sermón en vertical para que se lea con total comodidad en tu editor
            panelCastigo.innerHTML = `
                <div style="color: #ffbd2e; font-weight: bold; font-size: 18px; margin-bottom: 15px;"> MANUAL DEL BUEN OPERADOR</div>
                <div style="font-size: 14px; color: #fff; text-align: left; line-height: 1.6; margin-bottom: 20px; max-height: 250px; overflow-y: auto; padding-right: 5px;">
                    <p style="margin-bottom: 10px;">A ver, caballero... Un pequeño sermón sobre el perdón y saber perdonar: El orgullo no nos lleva a ningún lado y menos cuando se trata de su noviecita amada y adorada. El amor verdadero consiste en dejar ir los días tercos y aceptar las mandarinas de la paz de inmediato :), no persigas un limón por toda la pantalla </p>
                    <p>Pero bueno... como soy un amor de persona, no te preocupes, <strong>te perdono por no haberme querido perdonar a la primera</strong>. Te restauro el acceso al sistema nada mas por guapo, tu carita me ablanda el corazón. Ahora regresa allá adentro y haz las cosas bien, ¿bueno? Gracias </p>
                </div>
                <button onclick="exitPunishmentAndRetry()" style="background-color: #6a9955; color: #fff; border-color: #8cc379; padding: 10px 20px; font-weight: bold; width: 100%;">Volver a Intentarlo </button>
            `;
        }
    }
}
function exitPunishmentAndRetry() { 
    document.getElementById("punishment-screen")?.classList.add("hidden"); 
    openWindow("win-perdonar"); 
    if (typeof startConfetti === "function") startConfetti(); 
}
function makeWindowsDraggable() {
    const windows = document.querySelectorAll('.window');
    
    windows.forEach(win => {
        const header = win.querySelector('.draggable-header'); 
        if (!header) return;

        // Traer al frente la ventana que se acaba de tocar
        win.addEventListener('mousedown', () => { 
            highestZIndex++; 
            win.style.zIndex = highestZIndex; 
        });

        let isDragging = false; 
        let startX, startY, initialX, initialY;

        header.addEventListener('mousedown', (e) => {
            // Evitar arrastrar si se hace clic en los botones de cerrar/minimizar
            if (e.target.classList.contains('dot') || e.target.classList.contains('close-btn-x')) return;
            
            isDragging = true; 
            startX = e.clientX; 
            startY = e.clientY;
            
            const rect = win.getBoundingClientRect(); 
            initialX = rect.left; 
            initialY = rect.top;
            
            // 🌟 OPTIMIZADO: Sintaxis moderna para fijar la posición inicial
            win.style.left = `${initialX}px`; 
            win.style.top = `${initialY}px`; 
            win.style.margin = '0';
            
            document.addEventListener('mousemove', mouseMoveHandler); 
            document.addEventListener('mouseup', mouseUpHandler); 
            e.preventDefault();
        });

        function mouseMoveHandler(e) { 
            if (!isDragging) return; 
            // 🌟 OPTIMIZADO: Desplazamiento fluido usando plantillas de texto
            win.style.left = `${initialX + (e.clientX - startX)}px`; 
            win.style.top = `${initialY + (e.clientY - startY)}px`; 
        }

        function mouseUpHandler() { 
            isDragging = false; 
            document.removeEventListener('mousemove', mouseMoveHandler); 
            document.removeEventListener('mouseup', mouseUpHandler); 
        }
    });
}
function readRecuerdos() {
    const body = document.getElementById("body-recuerdos"); 
    if (!body || body.children.length > 0) return; 
    
    const misFotos = [
        { url: "img/PequeñitoAmor.jpeg", nota: "De las primeras fotos que me regalaste, peligrosamente adorable, ¿tendremos un pequeñito así? ❤️" },
        { url: "img/SonrisaPreciosa.jpeg", nota: "Creo que fue una de las primeras que presumí, amor su sonrisa, fck, me tuvo, me tiene y me tendrá mal" },
        { url: "img/DizqueTieneFrio.jpeg", nota: "'Tengo frío', decía. Mentiroso. Solo quería poner las manos encima. 🙄 (JAKAJAJA te amo)" },
        { url: "img/LaLoca.jpeg", nota: "Aquí están las pruebas de que en efecto amor mío, hizo una buena elección de chamán, brujería -.-" },
        { url: "img/OliendoMiAdquisición.jpeg", nota: "Procedimiento científico indispensable: comprobar si mi hombre se bañó ese día (nolohizo)" },
        { url: "img/BelloDurmiente.jpeg", nota: "Usted dormido... y yo preguntándome cómo es que te puedo llegar a amar tanto, tanto, tanto 🥹." }
    ];

    // 🌟 OPTIMIZADO: Separamos la creación de las tarjetas en líneas verticales limpias
    misFotos.forEach((foto, i) => { 
        setTimeout(() => { 
            const card = document.createElement("div"); 
            card.className = "photo-card"; 
            card.innerHTML = `<img src="${foto.url}"><p class="photo-note">${foto.nota}</p>`; 
            body.appendChild(card); 
        }, i * 300); 
    });
}
function updateLiveClock() { 
    const clockEl = document.getElementById("live-clock"); 
    if (clockEl) {
        clockEl.innerText = new Date().toLocaleTimeString(); 
    }
}
function updateLoveUptime() {
    const timerEl = document.getElementById("timer-display"); 
    if (!timerEl) return;
    
    const now = new Date();

    // 🌟 OPTIMIZADO: Separamos el cálculo base en renglones verticales limpios
    let años = now.getFullYear() - FECHA_INICIO.getFullYear(); 
    let meses = now.getMonth() - FECHA_INICIO.getMonth(); 
    let dias = now.getDate() - FECHA_INICIO.getDate();
    let horas = now.getHours() - FECHA_INICIO.getHours(); 
    let minutos = now.getMinutes() - FECHA_INICIO.getMinutes(); 
    let segundos = now.getSeconds() - FECHA_INICIO.getSeconds();

    // Ajustes matemáticos de desbordamiento de tiempo
    if (segundos < 0) { segundos += 60; minutos--; } 
    if (minutos < 0) { minutos += 60; horas--; } 
    if (horas < 0)   { horas += 24; dias--; }
    if (dias < 0)    { dias += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); meses--; } 
    if (meses < 0)   { meses += 12; años--; }

    // Construcción del texto dinámico
    let textoTiempo = ""; 
    if (años > 0) textoTiempo += `${años} ${años === 1 ? 'año' : 'años'}, `;
    
    textoTiempo += `${meses} meses, ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`; 
    
    timerEl.innerText = textoTiempo;
}
function readPapelera() {
    if (papeleraTimeout) clearTimeout(papeleraTimeout);
    if (matrixInterval) clearInterval(matrixInterval);
    
    const body = document.getElementById("body-papelera"); 
    if (!body) return; 
    body.innerHTML = ""; 

    // 🌟 OPTIMIZADO: Tus archivos de la papelera ahora se leen en vertical con total claridad
    const archivosBorrados = [
        `<div class="trash-item" onclick="triggerFullscreenGlitch('terquedad_maria_v1.bak')">📄 terquedad_maria_v1.bak <span class='trash-size'>(0 KB)</span></div>`,
        `<div class="trash-item" onclick="triggerFullscreenGlitch('discusiones_antiguas.log')">📄 discusiones_antiguas.log <span class='trash-size'>(1.2 MB)</span></div>`,
        `<div class="trash-item" onclick="triggerFullscreenGlitch('momentos_tensos_reparados.tmp')">📄 momentos_tensos_reparados.tmp <span class='trash-size'>(45 KB)</span></div>`,
        `<div class="trash-item" onclick="triggerFullscreenGlitch('modo_drama_override.bat')">📄 modo_drama_override.bat <span class='trash-size'>(7 KB)</span></div>`,
        `<div class="trash-item" onclick="triggerFullscreenGlitch('indecisiones_totales.cfg')">📄 indecisiones_totales.cfg <span class='trash-size'>(0 KB)</span></div>`
    ];

    let lineIdx = 0;
    function typeTrashLine() { 
        if (lineIdx < archivosBorrados.length) { 
            body.innerHTML += archivosBorrados[lineIdx]; 
            lineIdx++; 
            papeleraTimeout = setTimeout(typeTrashLine, 200); 
        } 
    }
    typeTrashLine();
}
function bindInlineTerminalInput() {
    const inputField = document.getElementById("glitch-task-input");
    const feedback = document.getElementById("task-feedback-log");
    const chaosBox = document.getElementById("matrix-falling-chaos");
    const glitchScreen = document.getElementById("fullscreen-matrix-glitch");
    
    if (!inputField || !feedback || !chaosBox) return;
    inputField.focus();

    inputField.onkeydown = (e) => {
        let valor = inputField.value.trim().toLowerCase();

        // CONTROL DE ESPACIOS EN LA TAREA 2
        if (currentTaskStep === 2) {
            if (e.key === " ") {
                e.preventDefault();
                spaceClickCount++;
                feedback.innerText = `[PROGRESO]: Procesando dramas e indecisiones... (${spaceClickCount} / 5)`;
                
                if (spaceClickCount >= 5) {
                    document.getElementById("inline-terminal-zone")?.remove(); // Limpiar prompt anterior
                    
                    // 🌟 OPTIMIZADO: Tu HTML en vivo ahora se lee en vertical de forma súper elegante en el editor
                    chaosBox.innerHTML += `
                        <span style="color:var(--accent-green);">✔ [PROCESO COMPLETADO]: Procesos de indecisión resueltos con éxito.</span><br><br>
                        <span style="color:#ffbd2e; font-weight:bold;">👉 TAREA 3/3: Ingrese la declaración de sumisión absoluta obligatoria (<span style="color:var(--neon-pink);">mimujermanda</span>) y presione Enter:</span><br>
                        <div id="inline-terminal-zone" style="display: flex; align-items: center; gap: 10px; margin-top: 5px;">
                            <span style="color: var(--accent-purple); font-weight: bold;">$ root@maria_os: ~ </span>
                            <input type="text" id="glitch-task-input" style="background: transparent; border: none; color: #00ff00; font-family: monospace; font-size: 14px; outline: none; width: 300px;" autofocus>
                        </div>
                        <div id="task-feedback-log" style="color:var(--accent-blue); margin-top: 5px; font-weight: bold;"></div>
                    `;
                    
                    currentTaskStep = 3;
                    if (glitchScreen) glitchScreen.scrollTop = glitchScreen.scrollHeight;
                    setTimeout(bindInlineTerminalInput, 50); // Reactivar escuchador abajo
                }
            }
            return;
        }

        // CONTROL DE ENTER PARA LAS TAREAS 1 Y 3
        if (e.key === "Enter") {
            if (currentTaskStep === 1) {
                if (valor === "fix") {
                    document.getElementById("inline-terminal-zone")?.remove(); // Romper prompt anterior
                    
                    // 🌟 OPTIMIZADO: Inyección del bloque HTML de la Tarea 2 ordenado en vertical
                    chaosBox.innerHTML += `
                        <span style="color:var(--accent-green);">✔ [PROCESO COMPLETADO]: Parche de núcleo aplicado correctamente.</span><br><br>
                        <span style="color:#ffbd2e; font-weight:bold;">👉 TAREA 2/3: Presione la [Barra Espaciadora] 5 veces seguidas para procesar todas las indecisiones acumuladas:</span><br>
                        <div id="inline-terminal-zone" style="display: flex; align-items: center; gap: 10px; margin-top: 5px;">
                            <span style="color: var(--accent-purple); font-weight: bold;">$ root@maria_os: ~ </span>
                            <input type="text" id="glitch-task-input" style="background: transparent; border: none; color: #00ff00; font-family: monospace; font-size: 14px; outline: none; width: 300px;" autofocus>
                        </div>
                        <div id="task-feedback-log" style="color:var(--accent-blue); margin-top: 5px; font-weight: bold;"></div>
                    `;
                    currentTaskStep = 2;
                    if (glitchScreen) glitchScreen.scrollTop = glitchScreen.scrollHeight;
                    setTimeout(bindInlineTerminalInput, 50);
                } else {
                    feedback.innerText = "❌ Comando incorrecto. Escriba 'fix'.";
                }
            } else if (currentTaskStep === 3) {
                if (valor === "mimujermanda") {
                    document.getElementById("inline-terminal-zone")?.remove(); // Quitar el último prompt
                    
                    // Imprimir las líneas de éxito definitivas al fondo del todo
                    chaosBox.innerHTML += `
                        <span style="color:var(--accent-green);">✔ [PROCESO COMPLETADO]: Sincronización absoluta restablecida. Reconociendo la autoridad de la jefa.</span><br><br>
                        <span style="color:var(--accent-green); font-size:14px; font-weight:bold;">🎉 S.O.S TOTALMENTE RESTAURADO DE FORMA SEGURA. <br> 👉 ACCIÓN FINAL: Presione nuevamente la tecla (Fn) o Ctrl en su teclado para restablecer los servidores...</span><br>
                    `;
                    currentTaskStep = "final";
                    if (glitchScreen) glitchScreen.scrollTop = glitchScreen.scrollHeight;
                } else {
                    feedback.innerText = "❌ Clave errónea. Recuerda quién manda en este sistema.";
                }
            }
        }
    };
}
function showMissionAchievement(tituloLogro, textologro) {
    const winLogro = document.getElementById("win-popup-login-final"); // 🌟 Cambiado al ID real de tu HTML para la ventana de control
    const logroTxt = document.getElementById("logro-puntos-text");
    const logroPista = document.getElementById("logro-puntos-pista");
    const btnCloseLogro = document.getElementById("btn-close-logro");

    if (!winLogro || !logroTxt || !logroPista || !btnCloseLogro) return;

    logroTxt.innerText = tituloLogro;
    logroPista.innerHTML = textologro;

    // Sumar los puntos al marcador global en vivo
    totalScore += 100;
    const scoreEl = document.getElementById("current-score");
    if (scoreEl) scoreEl.innerText = totalScore;

    // Configurar acción del botón de cierre
    btnCloseLogro.onclick = () => {
        closeWindow("win-popup-login-final");

        // 🌟 OPTIMIZADO: Avanzar el paso de la tarea de forma limpia y directa
        if (typeof currentTaskStep === "number" && currentTaskStep < 3) {
            currentTaskStep++;
        } else if (currentTaskStep === 3) {
            currentTaskStep = "final";
        }

        // ❌ ELIMINADO: Quitamos updateTaskInstructionText(); para evitar que el programa explote
    };

    openWindow("win-popup-login-final");
}
function showRestorationWarningWindow() {
    const winAlerta = document.getElementById("win-alerta-papelera"); 
    if (!winAlerta) return;

    const alertaBody = winAlerta.querySelector(".window-body");
    if (alertaBody) {
        // 🌟 OPTIMIZADO: Tu mensaje de bienvenida ahora se lee en vertical de forma súper elegante en el editor
        alertaBody.innerHTML = `
            <div style="background-color: #151515; border: 1px solid #27c93f; padding: 10px; border-radius: 4px; margin-bottom: 15px; text-align: left;">
                <span style="color:#27c93f; font-weight:bold;">✔ CONNECTION_RESTORED_SUCCESSFULLY</span><br>
                <span style="color:#888; font-size:11px;">[SESSION]: Active | [USER]: Main | [STATUS]: 200 OK</span>
            </div>
            <p style="font-size: 15px; color: #fff; font-weight: bold; margin-bottom: 10px; text-align: left;">¡Bienvenido de nuevo, Main! ❤️</p>
            <p style="font-size: 13px; color: #abb2bf; line-height: 1.6; margin-bottom: 20px; text-align: left;">
                Aviso: El entorno ha sido estabilizado de forma segura. Recuerda que lo mejor es no intentar restaurar o hurgar en estos archivos viejos porque solo sirve para revivir momentos tensos, dramas innecesarios y caer en los mismos errores. Esos archivos ya cumplieron su propósito y están mejor en la papelera. El sistema funciona muchísimo mejor cuándo se escriben lineas nuevas y si se agregan nuevos archivos a la carpeta de recuerdos.
            </p>
            <button onclick="closeWindow('win-alerta-papelera')" style="background-color: #3a3d3d; color: var(--text-main); border-color: #555; width: 100%; font-weight: bold;">Aceptar y Continuar 💜</button>
        `;
    }

    // Generar el sonido de pitido de éxito de forma limpia
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)(); 
        const osc = audioCtx.createOscillator(); 
        const gain = audioCtx.createGain();
        
        osc.connect(gain); 
        gain.connect(audioCtx.destination); 
        
        osc.type = "sine"; 
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime); 
        
        osc.start(); 
        osc.stop(audioCtx.currentTime + 0.12);
    } catch (err) {}

    // Mostrar la ventana emergente al frente de todo de forma segura
    highestZIndex++; 
    winAlerta.style.zIndex = highestZIndex; 
    winAlerta.classList.remove("hidden"); 
}
function tryEmptyTrash() { 
    openWindow("win-alerta-papelera"); 
}
document.addEventListener("click", (e) => {
    // Evitar que suene si le da clic a un cuadro de texto para no aturdir al escribir
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.id === "terminal-user-input") return;

    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        // Usamos onda cuadrada y frecuencia alta para que sea un chasquido nítido, seco y ruidoso
        osc.type = "square";
        osc.frequency.setValueAtTime(1600, audioCtx.currentTime); // Tono de clic plástico real
        
        // 🌟 AMPLIFICACIÓN MÁXIMA: Volumen de 0.40 para que truene con total fuerza en tus bocinas
        gain.gain.setValueAtTime(0.40, audioCtx.currentTime); 
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.018); // Duración exacta de un clic (18 milisegundos)
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.018);
    } catch(err) {}
});
window.addEventListener("keydown", (e) => {
    // ----------------------------------------------------
    // PARTE 1: MINIJUEGO MATRIX (CONGELACIÓN Y COMANDOS)
    // ----------------------------------------------------
    const chaosBox = document.getElementById("matrix-falling-chaos");
    const glitchScreen = document.getElementById("fullscreen-matrix-glitch");
    
    if (chaosBox && glitchScreen && isGlitchActive) {
        let esTeclaFn = (e.key === "Fn" || e.key === "WakeUp" || (e.ctrlKey && !e.altKey && e.key === "1" && currentTaskStep !== "final"));
        let esSalidaFn = (e.key === "Fn" || e.key === "WakeUp" || (e.ctrlKey && currentTaskStep === "final"));

        if (esTeclaFn && !isMatrixFrozen) {
            e.preventDefault();
            isMatrixFrozen = true;
            clearInterval(matrixInterval);
            
            // 🌟 OPTIMIZADO: Tu cuadro de la Tarea 1 ahora se lee en vertical de forma súper elegante en el editor
            chaosBox.innerHTML += `
                <br><span style="color:#ffbd2e; font-weight:bold;">--------------------------------------------------------------------------------</span><br>
                <span style="color:#ffbd2e; font-weight:bold;">⚡ [SISTEMA CONGELADO]: PROTOCOLO DE REPARACIÓN MANUAL INICIADO.</span><br>
                <span style="color:#fff; font-weight:bold;">👉 TAREA 1/3: Escriba el comando <span style="color:#ff5f56;">fix</span> para inyectar el parche de núcleo y presione Enter:</span><br>
                <div id="inline-terminal-zone" style="display: flex; align-items: center; gap: 10px; margin-top: 5px;">
                    <span style="color: var(--accent-purple); font-weight: bold;">$ root@maria_os: ~ </span>
                    <input type="text" id="glitch-task-input" style="background: transparent; border: none; color: #00ff00; font-family: monospace; font-size: 14px; outline: none; width: 300px;" autofocus>
                </div>
                <div id="task-feedback-log" style="color:var(--accent-blue); margin-top: 5px; font-weight: bold;"></div>
            `;
            
            glitchScreen.scrollTop = glitchScreen.scrollHeight;
            setTimeout(bindInlineTerminalInput, 50);
            return; 
        }

        if (esSalidaFn && isMatrixFrozen && currentTaskStep === "final") {
            e.preventDefault();
            isGlitchActive = false;
            isMatrixFrozen = false;
            glitchScreen.classList.add("hidden");
            // 🌟 REPARADO: Apagamos la música de tensión de Matrix
            const musicaMatrix = document.getElementById("musica-matrix");
            if (musicaMatrix) {
                musicaMatrix.pause();
                musicaMatrix.currentTime = 0;
            }

            // 🌟 REPARADO: Devolvemos la música bonita de fondo al escritorio restaurado
            if (typeof startCyberambientMusic === "function") {
                startCyberambientMusic();
            }

            if (typeof startServerRebootAnimation === "function") {
                startServerRebootAnimation();
            }
            return;
        }
    }


    // ----------------------------------------------------
    // PARTE 2: CAPTURA DE EASTER EGGS (TRUCOS)
    // ----------------------------------------------------

    let key = e.key.toLowerCase();
    if (e.key === "/") key = "/"; 
    
    keysPressed += key;
    if (keysPressed.length > 100) keysPressed = keysPressed.substring(50);

    for (let word in easterEggsList) {
        if (keysPressed.includes(word) && !easterEggsList[word].usado) {
            easterEggsList[word].usado = true;
            totalScore += easterEggsList[word].pts;

            const scoreEl = document.getElementById("current-score");
            if (scoreEl) scoreEl.innerText = totalScore;

            // 🌟 SONIDO MÁGICO: Arpegio celestial de 8 bits optimizado
            try {
                const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                const playTone = (freq, duration, delay) => {
                    setTimeout(() => {
                        const osc = audioCtx.createOscillator(); 
                        const gain = audioCtx.createGain();
                        
                        osc.connect(gain); 
                        gain.connect(audioCtx.destination);
                        
                        osc.type = "sine"; 
                        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
                        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
                        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
                        
                        osc.start(); 
                        osc.stop(audioCtx.currentTime + duration);
                    }, delay);
                };
                playTone(523.25, 1.2, 0);   // Do5
                playTone(659.25, 1.4, 120); // Mi5
                playTone(783.99, 1.6, 240); // Sol5
                playTone(1046.50, 1.8, 360);// Do6
            } catch(err) {}

            // Inyección de datos en la ventana única de logros corregida
            const winLogro = document.getElementById("win-logro-puntos");
            const logroTxt = document.getElementById("logro-puntos-text");
            const logroPista = document.getElementById("logro-puntos-pista");
            const btnClose = document.getElementById("btn-close-logro");

            if (winLogro && logroTxt && logroPista && btnClose) {
                logroTxt.innerText = easterEggsList[word].titulo;
                logroPista.innerHTML = easterEggsList[word].pista.replace(/\n/g, "<br>");
                btnClose.onclick = () => closeWindow("win-logro-puntos");
                
                openWindow("win-logro-puntos");
                if (typeof triggerGlobalSparkles === "function") triggerGlobalSparkles();
            }

            // Desbloqueo del logro secreto especial "teamo"
            if (word === "teamo" && document.getElementById("win-easter")) {
                openWindow("win-easter");
            }

            // 🌟 OPTIMIZADO: Si junta los puntos, lanzamos la súper cita extendida en líneas limpias
            if (totalScore >= 2500) {
                setTimeout(() => { 
                    openWindow("win-premio-cita"); 
                    if (typeof startConfetti === "function") startConfetti(); 
                }, 1000);
            }
            
            keysPressed = ""; 
            break;
        }
    }
});



// =========================================================================
// SECCIÓN D: INICIALIZACIÓN DE LA PÁGINA
// =========================================================================

window.onload = () => {
    setTimeout(() => {
        // Inicializar únicamente los contadores de tiempo de fondo
        setInterval(updateLiveClock, 1000);
        setInterval(updateLoveUptime, 1000);
        setupButtonNo();
        makeWindowsDraggable();
        
        // 🌟 REPARADO: Arranca el desfile de letras en texto plano, manteniendo el prompt interactivo apagado
        typeBootLetter();
    }, 300);
    
    const btnSkip = document.getElementById("btn-skip-loading");
    if(btnSkip) {
        btnSkip.onclick = () => { openWindow("win-viejito"); };
    }
};

