import React, { ChangeEvent, useContext } from "react";

import {Alert, AlertTitle, Button, Collapse, IconButton, TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { UserContextType } from "../@types/context";
import Context from "../context/context";


function setOwnerId(access_token: string, email: string) {
    fetch(`http://localhost:5000/profile/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }})
            .then(response => response.json())
            .then(response => {
                if (response._id !== undefined) {
                    localStorage.setItem("ownerId", response._id)
                }
            });
}


const Login: React.FC = () => {   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setState} = useContext(Context) as UserContextType;
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')
    const [error, setError] = useState(false);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const handleLogin = () => {
        setError(false);
        try {
            const body = JSON.stringify({email, password})
            fetch('http://localhost:5000/token', {
                method :'POST',
                headers : {
                    'Content-Type':'application/json'
                    },
                body: body})
                    .then(response => response.json())
                    .then(response => {
                        if (response.access_token !== undefined) {
                            const access_token: string = response.access_token
                            setState({access_token, email})
                            localStorage.setItem("access_token", access_token)
                            localStorage.setItem("email", email)
                            setOwnerId(access_token, email)
                            navigate("/")
                        } else {
                            setErrorMessage(response.msg)
                            setError(true)
                        }
                    })            

        } catch (error) {
            setError(true)
        }
    }

    return(
        <div>
            <TextField required 
                    id="outlined-basic"
                    label="email@example.com"
                    variant="outlined"
                    name="email"
                    defaultValue="admin@test.com" 
                    onChange={handleInput}/>

            <TextField required 
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    name="password"
                    defaultValue="mynameispepito"
                    onChange={handleInput}/>

            <Button variant='contained' onClick={handleLogin}>Login</Button>
            <Collapse in={error}>
                <Alert severity="error" action={
                        <IconButton aria-label="close" color="inherit" size="small" onClick={() => {setError(false);}}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>}>
                    <AlertTitle>Error</AlertTitle>
                    {errorMessage}
                </Alert>
            </Collapse>
        </div>
    
    )
}

export default Login