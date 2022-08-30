export type Trip = {
    _id: string
    ownerId: string,
    tripName: string,
    date: Date,
    destination: string,
    backpacks: string[],
    items: string[]
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
    _id: string,
    userId: string,
    name: string,
    email: string
}

export type UserData = {
    email: any ,
    password: any
}