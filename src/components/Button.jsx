import React from "react";

function Button (props) {
    return (
        <button className="game-btn hidden" value={props.color} onClick={props.handleClick}>{props.color}</button>
    )
}

export default Button;