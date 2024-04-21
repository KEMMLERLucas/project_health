import "./SuiviPatient.css";
import {useEffect, useState} from "react";
import axios from "axios";
import { LineChart, Line, BarChart, Bar, Label, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

function Graphes({patient, name, chartType}){

    const [activitiesCount, setActivitiesCount] = useState([]);
    const[physiologicalData, setPhysiology] = useState([]);
    const [psychicData, setPsychicData] = useState([]);

    const feelingScores = {
        "hopeless": 1,
        "lazy": 2,
        "losing motivation": 3,
        "motivated": 4,
        "enduring": 5,
        "addicted": 6
    };

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
        async function authenticateAndGetPsychicData() {
            try {
                const authResponse = await axios.post('https://health.shrp.dev/auth/login', {
                    email: 'juju1@gmail.com',
                    password: '123456'
                });

                /*  A changer  */
                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk4MDQ4ZjJjLTU1NWEtNGY3Zi1iMzk0LWI3ZTVhMGViYjJmYyIsInJvbGUiOiI1ZmNkMDU4MS1iZmJjLTRhZmEtOGRmOS1iNDBjMjRlMzViZmEiLCJhcHBfYWNjZXNzIjp0cnVlLCJhZG1pbl9hY2Nlc3MiOnRydWUsImlhdCI6MTcxMzM2Mjk2MiwiZXhwIjoxNzEzMzYzODYyLCJpc3MiOiJkaXJlY3R1cyJ9.ZYRgUhaCJNGRAJTnEHjmJUFrRtIJNadPIwApUOJ31Ns"

                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };

                const psychicApi = `https://health.shrp.dev/items/psychicData?filter[people_id][_eq]=814daa5b-0ea7-499f-80bf-e79e26da8ca5`;
                const response = await axios.get(psychicApi, config);
                const data = response.data.data.map(item => ({
                    ...item,
                    date: item.date,
                    feelingScore: feelingScores[item.feeling.toLowerCase()]
                }));

                setPsychicData(data);
            } catch (error) {
                console.error(error);
            }
        }

        authenticateAndGetPsychicData();
    }, []);

    psychicData.sort(function(a,b){
        return new Date(b.date) < new Date(a.date);
    });

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

    physiologicalData.sort(function(a,b){
        return new Date(b.date) < new Date(a.date);
    });

    return (

        <div>
            <div className="name" id="pad">
                {name}
            </div>
            {
                chartType === 'line' ? (
                        <div className="EvolutionPoids">
                            <LineChart width={400} height={250} data={physiologicalData}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis
                                    dataKey="date"
                                    tickFormatter={(date) => {
                                        const newDate = new Date(date);
                                        const today = new Date();
                                        let day = newDate.getDate();
                                        let month = newDate.getMonth() + 1;
                                        if(month<10){ month = "0"+month }
                                        if(day<10){ day = "0"+day }
                                        return `${day}/${month}`; // Converts to DD/MM/YY format
                                    }}
                                    angle={-45}
                                    textAnchor="end"
                                    height={70}
                                    style={{fontSize: '14px'}}
                                >
                                    <Label value="Année 2023" offset={0} position="insideBottom"/>
                                </XAxis>
                                <YAxis
                                    domain={['dataMin - 1', 'dataMax + 1']}
                                    tickFormatter={(value) => value.toFixed(2)}
                                    type="number"
                                    allowDecimals={true}
                                    style={{fontSize: '14px'}}
                                />
                                <Tooltip />
                                <Line type="monotone" dataKey="weight" stroke="#DA9D43"/>
                            </LineChart>
                        </div>)

                    : chartType === 'bar' ? (
                        <div className="EvolutionPoids">
                            <BarChart width={350} height={250} data={activitiesCount}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" 
                                tickFormatter={getActivityNameInFrench} 
                                />
                                <YAxis/>
                                <Bar dataKey="count" fill="#BBDCDD" label={{ position: 'insideEnd' }}/>
                            </BarChart>
                        </div>

                    )   : chartType === 'lineEvo' ? (
                        <div className="EvolutionPoids">
                            <LineChart width={450} height={300} data={psychicData}>
                                <CartesianGrid strokeDasharray="5 5"/>
                                <XAxis dataKey="date"
                                       tickFormatter={(date) => {
                                           const newDate = new Date(date);
                                           const today = new Date();
                                           let day = newDate.getDate();
                                           let month = newDate.getMonth() + 1;
                                           if(month<10){ month = "0"+month }
                                           if(day<10){ day = "0"+day }
                                           return `${day}/${month}`; // Converts to DD/MM/YY format
                                       }}
                                       angle={-45}
                                       textAnchor="end"
                                       height={70}
                                       style={{fontSize: '14px'}}
                                >
                                    <Label value="Année 2023" offset={0} position="insideBottom"/>
                                </XAxis>
                                <YAxis
                                    domain={[1, 6]}
                                    ticks={[1, 2, 3, 4, 5, 6]}
                                    tickFormatter={(value) => Object.keys(feelingScores).find(key => feelingScores[key] === value)}
                                    type="number"
                                    allowDecimals={false}
                                    style={{fontSize: '10px'}}
                                />
                                <Tooltip
                                    formatter={(value) => Object.keys(feelingScores).find(key => feelingScores[key] === value)}/>
                                <Line type="monotone" dataKey="feelingScore" stroke="#DA9D43"/>
                            </LineChart>
                        </div>
                    ) : null

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