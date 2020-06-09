import React from "react"
import LocationItem from "./LocationItem"


export default function Location ({locations, stats}) {

    const showLocations = locations.map((location, i) => <LocationItem key={i} {...location} stats={stats}/>)
        return(
            <div>
                <ul className="location-list">
                    {showLocations}
                </ul>
            </div>
        )

}