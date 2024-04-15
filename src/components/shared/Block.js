import styled from 'styled-components';
import { useSizeRatio } from '../../contexts/SizeRatioContext';

const Wrapper = styled.div`
    background: #4D4254;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({$ratio}) => $ratio * 23}px;
    border-radius: ${({$ratio}) => $ratio * 16}px;
    width: 100%;
    text-align: center;
    white-space: pre-line;
`;

export const Block = (props) => {
    const ratio = useSizeRatio();

    return <Wrapper {...props} $ratio={ratio} />
}
