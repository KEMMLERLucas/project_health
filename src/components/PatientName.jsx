import "./SuiviPatient.css";


function PatientName({patient}){

    function calculAge(year){
        var today = new Date();
        return (today.getFullYear() - year);
    }

    function getSex(sex){
        if(sex == 1){
            return "Homme";
        } else {
            return "Femme"
        }
    }

    return (<div id="patientName"><span>{patient.firstname+" "+patient.lastname+" | "+getSex(patient.sex)+" | "+calculAge(patient.birthyear)+" ans"}</span></div>)
    
}

export default PatientName