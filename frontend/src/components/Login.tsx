import React, { ChangeEvent } from "react";

import {Alert, AlertTitle, Box, Button, Collapse, Container, IconButton, Stack, TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'
import { useState } from "react";

import { useNavigate } from "react-router-dom";


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
        <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#494949', height: 'auto', marginTop: '20px', borderRadius: '10px', padding: "20px" }} >
                <Stack spacing={2}>
                    <TextField required 
                            id="email-login"
                            label="email@example.com"
                            variant="outlined"
                            name="email"
                            sx={{ bgcolor: '#e9e9e9', borderRadius: '10px'}}
                            onChange={handleInput}/>

                    <TextField required 
                            id="password-login"
                            label="Password"
                            variant="outlined"
                            name="password"
                            type="password"
                            sx={{ bgcolor: '#e9e9e9', borderRadius: '10px'}}
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
                </Stack>
            </Box>
        </Container>
    
    )
}

export default Login