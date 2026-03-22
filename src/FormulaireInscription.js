import { useState } from 'react';

function FormulaireInscription() {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    alert(` Inscription réussie !\n Prénom : ${prenom}\n Email : ${email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Prénom :</label>
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="Ton prénom..."
        />
      </div>
      <div>
        <label>Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ton email..."
        />
      </div>
      <button type="submit">S'inscrire </button>
    </form>
  );
}

export default FormulaireInscription;