import "./SuiviPatient.css";

/*
* stat = l'info dans la 1ere ligne du champs
* caption = l'infos dans la 2eme ligne du champs
* */
function ChampStatsActu({stat, caption}){
    function color(){
        console.log("Cliqué : "+stat + "" + caption);
    }

    let classNameStat = "ChampStatsActu";
    let classNameStatValue = "statValue";

    switch(caption){
        case "overweight": 
            classNameStat += "Overweight"
            classNameStatValue += "Overweight"
            caption = "Surpoids"
            break;
        case "morbid obesity":
            classNameStat += "MorbidObesity"
            classNameStatValue += "MorbidObesity"
            caption = "Obésité Morbide"
            break;
        case "severe obesity":
            classNameStat += "MorbidObesity"
            classNameStatValue += "MorbidObesity"
            caption = "Obésité sévère"
            break;
        case "moderate obesity":
            classNameStat += "ModerateObesity"
            classNameStatValue += "ModerateObesity"
            caption = "Obésité modérée"
            break;
        case "underweight":
            classNameStat += "Underweight"
            classNameStatValue += "Underweight"
            caption = "Sous-poids"
            break;
        default : 
            caption = "Normal"
            break;
    }

    return (
        <div className= {classNameStat} onClick= {color}>
            <div className={classNameStatValue}>{stat}</div>
            <div className="statCaption">{caption}</div>
        </div>
    )
}

export default ChampStatsActu