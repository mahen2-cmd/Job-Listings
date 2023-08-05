import React from "react";

function CompanyName(props) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    context.font = "12px League Spartan"; // set the font and size
    const width = context.measureText(props.cname).width; // get the pixel width of the text

    let width2 = 0;
    if(width > 70){

        width2 = width + 14; // adjust the factor as needed
    }
    else{
        width2 = 70;
    }

    return (
        <div
            style={{
                color: "hsl(179,30%,53%)",
                fontSize: "12px",
                fontWeight: "700",
                width: `${width2}px`,
                height: "12px",
            }}
        >
            {props.cname}
        </div>
    );
}

export default CompanyName;
