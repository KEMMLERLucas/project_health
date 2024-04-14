import "./SuiviPatient.css";

/*
* stat = l'info dans la 1ere ligne du champs
* caption = l'infos dans la 2eme ligne du champs
* */
function ChampStatsActu({stat, caption}){
    function color(){
        console.log("Cliqué : "+stat + "" + caption);
    }

    let idNameStat = "NameStat";
    let classNameStatValue = "statValue";

    switch(caption){
        case "overweight": 
            idNameStat += "Overweight"
            classNameStatValue += "Overweight"
            caption = "Surpoids"
            break;
        case "morbid obesity":
            idNameStat += "MorbidObesity"
            classNameStatValue += "MorbidObesity"
            caption = "Obésité Morbide"
            break;
        case "severe obesity":
            idNameStat += "MorbidObesity"
            classNameStatValue += "MorbidObesity"
            caption = "Obésité sévère"
            break;
        case "moderate obesity":
            idNameStat += "ModerateObesity"
            classNameStatValue += "ModerateObesity"
            caption = "Obésité modérée"
            break;
        case "underweight":
            idNameStat += "Underweight"
            classNameStatValue += "Underweight"
            caption = "Sous-poids"
            break;
        case "normal" : 
            caption = "Normal"
            break;
    }

    return (
        <div className="ChampStatsActu" id={idNameStat} onClick= {color}>
            <div className={classNameStatValue}>{stat}</div>
            <div className="statCaption">{caption}</div>
        </div>
    )
}

export default ChampStatsActu