import './App.css';
import ClickCounter from './Compteur';
import MessageBouton from './MessageBouton';
import FormulaireNom from './FormulaireNom';
import CompteurEffet from './CompteurEffet';
import AffichageDynamique from './AffichageDynamique';
import FormulaireInscription from './FormulaireInscription';
import CompteurTitre from './CompteurTitre';

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <h3>Compteur</h3>
        <ClickCounter />
      </div>
      <div className="card">
        <h3>Message</h3>
        <MessageBouton />
      </div>
      <div className="card">
        <h3>Formulaire nom</h3>
        <FormulaireNom />
      </div>
      <div className="card">
        <h3>Compteur avec effet</h3>
        <CompteurEffet />
      </div>
      <div className="card">
        <h3>Affichage dynamique</h3>
        <AffichageDynamique />
      </div>
      <div className="card">
        <h3>Inscription</h3>
        <FormulaireInscription />
      </div>
      <div className="card">
        <h3>Compteur titre</h3>
        <CompteurTitre />
      </div>
    </div>
  );
}

export default App;
