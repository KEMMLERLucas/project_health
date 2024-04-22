import React from 'react';
import { usePatients } from '../context/PatientContext.jsx'; // Importez le hook usePatients
import Title from '../components/Title.jsx';

function Notifs() {
  const { patients } = usePatients(); // Accédez aux données des patients depuis le contexte
  console.log(patients);

  return (
    <div>
        <Title name="Notifications"/>
      <h1>Dernières activités</h1>
      {patients.map((patient)=> (
            <div>
                {patient.id}
            </div>
      ))}
    </div>
  );
}

export default Notifs;