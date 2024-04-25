import styled from 'styled-components';
import { useSizeRatio } from '../../../contexts/SizeRatioContext';
import { Puzzle } from '../../shared/Puzzle';
import { PuzzleRow } from '../../shared/PuzzleRow';

const Wrapper = styled.div`
    padding: ${({$ratio}) => 28 * $ratio}px ${({$ratio}) => 25 * $ratio}px;
`;

const Row = styled(PuzzleRow)`
    margin-top: ${({$ratio}) => 12 * $ratio}px;
`;

export const PuzzlesWrapper = ({puzzles}) => {
    const ratio = useSizeRatio();
    const puzzlesRow1 = puzzles.filter(({line}) => line === 1);
    const puzzlesRow2 = puzzles.filter(({line}) => line === 2);
    const puzzlesRow3 = puzzles.filter(({line}) => line === 3);

    return (
        <Wrapper $ratio={ratio}>
            <PuzzleRow $ratio={ratio}>
                {puzzlesRow1.map((puzzle) => <Puzzle key={puzzle.id} puzzle={puzzle} />)}
            </PuzzleRow> 
            <Row $ratio={ratio}>
                {puzzlesRow2.map((puzzle) => <Puzzle key={puzzle.id} puzzle={puzzle} />)}
            </Row> 
            <Row $ratio={ratio}>
                {puzzlesRow3.map((puzzle) => <Puzzle key={puzzle.id} puzzle={puzzle} />)}
            </Row>
        </Wrapper>
    )
}