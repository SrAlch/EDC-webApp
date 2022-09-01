import React, { useState } from "react";

import { Paper, Button, TextField, Box, Autocomplete, Stack } from "@mui/material";

import { Trip } from "../../@types/fetchingTypes";
import { useBagsFetch } from "../../hooks/useBagsGet";
import { useItemsFetch } from "../../hooks/useItemsGet";
import { useNavigate } from "react-router-dom";
import { RefreshSession } from "../../helpers";


type NewFormTypes = {
    status: boolean,
    onChangedStatus: any,
    tripList: Trip[],
    updatedTripList: any
}

const NewBagForm: React.FC<NewFormTypes> = (props) => {
    const [tripName, setTripName] = useState('' as Trip["tripName"])
    const [date, setDate] = useState('' as Trip["date"])
    const [destination, setDestination] = useState('' as Trip["destination"])
    const [backpacks, setBackpacks] = useState([] as Trip["backpacks"])
    const [tripItems, setTripItems] = useState([] as Trip["items"])
    const ownerId: string = (localStorage.getItem("ownerId") || '')
    const {bags, setBags} = useBagsFetch()
    const {items, setItems} = useItemsFetch()
    const navigate = useNavigate();

    return (<Paper>
        <h2>New Trip</h2>
        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}>
            <Stack direction="row">
                <TextField required id="outlined-basic" label="Trip Name" variant="outlined" onChange={(e) => setTripName(e.currentTarget.value)} />
                <TextField required id="outlined-basic" label="DD/MM/YYYY" variant="outlined" onChange={(e) => setDate(e.currentTarget.value)}/>
                <TextField required id="outlined-basic" label="Destination" variant="outlined" onChange={(e) => setDestination(e.currentTarget.value)} />
            </Stack>
            <Stack direction="row">
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    onChange={(e, newBag) => {
                        setBackpacks(newBag)
                    }}
                    options={bags}
                    getOptionLabel={(option) => option.bagName}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Your Backpacks"
                            placeholder="Backpacks"
                        />
                    )}
                />
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    onChange={(e, newItem) => {
                        setTripItems(newItem)
                    }}
                    options={items}
                    getOptionLabel={(option) => option.itemName}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Your Items"
                            placeholder="Items"
                        />
                    )}
                />
            </Stack>
            
        </Box>
        <Box sx={{ display: 'flex', alignContent: "center", justifyContent: "space-between", margin: 2 }}>
            <Button variant='contained' onClick={() => props.onChangedStatus(!props.status)}>Close</Button>
            <Button variant='contained' onClick={(e) => {
                e.preventDefault();
                const _id = `${ownerId}-${tripName}`
                const data: Trip = { _id, ownerId, tripName, date, destination, backpacks, items:tripItems }
                
                fetch('http://localhost:5000/trips', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
                    },
                    body: JSON.stringify(data)
                })
                .then(response => {
                    return RefreshSession(response, navigate)
                })
                    .catch(error => console.log(error))
                props.tripList.push(data)
                props.updatedTripList(props.tripList)
                props.onChangedStatus(false)
            }}>Submit</Button>
        </Box>

    </Paper>)
};

export default NewBagForm;