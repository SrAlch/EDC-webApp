import {useState, useEffect} from "react";

// Types
import { Trip } from "../@types/fetchingTypes";


export const useBagsFetch = () => {
    const [trip, setTrips] = useState([] as Trip[])

    useEffect(() => {
            fetch('http://localhost:5000/trips', {
            method :'GET',
            headers : {
                'Content-Type':'application/json'
                }})
                .then(response => response.json())            
                .then(response => setTrips(response))            
    }, []);

    return {trip, setTrips}
};