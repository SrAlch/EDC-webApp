import React from 'react';
import { useState } from 'react';
import { Button, Backdrop } from '@mui/material';

// Hooks module
import { useBagsFetch } from '../hooks/useBagsGet';

//Components module
import Grid from './Grid';
import BagThumb from './Thumb';
import NewElementForm from './NewElementForm';

const Bags: React.FC = () => {
    const { bags, setBags} = useBagsFetch();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
      };
    const handleToggle = () => {
        setOpen(!open);
      };
    return (
        <Grid header='User Bags'>
            <Button variant='contained' onClick={handleToggle}>Add Bag</Button>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <NewElementForm status={open} onChangedStatus={(newStatus: boolean) => {setOpen(newStatus)}}/>
            </Backdrop>
            {bags.map(bag => (
                <BagThumb
                    key={bag._id}
                    clickable
                    bagName={bag.bagName}
                    capacity={bag.capacity}
                    style={bag.style}
                    notes={bag.notes}/>
            ))}
        </Grid>
    );
};

export default Bags