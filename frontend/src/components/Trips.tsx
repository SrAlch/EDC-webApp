import { Backdrop, Button } from "@mui/material";
import React, { useState } from "react";
import { Trip } from "../@types/fetchingTypes";
import { useTripsGet } from "../hooks/useTripsGet";
import Grid from "./Grid";
import NewTripForm from "./NewTripForm";
import { TripThumb } from "./Thumb";

const Trips: React.FC = () => {
    const {trips, setTrips} = useTripsGet();
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    return(
        <Grid header='User Trips'>
            <Button variant='contained' onClick={handleToggle}>Add Trip</Button>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <NewTripForm
                    status={open}
                    onChangedStatus={(newStatus: boolean) => { setOpen(newStatus) }}
                    tripList={trips}
                    updatedTripList={(newTrip: Trip[]) => { setTrips(newTrip) }} />
            </Backdrop>
            {trips.map(trip => (
                <TripThumb
                    key={trip._id}
                    tripName={trip.tripName}
                    date={trip.date}
                    destination={trip.destination}
                    backpacks={trip.backpacks.map(({bagName}) => bagName)}
                    items={trip.items.map(({itemName}) => itemName)}
                    tripList={trips}
                    updatedTripList={(newTrip: Trip[]) => { setTrips(newTrip) }} />
            ))}
        </Grid>
    );
};

export default Trips