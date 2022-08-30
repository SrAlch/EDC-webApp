import React, { useState } from "react";

import { Paper, Button, TextField, Box, TextareaAutosize } from "@mui/material";

import { Bag } from "../../@types/fetchingTypes";
import { useBagsFetch } from "../../hooks/useBagsGet";

//const currentPath = window.location.pathname.replace('/', '');

type NewFormTypes = {
    status: boolean,
    onChangedStatus: any
}

const NewElementForm: React.FC<NewFormTypes> = (props) => {
    const [bagName, setBagName] = useState('' as Bag["bagName"])
    const [capacity, setCapacity] = useState(0 as Bag["capacity"])
    const [style, setStyle] = useState('' as Bag["style"])
    const [notes, setNotes] = useState('' as Bag["notes"])
    const { bags, setBags } = useBagsFetch();
    const ownerId: string = (localStorage.getItem("ownerId") || '')
    
 
    return (<Paper>
        <h2>New Bag</h2>
        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}>
            <TextField required id="outlined-basic" label="Required" variant="outlined" defaultValue="Bag Name" onChange={(e) => setBagName(e.currentTarget.value)} />
            <TextField required id="outlined-basic" label="Required" variant="outlined" defaultValue="Bag Capacity" onChange={(e) => setCapacity(parseInt(e.currentTarget.value, 10))} />
            <TextField id="outlined-basic" label="Style" variant="outlined" onChange={(e) => setStyle(e.currentTarget.value)} />
        </Box>
        <Box sx={{ display: 'flex', alignContent: "center", justifyContent: "center" }}>
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Notes"
                style={{ width: 200 }}
                onChange={(e) => setNotes(e.currentTarget.value)}
            />
        </Box>
        <Box sx={{ display: 'flex', alignContent: "center", justifyContent: "space-between", margin: 2 }}>
            <Button variant='contained' onClick={() => props.onChangedStatus(!props.status)}>Close</Button>
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
                    .then(response => response.json())
                    .catch(error => console.log(error))
                bags.push(data)
                setBags(bags)
                //window.location.reload();
                props.onChangedStatus(false)
            }}>Submit</Button>
        </Box>

    </Paper>)
};

export default NewElementForm;