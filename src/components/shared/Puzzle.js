import { useMemo, useRef } from "react";
import mergeRefs from 'merge-refs';
import { useDrag } from "react-dnd"
import { usePreview } from "react-dnd-multi-backend";
import styled from 'styled-components';
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { puzzleRealSize, puzzleSize} from "../../constants/sizes";

const PuzzleWrapper = styled.div`
    position: relative;
    width: ${({$ratio, width}) => $ratio * width}px;
    height: ${({$ratio, height}) => $ratio * height}px;
    background: url(${({src}) => src}) 0 0 / cover;
    margin-bottom: ${({$ratio, margin}) => $ratio * (margin ?? 0)}px;
    z-index: 11;
`;

const PuzzleStyled = styled(PuzzleWrapper)`
    z-index: 111;
`;

export const Puzzle = ({ className, puzzle, size}) => {
    const ratio = useSizeRatio();
    const $puzzle = useRef();

    const { puzzWidth, puzzHeight } = puzzle;

    const width = useMemo(() => puzzWidth ?? (size ? puzzle.sizeX * size : puzzle.sizeX * puzzleSize), [size]);
    const height = useMemo(() => puzzHeight ?? (size ? puzzle.sizeY * size : puzzle.sizeY * puzzleSize + 4), [size]);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "PUZZLE",
        item: () => ({ 
            ...puzzle, 
            initialY: $puzzle.current?.getBoundingClientRect().y,  
            initialX: $puzzle.current?.getBoundingClientRect().x
        }),
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }), [puzzle]);

    const PuzzlePreview = () => {
        const {display, style} = usePreview();

        if (!display) {
            return (
                <PuzzleWrapper 
                    $ratio={ratio}  
                    width={puzzWidth ?? puzzle.sizeX * puzzleSize} 
                    height={puzzHeight ??puzzle.sizeY * puzzleSize} 
                />
            );
        }

        return (
            <>
                <PuzzleStyled 
                    style={style} 
                    $ratio={ratio}  
                    width={puzzWidth ? puzzWidth * puzzleRealSize / puzzleSize : puzzle.sizeX * puzzleRealSize} 
                    height={puzzHeight ? puzzHeight * puzzleRealSize / puzzleSize : puzzle.sizeY * puzzleRealSize} 
                    src={puzzle.src}
                />
                <PuzzleWrapper 
                    $ratio={ratio}  
                    width={puzzWidth ?? puzzle.sizeX * puzzleSize} 
                    height={puzzHeight ?? puzzle.sizeY * puzzleSize} 
                />
            </>
        );
    };

    if (isDragging) return <PuzzlePreview  />

    return (
        <PuzzleWrapper 
            ref={mergeRefs($puzzle, drag)} 
            className={className}
            $ratio={ratio}  
            width={width} 
            height={height} 
            src={puzzle.src} 
        />
    )
}