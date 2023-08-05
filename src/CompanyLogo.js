
import React, { useState, useEffect } from "react";

function CompanyLogo(props) {
    const [imagePath, setImagePath] = useState(null);

    useEffect(() => {
        const importImage = async () => {
            const image = await import(`./svgtopng/${props.logoName}.png`);
            setImagePath(image.default);
        };

        importImage();
    }, [props.logoName]);

    if (!imagePath) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ marginTop: "8px" }}>
            <img src={imagePath} alt="Logo" width="50px" height="50px" />
        </div>
    );
}

export default CompanyLogo;
