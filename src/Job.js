import React from "react";
import Tag from "./Tag";

function Job(props) {


    // const propCount = Object.keys(props).length;

    const propEntries = Object.entries(props);

    const skills = propEntries.map(([key, value], index) => (
        <Tag text={value}/>
    ));

    return (
        <div
            style={{
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                marginBottom: "20px",
                padding: "20px",
                width: "800px",
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
            }}
        >
            {skills}
        </div>

    );
}

export default Job;
