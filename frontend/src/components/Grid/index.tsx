import React from "react";

// Styles Module
import { Wrapper, Content } from "./Grid.styles";

// Types module
import { ElementTitle } from "../../@types/componentsTypes";


const Grid: React.FC<ElementTitle> = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

export default Grid;