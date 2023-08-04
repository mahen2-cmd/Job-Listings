import React from "react";

function NewTag() {
    return (
        <div
            style={{
                backgroundColor: "hsl(179,30%,53%)",
                width: "35px",
                height: "18px",
                borderRadius: "9px",
                marginRight: "10px",
                color: "White",
                fontSize: "9px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "700",
                paddingTop: "3px",
                paddingLeft: "1px",
            }}
        >
            NEW!
        </div>
    );
}

export default NewTag;