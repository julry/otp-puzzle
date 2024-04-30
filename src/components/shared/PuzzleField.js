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
    ${({$isHovered}) => $isHovered ? "background: #EBF4D1" : ''};
`;

const DropDump = styled.div`
    --cellSize: ${({$ratio, width, $columns}) => $ratio * width / $columns}px;
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
    top: calc(${({top}) => top} * var(--cellSize));
    left: calc(${({left}) => left} * var(--cellSize));
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

    const handleGetHovered = (monitor) => {
        console.log($wrapper.current, monitor);
        if (!$wrapper.current || !monitor) return;
        const item = monitor.getItem();

        console.log(item);
        if (!item) return;
        const cellSizeX = ($wrapper.current?.getBoundingClientRect().width - 2 * ratio * columns) / columns;
        const cellSizeY = ($wrapper.current?.getBoundingClientRect().height - 2 * ratio * rows) / rows;

        const y = monitor.getSourceClientOffset()?.y - $wrapper.current?.getBoundingClientRect().y;
        const x = monitor.getSourceClientOffset()?.x - $wrapper.current?.getBoundingClientRect().x;
        const difX = x / cellSizeX;
        const difY = y / cellSizeY;

        let dropX = Math.floor(difX);
        let dropY = Math.floor(difY);

        if (dropX < 0) dropX = 0;
        if (dropY < 0) dropY = 0;

        const arrayX = [];

        for (let i = 0; i < item.sizeX * item.sizeY; i++) {
            let hoveredX = i % item.sizeX;
            let hoveredY = Math.floor(i / item.sizeX);

            if (!(item?.freePlace?.x === hoveredX && item.freePlace?.y === hoveredY)) {
                arrayX.push({x: dropX + hoveredX, y: dropY + hoveredY})
            }
        }

        return arrayX;
    }

    const [{ hovered }, drop] = useDrop(() => (
        {
            accept: 'PUZZLE',
            collect: monitor => ({
                // hovered: monitor.canDrop && monitor.isOver && handleGetHovered(monitor)
            }),
            drop: handleDrop,
        }
    ), []);

    const getIsHovered = (index) => {
        if (!hovered) return;
        const x = index % columns;
        const y = Math.floor(index / columns);

        return hovered.find((hovered) => hovered.x === x && hovered.y === y);
    }

    return (
        <>
            <FieldRectangles ref={$wrapper} $ratio={ratio} $rows={rows} $columns={columns} top={top} left={left} width={width} height={height} border={border}>
                {cells.map((_, index) => (
                    <CellStyled key={index} $ratio={ratio} $isHovered={getIsHovered(index)}/>
                ))}
                
            </FieldRectangles>
            <DropDump ref={drop} $ratio={ratio} top={top} left={left} width={width} height={height} $columns={columns}>
                {shownPuzzles.map((puzzle) => (
                    <PuzzleStyled key={`shown_${puzzle.id}`} puzzle={puzzle} size={cellSize} sizeH={cellSizeH} top={puzzle.top} left={puzzle.left}/>
                ))}
            </DropDump>
        </>
        
    )
}