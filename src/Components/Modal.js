import React, {useState} from "react";
import { styled, Styled } from "styled-components";

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

const Title = styled.h3`
  width: 644px;
  height: 30px;
  font-size: 24px;
  line-height: 29px;
  position: absolute;
  bottom: 5%;
  left: 50px;
  color: blue;
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

const Modal = ({ item, onClose }) => {
    return (
      <ModalContainer>
          <ModalContent>
            <Image src={item.brand_image_url || item.image_url} alt={item.title || item.brand_name} />
            <Title>{item.title || item.brand_name}</Title>
            <CloseBtn src="CloseBtn.png" alt="CloseBtn" onClick={onClose}></CloseBtn>
          </ModalContent>
      </ModalContainer>
    );
  };
  
  export default Modal;