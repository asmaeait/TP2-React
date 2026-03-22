// Composant message dynamique - Asma Ait Elmahjoub
import { useState } from 'react';

function MessageBouton() {
  const [message, setMessage] = useState(' Salut ! Clique sur le bouton...');
  const [clicked, setClicked] = useState(false);

  function updateText() {
    if (!clicked) {
      setMessage(' Bravo ! Tu as cliqué sur le bouton !');
      setClicked(true);
    } else {
      setMessage(' Salut ! Clique sur le bouton...');
      setClicked(false);
    }
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={updateText}>
        {clicked ? 'Réinitialiser ' : 'Cliquer ici '}
      </button>
    </div>
  );
}

export default MessageBouton;