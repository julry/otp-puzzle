import { useRef, useState } from "react";
import styled from "styled-components";
import plane from "../../../assets/images/planeStart.svg";
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { findPlacedCells } from "../../../utils/findPlacedCells";
import { GameWrapper } from "../../shared/GameWrapper";
import { PuzzleField } from "../../shared/PuzzleField";
import { initialPuzzles, initialPlaced } from "./initialPuzzles";
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
const places6 = [0, 1, 2, 3, 4, 5];

export const Game2 = () => {
    const [emptyPuzzles, setEmptyPuzzles] = useState(initialPuzzles);
    const { next } = useProgress();
    
    const puzzles = useRef({
        shownPuzzles: [],
        placedCells: initialPlaced,
    });

    const ratio = useSizeRatio();

    const handleDrop = (puzzle, x, y, {isSligtlyRight, isSligtlyUp, isMoreUp}) => {
        let dropX = x;
        let dropY = y;
        let placedPuzzles = [];

        if (x + puzzle.sizeX > COLUMNS) dropX = COLUMNS - puzzle.sizeX;
        if (y + puzzle.sizeY > ROWS) dropY = ROWS - puzzle.sizeY;
        
        if ((dropX === 1 || (dropX === 0 && (dropY === 1 || dropY === 2))) && puzzle.id !== 6) return;
        if ((([0, 1, 4, 5].includes(dropY) && dropX === 4) || dropX === 0) && puzzle.id === 7) return;


        if (puzzle.id === 6 && (dropX === 0 || dropX === 1 && places6.includes(dropY))) {
            dropX = puzzle.correctX[0];
            dropY = puzzle.correctY[0];
        }
        
        const {isEmpty, placed} = findPlacedCells(dropX, dropY, puzzle, puzzles.current.placedCells);

        if (isEmpty) {
            placedPuzzles = [...placed];
        }

        if (!isEmpty) {
            if (isSligtlyRight || isSligtlyUp) {
                let isSomeEmpty = false;
                if (isMoreUp && isSligtlyUp && dropY + 1 <= ROWS - puzzle.sizeY) {
                    const {isEmpty: isEmptyDown, placed: placedDown} = 
                        findPlacedCells(dropX, dropY + 1, puzzle, puzzles.current.placedCells);

                    isSomeEmpty = isEmptyDown;
                    placedPuzzles = [...placedDown];
                    if (isSomeEmpty) dropY = dropY + 1;
                } 

                if ((!isSomeEmpty || !isSligtlyUp) && dropX + 1 <= COLUMNS - puzzle.sizeX) {
                    const {isEmpty: isEmptyRight, placed: placedRight} = 
                        findPlacedCells(dropX + 1, dropY, puzzle, puzzles.current.placedCells);
                    isSomeEmpty = isEmptyRight;
                    placedPuzzles = [...placedRight];
                    if (isSomeEmpty) dropX = dropX + 1;
                }
                if (!isSomeEmpty) return;
            } else return;
        } 

        if (puzzle.isOnlyPosition && (!puzzle.correctX?.includes(dropX) || !puzzle.correctY?.includes(dropY))) {
            return;
        }

        if (puzzle.availableCells && !puzzle.availableCells.find((({x, y}) => x === dropX && y === dropY))) return;
        
        if (puzzle.prohibbitedCells && puzzle.prohibbitedCells.find((({x, y}) => x === dropX && y === dropY))) return;

        const shownIndex = puzzles.current.shownPuzzles.findIndex(({id}) => id === puzzle.id);

        const newPuz = {
                ...puzzle, 
                top: (dropY + (puzzle.initialTop ?? 0)), 
                left: (dropX + (puzzle.initialLeft ?? 0)),
                positionX: dropX,
                positionY: dropY,
            };

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
            newEmpty[emptyIndex] = {...newEmpty[emptyIndex], srcStart: undefined};
            return newEmpty;
        })

        puzzles.current.placedCells.push(...placedPuzzles);

       if (puzzles.current.placedCells.length === ROWS * COLUMNS) {
            const correctLength = puzzles.current.shownPuzzles.filter(({positionY, positionX, correctX, correctY }) => 
                ((!correctX || correctX.includes(positionX)) && (!correctY || correctY.includes(positionY)))
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
            placedCells: initialPlaced,
        }
        setEmptyPuzzles(initialPuzzles);
    }

    return (
        <GameWrapper
            level={2} 
            onDrop={handleReturn}
            onRestart={handleRestart}
            piecesComponent={<PuzzlesWrapper puzzles={emptyPuzzles}/>}
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