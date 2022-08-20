import {useState, useEffect} from "react";
import z from "zod";

// Types
import { User } from "../@types/fetchingTypes";

const userZValidator = z.object({
    _id: z.string(),
    userId: z.string().min(2).max(10),
    name: z.string().min(2).max(10),
    email: z.string().email()

});


export const useDataFetch = () => {
    const [user, setUser] = useState({} as User)

    useEffect(() => {
            fetch('http://localhost:5000/test', {
            method :'GET',
            headers : {
                'Content-Type':'application/json'
                }})
                .then(response => response.json())
                .then(response => setUser(userZValidator.parse(response)))            
    }, []);

    return {user, setUser}
};