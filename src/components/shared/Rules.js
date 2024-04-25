import styled from 'styled-components';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSizeRatio } from '../../contexts/SizeRatioContext';
import info from '../../assets/images/info.svg';
import field from '../../assets/images/caseStart.png';
import puzzle1_1 from '../../assets/images/game1/puzzle1.svg';
import puzzle2_1 from '../../assets/images/game1/puzzle2.svg';
import puzzle3_1 from '../../assets/images/game1/puzzle3.svg';
import puzzle4_1 from '../../assets/images/game1/puzzle4.svg';
import puzzle5_1 from '../../assets/images/game1/puzzle5.svg';
import puzzle6_1 from '../../assets/images/game1/puzzle6.svg';
import puzzle7_1 from '../../assets/images/game1/puzzle7.svg';
import puzzle8_1 from '../../assets/images/game1/puzzle8.svg';
import helpHand from '../../assets/images/helpHand.png';

import { Block } from './Block';
import { useRef } from 'react';
import { Button } from './Button';
import { Cell } from './Cell';

const Wrapper = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1000;
    background: #342D39;
`;

const Content = styled(Block)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 40px);
    padding: ${({$ratio}) => $ratio * 27}px ${({$ratio}) => $ratio * 22}px ${({$ratio}) => $ratio * 22}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 370px;
`;

const InfoSign = styled.div`
    width: ${({$ratio}) => $ratio * 29}px;
    height: ${({$ratio}) => $ratio * 29}px;
    background: url(${info}) no-repeat 0 0 / cover;
`;

const TextBlock = styled.div`
    margin: ${({$ratio}) => $ratio * 15}px 0 ${({$ratio}) => $ratio * 8}px;
    text-align: center;
`;

const Field = styled.div`
    position: relative;
    width: ${({$ratio}) => $ratio * 270}px;
    height: ${({$ratio}) => $ratio * 210}px;
    background: url(${field}) no-repeat 0 0 / cover;
`;

export const FieldRectangles = styled.div`
    position: absolute;
    top: ${({$ratio}) => $ratio * 52}px;
    right: ${({$ratio}) => $ratio * 15}px;
    width: ${({$ratio}) => $ratio * 240}px;
    height: ${({$ratio}) => $ratio * 149}px;
    border-radius:${({$ratio}) => $ratio * 18}px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    border: 1px solid #D9D9D9;
`;

const CellStyled = styled(Cell)`
    animation-delay: 1.3s;

    &:nth-child(8), &:nth-child(16), &:nth-child(24), &:nth-child(32), &:nth-child(40) {
        border-right: none;
    }
`;

const Blocks = styled.div`
    width: 100%;
    padding: ${({$ratio}) => $ratio * 25}px ${({$ratio}) => $ratio * 20}px ${({$ratio}) => $ratio * 30}px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & + & {
        margin-top: ${({$ratio}) => $ratio * 22}px;
    }
`;

const PuzzleBlock = styled.div`
    position: relative;
    width: ${({$ratio, width}) => $ratio * width}px;
    height: ${({$ratio, height}) => $ratio * height}px;
    background: url(${({src}) => src}) 0 0 / cover;
    margin-bottom: ${({$ratio, margin}) => $ratio * (margin ?? 0)}px;
`;

const ShownPuzzle = styled(PuzzleBlock)`
    position: absolute;
    top: 0;
    left: 0;
`;

const Hand = styled.div`
    position: absolute;
    width: ${({$ratio}) => $ratio * 52}px;
    height: ${({$ratio}) => $ratio * 60}px; 
    right: ${({$ratio}) => $ratio * -25}px;
    top: ${({$ratio}) => $ratio * -22}px;
    background: url(${helpHand}) 0 0 / cover;
    z-index: 3;
`;

const cells = Array.from({length: 40});
const coloredCells = [2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15];

export const Rules = ({onClose, isFirstRules}) => {
    const ratio = useSizeRatio();
    const block = useRef();
    const element = useRef();

    useGSAP(() => {
        if (!block.current || !element.current) return;

        const size = block?.current.getBoundingClientRect().width / 8;
        const y = block?.current.getBoundingClientRect().y - element?.current.getBoundingClientRect().y + 2 * ratio;
        const x = block?.current.getBoundingClientRect().x - element?.current.getBoundingClientRect().x + 2 * size;

        gsap.to(".box", {
            y,
            x,
            delay: 0.5,
            duration: 1.4
        }); 

        gsap.to("#puzzle", {
            width: size * 6,
            height: size * 2,
            delay: 1.5,
        });
    }, {}); 


    return (
        <Wrapper>
            <Content $ratio={ratio}>
                <InfoSign $ratio={ratio}/>
                <TextBlock $ratio={ratio}>
                    <p>
                        {'Перетаскивай блоки внутрь\nсилуэта, чтобы полностью\nзаполнить фигуру.'}
                    </p>
                </TextBlock>
                <Field $ratio={ratio}>
                    <FieldRectangles $ratio={ratio} ref={block}>
                        {cells.map((_, index) => (
                            <CellStyled key={index} $isColored={coloredCells.includes(index)}/>
                        ))}
                    </FieldRectangles>
                </Field>
                <Blocks $ratio={ratio}>
                    <Row $ratio={ratio}>
                        <PuzzleBlock  $ratio={ratio} width={22} height={46} src={puzzle5_1} />
                        <PuzzleBlock width={22} $ratio={ratio} height={46} src={puzzle3_1} />
                        <PuzzleBlock width={88} $ratio={ratio} height={46} src={puzzle7_1} />
                        <div>
                            <PuzzleBlock width={88} $ratio={ratio} height={24} src={puzzle1_1}  margin={10}/>
                            <PuzzleBlock width={88} $ratio={ratio} height={24} src={puzzle2_1} />
                        </div>
                    </Row>
                    <Row>
                        <PuzzleBlock  $ratio={ratio} width={44} height={46} src={puzzle6_1} />
                        <PuzzleBlock width={44} $ratio={ratio} height={46} src={puzzle4_1} />
                        <PuzzleBlock width={132} $ratio={ratio} height={46}>
                            <div className="box" ref={element}>
                                <ShownPuzzle id="puzzle" width={132} $ratio={ratio} height={46} src={puzzle8_1} />
                                <Hand $ratio={ratio}/>
                            </div>
                        </PuzzleBlock>
                    </Row>
                </Blocks>
                <Button onClick={onClose}>{isFirstRules ? 'Старт' : 'Продолжить'}</Button>
            </Content>
        </Wrapper>
    )
}