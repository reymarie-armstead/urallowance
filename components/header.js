import PropTypes from 'prop-types'
import Link from 'next/link'
import { Header, Div, Img, Button } from 'glamorous'
import { HEADER_HEIGHT } from 'constants'
import DesktopMenu from 'components/desktop-menu'

export default () => [
  <Header
    padding="10px"
    position="fixed"
    textAlign="left"
    top="0"
    left="0"
    width="100%"
    zIndex="1000"
    transition=".75s all"
    transitionDelay=".25s"
    key="header"
  >
    <Div>
      <DesktopMenu />
    </Div>
  </Header>,
  <Div height={HEADER_HEIGHT} key="clearHeader" />
]
