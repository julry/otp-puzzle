import styled from "styled-components";
import casePic from "../../assets/images/case.png";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { PostGameWrapper } from "../shared/PostGameWrapper";
import { Shining } from "../shared/Shining";

const PictureWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: ${({$ratio}) => $ratio * 251}px;
    align-self: flex-end;
`;

const Picture = styled.img`
    position: relative;
    z-index: 2;
    width: ${({$ratio}) => $ratio * 248}px;
    height: ${({$ratio}) => $ratio * 251}px;
    object-fit: contain;
`;

export const PostGame1 = () => {
    const ratio = useSizeRatio();

    return (
        <PostGameWrapper 
            level={1} 
            text={<p>
                Держи свой <b>карьерный{'\n'}чемодан</b> открытым — с первого{'\n'}дня ты будешь пополнять{'\n'} 
                его опытом работы{'\n'}
                над важными проектами!
            </p>}
        >
            <PictureWrapper $ratio={ratio}>
                <Shining />
                <Picture src={casePic} alt={""} $ratio={ratio}/>
            </PictureWrapper>
        </PostGameWrapper>
    )
}