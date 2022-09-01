import { Alert, AlertTitle, Box, Button, Collapse, Container, IconButton, Stack, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'
import React, { useState } from "react";
import { User } from "../@types/fetchingTypes";

const Register: React.FC = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [homeCountry, setHomeCountry] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState('')

    return(
        <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#494949', height: 'auto', marginTop: '20px', borderRadius: '10px', padding: "20px" }} >
                <Stack spacing={2}>
                    <TextField required sx={{ bgcolor: '#e9e9e9', borderRadius: '10px'}} id="username-register" label="Username" variant="outlined" onChange={(e) => setUserName(e.currentTarget.value)}/>
                    <TextField required sx={{ bgcolor: '#e9e9e9', borderRadius: '10px'}} id="email-register" label="Email" variant="outlined" onChange={(e) => setEmail(e.currentTarget.value)}/>
                    <TextField required sx={{ bgcolor: '#e9e9e9', borderRadius: '10px'}} id="password-register" label="Password" type="password" variant="outlined" onChange={(e) => setPassword(e.currentTarget.value)}/>
                    <TextField sx={{ bgcolor: '#e9e9e9', borderRadius: '10px'}} id="phone-register" label="Phone" variant="outlined" onChange={(e) => setPhone(e.currentTarget.value)}/>
                    <TextField sx={{ bgcolor: '#e9e9e9', borderRadius: '10px'}} id="home-register" label="Home Country" variant="outlined" onChange={(e) => setHomeCountry(e.currentTarget.value)}/>
                    <span>(*) Mandatory fields</span>
                    <Button variant='contained' onClick={(e) => {
                        e.preventDefault();
                        const data: User = {userName, email, password, phone, homeCountry}
                        fetch('http://localhost:5000/register', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data)
                        })
                            .then(response => {
                                if(response.ok){
                                    setSuccess(true)
                                } else {
                                    setError(true)
                                }
                                return(response.json())})
                            .then(response => {
                                if(response.msg !== undefined){
                                    setMessage(response.msg)
                                }
                            })
                            .catch(error => console.log(error))
                    }}>Register</Button>
                    <Collapse in={error}>
                        <Alert severity="error" action={
                            <IconButton aria-label="close" color="inherit" size="small" onClick={() => {setError(false);}}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>}>
                            <AlertTitle >Error</AlertTitle>
                            {message}
                        </Alert>
                    </Collapse>
                    <Collapse in={success}>
                        <Alert severity="success" action={
                            <IconButton aria-label="close" color="inherit" size="small" onClick={() => {setSuccess(false);}}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>}>
                            <AlertTitle >Congratulations!</AlertTitle>
                            {message}
                        </Alert>
                    </Collapse>
                </Stack>
            </Box>
        </Container>
    );
};

export default Register;