import React, { useState, useEffect } from 'react'
import { fetchMountainRanges } from "../utils/api"

const MountainRanges = () => {
    const [mountainRanges, setMountainRanges] = useState([]);

    useEffect(() => {
        fetchMountainRanges().then((mountains) => {
            setMountainRanges(mountains);
        })
    }, [])


    let ranges;
    if (mountainRanges.length === 0) {
        ranges = "";
    } else {
        ranges = (
            <ul className="button">
                {mountainRanges.map((item) => <li key={item.id}>{item.name}</li>)}
            </ul>
        )
    }
    return (
        <div>
            {ranges}
        </div>
    )

}

export default MountainRanges