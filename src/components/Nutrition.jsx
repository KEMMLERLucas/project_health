import React, {useEffect, useState} from 'react';
import data from "./nutrition.json";
import ChampEntrainement from './ChampEntrainement';
import Exercice from './Exercice';
import "./SuiviPatient.css";

function Nutrition({patient, name}){

    const [jsonData, setJsonData] = useState(data);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedNutritionId, setSelectedNutritionId] = useState(null);

    useEffect(() => {
        if(patient.id && jsonData.length>0){
            const patientData = jsonData.filter(nutrition => nutrition.who.includes(patient.id));
            setFilteredData(patientData);
        }
    }, [patient, jsonData]);

    return (
        <div className="steps_block">
            <div className="name">{name}</div>
            <div>
                {filteredData.map(nutrition => (
                    <div key={nutrition.id}>
                        <ChampEntrainement
                            name={nutrition.name}
                            onClick={() => {
                                    setSelectedNutritionId(nutrition.id === selectedNutritionId ? null : nutrition.id);
                                }}/>
                            {selectedNutritionId === nutrition.id &&
                                <div>
                                    {Object.keys(nutrition.menu).map(key => (
                                        <Exercice name = {nutrition.menu[key].name} series = {nutrition.menu[key].quantity} repetitions = {nutrition.menu[key].kcal}/> 
                                    ))}
                    </div>
                    }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Nutrition;