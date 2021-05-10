import {useState} from 'react'
import styled from 'styled-components'
import RightNavBar from './RightNavBar'

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 14px;
  right: 28px;
  margin: 24px 24px 0px 0px;
  z-index: 2;
  display: none;
  @media (max-width: 1132px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #f20f0f;
    //border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor:pointer;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {

    const [open, setOpen] = useState(false)
  
    return (
      <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <RightNavBar open={open} setOpen={setOpen}/>
      </>
    )
  }
  
  export default Burger