export interface IUser {
    token: string;
    email: string
};

export type UserContextType = {
    state: IUser;
    setState: (newSession: IUser) => void;
};