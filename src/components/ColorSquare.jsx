import React from "react";

function ColorSquare (props) {
    return (
        <div className="color-square" style={{background: props.color}}></div>
    )
}

export default ColorSquare;