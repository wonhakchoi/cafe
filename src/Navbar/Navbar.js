import React from 'react';
import styled from 'styled-components';
import { coffeeBrown } from '../Styles/colors';
import { Title } from '../Styles/title';

const NavbarStyled = styled.div`
    background-color: ${coffeeBrown};
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 999;
`

const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 1px #a85c32;
`

export function Navbar(){
    return <NavbarStyled>
        <Logo>
            Catfe <span role="img" aria-label="cat">  </span>
        </Logo>
    </NavbarStyled>
}
