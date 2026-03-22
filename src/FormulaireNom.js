// Formulaire de saisie du nom - Asma Ait Elmahjoub
import { useState } from 'react';

function FormulaireNom() {
  const [nom, setNom] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function onInputChange(e) {
    setNom(e.target.value);
    setSubmitted(false);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    if (nom.trim() === '') {
      alert('⚠️ Veuillez entrer un nom !');
      return;
    }
    setSubmitted(true);
    alert(`👋 Bonjour ${nom}, bienvenue sur notre app !`);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>Ton nom :</label>
      <input
        type="text"
        value={nom}
        onChange={onInputChange}
        placeholder="Écris ton nom ici..."
      />
      {submitted && (
        <p>✅ Nom enregistré : <strong>{nom}</strong></p>
      )}
      <button type="submit">Soumettre 🚀</button>
    </form>
  );
}

export default FormulaireNom;