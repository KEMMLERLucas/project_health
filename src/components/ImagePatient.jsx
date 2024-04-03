import "./SuiviPatient.css";
import "./PatientName"


function ImagePatient( {patient} ){
    function getImage(sex){
        if(sex == 1){
            return "_homme2"
        }else{
            let num = Math.floor(Math.random() * (3 - 0) + 0);
            console.log(num)
            if(num == 2){
                return "_femme2"
            }else if(num==1){
                return "_femme"
            }else{
                return""
            }
        }
    }

    return (<div><img src={"../public/image_sport"+getImage(patient.sex)+".jpg"} id="ImageSport"/></div>)
    
}

export default ImagePatient

