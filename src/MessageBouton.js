import { useState } from 'react';

function MessageBouton() {
  const [message, setMessage] = useState(' Salut ! Clique sur le bouton...');

  function changerMessage() {
    setMessage(' Bravo ! Tu as cliqué sur le bouton !');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={changerMessage}>Cliquer ici</button>
    </div>
  );
}

export default MessageBouton;