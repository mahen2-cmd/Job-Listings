import React from "react";
import Tag from "./Tag";
import FirstSection from "./FirstSection";

function Job(props) {



    const propEntries = Object.entries(props.skillProps);

    const skills = propEntries.map(([key, value], index) => (
        <Tag text={value}/>
    ));

    return (
        <div
            style={{
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0px 10px 10px hsl(183,37%,89%)",
                padding: "20px",
                width: "800px",
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
            }}
        >
            <FirstSection
                cname={props.firstSectionProps.cname}
                title={props.firstSectionProps.title}
                postingTime={props.firstSectionProps.postingTime}
                workTime={props.firstSectionProps.workTime}
                location={props.firstSectionProps.location}
                new={props.firstSectionProps.new}
                featured={props.firstSectionProps.featured}
                logoName={props.firstSectionProps.logoName}
            />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                {skills}
            </div>
        </div>
    );
}

export default Job;
