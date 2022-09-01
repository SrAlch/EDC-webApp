import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

// Types
import { UserGet } from "../@types/fetchingTypes";
import { RefreshSession } from "../helpers";



export const useUserGet = () => {
    const [user, setUser] = useState({} as UserGet);
    const email = localStorage.getItem("email");
    const accessToken = localStorage.getItem("access_token");
    const navigate = useNavigate();

    useEffect(() => {
            fetch(`http://localhost:5000/profile/${email}`, {
            method :'GET',
            headers : {
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + accessToken
                }})
                .then(response => {
                    return RefreshSession(response, navigate)
                })            
                .then(response => setUser(response))
                .catch(error => console.log(error))            
    }, []);

    return {user, setUser}
};
