import React from "react";
import { useLocation } from "react-router-dom";

// Styles Module
import { Wrapper } from "./Thumb.styles";

//Types Module
import { ItemThumbType, BagThumbType, TripThumbType } from "../../@types/componentsTypes";

const currentPath = window.location.pathname.replace('/', '');


const BagThumb: React.FC<BagThumbType> = ({bagName, capacity, notes, style, clickable}) => (
    <div>
        {clickable ? (
            <Wrapper>
                <div>Clicked</div>
                <div>{bagName}</div>
                <div>{capacity}</div>
                <div>{style}</div>
                <div>{notes}</div>
            </Wrapper>
        ):(
            <Wrapper>
                <div>No Clicked</div>
                <div>{bagName}</div>
                <div>{capacity}</div>
                <div>{style}</div>
                <div>{notes}</div>
            </Wrapper>
        )}
    </div>
);

export default BagThumb;