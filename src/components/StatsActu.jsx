import "./SuiviPatient.css";
import CarreStatsActu from "./CarreStatsActu.jsx";
function StatsActu({ patient, name }) {
    function color() {
        console.log("Cliqué : " + patient.firstname + " " + name);
    }

    /*
    * Calcul de stat actuel : poids ou IMC
    * The BMI calculation divides an adult's weight in kilograms by their height in metres squared. For example, A BMI of 25 means 25kg/m2.
    * Steps :
    * 1. Convert height from cm to m
    * 2. Square the height
    * 3. Calculate BMI ;
    *   bmi = weight / squared height in meters
    * */
    const heightInMeters = patient.height / 100;
    const imcStart = (patient.weightStart / (heightInMeters ** 2)).toFixed(1);

    /* calcul stats pour poids ou IMC actuel */
    const stat = name === "Poids actuel" ? patient.weightStart + "Kg" : imcStart;

    /* calcul l'intervalle en caption pour le poids ou IMC*/
    const caption = name === "Poids actuel" ? "(~3.1 kg)" : patient.bmiStart;

    return (
        <div className="StatsActu" onClick={color}>
            {name}
            <CarreStatsActu stat={stat} caption={caption}/>
        </div>
    );
}

export default StatsActu;