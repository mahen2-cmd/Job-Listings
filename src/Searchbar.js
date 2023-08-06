import React, { useState } from "react";
import Searchtag from './Searchtag';
import Clear from './Clear';

function Searchbar() {

    const [tags, setTags] = useState(["Frontend", "CSS", "JavaScript"]);

    const removeTag = (tag) => {
        console.log("Remove tag called")
        setTags((prevTags) => prevTags.filter((t) => t !== tag));
    };



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
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                }}
            >
                {tags.map((tag) => (
                    <Searchtag key={tag} text={tag} removeTag={removeTag} />
                ))}

                {/* <Searchtag text="Frontend" />
                <Searchtag text="CSS" />
                <Searchtag text="JavaScript" /> */}
            </div>

            <Clear />
        </div>
    );
}

export default Searchbar;