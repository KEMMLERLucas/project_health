import React, {useContext, useEffect, useState} from 'react';
import data from "./json/training.json";
import ChampEntrainement from "./ChampEntrainement.jsx";
import Exercice from "./Exercice.jsx";
import SuiviPatientContext from "../context/SuiviPatientContext.jsx";

function Training2({name}) {
    const patient = useContext(SuiviPatientContext).pat

    const [jsonData, setJsonData] = useState(data);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedTrainingId, setSelectedTrainingId] = useState(null);

    useEffect(() => {
        if (patient.id && jsonData.length > 0) {
            const patientData = jsonData.filter(training => training.who.includes(patient.id));
            setFilteredData(patientData);
        }
    }, [patient, jsonData]);

    return (
        <div className="steps_block">
            <div className="name">{name}</div>
            <div>
                {filteredData.map(training => (
                    <div key={training.id}>
                        <ChampEntrainement
                            name={training.name}
                            duration={training.timer + " minutes"}
                            calories={training.number_ex + " exercices"}
                            level={training.level}
                            train={true}
                            onClick={() => {
                                setSelectedTrainingId(training.id === selectedTrainingId ? null : training.id);
                            }}
                        />

                        {selectedTrainingId === training.id &&
                            <div>
                                {Object.keys(training.entraînements).map(key => (
                                    <Exercice name={training.entraînements[key].name}
                                              series={training.entraînements[key].number_series}
                                              repetitions={training.entraînements[key].number_repet}/>
                                ))}
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Training2;