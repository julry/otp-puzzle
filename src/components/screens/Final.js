import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { FORM_URL, EMAIL_ID } from "../../constants/form";
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Block } from "../shared/Block";
import { Button } from "../shared/Button";
import { Shining } from "../shared/Shining";

const Wrapper = styled.div` 
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({$ratio}) => $ratio * 30}px ${({$ratio}) => $ratio * 20}px ${({$ratio}) => $ratio * 13}px;
`;

const Logo = styled.img`
    width: ${({$ratio}) => $ratio * 151}px;
    height: ${({$ratio}) => $ratio * 29}px;
    object-fit: contain;
    position: relative;
    z-index: 3;
`;

const DrawWrapper = styled.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$ratio}) => $ratio * 30}px;
    padding: 0 ${({$ratio}) => $ratio * 22}px ${({$ratio}) => $ratio * 34}px;
    white-space: pre-line;

    & p {
        position: relative;
        text-align: center;
        z-index: 3;
    }

    & p + p {
            margin-top: ${({$ratio}) => $ratio * 8}px;
    }
`;

const EmailWrapper = styled.div`
    position: relative;
    display: flex;
    z-index: 3;
    margin: ${({$ratio}) => $ratio * 20}px 0 ${({$ratio}) => $ratio * 12}px;
`;

const Input = styled.input`
    flex-grow: 1;
    border: 1px solid rgba(176, 165, 185, 0.93);
    border-radius: ${({$ratio}) => $ratio * 12}px;
    margin-right: ${({$ratio}) => $ratio * 8}px;
    padding: ${({$ratio}) => $ratio * 12}px;
    height: ${({$ratio}) => $ratio * 44}px;
    background: #4D4254;
    color: white;

    &::placeholder {
        color:  rgba(176, 165, 185, 0.93);
    }
`;

const ShiningStyled = styled(Shining)`
    top: 60%;
    width: 0;
    height: 0;
    box-shadow: 0 0 100px min(30vw, 130px) rgba(173,121,214, 0.3);
`;

const SendBtn = styled(Button)`
    width: ${({$ratio}) => $ratio * 44}px;
    height: ${({$ratio}) => $ratio * 44}px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    & svg {
        width: ${({$ratio}) => $ratio * 25}px;
        height: ${({$ratio}) => $ratio * 18}px;
    }

    &:disabled {
        opacity: 0.6;
    }
`;

const BlockStyled = styled(Block)`
    position: relative;
    z-index: 3;
    margin-top: auto;
    flex-direction: column;
`;

const ButtonStyled = styled(Button)`
    margin-top: ${({$ratio}) => $ratio * 28}px;

    & + & {
        margin-top: ${({$ratio}) => $ratio * 12}px;
    }
`;

const InputRadioButton = styled.input`
  display: none;
`;

const RadioIconStyled = styled.div`
  position: relative;
  flex-shrink: 0;
  width: ${({$ratio}) => $ratio * 16}px;
  height: ${({$ratio}) => $ratio * 16}px;
  border-radius: ${({$ratio}) => $ratio * 4}px;
  margin-right: ${({$ratio}) => $ratio * 9}px;
  background-color: white;
`;

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  font-size:  ${({$ratio}) => $ratio * 10}px;
  color: white;
  width: 100%;
  text-align: left;

  & ${InputRadioButton}:checked + ${RadioIconStyled}::after {
    content: '';
    position: absolute;
    top: ${({$ratio}) => $ratio * 8}px;
    left: ${({$ratio}) => $ratio * 3}px;
    width: ${({$ratio}) => $ratio * 6}px;
    height: 2px;
    transform: rotate(45deg);
    border-radius: 5px;
    background-color: #9E6FC3;
  }

  & ${InputRadioButton}:checked + ${RadioIconStyled}::before {
    content: '';
    position: absolute;
    top: ${({$ratio}) => $ratio * 7}px;
    right: ${({$ratio}) => $ratio * 2}px;
    width: ${({$ratio}) => $ratio * 8}px;
    height: 2px;
    transform: rotate(-45deg);
    border-radius: 5px;
    background-color: #9E6FC3;
  }
`;

const Link = styled.a`
  color: inherit;
`;

const SendBlock = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    opacity: 0.5;
    justify-content: center;
    margin-top: ${({$ratio}) => $ratio * 48}px;

    & svg {
        width: ${({$ratio}) => $ratio * 32}px;
        height: ${({$ratio}) => $ratio * 32}px;
        margin-left: ${({$ratio}) => $ratio * 10}px;
    }
