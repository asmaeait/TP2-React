# TP2 — React : State & Interactions utilisateurs 

> Application React interactive construite étape par étape — useState, useEffect, formulaires contrôlés et événements.

---

##  Objectifs

- Gérer l'état local avec **useState**
- Gérer les événements **onClick**, **onChange**, **onSubmit**
- Créer des **formulaires contrôlés**
- Utiliser **useEffect** pour les effets secondaires
- Respecter le **flux unidirectionnel** des données

---

##  Technologies utilisées

| Outil | Version |
|-------|---------|
| React | 18.x |
| Node.js | 18.x LTS |
| npm | 10.x |
| CSS | Styling manuel |

---

##  Structure du projet

<img width="276" height="420" alt="structure" src="https://github.com/user-attachments/assets/ece571b4-1d03-4154-ba17-e64122a2f4ec" />



---

##  Composants

### `Compteur.js`
Compteur simple avec `useState` — affiche le nombre de clics et s'incrémente à chaque clic.

---

### `MessageBouton.js`
Affiche un message initial, qui change quand l'utilisateur clique sur le bouton.

---

### `FormulaireNom.js`
Formulaire contrôlé avec un champ texte. Affiche une alerte avec le nom saisi à la soumission.

---

### `CompteurEffet.js`
Compteur qui utilise `useEffect` pour logger dans la console à chaque changement de valeur.

---

### `AffichageDynamique.js` *(Exercice 1)*
Affiche des messages différents à chaque clic : "Premier clic", "Deuxième clic", etc. en cycle.

---

### `FormulaireInscription.js` *(Exercice 2)*
Formulaire contrôlé avec deux champs : prénom et email. Affiche les deux valeurs dans une alerte à la soumission.

---

### `CompteurTitre.js` *(Exercice 3)*
Compteur qui utilise `useEffect` pour mettre à jour le **titre de l'onglet** du navigateur en temps réel.

---

##  Styling

L'interface a été stylisée avec du **CSS pur** via `App.css` :
- Fond gris clair pour la page
- Chaque composant est affiché dans une **carte blanche** avec coins arrondis
- Boutons violets avec effet hover
- Champs de saisie avec bordures arrondies
- Mise en page centrée avec espacement entre les cartes

---

##  Captures d'écran

### Vue principale — Compteur & Message
<img width="947" height="289" alt="1" src="https://github.com/user-attachments/assets/e84d3d67-e538-4cf1-aa28-72a58f97797f" />

---

### Formulaire nom — Alerte soumission
<img width="957" height="367" alt="2" src="https://github.com/user-attachments/assets/cea27838-52c5-4c82-8a10-6a9ba819e7df" />

---

### Formulaire inscription — Alerte avec prénom et email
<img width="957" height="482" alt="3" src="https://github.com/user-attachments/assets/e160dc5a-e48d-48e9-9d0c-485ae7ba12bf" />

---

