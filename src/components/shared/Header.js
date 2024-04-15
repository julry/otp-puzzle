import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { useSizeRatio } from "../../contexts/SizeRatioContext";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 ${({$ratio}) => $ratio * 20}px;
`;

const Logo = styled.img`
    height: ${({$ratio}) => $ratio * 23}px;
    width: ${({$ratio}) => $ratio * 123}px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const ProgressWraper = styled.div`
    position: relative;
    height: ${({$ratio}) => $ratio * 12}px;
    width: ${({$ratio}) => $ratio * 112}px;
    border-radius: 20px;
    background: white;
`;

const Progress = styled(ProgressWraper)`
    position: absolute;
    top: 0;
    left: 0;
    height: ${({$ratio}) => $ratio * 12}px;
    width: ${({$ratio, width}) => $ratio * width}px;
    background: #9E6FC3;
`;

const ProgressText = styled.p`
    font-size: ${({$ratio}) => $ratio * 12}px;
    margin-top: ${({$ratio}) => $ratio * 12}px;
`;

const GrayText = styled.span`
    color: #CBCBCB;
`;

export const Header = ({level, ...props}) => {
    const ratio = useSizeRatio();

    const getLevelWidth = () => {
        switch (level) {
            case 1:
                return 29;
            case 2:
                return 68;
            case 3:
                return 100;
            default:
                return undefined;
        }
    }
    return (
        <Wrapper {...props} $ratio={ratio}>
            <Logo $ratio={ratio} src={logo}/>
            <Info>
                <ProgressWraper $ratio={ratio}>
                    <Progress $ratio={ratio} width={getLevelWidth() ?? 1} />
                </ProgressWraper>
                <ProgressText $ratio={ratio}>
                    <GrayText>УРОВЕНЬ</GrayText> {level}/3 
                </ProgressText>
            </Info>
        </Wrapper>
    )
}