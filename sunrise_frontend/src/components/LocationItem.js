import ReactDOM from "react-dom";
import React, { useState } from "react"
import ReactCardFlip from 'react-card-flip';
import Sound from 'react-sound';



export default function LocationItem ({name, image, sunrise, lat, lng, music}) {

    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);

        const audio = music;
        console.log(audio)
        // audio.play();
    }

    return(
        <ReactCardFlip isFlipped={isFlipped} fliDirection="vertical">
            <div>
                <li className="location-front-item">
                    <h3>{name}</h3>
                    <img className="location-front-image" src={image} alt=""/>
                    <button className="front-flip-button"  onClick={handleClick}>Click to flip</button>
                </li>
             </div>
             <div>
                <li className="location-back-item">
                <Sound
                    url={music}
                    playStatus={isFlipped ? Sound.status.PLAYING : Sound.status.STOPPED}
                    playFromPosition={300 /* in milliseconds */}
                />
                    {/* <audio ref="audio-tag" src={music} autoPlay/> */}
                    <h3>Your local sunrise is at {sunrise} A.M.</h3>
                    <img className="location-back-image" src={image} alt="" />
                    <button className="back-flip-button" onClick={handleClick}>Click to flip</button>
                </li>
             </div>

        </ReactCardFlip>
    )
}