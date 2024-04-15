import styled from "styled-components";
import photo from "../../assets/images/photo.png";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { PostGameWrapper } from "../shared/PostGameWrapper";
import { Shining } from "../shared/Shining";

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

export const PostGame3 = () => {
    const ratio = useSizeRatio();

    return (
        <PostGameWrapper 
            level={3} 
            text={<p>
                В твоей <b>фотоплёнке</b> будет{'\n'}
                много тёплых воспоминаний.{'\n'}
                Мы насыщенно проводим свободное время: устраиваем киновечера,{' '}
                играем в настолки, посещаем выставки и мастер-классы, вместе занимаемся спортом и киберспортом!
            </p>}
            btnText="Готово"
        >
            <PictureWrapper $ratio={ratio}>
                <Shining />
                <Picture src={photo} alt={""} $ratio={ratio}/>
            </PictureWrapper>
        </PostGameWrapper>
    )
}