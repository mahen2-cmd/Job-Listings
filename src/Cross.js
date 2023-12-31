import React from "react";

import "./Cross.css";

function Cross(props) {

    return (
        <div className="x" onClick={props.onClick}>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    );
}

export default Cross;
