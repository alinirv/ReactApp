import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div `
    width: 100%;
    max-width: 991px;
    margin: 0 auto; 
`;

export const Title = styled.h1`
    text-align: center;
    fonte-size: 2 rem;
    font-family: sans-serif;
    color: #333
`;
export const List = styled.ul `
    list-style: none;
    pagging: 10px;
    font-family: sans-serif;

`;
export const ListsItem = styled.li `
    margin: 10px ;
    pagging: 30px;
    background: #000;
    color: #fff;
    border-radius: 5px;
`;
export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background: #000;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
`