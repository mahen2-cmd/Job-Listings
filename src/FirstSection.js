import React from "react";
import Details from "./Details";
import CompanyName from "./CompanyName";
import FeaturedTag from "./FeaturedTag";
import NewTag from "./NewTag";
import Title from "./Title";


function FirstSection() {
    return (
        <div
            style={{
                width: "200px",
                height: "60px",
                backgroundColor: "white",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "left",
                display: "flex",
            }}
        >
            <div
                style={{
                    width: "180px",
                    height: "90px",
                    backgroundColor: "white",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <CompanyName text="Photosnap"/>
                <NewTag />
                <FeaturedTag />
            </div>
            <Title text="Senior Frontend Developer" />
            <Details prop1="1d ago" prop2="Full Time" prop3="USA only" />
        </div>
    );
}

export default FirstSection;
