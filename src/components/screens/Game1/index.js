import { useRef, useState } from "react";
import styled from "styled-components";
import caseStart from "../../../assets/images/caseStart.png";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { useProgress } from "../../../contexts/ProgressContext";
import { GameWrapper } from "../../shared/GameWrapper";
import { PuzzleField } from "../../shared/PuzzleField";
import { initalPuzzles } from "./initialPuzzles";
import { PuzzlesWrapper } from "./PuzzlesWrapper";

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

const ROWS = 5;
const COLUMNS = 8;
const cells = Array.from({length: ROWS * COLUMNS});

export const Game1 = () => {
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
            level={1} 
            isFirstRules
            onDrop={handleReturn}
            onRestart={handleRestart}
            piecesComponent={<PuzzlesWrapper puzzles={emptyPuzzles}/>}
        >
            <PictureWrapper $ratio={ratio}>
                <Picture src={caseStart} alt={""} $ratio={ratio}/>
                <PuzzleField 
                    cells={cells} 
                    top={74} 
                    width={325} 
                    left={25}
                    border={18} 
                    height={204} 
                    rows={ROWS} 
                    columns={COLUMNS} 
                    onDrop={handleDrop}
                    shownPuzzles={puzzles.current.shownPuzzles}
                />
            </PictureWrapper>
        </GameWrapper>
    )
}