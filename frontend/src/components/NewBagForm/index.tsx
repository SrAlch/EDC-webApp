import React, { useState } from "react";

import { Paper, Button, TextField, Box, TextareaAutosize, Stack } from "@mui/material";

import { Bag } from "../../@types/fetchingTypes";
import { useNavigate } from "react-router-dom";
import { RefreshSession } from "../../helpers";

type NewFormTypes = {
    status: boolean,
    onChangedStatus: any,
    bagList: Bag[],
    updatedBagList: any
}

const NewBagForm: React.FC<NewFormTypes> = (props) => {
    const [bagName, setBagName] = useState('' as Bag["bagName"])
    const [capacity, setCapacity] = useState(0 as Bag["capacity"])
    const [style, setStyle] = useState('' as Bag["style"])
    const [notes, setNotes] = useState('' as Bag["notes"])
    const ownerId: string = (localStorage.getItem("ownerId") || '')
    const navigate = useNavigate();


    return (
    <Paper>
        <Stack>
            <h2>New Bag</h2>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}>
                <TextField required 
                        id="bag-name-input" 
                        label="Required" 
                        variant="outlined" 
                        defaultValue="Bag Name" 
                        onChange={(e) => setBagName(e.currentTarget.value)} 
                />
                <TextField required 
                        id="bag-cap-input"
                        label="Required"
                        variant="outlined"
                        defaultValue="Bag Capacity"
                        onChange={(e) => setCapacity(parseInt(e.currentTarget.value, 10))}
                />
                <TextField id="bag-style-input" 
                        label="Style"
                        variant="outlined"
                        onChange={(e) => setStyle(e.currentTarget.value)}
                />
            </Box>
            <Box sx={{ display: 'flex', alignContent: "center", justifyContent: "center", padding: "10px"}}>
                <TextField
                    fullWidth
                    multiline
                    label="Notes"
                    InputProps={{
                        inputComponent: TextareaAutosize
                    }}
                    onChange={(e) => setNotes(e.currentTarget.value)}
                />
            </Box>
            <Box sx={{ display: 'flex', alignContent: "center", justifyContent: "space-between", margin: 2 }}>
                <Button variant='contained' onClick={(e) => props.onChangedStatus(!props.status)}>Close</Button>
                <Button variant='contained' onClick={(e) => {
                    e.preventDefault();
                    const _id = `${ownerId}-${bagName}`
                    const data: Bag = { _id, ownerId, bagName, capacity, style, notes }
                    
                    fetch('http://localhost:5000/bags', {
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
                    props.bagList.push(data)
                    props.updatedBagList(props.bagList)
                    props.onChangedStatus(false)
                }}>Submit</Button>
            </Box>
        </Stack>

    </Paper>)
};

export default NewBagForm;