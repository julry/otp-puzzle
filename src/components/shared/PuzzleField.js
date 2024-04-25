import { useDrop } from "react-dnd";
import styled from "styled-components";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Cell } from "./Cell";

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

export const PuzzleField = ({top, left, width, height, border, cells, onDrop, columns, rows, cellSize}) => {
    const ratio = useSizeRatio();

    const [, drop] = useDrop(() => (
        {
            accept: 'PUZZLE',
            collect: monitor => ({
                hovered: monitor.canDrop() && monitor.isOver() 
            }),
            drop: (item) => {
                onDrop(item);
            },
        }
    ), []);

    return (
        <FieldRectangles ref={drop} $ratio={ratio} $rows={rows} $columns={columns} top={top} left={left} width={width} height={height} border={border}>
            {cells.map((_, index) => (
                <CellStyled key={index} $ratio={ratio} size={cellSize}/>
            ))}
        </FieldRectangles>
    )
}