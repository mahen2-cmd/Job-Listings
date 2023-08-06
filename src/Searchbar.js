import React from "react";
import Searchtag from './Searchtag';
import Clear from './Clear';

function Searchbar(props) {



    function handleClick() {
        props.toggleSearchbar();

        props.showAllJobs();
    }


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
                {props.tags.map((tag) => (
                    <Searchtag
                        key={tag}
                        text={tag}
                        removeTag={props.removeTag}
                        removeSearchbar
                    />
                ))}

            </div>

            <Clear onClick={handleClick}/>
        </div>
    );
}

export default Searchbar;