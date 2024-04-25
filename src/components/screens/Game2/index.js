import { useRef, useState } from "react";
import styled from "styled-components";
import plane from "../../../assets/images/planeStart.svg";
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { Button } from "../../shared/Button";
import { GameWrapper } from "../../shared/GameWrapper";
import { PuzzleField } from "../../shared/PuzzleField";
import { initalPuzzles } from "./initialPuzzles";
import { PuzzlesWrapper } from "./PuzzlesWrapper";

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

const COLUMNS = 8;
const ROWS = 7;
const cells = Array.from({length: COLUMNS * ROWS});

export const Game2 = () => {
    const [emptyPuzzles, setEmptyPuzzles] = useState(initalPuzzles);
    const { next } = useProgress();
    
    const puzzles = useRef({
        shownPuzzles: [],
        placedCells: [],
    });

    const ratio = useSizeRatio();

    const handleDrop = (puzzle, x, y) => {
        let dropX = x;
        let dropY = y;
        let isEmpty = true;
        const placed = [];

        if (x + puzzle.sizeX > COLUMNS) dropX = COLUMNS - puzzle.sizeX;
        if (y + puzzle.sizeY > ROWS) dropY = ROWS - puzzle.sizeY;
        
        const newPuz = {...puzzle, top: dropY, left: dropX};

        for (let i = dropX; i < dropX + puzzle.sizeX; i++) {
            for (let j = dropY; j < dropY + puzzle.sizeY; j++) {
                if (puzzles.current.placedCells.find(({y, x, id}) => x === i && y === j && id !== puzzle.id)) {
                    isEmpty = false;

                    break;
                }
    
                placed.push({x: i, y: j, id: puzzle.id});
            }
        }

        if (!isEmpty) return;

        const shownIndex = puzzles.current.shownPuzzles.findIndex(({id}) => id === puzzle.id);

        if (shownIndex !== -1) {
            puzzles.current.shownPuzzles[shownIndex] = newPuz;
            puzzles.current.placedCells = puzzles.current.placedCells.filter(({id}) => id !== puzzle.id);
        } else {
            puzzles.current.shownPuzzles.push(newPuz);
        }

        setEmptyPuzzles((prev) => {
            const emptyIndex = prev.findIndex(({id}) => id === puzzle.id);
            
            if (emptyIndex === -1) return prev;

            const newEmpty = [...prev];
            newEmpty[emptyIndex] = {...newEmpty[emptyIndex], src: undefined};
            return newEmpty;
        })

        puzzles.current.placedCells.push(...placed);

       if (puzzles.current.placedCells.length === ROWS * COLUMNS) {
            const correctLength = puzzles.current.shownPuzzles.filter(({top, left, correctX, correctY }) => 
                ((!correctX || correctX.includes(left)) && (!correctY || correctY.includes(top)))
            ).length
            if (correctLength === puzzles.current.shownPuzzles.length) setTimeout(() => next(), 100);
       }
    }

    const handleReturn = (puzzle) => {
        puzzles.current.placedCells = puzzles.current.placedCells.filter(({id}) => id !== puzzle.id);
        puzzles.current.shownPuzzles = puzzles.current.shownPuzzles.filter(({id}) => id !== puzzle.id);

        setEmptyPuzzles((prev) => {
            const emptyIndex = prev.findIndex(({id}) => id === puzzle.id);
            if (emptyIndex === -1) return prev;

            const newEmpty = [...prev];

            newEmpty[emptyIndex] = { ...puzzle };

            return newEmpty;
        })
    }

    const handleRestart = () => {
        puzzles.current = {
            shownPuzzles: [],
            placedCells: [],
        }
    }

    return (
        <GameWrapper
            level={2} 
            onDrop={handleReturn}
            onRestart={handleRestart}
            // piecesComponent={<PuzzlesWrapper puzzles={emptyPuzzles}/>}
            piecesComponent={<Button onClick={next}>Дальше</Button>}
        >
            <PictureWrapper $ratio={ratio}>
                <Picture src={plane} alt={""} $ratio={ratio}/>
                <PuzzleField 
                    cells={cells} 
                    top={8} 
                    width={320} 
                    left={7} 
                    border={18} 
                    height={281} 
                    columns={COLUMNS} 
                    rows={ROWS}
                    onDrop={handleDrop}
                    shownPuzzles={puzzles.current.shownPuzzles}
                />
            </PictureWrapper>
        </GameWrapper>
    )
}