import React from "react";
import { styled} from "styled-components";

const FooterSection = styled.footer`
  position: fixed;
  width: 100vw;
  height: 60px;
  background-color: white;
  color: #888888;
  font-size: 12px;
  bottom: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.1);
`

function Footer() {
    return(
        <FooterSection>
          개인정보 처리방침 | 이용 약관 
          <br/>All rights reserved @ Codestates  
        </FooterSection>
    )
}

export default Footer;