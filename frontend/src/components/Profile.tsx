import { Container, ListItem, Stack } from "@mui/material";
import React from "react";


const Profile: React.FC = () => {

    return(
    <Container maxWidth="sm">
        <Stack spacing={2}>
            <ListItem>User Name:</ListItem>
            <ListItem>User Name:</ListItem>
            <ListItem>User Name:</ListItem>
            <ListItem>User Name:</ListItem>
            <ListItem>User Name:</ListItem>
        </Stack>
    </Container>)
}


export default Profile;