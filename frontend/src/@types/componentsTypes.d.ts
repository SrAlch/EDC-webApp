import React from "react"
import internal from "stream";

export type ElementTitle = {
    header: string,
    children: React.ReactNode;
}

export type ItemThumbType = {
    itemName: string,
    itemAmount: number,
    notes: string,
    category: string,
    clickable: boolean
}

export type BagThumbType = {
    bagName: string,
    capacity: number,
    style: string,
    notes: string,
    clickable: boolean
}

export type TripThumbType = {
    tripName: string,
    date: Date,
    destination: string,
    backpacks: string[],
    items: string[],
    clickable: boolean
}