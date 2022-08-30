import { useState } from "react";
import { IUser } from "../@types/context";
import Context from "./context";


type ProviderChildren = {
    children: React.ReactNode;
}

const UserProvider: React.FC<ProviderChildren> = ({ children }) => {
    const [state, setState] = useState<IUser>({
        access_token:"",
        email:""
    });

    return (
        <Context.Provider value={state?{state, setState}:undefined}>{children}</Context.Provider>
    )
};

export default UserProvider;