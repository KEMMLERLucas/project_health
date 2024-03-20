import "./PizzaPreview.css"
function PizzaPreview({pizza}){
    console.log(pizza)
    return <div><h3> {pizza.name} {pizza.price}</h3>  <img src={pizza.image+".jpg"} alt={pizza.name}/></div>
}

export default PizzaPreview