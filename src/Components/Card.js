import React, { useState } from "react";
import { styled } from "styled-components";

import BookmarkOn from '../Source/bookmark_on.svg';
import BookmarkOff from '../Source/bookmark_off.svg';

import Modal from "../Components/Modal";

const CardImg = styled.article`
  width: 264px;
  height: 210px;
  margin: 10px;
  margin-bottom: 45px;
`

const Img = styled.img`
  width: 264px;
  height: 210px;
  border-radius: 12px;
  cursor: pointer;
`

const Bookmarkicon = styled.div`
  display: flex;
  justify-content: end;
  margin-top: -35px;
  margin-bottom: 13px;
  margin-right: 8px;
  cursor: pointer;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
`

const Description = styled.span`
  color: ${({discountPercentage}) => (discountPercentage ? 'blue': 'none')};
  font-size: 16px;
`

const Subtitle = styled.span`
  display: flex;
  justify-content: ${({price, follower}) => (price || follower ? 'end': 'none')};
  font-size: 16px;
`
function Card(props) {
  const {brand_image_url,
    brand_name,
    discountPercentage,
    follower,
    id,
    image_url,
    price,
    sub_title,
    title,
    type} = props.item;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const openModal = (img, name) => {
    const item = {img, name}
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const [isOn, setIsOn] = useState(false);

  const BookmarkClick = () => {
        setIsOn(!isOn);
      }

    return(
        <>
          <CardImg>
            <Img src={image_url || brand_image_url} alt="card" 
            onClick={() => {openModal(image_url || brand_image_url, title || brand_name)}}>
            </Img>
            <Bookmarkicon onClick={BookmarkClick}>
              {isOn ? (<img src={BookmarkOn} alt="bookmark_on" />) : (<img src={BookmarkOff} alt="bookmark_on" />)}        
            </Bookmarkicon>
            <CardTitle>
            {(() => {
              if(type === "Category") {
                  return `#${title}`
              } else {
                  return title || brand_name
              };
          })()}
          
            {(() => {
            if (discountPercentage) {
              return <Description discountPercentage={discountPercentage}>{discountPercentage}%</Description>;
            } else if(follower) {
                return <Description>관심고객수</Description>;
            }else {
              return null;
            }
          })()}
            </CardTitle>
            <Subtitle price={price} follower={follower}>
            {(() => {
            if (price) {
              return Number(price).toLocaleString() + "원";
            } else if (follower) {
                return follower.toLocaleString();
            } else {
              return sub_title;
            }
          })()}
            </Subtitle>
          </CardImg>
          {isModalOpen && (<Modal selectedItem={selectedItem} closeModal={closeModal}/>
                )}
        </>
    )
}

export default Card;