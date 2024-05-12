import Nav from './components/Nav'
import Header from './components/header/Header'
import { GlobalStyle } from './components/styles'

import Body from './components/body/Body'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Header />
      <Body />
    </>
  )
}
