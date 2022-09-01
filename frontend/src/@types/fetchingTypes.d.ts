export type Trip = {
    _id: string
    ownerId: string,
    tripName: string,
    date: string,
    destination: string,
    backpacks: Bag[],
    items: Item[]
}

export type Bag = {
    _id: string
    ownerId: string,
    bagName: string,
    capacity: number,
    style: string,
    notes: string
}

export type Item = {
    _id: string,
    ownerId: string,
    itemName: string,
    itemAmount: number,
    notes: string,
    category: string
}

export type User = {
    userName: string,
    email: string,
    password: string,
    phone: string,
    homeCountry: string
}

export type UserGet = {
    _id: string,
    userName: string,
    email: string,
    phone: string,
    homeCountry: string
}

export type UserData = {
    email: any ,
    password: any
}