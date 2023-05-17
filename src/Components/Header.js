import React from "react";
import { styled} from "styled-components";
import {useState} from 'react'
import Dropdown from "./Dropdown";

const HeaderSection = styled.section`
  position: sticky;
  width: 100vw;
  height: 60px;
  background-color: white;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`

const HeaderBar = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px;
`
const HeaderBarLeft = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  margin-left: 30px;
`
const HeaderBarRight = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
`

const Img = styled.image`
  width: 55px;
  height: 30px;
  margin-right: 12px;
  cursor: pointer;
`
const Title = styled.span`
  font-size: 32px;
  line-height: 28px;
`

function Header() {
    return(
        <HeaderSection>
            <HeaderBar>
                <HeaderBarLeft>
                    <Img><img src="logo.jpg" alt="logo"></img></Img>
                    <Title>COZ Shopping</Title>
                </HeaderBarLeft>
                <HeaderBarRight>
                    <Dropdown></Dropdown>
                </HeaderBarRight>
            </HeaderBar>
        </HeaderSection>
    )
}

export default Header;