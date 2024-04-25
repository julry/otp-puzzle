import styled from "styled-components";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { MouseTransition, TouchTransition, DndProvider } from 'react-dnd-multi-backend';
import reload from "../../assets/images/reload.svg";
import question from "../../assets/images/question.svg";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Header } from "./Header";
import { useState } from "react";
import { Rules } from "./Rules";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { PiecesWrapper } from "./PiecesWrapper";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: ${({$ratio}) => $ratio * 40}px auto ${({$ratio}) => $ratio * 290}px;
    padding: ${({$ratio}) => $ratio * 28}px 0 0;
`;

const ButtonsWrapper = styled.div`
    position: absolute;
    bottom: 0;
    background-color: white;
    border-radius: ${({$ratio}) => $ratio * 16}px ${({$ratio}) => $ratio * 16}px 0 0;
    left: 50%;
    transform: translateX(-50%);
    height: ${({$ratio}) => $ratio * 39}px;
    width: ${({$ratio}) => $ratio * 204}px;
`;

const ActionButtonsWrapper = styled.div`
    position: absolute;
    top: ${({$ratio}) => $ratio * -12}px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
`;

const ActionButton = styled.button`
    outline: none;
    cursor: pointer;
    background: #C8E1FC;
    border-radius: 50%;
    border: 3px solid #BADBFF;
    height: ${({$ratio}) => $ratio * 37}px;
    width: ${({$ratio}) => $ratio * 37}px;
    min-width: 20px;
    min-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    & + & {
        margin-left: ${({$ratio}) => $ratio * 33}px;
    }
`;

const BtnImg = styled.img`
    height: ${({$ratio}) => $ratio * 21}px;
    width:  ${({$ratio}) => $ratio * 21}px;
    object-fit: contain;
`;

const SWITCH_DURATION = 500;

const SWITCH_NAME = 'switch';

const TransitionWrapper = styled.div`
    width: 100%;
    height: 100%;

    &.${SWITCH_NAME}-enter {
        opacity: 0;
    }

    &.${SWITCH_NAME}-enter-active {
        opacity: 1;
        transition: opacity ${SWITCH_DURATION}ms;
    }

    &.${SWITCH_NAME}-exit {
        opacity: 1;
    }

    &.${SWITCH_NAME}-exit-active {
        opacity: 0;
        transition: opacity ${SWITCH_DURATION}ms;
    }
`

export const GameWrapper = ({level, children, piecesComponent, isFirstRules, onDrop, onRestart}) => {
    const [isFirstShown, setIsFirstShown] = useState(isFirstRules);
    const [isRules, setIsRules] = useState(isFirstRules);
    const ratio = useSizeRatio();

    const handleCloseRules = () => {
        if (isFirstShown) setIsFirstShown(false);

        setIsRules(false);
    }

    const HTML5toTouch = {
        backends: [
            {
                id: 'html5',
                backend: HTML5Backend,
                transition: MouseTransition,
            },
            {
                id: 'touch',
                backend: TouchBackend,
                preview: true,
                transition: TouchTransition,
            },
        ],
    };

    return (
        <SwitchTransition mode='out-in'>
             <CSSTransition key={`transition_${isRules}`} timeout={SWITCH_DURATION} classNames={SWITCH_NAME}>
                <TransitionWrapper>
                    {isRules ? <Rules onClose={handleCloseRules} isFirstRules={isFirstShown}/> : (
                        <DndProvider options={HTML5toTouch}>
                            <Wrapper $ratio={ratio}>
                                <Header level={level} />
                                {children}
                                <PiecesWrapper ratio={ratio} onDrop={onDrop}> 
                                    {piecesComponent}
                                </PiecesWrapper>
                                <ButtonsWrapper $ratio={ratio}>
                                    <ActionButtonsWrapper $ratio={ratio}>
                                        <ActionButton $ratio={ratio} onClick={onRestart}>
                                            <BtnImg src={reload} alt="" $ratio={ratio}/>
                                        </ActionButton>
                                        <ActionButton $ratio={ratio} onClick={() => setIsRules(true)}>
                                            <BtnImg src={question} alt="" $ratio={ratio}/>
                                        </ActionButton>
                                    </ActionButtonsWrapper>
                                </ButtonsWrapper>
                            </Wrapper>    
                        </DndProvider>
                    )}
                </TransitionWrapper>
            </CSSTransition>
        </SwitchTransition>
    )
}