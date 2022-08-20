import {useState, useEffect} from "react";

// Session state
import { isPersistedState } from "../helpers";

// Types

import { FullUser } from "../@types/fetchingTypes";

export const userDataFetch = (_id: string) => {
    const [user, setUser] = useState<FullUser>({} as FullUser)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            setLoading(true);
            setError(false);

            const user = ""
            const profile = {"name":"", "email":""}
            const items = [{"itemId":"", "itemName":}]
            const bags = ""
            const trips = ""

            setUser({
                _id: _id,
                userId: user,
                profile: profile,
                userItems: items,
                userBags: bags,
                userTrips: trips
            });

        } catch (error) {
            setError(true)
        }
    }, [_id]);
};