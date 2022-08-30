export interface IUser {
    access_token: string;
    email: string
};

export type UserContextType = {
    state: IUser;
    setState: (newSession: IUser) => void;
};