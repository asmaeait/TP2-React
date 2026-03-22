// Formulaire d'inscription - Asma Ait El Mahjoub
import { useState } from 'react';

function FormulaireInscription() {
  const [formData, setFormData] = useState({
    prenom: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  function onInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    let newErrors = {};
    if (formData.prenom.trim() === '') {
      newErrors.prenom = ' Prénom obligatoire';
    }
    if (!formData.email.includes('@')) {
      newErrors.email = ' Email invalide';
    }
    return newErrors;
  }

  function onFormSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    alert(`✅ Inscription réussie !\n👤 Prénom : ${formData.prenom}\n📧 Email : ${formData.email}`);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label>Prénom :</label>
        <input
          type="text"
          name="prenom"
          value={formData.prenom}
          onChange={onInputChange}
          placeholder="Ton prénom..."
        />
        {errors.prenom && <p style={{ color: 'red' }}>{errors.prenom}</p>}
      </div>
      <div>
        <label>Email :</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onInputChange}
          placeholder="Ton email..."
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <button type="submit">S'inscrire </button>
    </form>
  );
}

export default FormulaireInscription;