import React, { useState, useEffect } from 'react';
import { Formulario } from './formulario';
import Card from "./card";

const App = () => {

    const [cartas, setCartas] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
    const [pintas, setPintas] = useState(['spades', 'club', 'heart', 'diams']);
    const [randomCartas, setRandomCartas] = useState(null);
    const [randomPintas, setRandomPintas] = useState(null);
    const [todasLasCartas, setTodasLasCartas] = useState([]);

    const [state, setState] = useState({
        valorInput: ""
    })

    function randomValues(arr) {
        return (
            Math.floor(Math.random() * arr.length)
        )
    }



    const consigueValor = (e) => {
        console.log(e.target.value);

        setState({
            ...state,
            valorInput: e.target.value
        })
    }

    const draw = (e) => {
        for (let i = 0; i < state.valorInput; i++){
            
        }
    }
    const sort = (e) => {
        console.log(e.target.id);
    }


    return (
        <>
            <div className="Contenedor">
                <div className="header">
                    <Formulario consigueValor={consigueValor} draw={draw} sort={sort} />
                    <div className="card"></div>
                </div>
                <div className="content">
                    <h2></h2>
                    <div className="card"></div>
                </div>
            </div>
        </>
    )
}


export default App;