import "./nutrition.css";
import { AiOutlineFire } from "react-icons/ai";
import { GiFruitBowl, GiSlicedBread, GiMilkCarton, GiTomato, GiBroccoli} from "react-icons/gi";
import { FaEgg, FaFish } from "react-icons/fa";
import React from "react";
import { TbMeat } from "react-icons/tb";
import { BiBowlRice } from "react-icons/bi";

function Ingrédients({ name, quantity, kcal}) {

    const getIcon = () => {
        switch(true){
            case name.includes("pain"):
                return <GiSlicedBread className="icone" id="bread"/>;
            case name.includes("Fruit"):
                return <GiFruitBowl className="icone" id="fruit"/>;
            case name.includes("Laitage"):
                return <GiMilkCarton className="icone" id="milk"/>;
            case name.includes("Oeuf"):
                return <FaEgg classname="icone" id="egg"/>;
            case name.includes("Viande"):
                return <TbMeat className="icone" id="meat"/>;
            case name.includes("Crudités"):
                return <GiTomato className="icone" id="cru"/>;
            case name.includes("Féculents"):
                return <BiBowlRice className="icone" id="feculent"/>;
            case name.includes("verts"):
                return <GiBroccoli className="icone" id="vert"/>;
            case name.includes("Poisson"):
                return <FaFish className="icone" id="fish"/>;
            default:
                return null;
        }
    }

    return (
        <div className="ChampNutrition">
            <div className="nutritionName">{name}</div>

            <div className="nutritionMenu">
                <div className="nutrition_quantity">
                <div className="icone" id="calories">{getIcon()}</div>
                    <div className="quantity">{quantity}</div>
                </div>
                <div className="nutrition_kcal">
                    <AiOutlineFire className="icone" id="calories"/>
                    <div className="kcal">{kcal + " kcal"}</div>
                </div>
            </div>

        </div>
    );
}

export default Ingrédients;