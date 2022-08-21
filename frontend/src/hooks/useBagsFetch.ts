import {useState, useEffect} from "react";
import z from "zod";

// Types
import { Bag } from "../@types/fetchingTypes";

const userZValidator = z.object({
    _id: z.string(),
    userId: z.string().min(2).max(10),
    name: z.string().min(2).max(10),
    email: z.string().email()

});


export const useBagsFetch = () => {
    const [bag, setBag] = useState({} as Bag)

    useEffect(() => {
            fetch('http://localhost:5000/bags', {
            method :'GET',
            headers : {
                'Content-Type':'application/json'
                }})
                .then(response => response.json())
                .then(response => setBag(userZValidator.parse(response)))            
    }, []);

    return {bag, setBag}
};