import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

// Types
import { Item } from "../@types/fetchingTypes";
import { RefreshSession } from "../helpers";


export const useItemsFetch = () => {
    const [items, setItems] = useState([] as Item[])
    const ownerId = localStorage.getItem("ownerId")
    const accessToken = localStorage.getItem("access_token")
    const navigate = useNavigate();

    useEffect(() => {
            fetch(`http://localhost:5000/items/${ownerId}`, {
            method :'GET',
            headers : {
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + accessToken
                }})
                .then(response => {
                    return RefreshSession(response, navigate)
                })            
                .then(response => setItems(response))
                .catch(error => console.log(error))             
    }, []);

    return {items, setItems}
};