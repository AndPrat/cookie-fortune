import { useState } from "react";
import "./App.css";

function App() {
  const [phrase, setPhrase] = useState("");

  const [cookieOpen, setCookieOpen] = useState(false);

  const cookiePhrases = [
    "Cava el pozo antes de tener sed",
    "Cuanto más larga es la cuerda, más alto volará la cometa",
    "El hombre que mueve montañas empieza apartando piedrecitas",
    "Un viaje inesperado te traerá grandes alegrías.",
    "Tu sonrisa iluminará el día de alguien especial.",
    "El amor está más cerca de lo que crees.",
    "Un nuevo comienzo te espera a la vuelta de la esquina.",
    "La suerte está de tu lado en todos tus proyectos.",
    "Hoy es el día perfecto para perseguir tus sueños.",
    "Un viejo amigo te sorprenderá con buenas noticias.",
    "La sabiduría llegará a ti cuando menos lo esperes.",
    "La paciencia es la clave del éxito.",
    "Un pequeño acto de bondad hará una gran diferencia.",
    "El universo conspira a tu favor.",
    "La creatividad fluirá abundantemente en ti.",
    "Un cambio inesperado te llevará por un camino emocionante.",
    "La risa es la mejor medicina.",
    "El conocimiento es poder, pero la sabiduría es libertad.",
    "La felicidad se encuentra en las pequeñas cosas.",
    "Un nuevo amor entrará en tu vida.",
    "La gratitud te abrirá muchas puertas.",
    "La perseverancia te llevará a alcanzar tus metas.",
    "Confía en tu intuición, siempre te guiará bien.",
    "Tu gato te adora más de lo que crees (o eso quiere hacerte creer).",
    "El futuro te pertenece, a menos que lo reserve alguien más.",
    "Cuidado con los spoilers, ¡podrían arruinarte tu propia vida!",
    "En la quietud encontrarás las respuestas que buscas.",
    "La vida es un viaje, no un destino.",
    "La verdadera felicidad se encuentra en el interior.",
    "La vida es un viaje maravilloso, disfrútala al máximo.",
    "Tu potencial es infinito, ¡no te limites!",
    "La verdadera fuerza reside en tu interior.",
    "Cada día es una nueva oportunidad para brillar.",
    "El éxito es la suma de pequeños esfuerzos diarios.",
    "Tu futuro es brillante... ¡y probablemente un poco desordenado!",
    "Cuidado con las palomas, ¡roban migajas!",
    "Si la vida te da limones, haz limonada... ¡y véndela!",
    "Un día conocerás a alguien que te hará decir: '¿Dónde has estado toda mi vida?'",
    "Tu mascota te observa y juzga tus elecciones de vida.",
    "Un secreto te será revelado pronto.",
    "Un viejo amigo reaparecerá en tu vida.",
    "Un viaje inesperado te cambiará para siempre.",
    "El destino te tiene reservada una sorpresa.",
    "Escucha tu corazón, te guiará por el camino correcto.",
    "Tu horóscopo es un poco vago hoy, pero ¡quién necesita un horóscopo cuando tienes una galleta de la fortuna!",
    "Si encuentras una lámpara mágica, pide más galletas de la fortuna.",
    "Cuidado con las escaleras, ¡podrías tropezar con la felicidad!",
    "Tu cabello se verá especialmente bien hoy... ¡a menos que llueva!",
    "Un día te convertirás en un experto en armar muebles... ¡o al menos eso dice IKEA!",
    "Tu futuro es tan brillante que necesitarás gafas de sol.",
    "Un extraterrestre te está observando... ¡y tomando notas!",
    "Tu planta de interior te está escuchando, así que cuéntale tus secretos.",
    "El amor está en el aire... ¡y también el polen!",
    "Un día serás famoso por algo completamente inesperado.",
    "Cuidado con las señales de stop, ¡podrían ser una ilusión óptica!",
    "Tu clóset te está pidiendo que compres más ropa.",
    "Un fantasma amigable te guiará en tus sueños.",
    "El universo te está preparando una fiesta sorpresa.",
    "Tu pizza favorita te espera en el horno cósmico.",
    "Un tesoro escondido te está esperando... ¡pero no te olvides del mapa del tesoro!",
    "Tu sombra tiene una vida secreta.",
    "Un día encontrarás un billete de lotería... ¡pero en otra dimensión!",
    "Tu gato es en realidad un espía intergaláctico.",
    "Un duende te dejará un regalo bajo la almohada... ¡si eres bueno!",
    "Tu planta favorita está a punto de florecer... ¡y hablar!",
    "El destino te llevará a un lugar donde nunca has estado... ¡pero has soñado con él!",
    "Un unicornio te guiará por un camino de arcoíris.",
    "Tu reflejo en el espejo te está diciendo algo importante... ¡pero no puedes entenderlo!",
    "Un día podrás hablar con los animales... ¡y te pedirán que les cocines!",
  ];

  const openCookie = () => {
    if (cookieOpen === false) {
      setCookieOpen(true);
    }

    return giveCookiePhrase();
  };

  const closeCookie = () => {
    if (cookieOpen === true) {
      setCookieOpen(false);
    }

    setPhrase("");
  };

  const giveCookiePhrase = () => {
    const randomPosition = Math.floor(Math.random() * cookiePhrases.length);
    const randomPhrase = cookiePhrases[randomPosition];

    return randomPhrase;
  };

  return (
    <>
      <h1>Descubre tu fortuna, chuli</h1>
      <div className="card">{phrase}</div>
      <div>
        <button onClick={() => setPhrase(openCookie)}>
          ABRE GALLETA - SOY LA GALLETA QUE ADIVINA TU FUTURO
        </button>
      </div>
      <p className="read-the-docs">
        <button onClick={() => closeCookie()}>
          CIERRA GALLETA - Clicka para coger otra galleta de la fortuna
        </button>
      </p>
    </>
  );
}

export default App;
