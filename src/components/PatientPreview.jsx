import "./PatientPreview.css"
function PatientPreview({patient}){
    console.log(patient)
    return <div><h3> {patient.firstname} {patient.lastname}</h3>  </div>
}

export default PatientPreview