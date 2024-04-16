import "./SuiviPatient.css";
import {useEffect, useState} from "react";
import axios from "axios";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Graphes({patient, name, chartType}){

    const [activitiesCount, setActivitiesCount] = useState([]);
    const[physiologicalData, setPhysiology] = useState([])

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


    useEffect(() => {
        async function loadPhysicalActivities() {
            const api = "https://health.shrp.dev/items/physicalActivities?filter[people_id][_eq]="+patient.id;
            try {
                const response = await axios.get(api);
                /*const allActivities = response.data.data;*/
                const userActivities = response.data.data;

                /*const userActivities = allActivities.filter(activity =>
                    patient.physicalActivities.includes(activity.id));*/

                const counts = userActivities.reduce((acc, activity) => {
                    const activityType = getActivityNameInFrench(activity.type);
                    acc[activityType] = (acc[activityType] || 0) + 1;
                    return acc;
                }, {});

                const chartData = Object.entries(counts).map(([type, count]) => ({
                    name: type,
                    count: count
                }));

                setActivitiesCount(chartData);
            } catch (error) {
                console.error(error);
            }
        }
        loadPhysicalActivities();
    }, [patient.physicalActivities]);

    return (

        <div>
            <div className="title" id="titleStats">
                {name}
            </div>
            {
                chartType === 'line' ? (
                        <div className="EvolutionPoids">
                            <LineChart width={400} height={250} data={physiologicalData}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis/>
                                <YAxis
                                    domain={['dataMin - 1', 'dataMax + 1']}
                                    tickFormatter={(value) => value.toFixed(2)}
                                    type="number"
                                    allowDecimals={true}
                                />
                                <Tooltip />
                                <Line type="monotone" dataKey="weight" stroke="#DA9D43"/>
                            </LineChart>
                        </div>)

                    : chartType === 'bar' ? (
                        <div className="EvolutionPoids">
                            <BarChart width={350} height={250} data={activitiesCount}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" tickFormatter={getActivityNameInFrench} />
                                <YAxis/>
                                <Bar dataKey="count" fill="#BBDCDD" label={{ position: 'insideEnd' }}/>
                            </BarChart>
                        </div>

                    )   : null

            }

        </div>
    )

    function getActivityNameInFrench(x) {
        if (x === "bike") return "Cyclisme";
        if (x === "swimming") return "Natation";
        if (x === "walking") return "Marche";
        if (x === "footing") return "Course";
        return x;
    }

}

export default Graphes 