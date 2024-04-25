import styled from "styled-components";
import photo from "../../assets/images/photoStart.svg";
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

export const Game3 = () => {
    const ratio = useSizeRatio();

    return (
        <GameWrapper
            level={3} 
        >
            <PictureWrapper $ratio={ratio}>
                <Picture src={photo} alt={""} $ratio={ratio}/>
                <PuzzleField cells={cells} top={37} width={325} left={10} border={15} height={247} columns={8} rows={6}/>
            </PictureWrapper>
        </GameWrapper>
    )
}