import ReactDOM from "react-dom";
import React, { useState } from "react"
import ReactCardFlip from 'react-card-flip';



export default function LocationItem ({name, image, sunrise, lat, lng}) {

    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return(
        <ReactCardFlip isFlipped={isFlipped} fliDirection="vertical">
            <div>
                <li className="location-item">
                    <h3>{name}</h3>
                    <img className="location-image" src={image} alt=""/>
                    <button onClick={handleClick}>Click to flip</button>
                </li>
             </div>
             <div>
                <li className="location-item">
                    <h3>SunRise at {sunrise}</h3>
                    <button onClick={handleClick}>Click to flip</button>
                </li>
             </div>

        </ReactCardFlip>
    )
}