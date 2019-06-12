import React, { Component } from "react";

export default props => {
    let { size, url } = props;
    size = size || 100;
    url = url || `https://placeimg.com/${size}/${size}/grayscale`;
    const style = {
        display: "inline-block",
        width: size,
        height: size,
        backgroundImage: `url(${url})`,
        backgroundSize: "contain",
        color: "#fff",
        borderRadius: size * 0.5
    };
    return (
        <div>
            <span style={style} />
        </div>
    );
};
