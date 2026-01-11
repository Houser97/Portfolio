# Índice
- [Índice](#índice)
- [1. Dependencias](#1-dependencias)
  - [Home Services Scroll Animation](#home-services-scroll-animation)

# 1. Dependencias
- Vite → tooling / dev server
- GSAP → animaciones

```bash
npm i gsap
```

- @gsap/react   
    - React controla cuándo existe el DOM.
    - GSAP controla cómo se mueve.
    - @gsap/react hace que no se peleen.
  - ✅ SÍ lo necesitas (tu caso 👇)

    - Tu portafolio:
        - Tiene secciones grandes
        - Probablemente tendrá routing (/work, /about, etc.)
        - Usa scroll, transiciones, menú animado
        - Usa Lenis + GSAP
        - Quiere verse premium
    - 💡 Aquí @gsap/react no es overkill, es buena práctica.

```bash
npm i @gsap/react
```

- Lenis → scroll suave (muy común junto con GSAP)

```bash
npm i lenis
```

## Home Services Scroll Animation
Esta sección crea una experiencia narrativa controlada por scroll donde:

La sección se queda fija (pin) mientras el usuario scrollea.

El scroll se traduce a un valor progress (0 → 1).

Ese progress gobierna:

Entrada del header

Entrada secuencial de cards

Movimiento vertical

Escala

Opacidad

Desplazamiento lateral

Flip 3D (rotationY)

👉 No hay timelines clásicos
👉 Todo se controla matemáticamente con scroll

Piensa en esto como un motor, no como una animación puntual.

🧠 Modelo mental clave (léelo dos veces)

ScrollTrigger no anima cosas.
ScrollTrigger te da un número (progress).
Tú decides qué hacer con ese número.

Ese número:

self.progress // va de 0 a 1


Y TODO lo que ves en pantalla sale de ahí.

🧱 Estructura general
1️⃣ Referencias (qué voy a animar)
const sectionRef = useRef<HTMLElement | null>(null);
const headerRef = useRef<HTMLDivElement | null>(null);

const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
const innerCardsRef = useRef<(HTMLDivElement | null)[]>([]);


Por qué arrays de refs

Cada card necesita lógica distinta según su índice

GSAP es imperativo → refs directos son lo más confiable

2️⃣ Función smoothStep (la salsa secreta)
const smoothStep = (t: number) => t * t * (3 - 2 * t);


📌 Esto:

Convierte un valor 0 → 1

En una curva suave (ease in-out)

Visualmente:

sin smoothStep → movimientos robóticos

con smoothStep → movimiento “premium”

👉 La usas antes de interpolar valores

📌 ScrollTrigger #1 – PIN
ScrollTrigger.create({
  trigger: sectionRef.current,
  start: "top top",
  end: `+=${vh * 3}`,
  pin: true,
  pinSpacing: true,
});

Qué hace realmente

Cuando la sección toca el top del viewport:

Se queda congelada

El scroll sigue avanzando

Pero visualmente estamos en el mismo lugar

🧠 Esto crea scroll “virtual”
Es tiempo falso para animar cosas complejas.

📌 ScrollTrigger #2 – CONTROLADOR

Este es el cerebro.

ScrollTrigger.create({
  trigger: sectionRef.current,
  start: "top bottom",
  end: `+=${vh * 2.8}`,
  scrub: 1,
  onUpdate: (self) => {
    const progress = self.progress;

Qué significa esto

Cuando la sección empieza a entrar en pantalla

Hasta que termina su recorrido

GSAP calcula progress (0 → 1)

En cada scroll → onUpdate

No hay animaciones automáticas.
Solo reacciones al scroll.

🧩 Animación del HEADER
const headerProgress = gsap.utils.clamp(0, 1, progress / 0.9);


🧠 Traducción:

El header solo vive en el primer 90% del scroll

Luego ya no se mueve

const headerY = gsap.utils.interpolate(
  "300%",
  "0%",
  smoothStep(headerProgress)
);


📌 Significa:

Empieza muy abajo

Sube suavemente

Se detiene

gsap.set(headerRef.current, { y: headerY });


⚠️ Importante:

Usas set, no to

Porque el scroll manda, no el tiempo

🃏 Animación de CARDS (la parte potente)
1️⃣ Card progress individual
const delay = index * 0.5;

const cardProgress = gsap.utils.clamp(
  0,
  1,
  (progress - delay * 0.1) / (0.9 - delay * 0.1)
);


🧠 Esto es CLAVE:

Cada card tiene:

El mismo progress global

Pero desplazado en el tiempo

Resultado:

Aparecen una tras otra

No todas juntas

👉 Esto es stagger matemático, no GSAP stagger.

📐 Movimiento vertical (Y)

Divides el progreso en fases:

Rango	Qué pasa
0 → 0.4	Entra desde arriba
0.4 → 0.6	Rebote / ajuste
> 0.6	Se queda
if (cardProgress < 0.4) { ... }
else if (cardProgress < 0.6) { ... }


🎯 Esto te permite:

Coreografiar animaciones complejas

Sin timelines

Solo lógica

📏 Escala

Misma idea que Y, pero en tamaño:

scale = interpolate(0.25 → 0.75 → 1)


Resultado:

Cards nacen pequeñas

Crecen

Se estabilizan

🌫️ Opacidad
const opacity =
  cardProgress < 0.2
    ? smoothStep(cardProgress / 0.2)
    : 1;


Solo los primeros frames:

Fade in rápido

Luego queda fija

↔️ X + ROTATE + FLIP (el wow)
Estado inicial según índice
let x = index === 0 ? "100%" : index === 2 ? "-100%" : "0%";
let rotate = index === 0 ? -5 : index === 2 ? 5 : 0;


🧠 Cada card tiene personalidad:

Izquierda

Centro

Derecha

Flip final
if (cardProgress > 0.6) {
  const t = smoothStep((cardProgress - 0.6) / 0.4);
  rotationY = t * 180;
}


📌 Esto:

Activa solo al final

Hace el flip 3D

Totalmente controlado por scroll

🧼 Limpieza (muy importante)
const ctx = gsap.context(() => { ... }, sectionRef);
return () => ctx.revert();


✔ Mata ScrollTriggers
✔ Revierte estilos
✔ Evita leaks
✔ React-friendly

Esto es nivel senior, sin exagerar.

🧠 Cómo reutilizar este conocimiento

Ahora puedes crear:

timelines basados en progreso

galerías

storytelling sections

scrollytelling

product showcases

feature reveals

Solo necesitas:

Pin

progress

dividir en fases

interpolar valores

🧠 Regla de oro (guárdala)

Si entiendes qué rango de progress controla cada cosa,
puedes animar literalmente lo que quieras.