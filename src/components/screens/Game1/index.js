import styled from "styled-components";
import caseStart from "../../../assets/images/caseStart.png";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { GameWrapper } from "../../shared/GameWrapper";
import { PuzzleField } from "../../shared/PuzzleField";

const PictureWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({$ratio}) => $ratio * 375}px;
    height: ${({$ratio}) => $ratio * 303}px;
    margin: 0 auto;
`;

const Picture = styled.img`
    position: relative;
    z-index: 2;
    width: ${({$ratio}) => $ratio * 375}px;
    height: ${({$ratio}) => $ratio * 303}px;
    object-fit: contain;
`;

const cells = Array.from({length: 40});

export const Game1 = () => {
    const ratio = useSizeRatio();

    return (
        <GameWrapper
            level={1} 
            // isFirstRules
        >
            <PictureWrapper $ratio={ratio}>
                <Picture src={caseStart} alt={""} $ratio={ratio}/>
                <PuzzleField cells={cells} top={74} width={325} left={25} border={18} height={204} rows={5} columns={8}/>
            </PictureWrapper>
        </GameWrapper>
    )
}