import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content } from "./Header.styles";

const Header: React.FC = () => {
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <span>Home</span>
                </Link>
            </Content>
        </Wrapper>
    );
};

export default Header;