`;

export const Final = () => {
    const ratio = useSizeRatio();
    const [email, setEmail] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSend, setIsSend] = useState(false);
    const [isCorrect, setIsCorrect] = useState(true);
    const [isAgreed, setIsAgreed] = useState(false);

    const emailRegExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    const handleBlur = () => {
        if (email.match(emailRegExp) || !email) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    const handleChange = (e) => {
        if (isSend) return;
        setIsCorrect(true);
        setEmail(e.target.value);
    };

    const handleSubmit = () => {
        if (isSending || isSend) return;
        setIsSending(true);
        const formData = new FormData();
    
        formData.append(EMAIL_ID, email);
    
        const myInit = {
          method: "POST",
          mode: "no-cors",
          body: formData,
        };
    
        const myRequest = new Request(FORM_URL, myInit);
    
        fetch(myRequest)
            .then(() => {
                setIsSend(true);
            })
            .finally(() => {
                setIsSending(false);
            });
      };

    const openUrl = (url) => () => {
        window.open(url, "_blank");
    };

    return (
        <Wrapper $ratio={ratio}>
            <Logo src={logo} alt={""} $ratio={ratio}/>
            <DrawWrapper $ratio={ratio}>
                <ShiningStyled />
                <p>
                    Поздравляем, начало карьерного пути положено!
                </p>
                <p>
                    Оставляй почту для участия в розыгрыше крутых призов от ОТП Банка:
                </p>
                {
                    isSend ? (
                        <SendBlock $ratio={ratio}>
                            <p>Почта отправлена</p>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#C1FF05"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9975 9.6185C22.5914 8.89575 23.6587 8.79129 24.3815 9.38519C25.1043 9.9791 25.2087 11.0465 24.6148 11.7692L16.5553 21.5773C16.4926 21.6537 16.4245 21.7232 16.3521 21.7857C16.271 21.9572 16.1596 22.1179 16.0178 22.2597C15.3563 22.9212 14.2839 22.9212 13.6224 22.2597L7.49619 16.1335C6.83471 15.472 6.83471 14.3995 7.49619 13.738C8.15766 13.0766 9.23012 13.0766 9.8916 13.738L14.6787 18.5252L21.9975 9.6185Z" fill="#342D39"/>
                            </svg>
                        </SendBlock>
                    ) : (
                        <>
                            <EmailWrapper $ratio={ratio}>
                                <Input 
                                    placeholder="example@example.ru"
                                    $ratio={ratio} 
                                    value={email} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <SendBtn 
                                    $ratio={ratio} 
                                    onClick={handleSubmit}
                                    disabled={!isAgreed || !email || !isCorrect || isSend || isSending}
                                >
                                    <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.0018 8.0035L17.2608 1.26251L15.2531 3.27015L21.9941 10.0112L24.0018 8.0035ZM17.2608 16.7375L24.0018 9.9965L21.9941 7.98885L15.2531 14.7298L17.2608 16.7375ZM1.82976 10.4215L22.9906 10.4215V7.57853L1.82976 7.57853V10.4215ZM17.2608 1.26251L16.2496 0.251358L14.242 2.259L15.2531 3.27015L17.2608 1.26251ZM15.2531 14.7298L14.242 15.741L16.2643 17.7633L17.2754 16.7521L15.2531 14.7298ZM23.0053 9L24.0164 10.0111C24.5733 9.45429 24.5733 8.54571 24.0164 7.98885L23.0053 9ZM1.82976 7.57853H0.393639V10.4215H1.82976V7.57853Z" fill="#342D39"/>
                                    </svg>
                                </SendBtn>
                            </EmailWrapper>
                            <RadioButtonLabel $ratio={ratio}>
                                    <InputRadioButton
                                        $ratio={ratio}
                                        type="checkbox"
                                        value={isAgreed}
                                        checked={isAgreed}
                                        onChange={() => setIsAgreed((prevAgreed) => !prevAgreed)}
                                    />
                                    <RadioIconStyled $ratio={ratio}/>
                                    <span>
                                        Я согласен(а) на{"\u00A0"}
                                        <Link
                                        href={"https://fut.ru/personal_data_policy/"}
                                        target="_blank"
                                        >
                                        обработку персональных данных
                                        </Link>{" "}
                                        и получение информационных сообщений
                                    </span>
                                </RadioButtonLabel>
                        </>
                    )
                }
            </DrawWrapper>
            <BlockStyled>
                <p>
                    От успешного старта карьеры тебя отделяет всего одна кнопка.{'\n'}
                    Выбирай <b>программу{'\n'}стажировок или идеальную вакансию</b> на сайте ОТП Банка 
                    и продолжай своё карьерное путешествие!
                </p>
                <ButtonStyled 
                    $ratio={ratio} 
                    onClick={openUrl('https://www.otpbank.ru/internship/?utm_source=fut&utm_medium=game&utm_campaign=game_futuretoday')}
                >
                    На стажировку
                </ButtonStyled>
                <ButtonStyled 
                    type="secondary" 
                    $ratio={ratio}
                    onClick={openUrl('https://hh.ru/employer/4394?utm_source=fut&utm_medium=game&utm_campaign=game_futuretoday')}
                >
                    К вакансиям
                </ButtonStyled>
            </BlockStyled>
        </Wrapper>
    )
}