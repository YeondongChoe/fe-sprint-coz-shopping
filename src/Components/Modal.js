import React, {useState} from "react";
import { styled, Styled } from "styled-components";

import BookmarkOn from '../Source/bookmark_on.svg';
import BookmarkOff from '../Source/bookmark_off.svg';
import CloseBtnIcon from '../Source/CloseBtn.svg';

const ModalContainer = styled.div`
  position: fixed;
  top:0; left: 0; right: 0; bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(360deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.3) 100%);
`

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 744px;
  height: 480px;
  border-radius: 12px;
`;

const ModalBookmarkicon = styled.span`
  display: flex;
  justify-content: start;
  width: 24px;
  height: 24px;
  border: 10%;
  position: absolute;
  cursor: pointer;
  bottom: 6%;
  left: 23px;
`;

const Title = styled.h3`
  width: 644px;
  height: 30px;
  font-size: 24px;
  line-height: 29px;
  position: absolute;
  bottom: 5%;
  left: 55px;
  color: white;
  text-shadow : 0px 0px 4px rgba(0, 0, 0, 0.1);
`;

const CloseBtn = styled.img`
  top: 5%;
  right: 3%;
  width: 23px;
  height: 23px;
  text-shadow : 0px 0px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: absolute;
  color: white;
`;

const Modal = ({ selectedItem, closeModal }) => {
    //console.log(item)

    const [isOn, setIsOn] = useState(false);
    const ModalBookmarkClick = () => {
          setIsOn(!isOn);
        }
        
    return (
      <ModalContainer onClick={closeModal}>
        <ModalContent onClick={(event) =>event.stopPropagation()}>
          <Image src={selectedItem.img} alt='item_img'/>
          <ModalBookmarkicon onClick={ModalBookmarkClick}>
          {isOn ? (<img src={BookmarkOn} alt="bookmark_on" />) : (<img src={BookmarkOff} alt="bookmark_on" />)}
          </ModalBookmarkicon>
          <Title>{selectedItem.name}</Title>
          <CloseBtn src={CloseBtnIcon} alt="CloseBtn" onClick={closeModal}></CloseBtn>
          </ModalContent>
      </ModalContainer>
    );
  };
  
  export default Modal;