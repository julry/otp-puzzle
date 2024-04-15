import styled from "styled-components";
import plane from "../../assets/images/plane.png";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { PostGameWrapper } from "../shared/PostGameWrapper";
import { Shining } from "../shared/Shining";

const PictureWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: ${({$ratio}) => $ratio * 271}px;
`;

const Picture = styled.img`
    position: relative;
    z-index: 2;
    width: ${({$ratio}) => $ratio * 298}px;
    height: ${({$ratio}) => $ratio * 271}px;
    object-fit: contain;
`;

const CrossedText = styled.span`
    text-decoration: line-through;
`;

export const PostGame2 = () => {
    const ratio = useSizeRatio();

    return (
        <PostGameWrapper 
            level={2} 
            text={<p>
                Высокая скорость — вот,{'\n'}что общего у <b>самолётов</b>{'\n'}и стажёров OTP Next Generation.{'\n'}{'\n'}
                Если хорошо себя проявишь,{'\n'}
                то сможешь перейти в штат{'\n'}уже через 2-3 месяца — ещё{'\n'}
                до <CrossedText>приземления</CrossedText> окончания{'\n'}стажировки!
            </p>}
        >
            <PictureWrapper $ratio={ratio}>
                <Shining />
                <Picture src={plane} alt={""} $ratio={ratio}/>
            </PictureWrapper>
        </PostGameWrapper>
    )
}