import {useState, useEffect} from "react";

// Types
import { Item } from "../@types/fetchingTypes";


export const useItemsFetch = () => {
    const [items, setItems] = useState([] as Item[])
    const ownerId = localStorage.getItem("ownerId")
    const accessToken = localStorage.getItem("access_token")

    useEffect(() => {
            fetch(`http://localhost:5000/items/${ownerId}`, {
            method :'GET',
            headers : {
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + accessToken
                }})
                .then(response => response.json())            
                .then(response => setItems(response))
                .catch(error => console.log(error))             
    }, []);

    return {items, setItems}
};