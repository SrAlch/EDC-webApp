import React from "react";
import { useLocation } from "react-router-dom";

// Styles Module
import {Divider, List, ListItem, Paper} from "@mui/material";

//Types Module
import { ItemThumbType, BagThumbType, TripThumbType } from "../../@types/componentsTypes";


const BagThumb: React.FC<BagThumbType> = ({bagName, capacity, notes, style}) => (
    <Paper elevation={4} >
        <List>
            <ListItem>Bag Name: {bagName}</ListItem>
            <Divider />
            <ListItem>Capacity: {capacity}</ListItem>
            <Divider />
            <ListItem>Bag Style: {style}</ListItem>
            <Divider />
            <ListItem>Notes: {notes}</ListItem>
        </List>
    </Paper>
);

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

export {BagThumb, ItemThumb};