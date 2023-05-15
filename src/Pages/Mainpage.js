import React from "react";
import { styled } from "styled-components";
import Card from "./Card";

const MainContainer = styled.main`
  width: 100%;
  height: 695px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PreviewSection = styled.section`
  width: 100%;
  height: 45%;
  margin-left: 76px;
  margin-top: 24px;
  margin-bottom: -32px;
`
const Title = styled.h2`
  font-size: 24px;
`
const PreviewLi = styled.section `
  width: 100%;
  height: 80%;
  display: flex;
`

function Main() {
    return(
        <MainContainer>
            <PreviewSection>
                <Title>상품 리스트</Title>
                <PreviewLi>
                    <Card></Card>
                </PreviewLi>              
                </PreviewSection>
            <PreviewSection>
                <Title>북마크 리스트</Title>
                <PreviewLi>
                    <Card></Card>
                </PreviewLi>  
                </PreviewSection>
        </MainContainer>
    )
}

export default Main;