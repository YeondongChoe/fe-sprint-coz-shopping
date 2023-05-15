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
`;

const DropdownMenuItem = styled.li`
  padding: 0.5rem;
  cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
  transition: all 0.3s ease-in-out;
  text-align: center;
  border-bottom: ${({none}) => (none ? 'none' : '1px solid rgba(0, 0, 0, 0.1)')};

  /* &:hover {
    background-color: #eee;
  } */
`;

const Icon = styled.image`
  display: flex;
  cursor: pointer;
  align-items: baseline;
  width: 30px;
  height: 20px;
`;

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

//   const handleMenuItemClick = (e) => {
//     setIsOpen(false);
//   };

  return(
    <>
      <Icon><img src="아이콘.jpg" alt="아이콘" onClick={toggleDropdown}></img></Icon>
      <DropdownMenu isOpen={isOpen}>
        <DropdownMenuItem disabled>OOO님, 안녕하세요!</DropdownMenuItem>
        <DropdownMenuItem> 상품리스트 페이지</DropdownMenuItem>
        <DropdownMenuItem none>북마크 페이지</DropdownMenuItem>
      </DropdownMenu>
    </>
  );
}

export default Dropdown;