import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        box-sizing: border-box;
    }
    body{
        font-family: "Chelsea Market", system-ui;
        font-style: normal;
    }
`

export const Navs = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  width: 30%;
`

export const Li = styled.li`
  &:hover {
    border-bottom: solid red 2px;
    cursor: pointer;
  }
`

export const Logo = styled.span`
  color: red;
  font-size: 30px;
  font-weigth: bold;
`

export const Head = styled.header`
  width: 100%;
  height: 50%;
  position: relative;
`

export const HeadImg = styled.img`
  width: 100%;
  height: 800px;
  object-fit: center;
  border: solid;
  margin: 0 auto;
`

export const Div = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.7) 70%,
    rgba(241, 32, 32, 0.452)
  );
  position: absolute;
  inset: 0;
`
