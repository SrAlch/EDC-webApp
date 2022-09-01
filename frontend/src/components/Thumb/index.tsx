import React, { useEffect, useState } from "react";

// Styles Module
import { Chip, Divider, IconButton, List, ListItem, Paper, Stack} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

//Types Module
import { ItemThumbType, BagThumbType, TripThumbType } from "../../@types/componentsTypes";
import { useNavigate } from "react-router-dom";
import { DeleteElement } from "../../helpers";



function updateBag()
{

}

const BagThumb: React.FC<BagThumbType> = (props) => {
    const [newBagName, setNewBagName] = useState(props.bagName)
    const [newCapacity, setNewCapacity] = useState(props.capacity)
    const [newNotes, setNewNotes] = useState(props.notes)
    const [newStyle, setNewStyle] = useState(props.style)
    const navigate = useNavigate();

    
    return(<Paper elevation={4} >
                <List>
                    <Stack direction="row" alignItems="right" justifyContent="right">
                        <IconButton aria-label="close" color="inherit" size="medium" onClick={(e) => {
                                e.preventDefault();
                                DeleteElement(newBagName, navigate, "bags")
                                window.location.reload()
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

const ItemThumb: React.FC<ItemThumbType> = ({itemName, itemAmount, notes, category}) => {
    const navigate = useNavigate();
    return(
    <Paper elevation={4} >
        <List>
            <Stack direction="row" alignItems="right" justifyContent="right">
                <IconButton aria-label="close" color="inherit" size="medium" onClick={(e) => {
                        e.preventDefault();
                        DeleteElement(itemName, navigate, "items")
                        window.location.reload()
                    }}>
                    
                    <DeleteForeverIcon fontSize="inherit" />
                </IconButton>
            </Stack>
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
};

const TripThumb: React.FC<TripThumbType> = ({tripName, date, destination, backpacks, items}) => {
    const navigate = useNavigate();
    return(
    <Paper elevation={4} >
        <List>
            <Stack direction="row" alignItems="right" justifyContent="right">
                <IconButton aria-label="close" color="inherit" size="medium" onClick={(e) => {
                        e.preventDefault();
                        DeleteElement(tripName, navigate, "trips")
                        window.location.reload()
                    }}>
                    
                    <DeleteForeverIcon fontSize="inherit" />
                </IconButton>
            </Stack>
            <ListItem>Trip Name: {tripName}</ListItem>
            <Divider />
            <ListItem>Amount: {date}</ListItem>
            <Divider />
            <ListItem>Category: {destination}</ListItem>
            <Divider />
            <ListItem>Backpacks: {backpacks.map(backpack => (
                <Chip sx={{backgroundColor: "#6ca5eff4"}} label={backpack} />
            ))}</ListItem>
            <Divider />
            <ListItem>Items: {items.map(item => (
                <Chip sx={{backgroundColor: "#6ca5eff4"}} label={item} />
            ))}</ListItem>
        </List>
    </Paper>
    )
};


export {BagThumb, ItemThumb, TripThumb};