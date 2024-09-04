import { useState } from "react";
import { cookiePhrases } from "../../dataCookiePhrases/dataCookiePhrases";
import Button from "../../components/Button/Button";

const HomePage = (): React.ReactElement => {
  const [phrase, setPhrase] = useState("");

  const [cookieOpen, setCookieOpen] = useState(false);

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
        <Button onClick={() => closeCookie()}>
          CIERRA GALLETA - Clicka para coger otra galleta de la fortuna
        </Button>
      </p>
    </>
  );
};

export default HomePage;
