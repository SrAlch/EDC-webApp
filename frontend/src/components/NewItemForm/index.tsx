import React, { useState } from "react";

import { Paper, Button, TextField, Box, TextareaAutosize } from "@mui/material";

import { Item } from "../../@types/fetchingTypes";
import { useNavigate } from "react-router-dom";
import { RefreshSession } from "../../helpers";

type NewFormTypes = {
    status: boolean,
    onChangedStatus: any,
    itemList: Item[],
    updatedItemList: any
}

const NewItemForm: React.FC<NewFormTypes> = (props) => {
    const [itemName, setItemName] = useState('')
    const [itemAmount, setItemAmount] = useState(0)
    const [notes, setNotes] = useState('')
    const [category, setCategory] = useState('')
    const ownerId: string = (localStorage.getItem("ownerId") || '')
    const navigate = useNavigate();
    
 
    return (<Paper>
        <h2>New Item</h2>
        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}>
            <TextField required id="outlined-basic" label="Item Name" variant="outlined" onChange={(e) => setItemName(e.currentTarget.value)} />
            <TextField required id="outlined-basic" label="Amount" variant="outlined" onChange={(e) => setItemAmount(parseInt(e.currentTarget.value, 10))} />
            <TextField id="outlined-basic" label="Category" variant="outlined" onChange={(e) => setCategory(e.currentTarget.value)} />
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
                const _id = `${ownerId}-${itemName}`
                const data: Item = { _id, ownerId, itemName, itemAmount, notes, category }
                
                fetch('http://localhost:5000/items', {
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
                props.itemList.push(data)
                props.updatedItemList(props.itemList)
                props.onChangedStatus(false)
            }}>Submit</Button>
        </Box>

    </Paper>)
};

export default NewItemForm;