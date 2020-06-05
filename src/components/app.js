import React, { useState, useEffect } from 'react';
import { Formulario } from './formulario';

const App = () => {

    const[state, setState]=useState({
        valorInput: ""
    })

    const consigueValor =(e)=>{
        console.log(e.target.value);

        setState({
            ...state,
            valorInput: e.target.value
        })
    }

    const draw = (e)=>{
        console.log(e.target.id);
    }
    const sort = (e)=>{
        console.log(e.target.id);
    }


    return (
        <>
            <div className="Contenedor">
                <div className="header">
                    <Formulario consigueValor={consigueValor} draw={draw} sort={sort}   />
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