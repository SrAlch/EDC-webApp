import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

// Types
import { Item } from "../@types/fetchingTypes";


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
                .then(response => setItems(response))
                .catch(error => console.log(error))             
    }, []);

    return {items, setItems}
};