import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    padding: 15px 0;
    margin: 0;
    border-top: 20px solid #ff0000;
    background-color: #333;
`;

// export const NavListItem = styled.li`
//     list-style: none;
//     outline: none;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

export const NavLinkItem = styled(NavLink)`
    transition: 0.3s;
    box-sizing: border-box;
    text-decoration: none;
    color: #f5f5f5;
    padding: 20px 40px;
`;

export const NavLinkItemGenres = styled(NavLink)`
    text-decoration: none;
    color: #00ff00;
    padding: 10px;
    font-size: 20px;
`;
