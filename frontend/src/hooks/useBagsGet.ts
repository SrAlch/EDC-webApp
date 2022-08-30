import {useState, useEffect} from "react";

// Types
import { Bag } from "../@types/fetchingTypes";


export const useBagsFetch = () => {
    const [bags, setBags] = useState([] as Bag[])
    const ownerId = localStorage.getItem("ownerId")
    const accessToken = localStorage.getItem("access_token")

    useEffect(() => {
            fetch(`http://localhost:5000/bags/${ownerId}`, {
            method :'GET',
            headers : {
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + accessToken
                }})
                .then(response => response.json())            
                .then(response => setBags(response))
                .catch(error => console.log(error))            
    }, []);

    return {bags, setBags}
};