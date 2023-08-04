import React from "react";

function CompanyName(props) {
    return (
        <div
            style={{
                color: "hsl(179,30%,53%)",
                fontSize: "12px",
                fontWeight: "700",
                width: "70px",
                height: "12px",
            }}
        >
            {props.cname}
        </div>
    );
}

export default CompanyName;
