import "./SuiviPatient.css";

/*
* stat = l'info dans la 1ere ligne du champs
* caption = l'infos dans la 2eme ligne du champs
* */
function CarreStatsActu({stat, caption}){
    function color(){
        console.log("Cliqué : "+stat + "" + caption);
    }

    return (
        <div className="CarreStatsAct" onClick={color}>
            <div className="statValue">{stat}</div>
            <div className="statCaption">{caption}</div>
        </div>
    )
}

export default CarreStatsActu