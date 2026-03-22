import { useState } from 'react';

function FormulaireNom() {
  const [nom, setNom] = useState('');

  function handleChange(event) {
    setNom(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(` Bonjour ${nom}, bienvenue sur notre app !`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ton nom :
        <input
          type="text"
          value={nom}
          onChange={handleChange}
          placeholder="Écris ton nom ici..."
        />
      </label>
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default FormulaireNom;