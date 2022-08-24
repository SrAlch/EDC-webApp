import {useState, useEffect} from "react";

// Types
import { Bag } from "../@types/fetchingTypes";


export const useBagsFetch = () => {
    const [bags, setBags] = useState([] as Bag[])

    useEffect(() => {
            fetch('http://localhost:5000/bags', {
            method :'GET',
            headers : {
                'Content-Type':'application/json'
                }})
                .then(response => response.json())            
                .then(response => setBags(response))            
    }, []);

    return {bags, setBags}
};