import React from "react";

export const Formulario = (props) => {

    return (
        <>
            <h2>Original:</h2>
            <input id="numeroCarta" onChange={(e)=>{props.consigueValor(e)}} />
            <button id="draw" onClick={(e)=>{props.draw(e)}}>Draw</button>
            <button id="sort" onClick={(e)=>{props.sort(e)}}>Sort</button>
        </>
    )

}