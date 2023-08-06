import React from "react";

import "./Clear.css";

function Clear(props) {
    return (
        <div className="clear" onClick={props.onClick}>
            Clear
        </div>
    );
}

export default Clear;
