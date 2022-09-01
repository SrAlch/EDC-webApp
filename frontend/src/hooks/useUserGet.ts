import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

// Types
import { UserGet } from "../@types/fetchingTypes";


export const useUserGet = () => {
    const [user, setUser] = useState({} as UserGet)
    const email = localStorage.getItem("email")
    const accessToken = localStorage.getItem("access_token")
    const navigate = useNavigate();

    useEffect(() => {
            fetch(`http://localhost:5000/profile/${email}`, {
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
                .then(response => setUser(response))
                .catch(error => console.log(error))            
    }, []);

    return {user, setUser}
};