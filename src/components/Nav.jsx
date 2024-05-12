import { Navs, NavLinks, Logo, Li } from './styles'

export default function Nav() {
  return (
    <Navs>
      <Logo>AnimFo</Logo>

      <NavLinks>
        <Li>Home</Li>
        <Li>Films</Li>
        <Li>Series</Li>
        <Li>FAQ</Li>
      </NavLinks>

      <button>Register</button>
    </Navs>
  )
}
