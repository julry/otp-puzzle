import styled from "styled-components";
import reload from "../../assets/images/reload.svg";
import question from "../../assets/images/question.svg";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../contexts/SizeRatioContext"
import { Header } from "./Header";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: ${({$ratio}) => $ratio * 40}px auto ${({$ratio}) => $ratio * 290}px;
    padding: ${({$ratio}) => $ratio * 28}px 0 0;
`;

const PiecesWrapper = styled.div`
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

const ButtonsWrapper = styled.div`
    position: absolute;
    bottom: 0;
    background-color: white;
    border-radius: ${({$ratio}) => $ratio * 16}px ${({$ratio}) => $ratio * 16}px 0 0;
    left: 50%;
    transform: translateX(-50%);
    height: ${({$ratio}) => $ratio * 39}px;
    width: ${({$ratio}) => $ratio * 204}px;
`;

const ActionButtonsWrapper = styled.div`
    position: absolute;
    top: ${({$ratio}) => $ratio * -12}px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
`;

const ActionButton = styled.button`
    outline: none;
    cursor: pointer;
    background: #C8E1FC;
    border-radius: 50%;
    border: 3px solid #BADBFF;
    height: ${({$ratio}) => $ratio * 37}px;
    width: ${({$ratio}) => $ratio * 37}px;
    min-width: 20px;
    min-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    & + & {
        margin-left: ${({$ratio}) => $ratio * 33}px;
    }
`;

const BtnImg = styled.img`
    height: ${({$ratio}) => $ratio * 21}px;
    width:  ${({$ratio}) => $ratio * 21}px;
    object-fit: contain;
`;

export const GameWrapper = ({level, children, piecesComponent}) => {
    const {next} = useProgress();
    const ratio = useSizeRatio();

    return (
        <Wrapper $ratio={ratio}>
            <Header level={level} />
            {children}
            <PiecesWrapper $ratio={ratio}> 
                {piecesComponent}
            </PiecesWrapper>
            <ButtonsWrapper $ratio={ratio}>
                <ActionButtonsWrapper $ratio={ratio}>
                    <ActionButton $ratio={ratio}>
                        <BtnImg src={reload} alt="" $ratio={ratio}/>
                    </ActionButton>
                    <ActionButton $ratio={ratio}>
                        <BtnImg src={question} alt="" $ratio={ratio}/>
                    </ActionButton>
                </ActionButtonsWrapper>
            </ButtonsWrapper>
        </Wrapper>
    )
}