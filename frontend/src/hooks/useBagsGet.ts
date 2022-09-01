import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

// Types
import { Bag } from "../@types/fetchingTypes";
import { RefreshSession } from "../helpers";


export const useBagsFetch = () => {
    const [bags, setBags] = useState([] as Bag[])
    const ownerId = localStorage.getItem("ownerId")
    const accessToken = localStorage.getItem("access_token")
    const navigate = useNavigate();

    useEffect(() => {
            fetch(`http://localhost:5000/bags/${ownerId}`, {
            method :'GET',
            headers : {
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + accessToken
                }})
                .then(response => {
                    return RefreshSession(response, navigate)
                })
                .then(response => setBags(response))
                .catch(error => console.log(error))
    }, []);

    return {bags, setBags}
};