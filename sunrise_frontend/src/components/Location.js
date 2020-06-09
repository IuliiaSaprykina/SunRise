import React from "react"
import LocationItem from "./LocationItem"


export default function Location ({locations}) {

    const showLocations = locations.map((location, i) => <LocationItem key={i} {...location} />)
        return(
            <div>
                <ul className="location-list">
                    {showLocations}
                </ul>
            </div>
        )

}