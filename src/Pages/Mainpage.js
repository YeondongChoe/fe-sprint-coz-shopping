import React from "react";
import { styled } from "styled-components";
import Card from "../Components/Card";
import { useEffect, useState } from 'react';

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
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('key')) || []);
  console.log(items)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://cozshopping.codestates-seb.link/api/v1/products')
      .then(response => response.json())
      .then(data => {
        // 받아온 데이터를 로컬 스토리지에 저장
        localStorage.setItem('key', JSON.stringify(data));
        // console.log(JSON.parse(localStorage.getItem('key')))
      })
      .catch(error => {
        console.error(error);
      })
    }
    return(
        <MainContainer>
            <PreviewSection>
                <Title>상품 리스트</Title>
                <PreviewLi>
                {items.map((item, i) => {
                    return (
                        <Card 
                        key={i}
                        brand_image_url={item.brand_image_url}
                        brand_name={item.brand_name}
                        discountPercentage={item.discountPercentage}
                        follower={item.follower}
                        id={item.id}
                        image_url={item.image_url}
                        price={item.price}
                        sub_title={item.sub_title}
                        title={item.title}
                        type={item.type}
                        ></Card>
                    );
                }).slice(0, 4)}
                </PreviewLi>              
                </PreviewSection>
            <PreviewSection>
                <Title>북마크 리스트</Title>
                <PreviewLi>
                {items.map((item, i) => {
                    return (
                        <Card 
                        key={i} 
                        brand_image_url={item.brand_image_url}
                        brand_name={item.brand_name}
                        discountPercentage={item.discountPercentage}
                        follower={item.follower}
                        id={item.id}
                        image_url={item.image_url}
                        price={item.price}
                        sub_title={item.sub_title}
                        title={item.title}
                        type={item.type}
                        ></Card>
                    );
                }).slice(0, 4)}
                </PreviewLi>  
                </PreviewSection>
        </MainContainer>
    )
}

export default Main;