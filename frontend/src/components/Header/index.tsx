import { Button } from "@mui/material";
import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";

import { Wrapper, Content } from "./Header.styles";

const Header: React.FC = () => {
    const email = localStorage.getItem("email")
    const navigate = useNavigate();
    return (
        <Wrapper>
                {(email !== null) ? (
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
                        <Button variant='contained' onClick={(e) => {
                            e.preventDefault()
                            localStorage.removeItem("email")
                            localStorage.removeItem("access_token")
                            localStorage.removeItem("ownerId")
                            navigate('/')
                        }}>
                            Logout
                        </Button>
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