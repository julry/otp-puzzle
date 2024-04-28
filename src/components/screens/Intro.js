import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import start from "../../assets/images/startPic.png";
import globe from "../../assets/images/globe.png";
import glasses from "../../assets/images/glasses.png";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Block } from "../shared/Block";
import { Button } from "../shared/Button";
import { Shining } from "../shared/Shining";

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    padding-bottom: ${({$ratio}) => $ratio * 28}px;
    padding-top: ${({$ratio}) => $ratio * 31}px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Content = styled.div`
    position: relative;
    z-index: 3;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-top: ${({$ratio}) => $ratio * -20}px;
    padding: 0 ${({$ratio}) => $ratio * 20}px;
    width: 100%;
    
    @media screen and (max-height: 700px) {
        margin-top: ${({$ratio}) => $ratio * -45}px;
    }
`;

const PictureWrapper = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
    height: auto;
    overflow: visible;
`;

const Picture = styled.img`
    position: relative;
    z-index: 2;
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const BlockStyled = styled(Block)`
    position: relative;
    z-index: 2;
    margin-bottom: ${({$ratio}) => $ratio * 12}px;
    padding-top: ${({$ratio}) => $ratio * 34}px;
    padding-bottom: ${({$ratio}) => $ratio * 34}px;

    & p {
        max-width: ${({$ratio}) => $ratio * 282}px;
    }

    @media screen and (max-height: 750px) {
        padding-bottom: ${({$ratio}) => $ratio * 20}px;
    }
`;

const Logo = styled.img`
    width: ${({$ratio}) => $ratio * 151}px;
    height: ${({$ratio}) => $ratio * 29}px;
    object-fit: contain;
    position: relative;
    z-index: 3;
`;

const Globe = styled.img`
    position: absolute;
    right: ${({$ratio}) => $ratio * -11}px;
    top: ${({$ratio}) => $ratio * -159}px;
    width: ${({$ratio}) => $ratio * 149}px;
    height: ${({$ratio}) => $ratio * 191}px;
    object-fit: contain;
    z-index: 3;
`;

const Glasses = styled.img`
    position: absolute;
    left: ${({$ratio}) => $ratio * -5}px;
    top: ${({$ratio}) => $ratio * -80}px;
    width: ${({$ratio}) => $ratio * 200}px;
    height: ${({$ratio}) => $ratio * 120}px;
    object-fit: contain;
    z-index: 3;
`;

const ButtonStyled = styled(Button)`
    margin-top: auto;
`;

export const Intro = () => {
    const ratio = useSizeRatio();
    const {next} = useProgress();

    const handleNext = () => {
        next();
    }

    return (
        <Wrapper $ratio={ratio}>
            <Logo src={logo} alt="" $ratio={ratio}/>
            <PictureWrapper>
                <Shining />
                <Picture $ratio={ratio} src={start}/>
            </PictureWrapper>
            <Content $ratio={ratio}>
                <Globe src={globe} alt="" $ratio={ratio}/>
                <Glasses src={glasses} alt="" $ratio={ratio}/>
                <BlockStyled  $ratio={ratio}>
                    <p>
                        Твоё <b>карьерное путешествие</b>{'\n'}начинается прямо сейчас!{'\n\n'}
                        Собирай всё самое необходимое и <b>получай призы </b>от ОТП Банка.
                    </p>
                </BlockStyled>
                <ButtonStyled onClick={handleNext}>Играть</ButtonStyled>
            </Content>
        </Wrapper>
    )
}