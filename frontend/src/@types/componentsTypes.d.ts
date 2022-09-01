import React from "react"
import internal from "stream";
import { Trip, Bag } from "./fetchingTypes";

export type ElementTitle = {
    header: string,
    children: React.ReactNode;
}

export type ItemThumbType = {
    itemName: string,
    itemAmount: number,
    notes: string,
    category: string,
}

export type BagThumbType = {
    bagName: string,
    capacity: number,
    style: string,
    notes: string,
    bagList: Bag[],
    updatedBagList: any
}

export type TripThumbType = {
    tripName: string,
    date: string,
    destination: string,
    backpacks: string[],
    items: string[],
    tripList: Trip,
    updatedTripList: any
}