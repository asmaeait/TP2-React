// Compteur qui modifie le titre de l'onglet - Asma Ait El Mahjoub
import { useState, useEffect } from 'react';

function CompteurTitre() {
  const [clicks, setClicks] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (clicks === 0) {
      document.title = ' Mon App React';
    } else if (clicks < 5) {
      document.title = ` ${clicks} clic${clicks > 1 ? 's' : ''} — Débutant`;
    } else if (clicks < 10) {
      document.title = ` ${clicks} clics — En forme !`;
    } else {
      document.title = ` ${clicks} clics — Champion !`;
    }
  }, [clicks]);

  function addClick() {
    setClicks(clicks + 1);
    setIsRunning(true);
  }

  function resetAll() {
    setClicks(0);
    setIsRunning(false);
    document.title = ' Mon App React';
  }

  return (
    <div>
      <p> Total de clics : {clicks}</p>
      <p>
        Statut :{' '}
        <span style={{ color: isRunning ? 'green' : 'gray' }}>
          {isRunning ? 'Actif' : ' En attente'}
        </span>
      </p>
      <button onClick={addClick}>Cliquer </button>
      <button onClick={resetAll}>Reset </button>
    </div>
  );
}

export default CompteurTitre;