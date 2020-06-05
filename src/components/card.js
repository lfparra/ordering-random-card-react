import React from "react";

function Card(props) {
    return (
        <>
            <div class="carta">
                <div class={`numero ${props.pinta}`}>
                    {props.numero}
                </div>
            </div>
        </>
    )



}

export default Card;