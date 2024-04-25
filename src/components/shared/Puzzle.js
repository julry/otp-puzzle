import { useDrag } from "react-dnd"
import styled from 'styled-components';
import { useSizeRatio } from "../../contexts/SizeRatioContext";

const PuzzleWrapper = styled.div`
    position: relative;
    width: ${({$ratio, width}) => $ratio * width}px;
    height: ${({$ratio, height}) => $ratio * height}px;
    background: url(${({src}) => src}) 0 0 / cover;
    margin-bottom: ${({$ratio, margin}) => $ratio * (margin ?? 0)}px;
`;

export const Puzzle = ({ puzzle }) => {
    const ratio = useSizeRatio();

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "PUZZLE",
        item: () => puzzle,
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }), [puzzle]);

    const PuzzlePreview = () => {
        const {display, style} = usePreview();

        if (!display) {
            return null;
        }

        return (
            <StyledPreview style={style} width={puzzle.realWidth} height={puzzle.realHeight} src={puzzle.src} />
        );
    };

    if (isDragging) return <PuzzlePreview  />

    return (
        <PuzzleWrapper ref={drag} $ratio={ratio} {...puzzle} />
    )
}