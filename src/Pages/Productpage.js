import { styled } from "styled-components";
import Card from "../Components/Card";
import { useEffect, useState, useRef } from 'react';

import AllIcon from '../Source/AllIcon.svg';
import ItemIcon from '../Source/ItemIcon.svg';
import CategoryIcon from '../Source/CategoryIcon.svg';
import ExhibitionIcon from '../Source/ExhibitionIcon.svg';
import BrandIcon from '../Source/BrandIcon.svg';

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const PreviewSection = styled.section`
  width: 100%;
  height: 100%;
  margin-left: 76px;
  margin-top: 24px;
  /* margin-bottom: -32px; */
`

const PreviewLi = styled.section `
  width: 100%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
`

const TabSection = styled.section`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -20px;
  margin-top: 12px;
`;

const FilterTab = styled.div`
  width: 100px;
  height: 110px;
  margin-right: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FilterIcon = styled.img`
  width: 90px;
  height: 90px;
  margin-bottom: 7px;
`;

const FilterTitle = styled.h2`
  font-size: 18px;
    
`

function Productpage() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const bottomRef = useRef(null);
  
      
    useEffect(() => {
      loadItems();
    }, []);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadItems();
          }
        },
        { threshold: 0.30, rootMargin: '100px' }
      );
  
      if (bottomRef.current) {
        observer.observe(bottomRef.current);
      }
  
      return () => {
        if (bottomRef.current) {
          observer.unobserve(bottomRef.current);
        }
      };
    }, [bottomRef]);
  
    const loadItems = () => {
      fetch('http://cozshopping.codestates-seb.link/api/v1/products?page=' + page)
        .then((response) => response.json())
        .then((data) => {
          setItems((prevItems) => [...prevItems, ...data]);
          setPage((prevPage) => prevPage + 1);
        })
        .catch((error) => {
          console.error(error);
        });
    };

      return(
        <MainContainer>
          <TabSection>
            <FilterTab>
              <FilterIcon src={AllIcon} alt="전체버튼"></FilterIcon>
              <FilterTitle>전체</FilterTitle>
            </FilterTab>
            <FilterTab>
              <FilterIcon src={ItemIcon} alt="상품버튼"></FilterIcon>
              <FilterTitle>상품</FilterTitle>
            </FilterTab>
            <FilterTab>
              <FilterIcon src={CategoryIcon} alt="카테고리버튼"></FilterIcon>
              <FilterTitle>카테고리</FilterTitle>
            </FilterTab>
            <FilterTab>
              <FilterIcon src={ExhibitionIcon} alt="기획전버튼"></FilterIcon>
              <FilterTitle>기획전</FilterTitle>
            </FilterTab>
            <FilterTab>
              <FilterIcon src={BrandIcon} alt="브랜드버튼"></FilterIcon>
              <FilterTitle>브랜드</FilterTitle>
            </FilterTab>
          </TabSection>
          <PreviewSection>
            <PreviewLi>
                {items.slice(0, page * 4).map((item, index) => 
                 <Card key={index} item={item}/>
                )}
            </PreviewLi>
          </PreviewSection>
          <div ref={bottomRef} />
        </MainContainer>
    )
}

export default Productpage;