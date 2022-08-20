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

export type Profile = {
    name: string,
    email: string
}

export type FullUser = {
    _id: string,
    userId: string,
    profile: Profile,
    userBags: Bag[],
    userItems: Item[],
    userTrips: Trip[]
}