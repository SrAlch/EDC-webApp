import React from "react";

import { Paper, Button, TextField, Box, TextareaAutosize } from "@mui/material";

import { useBagsPost } from "../../hooks/useBagsPost";

const currentPath = window.location.pathname.replace('/', '');

type NewFormTypes = {
    status: boolean,
    onChangedStatus: any
}

const NewElementForm: React.FC<NewFormTypes> = (props) => {
    //const {setBagName, setCapacity, setStyle, setNotes} = useBagsPost()
    return  (<Paper>
                <h2>New Bag</h2>
                <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}>
                    <TextField required id="outlined-basic" label="Required" variant="outlined" defaultValue="Bag Name" onChange={(e)=>setBagName(e.currentTarget.value)}/>
                    <TextField required id="outlined-basic" label="Required" variant="outlined" defaultValue="Bag Capacity" onChange={(e)=>setCapacity(parseInt(e.currentTarget.value, 10))}/>
                    <TextField id="outlined-basic" label="Style" variant="outlined" onChange={(e)=>setStyle(e.currentTarget.value)}/>
                </Box>
                <Box sx={{display: 'flex', alignContent:"center", justifyContent: "center"}}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Notes"
                        style={{ width: 200 }}
                        onChange={(e)=>setNotes(e.currentTarget.value)}
                    />
                </Box>
                <Box sx={{display: 'flex', alignContent:"center", justifyContent: "space-between", margin:2}}>
                <Button variant='contained' onClick={()=>props.onChangedStatus(!props.status)}>Close</Button>
                <Button variant='contained' onClick={(e)=>{
                    e.preventDefault();
                }}>Submit</Button>
                </Box>
            
         </Paper>)
};

export default NewElementForm;