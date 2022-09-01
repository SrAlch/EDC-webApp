import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

// Types
import { Trip } from "../@types/fetchingTypes";


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
                    if(response.status === 401){
                        try {
                            localStorage.removeItem("ownerId")
                            localStorage.removeItem("email")
                            localStorage.removeItem("access_token")
                            console.log("Session expired")
                            navigate("/")
                        } catch (error) {
                            console.log(error)
                        }
                    }else{
                        return response.json()
                    }
                })
                .then(response => setTrips(response))
                .catch(error => console.log(error))
    }, []);

    return {trips, setTrips}
};