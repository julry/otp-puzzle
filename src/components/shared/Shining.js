import styled from "styled-components";

export const Shining = styled.div`
    position: absolute;
    z-index: 1;
    width: min(2vw, 10px);
    height: min(2vw, 10px);
    border-radius: 50%;
    background: rgba(173,121,214, 0.5);
    box-shadow: 0 0 100px min(40vw, 150px) rgba(173,121,214, 0.5);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;