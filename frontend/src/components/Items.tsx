import React from 'react';
import { useState } from 'react';
import { Button, Backdrop } from '@mui/material';

// Hooks module
import { useItemsFetch } from '../hooks/useItemsGet';

// Components module
import Grid from './Grid';
import {ItemThumb} from './Thumb';
import NewItemForm from './NewItemForm';

// Types module 
import { Item } from '../@types/fetchingTypes';

const Items: React.FC = () => {
    const { items, setItems } = useItemsFetch();
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <Grid header='User Items'>
            <Button variant='contained' onClick={handleToggle}>Add Item</Button>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <NewItemForm
                    status={open}
                    onChangedStatus={(newStatus: boolean) => { setOpen(newStatus) }}
                    itemList={items}
                    updatedItemList={(newBag: Item[]) => { setItems(newBag) }} />
            </Backdrop>
            {items.map(item => (
                <ItemThumb
                    key={item._id}
                    itemName={item.itemName}
                    itemAmount={item.itemAmount}
                    category={item.category}
                    notes={item.notes}/>
            ))}
        </Grid>
    );
};

export default Items