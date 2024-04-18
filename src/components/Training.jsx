import React, {useEffect, useState} from 'react';
import data from "./training.json";

function Training({ patient, name }) {
    
        const [jsonData, setJsonData] = useState(data);
        const [filteredData, setFilteredData] = useState([]);

        useEffect(() => {
            if(patient.id && jsonData.length>0){
                const patientData = jsonData.filter(item => item.people_id === patient.id);
                setFilteredData(patientData);
            }
        }, [patient, jsonData]);

        return (
            <div className="steps_block">
                <div className="name">{name}</div>
                <div>
                    {filteredData.map(training => (
                        <div key={training.id}>
                            <h3>{training.name}</h3>
                            <p>Number of exercises: {training.number_ex}</p>
                            <p>Timer: {training.timer}</p>
                            <div>
                                {Object.keys(training.entraînements).map(key => (
                                    <div key={key}>
                                        <h4>{training.entraînements[key].name}</h4>
                                        <p>Number of series: {training.entraînements[key].number_series}</p>
                                        <p>Number of repetitions: {training.entraînements[key].number_repet}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

export default Training;