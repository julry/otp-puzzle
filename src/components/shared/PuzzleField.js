import { useMemo, useRef } from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
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
    --cellSizeH: ${({$ratio, height, $rows}) => $ratio * height / $rows}px;
    position: absolute;
    z-index: 10;
    display: flex;
    flex-wrap: wrap;
    top: ${({$ratio, top}) => $ratio * top}px;
    left: ${({$ratio, left}) => $ratio * left}px;
    width: ${({$ratio, width}) => $ratio * width}px;
    height: ${({$ratio, height}) => $ratio * height}px;
`;

const PuzzleStyled = styled(Puzzle)`
    position: absolute !important;
    top: calc(${({top}) => top} * var(--cellSizeH));
    left: calc(${({left}) => left} * var(--cellSize));
    ${({width}) => width ? 'width: ' + width : ''};
    ${({height}) => height ? 'height: ' + height : ''};
`;

export const PuzzleField = ({top, left, width, height, border, cells, onDrop, columns, rows, shownPuzzles}) => {
    const ratio = useSizeRatio();
    const $wrapper = useRef();
    const cellSize = useMemo(() => width / columns, [width, columns]);
    const cellSizeH = useMemo(() => height / rows, [height, rows]);

    const handleDrop = (item, monitor) => {
        if (!$wrapper.current) return;
        const cellSizeX = ($wrapper.current?.getBoundingClientRect().width - 2 * ratio * columns) / columns;
        const cellSizeY = ($wrapper.current?.getBoundingClientRect().height - 2 * ratio * rows) / rows;

        let isSligtlyUp = false;
        let isSligtlyRight = false;
        let isMoreUp = false;

        const y = monitor.getSourceClientOffset()?.y - $wrapper.current?.getBoundingClientRect()?.y;
        const x = monitor.getSourceClientOffset()?.x - $wrapper.current?.getBoundingClientRect()?.x;
        const difX = x / cellSizeX;
        const difY = y / cellSizeY;

        let dropX = Math.floor(difX);
        let dropY = Math.floor(difY);

        const difDropX = difX - dropX;
        const difDropY = difY - dropY;

        if (difDropY > 0.55) isSligtlyUp = true;
        if (difDropX > 0.55) isSligtlyRight = true;
        if (difDropY > difDropX) isMoreUp = true;

        if (dropX < 0) dropX = 0;
        if (dropY < 0) dropY = 0;

        onDrop?.(item, dropX, dropY, {isSligtlyRight, isSligtlyUp, isMoreUp});
    };

    const [, drop] = useDrop(() => (
        {
            accept: 'PUZZLE',
            drop: handleDrop,
        }
    ), []);

    return (
        <>
            <FieldRectangles ref={$wrapper} $ratio={ratio} $rows={rows} $columns={columns} top={top} left={left} width={width} height={height} border={border}>
                {cells.map((_, index) => (
                    <CellStyled key={index} $ratio={ratio}/>
                ))}
            </FieldRectangles>
            <DropDump ref={drop} $ratio={ratio} top={top} left={left} width={width} height={height} $columns={columns} $rows={rows}>
                {shownPuzzles.map((puzzle) => (
                    <PuzzleStyled 
                        key={`shown_${puzzle.id}`} 
                        puzzle={puzzle} 
                        size={cellSize} 
                        sizeH={cellSizeH} 
                        top={puzzle.top} 
                        left={puzzle.left}
                        height={puzzle.puzzRealHeight ? '' : `calc((100% * ${puzzle.sizeY}) / ${rows})`}
                        width={puzzle.puzzRealWidth ? '' : `calc((100% * ${puzzle.sizeX}) / ${columns})`}
                    />
                ))}
            </DropDump>
        </>
        
    )
}