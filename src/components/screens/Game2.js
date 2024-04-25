import styled from "styled-components";
import plane from "../../assets/images/planeStart.svg";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { GameWrapper } from "../shared/GameWrapper";
import { PuzzleField } from "../shared/PuzzleField";

const PictureWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({$ratio}) => $ratio * 345}px;
    height: ${({$ratio}) => $ratio * 299}px;
    margin: 0 auto;
    overflow: hidden;
`;

const Picture = styled.img`
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const cells = Array.from({length: 56});

export const Game2 = () => {
    const ratio = useSizeRatio();

    return (
        <GameWrapper
            level={2} 
        >
            <PictureWrapper $ratio={ratio}>
                <Picture src={plane} alt={""} $ratio={ratio}/>
                <PuzzleField cells={cells} top={8} width={320} left={7} border={18} height={281} columns={8} rows={7}/>
            </PictureWrapper>
        </GameWrapper>
    )
}