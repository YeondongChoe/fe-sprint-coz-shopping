import React from "react";
import { styled } from "styled-components";


const CardImg = styled.article`
  width: 264px;
  height: 130px;
  margin: 10px;
`

const CardTitle = styled.h3`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
`

const ColorNum = styled.span`
  color: blue;
  font-size: 16px;
`

const Subtitle = styled.span`
  display: flex;
  justify-content: ${({number}) => (number ? 'end': 'none')};
  font-size: 16px;
`

function Card() {
    return(
        <>
          <CardImg><img src="이미지.png" alt="card"></img>
            <CardTitle>애플워치 스트랩 <ColorNum>15%</ColorNum>
            </CardTitle>
            <Subtitle number>12,900원</Subtitle>
          </CardImg>

          <CardImg><img src="이미지(1).png" alt="card"></img>
          <CardTitle>#산악용품</CardTitle>
          </CardImg>

          <CardImg><img src="이미지(2).png" alt="card"></img>
            <CardTitle>여행을 떠나요</CardTitle>
            <Subtitle>여행 용품 할인전</Subtitle>
          </CardImg>

          <CardImg><img src="이미지(3).png" alt="card"></img>
            <CardTitle>롯데아울렛 <span>관심고객수</span>
            </CardTitle>
            <Subtitle number>123,456</Subtitle>
          </CardImg>
        </>
    )
}

export default Card;