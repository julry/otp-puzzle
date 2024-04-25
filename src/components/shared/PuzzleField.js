import { useMemo, useRef } from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import { puzzleSize } from "../../constants/sizes";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Cell } from "./Cell";
import { Puzzle } from "./Puzzle";

const FieldRectangles = styled.div`
    position: absolute;
    display: grid;
    grid-template-rows: repeat(${({$rows}) => $rows}, 1fr);
    grid-template-columns: repeat(${({$columns}) => $columns}, 1fr);
    overflow: hidden;
    top: ${({$ratio, top}) => $ratio * top}px;
    left: ${({$ratio, left}) => $ratio * left}px;
    width: ${({$ratio, width}) => $ratio * width}px;
    height: ${({$ratio, height}) => $ratio * height}px;
    border-radius: ${({$ratio, border}) => $ratio * border}px;
    border: 1px solid #D9D9D9;
`;

const CellStyled = styled(Cell)`
    width: 100%;
    height: 100%;
`;

const DropDump = styled.div`
    --cellSize: ${({$ratio, width, $columns}) => $ratio * width / $columns}px;
    position: absolute;
    z-index: 10;
    top: ${({$ratio, top}) => $ratio * top}px;
    left: ${({$ratio, left}) => $ratio * left}px;
    width: ${({$ratio, width}) => $ratio * width}px;
    height: ${({$ratio, height}) => $ratio * height}px;
`;

const PuzzleStyled = styled(Puzzle)`
    position: absolute !important;
    top: calc(${({top}) => top} * var(--cellSize));
    left: calc(${({left}) => left} * var(--cellSize));
`;

export const PuzzleField = ({top, left, width, height, border, cells, onDrop, columns, rows, shownPuzzles}) => {
    const ratio = useSizeRatio();
    const $wrapper = useRef();
    const cellSize = useMemo(() => width / columns, [width, columns]);

    const handleDrop = (item, monitor) => {
        if (!$wrapper.current) return;
        const y = monitor.getSourceClientOffset().y - $wrapper.current?.getBoundingClientRect().y;
        const x = monitor.getSourceClientOffset().x - $wrapper.current?.getBoundingClientRect().x;
        let dropX = Math.floor(x / puzzleSize);
        let dropY = Math.floor(y / puzzleSize);

        //понять как получить х и у на компе 
        if (dropX < 0) dropX = 0;
        if (dropY < 0) dropY = 0;

        onDrop?.(item, dropX, dropY);
    };

    const [, drop] = useDrop(() => (
        {
            accept: 'PUZZLE',
            collect: monitor => ({
                hovered: monitor.canDrop() && monitor.isOver(),
            }),
            drop: handleDrop,
        }
    ), []);

    return (
        <>
            <FieldRectangles ref={$wrapper} $ratio={ratio} $rows={rows} $columns={columns} top={top} left={left} width={width} height={height} border={border}>
                {cells.map((_, index) => (
                    <CellStyled  key={index} $ratio={ratio}/>
                ))}
                
            </FieldRectangles>
            <DropDump ref={drop} $ratio={ratio} top={top} left={left} width={width} height={height} $columns={columns}>
                {shownPuzzles.map((puzzle) => (
                    <PuzzleStyled key={`shown_${puzzle.id}`} puzzle={puzzle} size={cellSize} top={puzzle.top} left={puzzle.left}/>
                ))}
            </DropDump>
        </>
        
    )
}