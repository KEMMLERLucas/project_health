import "./nutrition.css";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";
import { MdOutlineSports } from "react-icons/md";
import React from "react";

function Ingrédients({ name, series, repetitions}) {

    return (
        <div className="ChampExercice">
            <div className="exerciceName">{name}</div>

            <div className="exerciceSeriesRep">
                <div className="exerciceSeries">
                    <div className="series">{series + " séries"}</div>
                </div>
                <div className="exerciceRep">
                    <div className="rep">{repetitions + " répétitions"}</div>
                </div>
            </div>

        </div>
    );
}

export default Ingrédients;