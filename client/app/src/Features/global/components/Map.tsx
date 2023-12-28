// import React from 'react'
import { useAppDispatch } from "../redux/hooks";
// import { selectPlace, addPlace } from "../redux/weatherSlice";

function Map() {
    const dispatch = useAppDispatch();
    return (
        <>
        <div>Map</div>
        {/* won't do anything */}
        {dispatch}
        </>
    )
}

export default Map