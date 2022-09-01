import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

// Types
import { Trip } from "../@types/fetchingTypes";
import { RefreshSession } from "../helpers";



export const useTripsGet = () => {
    const [trips, setTrips] = useState([] as Trip[])
    const ownerId = localStorage.getItem("ownerId")
    const accessToken = localStorage.getItem("access_token")
    const navigate = useNavigate();

    useEffect(() => {
            fetch(`http://localhost:5000/trips/${ownerId}`, {
            method :'GET',
            headers : {
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + accessToken
                }})
                .then(response => {
                    return RefreshSession(response, navigate)
                })
                .then(response => setTrips(response))
                .catch(error => console.log(error))
    }, []);

    return {trips, setTrips}
};