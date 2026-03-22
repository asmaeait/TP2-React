// Composant compteur de clics - Asma Ait El Mahjoub
import { useState } from 'react';

function ClickCounter() {
  const [clicks, setClicks] = useState(0);

  function addClick() {
    setClicks(clicks + 1);
  }

  function resetClicks() {
    setClicks(0);
  }

  function getLevel() {
    if (clicks < 5) return ' Débutant';
    if (clicks < 10) return ' En forme !';
    return ' Champion !';
  }

  return (
    <div>
      <p>Vous avez cliqué {clicks} fois !</p>
      <p>{getLevel()}</p>
      <button onClick={addClick}>+1 Cliquer</button>
      <button onClick={resetClicks}>Reset </button>
    </div>
  );
}

export default ClickCounter;