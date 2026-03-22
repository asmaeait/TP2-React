// Affichage dynamique de messages - Asma Ait El Mahjoub
import { useState } from 'react';

const niveaux = [
  { texte: ' Premier pas !', couleur: 'green' },
  { texte: ' Tu prends le rythme !', couleur: 'orange' },
  { texte: ' En feu !', couleur: 'red' },
  { texte: ' Inarrêtable !', couleur: 'purple' },
  { texte: ' Légende !', couleur: 'blue' },
];

function AffichageDynamique() {
  const [index, setIndex] = useState(0);

  function suivant() {
    setIndex((index + 1) % niveaux.length);
  }

  return (
    <div>
      <p style={{ color: niveaux[index].couleur, fontWeight: 'bold' }}>
        {niveaux[index].texte}
      </p>
      <p>Étape {index + 1} sur {niveaux.length}</p>
      <button onClick={suivant}>Suivant </button>
    </div>
  );
}

export default AffichageDynamique;