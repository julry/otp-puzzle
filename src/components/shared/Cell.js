import styled, { keyframes } from 'styled-components';

const colored = keyframes`
    0% {
        background-color: #F4F4F4;
    }

    100% {
        background-color: #EBF4D1;
    }
`;

export const Cell = styled.div`
    background-color: #F4F4F4;
    border: 1px solid #D9D9D9;
    width: calc(100% / 8);
    border-bottom: none;
    border-left: none;
    transition: background-color .3s;
    animation: ${({$isColored}) => $isColored ? colored : ''} 0.3s both;
`;