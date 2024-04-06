import "./SuiviPatient.css";
import Badge from "./Badge.jsx";

function Recompenses(){
    return(<div className="totalRecompenses">
        <div className="recompense">
            <Badge intitule="Case départ" icon="1" desc="Inscription validée"/>
            <Badge intitule="Plus rapide que la tortue" icon="2" desc="Plus de 3 heures de sport en une journée."/>
        </div>
        <div className="recompense">
            <Badge intitule="Forrest Gump" icon="3" desc="Au moins 10 000 pas en une journée."/>
            <Badge intitule="Un poisson dans l’eau" icon="6" desc="Première activité “natation” enregistrée."/>
        </div>
        <div className="recompense">
            <Badge intitule="Bientôt le maillot jaune" icon="7" desc="Première activité “vélo” enregistrée."/>
            <Badge intitule="On fire" icon="8" desc="Faire du sport 7 jours d’affilée."/>
        </div>
        <div className="recompense">
            <Badge intitule="Usain Bolt" icon="3" desc="Première activité “course à pied” enregistrée."/>
            <Badge intitule="Le vent dans les cheveux" icon="9" desc="Première activité “course à pied” enregistrée."/>
        </div>
        </div>
    )
}

export default Recompenses