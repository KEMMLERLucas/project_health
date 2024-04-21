import React, {useContext, useEffect, useState} from 'react';
import data from "./nutrition.json";
import ChampNutrition from './ChampNutrition';
import Ingrédients from './Ingrédients';
import "./nutrition.css";
import SuiviPatientContext from "./SuiviPatientContext.jsx";

function Nutrition({name}){
    const patient = useContext(SuiviPatientContext).pat;
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
            <div>
                {filteredData.map(nutrition => (
                    <div key={nutrition.id}>
                        <span>
                        <ChampNutrition
                            name={nutrition.name}
                            onClick={() => {
                                    setSelectedNutritionId(nutrition.id === selectedNutritionId ? null : nutrition.id);
                                }}/></span>
                                    {Object.keys(nutrition.menu).map(key => (
                                        <Ingrédients name = {nutrition.menu[key].name} quantity = {nutrition.menu[key].quantity} kcal = {nutrition.menu[key].kcal}/> 
                                    ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Nutrition;