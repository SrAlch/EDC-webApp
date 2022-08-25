import React from 'react';
import { Button } from '@mui/material';

// Hooks module
import { useBagsFetch } from '../hooks/useBagsGet';

//Components module
import Grid from './Grid';
import BagThumb from './Thumb';

const Bags: React.FC = () => {
    const {
        bags,
        setBags
    } = useBagsFetch();
    return (
        <Grid header='User Bags'>
            <Button variant='contained'>Hello World</Button>
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