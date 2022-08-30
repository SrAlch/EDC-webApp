import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContextType } from "../../@types/context";
import Context from "../../context/context";

import { Wrapper, Content } from "./Header.styles";

const Header: React.FC = () => {
    const { state } = useContext(Context) as UserContextType;
    console.log(state)
    return (
        <Wrapper>
                {state && (state.email !== '') ? (
                    <Content>
                        <Link to='/'>
                            <span>Home</span>
                        </Link>
                        <Link to='/profile'>
                        <span>Profile</span>
                        </Link>
                        <Link to='/trips'>
                        <span>Trips</span>
                        </Link>
                        <Link to='/bags'>
                        <span>Bags</span>
                        </Link>
                        <Link to='/items'>
                        <span>Items</span>
                        </Link>
                    </Content>
                ):(
                    <Content>
                        <Link to='/'>
                            <span>Home</span>
                        </Link>
                        <Link to='/login'>
                            <span>Login</span>
                        </Link>
                        <Link to='/register'>
                            <span>Register</span>
                        </Link>
                    </Content>
                )}
        </Wrapper>
    );
};

export default Header;