import { createContext } from "react";
import { UserContextType } from "../@types/context";

const Context = createContext<UserContextType | undefined>(undefined);

export default Context;