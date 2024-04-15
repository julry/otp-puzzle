import styled from "styled-components";
import photo from "../../assets/images/photo.png";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { GameWrapper } from "../shared/GameWrapper";

const PictureWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Picture = styled.img`
    position: relative;
    z-index: 2;
    width: ${({$ratio}) => $ratio * 300}px;
    height: ${({$ratio}) => $ratio * 203}px;
    object-fit: contain;
`;

export const Game1 = () => {
    const ratio = useSizeRatio();

    return (
        <GameWrapper
            level={1} 
            text={<p>
                В твоей <b>фотоплёнке</b> будет{'\n'}
                много тёплых воспоминаний.{'\n'}
                Мы насыщенно проводим свободное время: устраиваем киновечера,{' '}
                играем в настолки, посещаем выставки и мастер-классы, вместе занимаемся спортом и киберспортом!
            </p>}
        >
            <PictureWrapper $ratio={ratio}>
                <Picture src={photo} alt={""} $ratio={ratio}/>
            </PictureWrapper>
        </GameWrapper>
    )
}