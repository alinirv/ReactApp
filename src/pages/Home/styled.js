import styled from 'styled-components';

export const HomeConteiner = styled.div `
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    height: 50vh;
`;
export const Content = styled.div `
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    paggin: 5px

`;
export const Title = styled.h1`
    text-align: center;
    fonte-size: 2 rem;
    font-family: sans-serif;
    color: #333
`;
export const Input = styled.input `
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    heigth:1.5rem;
    paggin: 0 .5rem;
    font-size: 20 px;
    &:focus,
    &: active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button `
    heigth: 1.5rem;
    font-size: 20 px;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    &:focus,
    &: active {
        outline: none;
        box-shadow: none;
    }
`;
export const ErrorMsg = styled.div `
    display: block;
    font-size: 20 px;
    color: red;
    font-weigth: 600;
    margin-top: 1rem;
    paggin: 15px

`;