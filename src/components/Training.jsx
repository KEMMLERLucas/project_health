import React, {useEffect, useState} from 'react';
import data from "./training.json";
import ChampEntrainement from "./ChampEntrainement.jsx";
import Exercice from "./Exercice.jsx";


function Training({ patient, name }) {
    
        const [jsonData, setJsonData] = useState(data);
        const [filteredData, setFilteredData] = useState([]);

        useEffect(() => {
            if(patient.id && jsonData.length>0){
                const patientData = jsonData.filter(item => item.people_id === patient.id);
                setFilteredData(patientData);
            }
        }, [patient, jsonData]);

        const [activeTab, setActiveTab] = useState(false);

        return (
            <div className="steps_block">
                <div className="name">{name}</div>
                <div>
                    {filteredData.map(training => (
                        <div key={training.id}>
                            <ChampEntrainement name={training.name} duration={training.timer + " minutes"} calories={training.number_ex + " exercices"} train = {true} onClick={() => setActiveTab(!activeTab)}/>
                            {activeTab &&
                                <div>
                                    {Object.keys(training.entraînements).map(key => (
                                        <Exercice name = {training.entraînements[key].name} series = {training.entraînements[key].number_series} repetitions = {training.entraînements[key].number_repet}/> 
                                    ))}
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        );
    }

export default Training;