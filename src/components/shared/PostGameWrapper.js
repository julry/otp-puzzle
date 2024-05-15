import styled from "styled-components";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../contexts/SizeRatioContext"
import { reachMetrikaGoal } from "../../utils/reachMetrikaGoal";
import { Button } from "./Button";
import { Header } from "./Header";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto ${({$ratio}) => $ratio * 305}px ${({$ratio}) => $ratio * 185}px auto;
    padding: ${({$ratio}) => $ratio * 28}px 0;
`;

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: pre-line;
    position: relative;
    z-index: 3;
    padding: 0 ${({$ratio}) => $ratio * 50}px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-self: flex-end;
    padding: 0 ${({$ratio}) => $ratio * 20}px;
    justify-content: center;
    position: relative;
    z-index: 4;
`;

export const PostGameWrapper = ({level, children, text, metrika, btnText = "Продолжить"}) => {
    const {next} = useProgress();
    const ratio = useSizeRatio();

    const handleNext = () => {
        reachMetrikaGoal(metrika);
        next();
    }

    return (
        <Wrapper $ratio={ratio}>
            <Header level={level} />
            {children}
            <TextWrapper $ratio={ratio}>
                {text}
            </TextWrapper>
            <ButtonWrapper $ratio={ratio}>
                <Button onClick={handleNext}>{btnText}</Button>
            </ButtonWrapper>
        </Wrapper>
    )
}