import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// Styles Module
import {Button, Chip, Divider, IconButton, List, ListItem, Paper, Stack, TextField} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

//Types Module
import { ItemThumbType, BagThumbType, TripThumbType } from "../../@types/componentsTypes";



function updateBag()
{

}

function deleteBag(bagName: string)
{
    const ownerId = localStorage.getItem("ownerId")
    const accessToken = localStorage.getItem("access_token")
    const bagId = `${ownerId}-${bagName}`
    fetch('http://localhost:5000/bags', {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + accessToken
                            },
                            body: JSON.stringify({"bagId": bagId})
                        })
}


const BagThumb: React.FC<BagThumbType> = (props) => {
    const [newBagName, setNewBagName] = useState(props.bagName)
    const [newCapacity, setNewCapacity] = useState(props.capacity)
    const [newNotes, setNewNotes] = useState(props.notes)
    const [newStyle, setNewStyle] = useState(props.style)
    const [edit, setEdit] = useState(false)
    
    return(<Paper elevation={4} >
                <List>
                    <Stack direction="row">
                        <IconButton aria-label="close" color="inherit" size="medium" onClick={() => {setEdit(true);}}>
                            <EditIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton aria-label="close" color="inherit" size="medium" onClick={(e) => {
                                e.preventDefault();
                                //deleteBag(newBagName)
                                console.log(props.bagList)
                                for (let n = 0; n < props.bagList.length; n++) {
                                    const element = props.bagList[n];
                                    if(element.bagName === newBagName){
                                        console.log(element.bagName)
                                        props.bagList.splice(n, 1)
                                        break;
                                    }
                                }
                                console.log(props.bagList)
                                props.updatedBagList(props.bagList)
                            }}>
                            
                            <DeleteForeverIcon fontSize="inherit" />
                        </IconButton>
                    </Stack>
                    <ListItem>Bag Name: {newBagName}</ListItem>
                    <Divider />
                    <ListItem>Capacity: {newCapacity}</ListItem>
                    <Divider />
                    <ListItem>Bag Style: {newNotes}</ListItem>
                    <Divider />
                    <ListItem>Notes: {newStyle}</ListItem>
                </List>
            </Paper>)
        };

const ItemThumb: React.FC<ItemThumbType> = ({itemName, itemAmount, notes, category}) => (
    <Paper elevation={4} >
        <List>
            <ListItem>Item Name: {itemName}</ListItem>
            <Divider />
            <ListItem>Amount: {itemAmount}</ListItem>
            <Divider />
            <ListItem>Category: {category}</ListItem>
            <Divider />
            <ListItem>Notes: {notes}</ListItem>
        </List>
    </Paper>
);

const TripThumb: React.FC<TripThumbType> = (props) => {

    return(
    <Paper elevation={4} >
        <List>
            <ListItem>Trip Name: {props.tripName}</ListItem>
            <Divider />
            <ListItem>Amount: {props.date}</ListItem>
            <Divider />
            <ListItem>Category: {props.destination}</ListItem>
            <Divider />
            <ListItem>Backpacks: {props.backpacks.map(backpack => (
                <Chip sx={{backgroundColor: "#6ca5eff4"}} label={backpack} />
            ))}</ListItem>
            <Divider />
            <ListItem>Items: {props.items.map(item => (
                <Chip sx={{backgroundColor: "#6ca5eff4"}} label={item} />
            ))}</ListItem>
        </List>
    </Paper>
    )
};


export {BagThumb, ItemThumb, TripThumb};