import { useRef, useState } from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photoStart.svg";
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

const ROWS = 6;
const COLUMNS = 8;
const cells = Array.from({length: 48});

export const Game3 = () => {
    const [emptyPuzzles, setEmptyPuzzles] = useState(initialPuzzles);
    const { next } = useProgress();
    
    const puzzles = useRef({
        shownPuzzles: [],
        placedCells: initialPlaced,
    });

    const ratio = useSizeRatio();

    const handleDrop = (puzzle, x, y, {isMoreUp, isSligtlyRight, isSligtlyUp}) => {
        let dropX = x;
        let dropY = y;
        let placedPuzzles = [];

        if (x + puzzle.sizeX > COLUMNS) dropX = COLUMNS - puzzle.sizeX;
        if (y + puzzle.sizeY > ROWS) dropY = ROWS - puzzle.sizeY;

        if (
            puzzle.isOnlyPosition && puzzle.nearCells && 
            puzzle.nearCells.x.includes(dropX) && puzzle.nearCells.y.includes(dropY)
        ) {
            if (puzzle.correctX.length && Math.abs(dropX - puzzle.correctX[0]) > 1 > 0) {
                dropX = puzzle.correctX[1];
            } else  dropX = puzzle.correctX[0];
            if (puzzle.correctX.length > 0 && Math.abs(dropY - puzzle.correctY[0]) > 1) {
                dropY = puzzle.correctY[1];
            } else dropY = puzzle.correctY[0];
        }
        
        if (dropX === 2 && dropY === 0 && puzzle.id !== 2) return;

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

       if (puzzles.current.shownPuzzles.length === initialPuzzles.length) {
            const correctLength = puzzles.current.shownPuzzles.filter(({positionY, positionX, correctX, correctY }) => 
                ((!correctX || correctX.includes(positionX)) && (!correctY || correctY.includes(positionY)))
            ).length;

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
            level={3} 
            onDrop={handleReturn}
            onRestart={handleRestart}
            piecesComponent={<PuzzlesWrapper puzzles={emptyPuzzles}/>}
        >
            <PictureWrapper $ratio={ratio}>
                <Picture src={photo} alt={""} $ratio={ratio}/>
                <PuzzleField 
                    cells={cells} 
                    top={37} 
                    width={325} 
                    left={10} 
                    border={15} 
                    height={247} 
                    columns={COLUMNS} 
                    rows={ROWS}
                    onDrop={handleDrop}
                    shownPuzzles={puzzles.current.shownPuzzles}
                />
            </PictureWrapper>
        </GameWrapper>
    )
}