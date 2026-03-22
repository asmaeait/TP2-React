import { useState } from 'react';

const messages = [
  ' Premier clic !',
  ' Deuxième clic !',
  ' Troisième clic !',
  ' Tu continues encore !',
  ' Inarrêtable !',
];

function AffichageDynamique() {
  const [index, setIndex] = useState(0);

  function suivant() {
    if (index < messages.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <div>
      <p>
        {messages[index]}
      </p>
      <button onClick={suivant}>Cliquer</button>
    </div>
  );
}

export default AffichageDynamique;