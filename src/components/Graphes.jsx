import "./SuiviPatient.css";
import {useEffect, useState} from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Graphes({patient}){
    const[physiologicalData, setPhysiology] = useState([])
    let physiologicalDataPatient = patient.physiologicalData

    useEffect(() => {
        async function loadPhysiology(){
          const api="https://health.shrp.dev/items/physiologicalData?filter[people_id][_eq]="+patient.id
          try{
            const response = await axios.get(api)
            const data  = await response.data.data
    
            setPhysiology(data);
          }catch (error){
            console.error(error)
          }
        }
        loadPhysiology()
      }, []);

      let dataArray = []
      /* array1.forEach((element) => console.log(element)); */

    physiologicalData.forEach((poids) => {
        if(physiologicalDataPatient.includes(poids.id)){
            dataArray.push(poids)
        }
    })

    return (
        <div className="EvolutionPoids">
            <LineChart width={500} height={150} data={dataArray}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis />
                <YAxis domain={['dataMin - 2', 'dataMax + 2']} />
                <Line type="monotone" dataKey="weight" stroke="#DA9D43" />
            </LineChart>
        </div>
    )
}

export default Graphes 