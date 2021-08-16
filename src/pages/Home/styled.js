import styled from 'styled-components';

export const Conteiner = styled.div `
    width: 100vw;
    heigth: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    paggin: 15px

`;

export const Input = styled.input `
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    heigth:1.5rem;
    paggin: 0 .5rem;

    &:focus,
    &: active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button `
    heigth: 1.5rem;
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