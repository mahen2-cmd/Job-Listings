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
            <div>{props.postingTime}</div>

            <p
                style={{
                    paddingBottom: "5px",
                }}
            >
                .
            </p>
            <div>{props.workTime}</div>
            <p
                style={{
                    paddingBottom: "5px",
                }}
            >
                .
            </p>
            <div>{props.location}</div>
        </div>
    );
}

export default Details;
