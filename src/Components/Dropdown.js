import React, {useState} from "react";
import { styled, Styled } from "styled-components";


const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  right: 30px;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 0px 3px rgba(0, 0, 30, 0.3);
  opacity: ${({isOpen}) => (isOpen ? 1 : 0)};
  pointer-events: ${({isOpen}) => (isOpen ? 'auto': 'none')};
  transform: ${({isOpen}) => (isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  transition: all 0.3s ease-in-out;
  z-index: 9999;
`;

const DropdownBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const MenuIcon = styled.img`
  display: flex;
  cursor: pointer;
  align-items: baseline;
  width: 30px;
  height: 20px;
`;

const DropdownMenuList = styled.li`
  padding: 1rem;
  cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
  transition: all 0.3s ease-in-out;
  border-bottom: ${({none}) => (none ? 'none' : '1px solid rgba(0, 0, 0, 0.1)')};
  display: flex;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;

const MenuTitle = styled.span`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
`;

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const openDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return(
    <>
      <MenuIcon src="icon.jpg" alt="아이콘" onClick={openDropdown}></MenuIcon>
      <DropdownMenu isOpen={isOpen}>
          <DropdownMenuList disabled>OOO님, 안녕하세요!</DropdownMenuList>
          <DropdownMenuList>
            <Icon src="ProductIcon.png" alt="ProductIcon"></Icon>
            <MenuTitle>상품리스트 페이지</MenuTitle>
          </DropdownMenuList>
          <DropdownMenuList none>
          <Icon src="BookmarkIcon.png" alt="BookmarkIcon"></Icon>
            <MenuTitle>북마크 페이지</MenuTitle>
            </DropdownMenuList>
        </DropdownMenu>
      {isOpen && <DropdownBackground onClick={closeDropdown} />}
    </>
  );
}

export default Dropdown;