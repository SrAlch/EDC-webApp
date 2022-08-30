import React, { ChangeEvent, useContext, useEffect } from "react";

import {Alert, AlertTitle, Button, Collapse, IconButton, TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'
import { useState } from "react";

import { UserData } from "../@types/fetchingTypes";
import { useNavigate } from "react-router-dom";
import { UserContextType } from "../@types/context";
import Context from "../context/context";


const Login: React.FC = () => {   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setState} = useContext(Context) as UserContextType;
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')
    const [error, setError] = useState(false);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;
        console.log(name)
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
                    onChange={handleInput}/>

            <TextField required 
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    name="password"
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