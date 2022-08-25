import {useState, useEffect} from "react";

// Types
import { Item } from "../@types/fetchingTypes";


export const useItemsFetch = () => {
    const [items, setItems] = useState([] as Item[])

    useEffect(() => {
            fetch('http://localhost:5000/items', {
            method :'GET',
            headers : {
                'Content-Type':'application/json'
                }})
                .then(response => response.json())            
                .then(response => setItems(response))            
    }, []);

    return {items, setItems}
};