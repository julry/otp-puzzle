import { useDrop } from "react-dnd";
import styled from "styled-components";

const Wrapper = styled.div`
    border: 6px solid #3E3644;
    box-shadow: inset 0 0 0 1px #4A4250;
    background: #453D4A;
    height: 100%;
    width: 100%;
    border-radius: ${({$ratio}) => $ratio * 32}px ${({$ratio}) => $ratio * 32}px 0 0;
    margin-bottom: -2px;
    max-height: ${({$ratio}) => $ratio * 350}px;
    align-self: flex-end;
`;

export const PiecesWrapper = ({ onDrop, children, ratio }) => {
    const [, drop] = useDrop(() => (
        {
            accept: 'PUZZLE',
            collect: monitor => ({
                hovered: monitor.canDrop() && monitor.isOver(),
            }),
            drop: (item) => onDrop?.(item),
        }
    ), []);

    return (
        <Wrapper ref={drop} $ratio={ratio}>
            {children}
        </Wrapper>
    )
}