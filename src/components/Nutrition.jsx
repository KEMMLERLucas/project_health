import React, {useEffect, useState} from 'react';
import data from "./nutrition.json";
import ChampNutrition from './ChampNutrition';
import Ingrédients from './Ingrédients';
import "./nutrition.css";

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
            <div>
                {filteredData.map(nutrition => (
                    <div key={nutrition.id} className="all">
                        <ChampNutrition
                            name={nutrition.name}
                            onClick={() => {
                                    setSelectedNutritionId(nutrition.id === selectedNutritionId ? null : nutrition.id);
                                }}/>
                                    {Object.keys(nutrition.menu).map(key => (
                                        <Ingrédients name = {nutrition.menu[key].name} series = {nutrition.menu[key].quantity} repetitions = {nutrition.menu[key].kcal}/> 
                                    ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Nutrition;