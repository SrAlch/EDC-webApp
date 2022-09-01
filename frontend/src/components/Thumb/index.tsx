import React from "react";

// Styles Module
import { Chip, Divider, IconButton, List, ListItem, Paper, Stack} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

//Types Module
import { ItemThumbType, BagThumbType, TripThumbType } from "../../@types/componentsTypes";
import { useNavigate } from "react-router-dom";
import { DeleteElement } from "../../helpers";


const BagThumb: React.FC<BagThumbType> = (props) => {
    const navigate = useNavigate();
    const handleRemoveItem = (event: any) => {
        const name = event.currentTarget.getAttribute("name")
         props.updatedBagList(props.bagList.filter(bag => bag.bagName !== name));
       };

    
    return(<Paper elevation={4} >
                <List>
                    <Stack direction="row" alignItems="right" justifyContent="right">
                        <IconButton name={props.bagName} aria-label="close" color="inherit" size="medium" onClick={(e) => {
                                handleRemoveItem(e)
                                DeleteElement(props.bagName, navigate, "bags")
                            }}>
                            
                            <DeleteForeverIcon fontSize="inherit" />
                        </IconButton>
                    </Stack>
                    <ListItem>Bag Name: {props.bagName}</ListItem>
                    <Divider />
                    <ListItem>Capacity: {props.capacity}</ListItem>
                    <Divider />
                    <ListItem>Bag Style: {props.notes}</ListItem>
                    <Divider />
                    <ListItem>Notes: {props.style}</ListItem>
                </List>
            </Paper>)
        };

const ItemThumb: React.FC<ItemThumbType> = (props) => {
    const navigate = useNavigate();
    const handleRemoveItem = (event: any) => {
        const name = event.currentTarget.getAttribute("name")
         props.updatedItemList(props.itemList.filter(item => item.itemName !== name));
       };

    return(
    <Paper elevation={4} >
        <List>
            <Stack direction="row" alignItems="right" justifyContent="right">
                <IconButton name={props.itemName} aria-label="close" color="inherit" size="medium" onClick={(e) => {
                        handleRemoveItem(e)
                        DeleteElement(props.itemName, navigate, "items")
                    }}>
                    
                    <DeleteForeverIcon fontSize="inherit" />
                </IconButton>
            </Stack>
            <ListItem>Item Name: {props.itemName}</ListItem>
            <Divider />
            <ListItem>Amount: {props.itemAmount}</ListItem>
            <Divider />
            <ListItem>Category: {props.category}</ListItem>
            <Divider />
            <ListItem>Notes: {props.notes}</ListItem>
        </List>
    </Paper>
    );
};

const TripThumb: React.FC<TripThumbType> = (props) => {
    const navigate = useNavigate();
    const handleRemoveItem = (event: any) => {
        const name = event.currentTarget.getAttribute("name")
         props.updatedTripList(props.tripList.filter(trip => trip.tripName !== name));
       };
    return(
    <Paper elevation={4} >
        <List>
            <Stack direction="row" alignItems="right" justifyContent="right">
                <IconButton aria-label="close" color="inherit" size="medium" onClick={(e) => {
                        handleRemoveItem(e)
                        DeleteElement(props.tripName, navigate, "trips")
                    }}>
                    
                    <DeleteForeverIcon fontSize="inherit" />
                </IconButton>
            </Stack>
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