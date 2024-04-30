import styled from 'styled-components';
import { useSizeRatio } from '../../../contexts/SizeRatioContext';
import { Puzzle } from '../../shared/Puzzle';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Content = styled.div`
    position: relative;
    margin: ${({$ratio}) => 20 * $ratio}px auto;
    width: ${({$ratio}) => 331 * $ratio}px
`;

const PuzzleStyled = styled(Puzzle)`
    position: absolute;
    top: ${({top, $ratio}) => top * $ratio}px;
    left: ${({left, $ratio}) => left * $ratio}px;
`;

export const PuzzlesWrapper = ({puzzles}) => {
    const ratio = useSizeRatio();


    return (
        <Wrapper $ratio={ratio}>
            <Content $ratio={ratio}>
            {
                puzzles.map((puzzle) =>(
                    <PuzzleStyled 
                        key={puzzle.id} 
                        $ratio={ratio} 
                        top={puzzle.startTop} 
                        left={puzzle.startLeft} 
                        puzzle={puzzle} 
                        isStartPuzzle
                    />
                ))
            }
            </Content>
        </Wrapper>
    )
}