import React from "react";
import Details from "./Details";
import CompanyName from "./CompanyName";
import FeaturedTag from "./FeaturedTag";
import NewTag from "./NewTag";
import Title from "./Title";
import CompanyLogo from "./CompanyLogo";


function FirstSection(props) {
    console.log(props);
    return (
        <div
            style={{
                width: "280px",
                height: "60px",
                backgroundColor: "white",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "left",
                display: "flex",
            }}
        >
            <CompanyLogo logoName={props.logoName}/>
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
                        justifyContent: "left",
                        display: "flex",
                        alignItems: "center",
                        // backgroundColor: "orange",

                    }}
                >
                    <CompanyName cname={props.cname} />
                    <div>{props.new && <NewTag />}</div>
                    <div>{props.featured && <FeaturedTag />}</div>
                </div>
                <Title title={props.title} />
                <Details
                    postingTime={props.postingTime}
                    workTime={props.workTime}
                    location={props.location}
                />
            </div>
        </div>
    );
}

export default FirstSection;
