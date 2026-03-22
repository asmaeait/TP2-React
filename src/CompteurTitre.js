import { useState, useEffect } from 'react';

function CompteurTitre() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    document.title = clicks === 0
      ? ' Mon App React'
      : ` ${clicks} clic${clicks > 1 ? 's' : ''} effectué${clicks > 1 ? 's' : ''} !`;
  }, [clicks]);

  function reset() {
    setClicks(0);
    document.title = ' Mon App React';
  }

  return (
    <div>
      <p> Total de clics : {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>Cliquer </button>
      <button onClick={reset}>Reset </button>
    </div>
  );
}

export default CompteurTitre;