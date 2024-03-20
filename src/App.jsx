import axios from "axios"
import './App.css'
import {useEffect, useState} from "react";
import PizzaPreview from "./components/PizzaPreview.jsx";

function App() {
  const [isLoading,setLoading] =useState(false)
  const[isError,setError] =useState(false)
  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    async function loadPizzas(){
      const api="https://pizzas.shrp.dev/items/pizzas"
      try{
        setLoading(true)
        setError(false)
        const response = await axios.get(api)
        const data  = await response.data.data

        setLoading(false)
        setError(false)

        setPizzas(data);
      }catch (error){
        console.error(error)
        setLoading(false)
        setError(true)
      }
    }
    loadPizzas()
  }, []);

  return (
      <div className="App">
        {isLoading && <p>Chargement....</p>}
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        {isError && <p> Une erreur s'est produite</p>}
        {pizzas.map((pizza)=> (
            < PizzaPreview key={pizza.id} pizza={pizza}/> ))
        }
      </div>
  )
}

export default App;
