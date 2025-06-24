import React from "react";
import bgImage from "../assets/images/bg3.jpg";

const Welcome = () => {
    return (
        <div className="container text-center py-5">
            <h1
                className="fw-bold text-uppercase m-0"
                style={{
                    fontSize: "clamp(3rem, 10vw, 10rem)", 
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                    lineHeight: "1.1", // prevents letter break
                    wordBreak: "break-word",
                }}
            >
                Welcome
            </h1>
        </div>
    );
};

export default Welcome;

