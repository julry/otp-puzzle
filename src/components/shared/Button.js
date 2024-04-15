import styled from 'styled-components';
import { useSizeRatio } from '../../contexts/SizeRatioContext';

const TYPE_TO_BG = {
    main: `
        background: rgb(193,255,5);
        background: linear-gradient(90deg, rgba(193,255,5,1) 0%, rgba(183,229,46,1) 100%);
    `,
    secondary: `
        background: rgb(200,225,252);
        background: linear-gradient(90deg, rgba(200,225,252,1) 0%, rgba(214,233,255,1) 100%);;
    `,
}

const TYPE_TO_SHADOW = {
    main: 'inset 0 0 0 0.5px #C1FF05',
    secondary: 'inset 0 0 0 0.5px #C8E1FC',
}

const TYPE_TO_BORDER = {
    main: '#A9DA15',
    secondary: '#BADBFF',
}

const Wrapper = styled.button`
    outline: none;
    ${({$type}) => TYPE_TO_BG[$type]};
    padding: ${({$ratio}) => $ratio * 11}px 0 ${({$ratio}) => $ratio * 14}px;
    border-radius: ${({$ratio}) => $ratio * 12}px;
    box-shadow: ${({$type}) => TYPE_TO_SHADOW[$type]};
    font-weight: 700;
    color: #342D39;
    border: ${({$ratio}) => $ratio * 5}px solid ${({$type}) => TYPE_TO_BORDER[$type]};
    width: 100%;
    font-size: ${({$ratio}) => $ratio * 16}px;
    cursor: pointer;
`;

export const Button = ({type = "main", ...props}) => {
    const ratio = useSizeRatio();

    return <Wrapper {...props} $ratio={ratio} $type={type} />
}
