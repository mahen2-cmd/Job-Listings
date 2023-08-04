import React from "react";

function Details(props) {
    return (
        <div
            style={{
                color: "hsl(180, 8%, 52%)",
                fontSize: "10px",
                fontWeight: "500",
                width: "150px",
                height: "10px",
                backgroundColor: "white",
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
            }}
        >
            <div>{props.prop1}</div>

            <p
                style={{
                    paddingBottom: "5px",
                }}
            >
                .
            </p>
            <div>{props.prop2}</div>
            <p
                style={{
                    paddingBottom: "5px",
                }}
            >
                .
            </p>
            <div>{props.prop3}</div>
            {/* {props.prop2}
            {props.prop3} */}
        </div>
    );
}

export default Details;
