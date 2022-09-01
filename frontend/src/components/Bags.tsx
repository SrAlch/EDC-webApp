import React from 'react';
import { useState } from 'react';
import { Button, Backdrop } from '@mui/material';

// Hooks module
import { useBagsFetch } from '../hooks/useBagsGet';

// Components module
import Grid from './Grid';
import {BagThumb} from './Thumb';
import NewBagForm from './NewBagForm';

// Types module 
import { Bag } from '../@types/fetchingTypes';

const Bags: React.FC = () => {
    const { bags, setBags } = useBagsFetch();
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

 // TODO: https://stackoverflow.com/questions/59511201/too-many-re-renders-react-limits-the-number-of-renders-to-prevent-an-infinite-l
    return (
        <Grid header='User Bags'>
            <Button variant='contained' onClick={() => handleToggle()}>Add Bag</Button>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <NewBagForm
                    status={open}
                    onChangedStatus={(newStatus: boolean) => { setOpen(newStatus) }}
                    bagList={bags}
                    updatedBagList={(newBag: Bag[]) => { setBags(newBag) }} />
            </Backdrop>
            {bags.map(bag => (
                <BagThumb
                    key={bag._id}
                    bagName={bag.bagName}
                    capacity={bag.capacity}
                    style={bag.style}
                    notes={bag.notes}
                    bagList={bags}
                    updatedBagList={(newBag: Bag[]) => { setBags(newBag) }} />
            ))}
        </Grid>
    );
};

export default Bags