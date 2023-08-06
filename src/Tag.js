
import React from "react";

import "./Tag.css";

function Tag(props) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    context.font = "12px League Spartan"; // set the font and size
    const width = context.measureText(props.text).width; // get the pixel width of the text


    const width2 = width + 14; // adjust the factor as needed

    return (
        <div
            style={{
                // backgroundColor: "hsl(180, 52%, 96%)",
                width: `${width2}px`,
                height: "25px",
                // borderRadius: "2px",
                // marginRight: "10px",
                // color: "hsl(180, 29%, 50%)",
                // fontSize: "12px",
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                // fontWeight: "700",
            }}

            className="tag"
        >
            {props.text}
        </div>
    );
}

export default Tag;
