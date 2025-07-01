import React, { useEffect, useState,  } from "react";

function AboutInfo() {
    const [information, setInfo] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/about")
            .then((res) => res.json())
            .then((data) => setInfo(data))
            .catch((err) => console.error("Fetching about info failed:", err));
    }, []);

    return (
        <div>
            <h2>About</h2>

            <ul>
                {information.map((info) => (
                    <li key={info.id}>
                        <strong>{info.title}</strong> {info.info}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AboutInfo;