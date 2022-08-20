export type Trip = {
    tripId: string,
    destination: string
}

export type Bag = {
    bagId: string,
    bagSize: number,
    bagName: string
}

export type Item = {
    itemId: string,
    itemName: string
}

export type User = {
    _id: string,
    userId: string,
    name: string,
    email: string
}