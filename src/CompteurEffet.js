import { useState, useEffect } from 'react';

function CompteurEffet() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log(` Compteur mis à jour : ${clicks} clics`);
    document.title = `${clicks} clics effectués !`;
  }, [clicks]);

  return (
    <div>
      <p>Clics avec effet : {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>
        Incrémenter avec effet 
      </button>
    </div>
  );
}

export default CompteurEffet;