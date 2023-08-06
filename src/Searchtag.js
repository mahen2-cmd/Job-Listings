import React from "react";

// import "./SearchTag.css";

import Cross from "./Cross";

function Searchtag(props) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    context.font = "12px League Spartan"; // set the font and size
    const width = context.measureText(props.text).width; // get the pixel width of the text

    const width2 = width + 14; // adjust the factor as needed
    const width3 = width2 + 25;


    return (
        <div
            style={{
                height: "25px",
                width: `${width3}px`,
                flexDirection: "row",
                display: "flex",
                justifyItems: "left",
                alignItems: "center",
                marginRight: "13px",
            }}
        >
            <div
                style={{
                    backgroundColor: "hsl(180, 52%, 96%)",
                    width: `${width2}px`,
                    height: "25px",
                    borderRadius: "2px 0 0 2px",
                    color: "hsl(180, 29%, 50%)",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                }}
            >
                {props.text}
            </div>

            <Cross />




        </div>
    );
}

export default Searchtag;
