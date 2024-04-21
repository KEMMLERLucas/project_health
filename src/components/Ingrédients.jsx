import "./css/nutrition.css";
import { AiOutlineFire } from "react-icons/ai";
import { GiFruitBowl, GiSlicedBread, GiMilkCarton, GiTomato, GiBroccoli, GiAvocado} from "react-icons/gi";
import { FaEgg, FaFish } from "react-icons/fa";
import React from "react";
import { TbCarrot, TbCheese, TbMeat, TbSoup } from "react-icons/tb";
import { BiBowlRice } from "react-icons/bi";
import { LuNut } from "react-icons/lu";
import { FaBowlFood, FaGlassWater } from "react-icons/fa6";

function Ingrédients({ name, quantity, kcal}) {

    const getIcon = () => {
        switch(true){
            case name.toLowercase().includes("pain"):
                return <GiSlicedBread className="icone" id="icone"/>;
            case name.includes("Fruit"):
                return <GiFruitBowl className="icone" id="icone"/>;
            case name.includes("Laitage"):
                return <GiMilkCarton className="icone" id="icone"/>;
            case name.includes("Oeuf"):
                return <FaEgg classname="icone" id="icone"/>;
            case name.includes("Viande"):
                return <TbMeat className="icone" id="icone"/>;
            case name.includes("Crudités"):
                return <GiTomato className="icone" id="icone"/>;
            case name.includes("Féculents"):
                return <BiBowlRice className="icone" id="icone"/>;
            case name.includes("verts"):
                return <GiBroccoli className="icone" id="icone"/>;
            case name.includes("Poisson"):
                return <FaFish className="icone" id="icone"/>;
            case name.includes("Soupe"):
                return <TbSoup className="icone" id="icone"/>;
            case name.toLowercase().includes("arachides"):
                return <LuNut className="icone" id="icone"/>;
            case name.includes("Carottes"):
                return <TbCarrot className="icone" id="icone"/>;
            case name.includes("Fromage"):
                return <TbCheese className="icone" id="icone"/>;
            case name.includes("Porridge"):
                return <FaBowlFood className="icone" id="icone"/>;
            case name.includes("Jus"):
                return <FaGlassWater className="icone" id="icone"/>;
            case name.toLowercase().includes("avocat"):
                return <GiAvocado className="icone" id="icone"/>;
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