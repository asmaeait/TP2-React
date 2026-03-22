// Compteur avec effet secondaire - Asma Ait El Mahjoub
import { useState, useEffect } from 'react';

function CompteurEffet() {
  const [clicks, setClicks] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (clicks > 0) {
      setHistory(prev => [...prev, `Clic #${clicks} enregistré `]);
    }
  }, [clicks]);

  function addClick() {
    setClicks(clicks + 1);
  }

  function resetAll() {
    setClicks(0);
    setHistory([]);
  }

  return (
    <div>
      <p> Clics avec effet : {clicks}</p>
      <button onClick={addClick}>Incrémenter avec effet </button>
      <button onClick={resetAll}>Reset </button>
      {history.length > 0 && (
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CompteurEffet;