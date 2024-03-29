import "./SuiviPatient.css";


function Onglets({name}){
    function color(){
        console.log("Cliqué : "+name);
    }

    return (<span className="Onglets" onClick={color}>{name}</span>)
}

export default Onglets