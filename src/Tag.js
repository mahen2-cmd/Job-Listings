// import React from "react";

// function Tag() {

//     <div
//         style={{
//             backgroundColor: "hsl(180, 52%, 96%)",
//             width: "60px",
//             height: "25px",
//             borderRadius: "2px",
//             marginRight: "10px",
//             color: "hsl(180, 29%, 50%)",
//             fontSize: "12px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontWeight: "700",
//         }}
//     >
//         Frontend
//     </div>;
// }

// export default Tag;

import React from "react";

function Tag(props) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    context.font = "12px League Spartan"; // set the font and size
    const width = context.measureText(props.text).width; // get the pixel width of the text


    const width2 = width + 14; // adjust the factor as needed
    // console.log(width); // output the pixel width of the text
    // console.log(width2); // output the pixel width of the text

    return (
        <div
            style={{
                backgroundColor: "hsl(180, 52%, 96%)",
                width: `${width2}px`,
                height: "25px",
                borderRadius: "2px",
                marginRight: "10px",
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
    );
}

export default Tag;
