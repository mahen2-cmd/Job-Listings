import React from "react";

function Title(props) {
    return (
        <div
            style={{
                width: "300px",
                height: "60px",
                color: "black",
                fontSize: "15px",
                fontWeight: "700",
            }}
        >
            {props.title}
        </div>
    );
}

export default Title;
