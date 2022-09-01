import { Container, ListItem, Paper, Stack } from "@mui/material";
import React from "react";
import { useUserGet } from "../hooks/useUserGet";


const Profile: React.FC = () => {
    const {user, setUser} = useUserGet()
    return(
    <Container maxWidth="sm">
        <Paper elevation={6} sx={{marginTop: '50px'}}>
            <Stack spacing={2}>
                <ListItem>User Name: {user['userName']}</ListItem>
                <ListItem>Email: {user['email']}</ListItem>
                <ListItem>Phone: {user['phone']}</ListItem>
                <ListItem>Home Country: {user['homeCountry']}</ListItem>
            </Stack>
        </Paper>
    </Container>)
}


export default Profile;