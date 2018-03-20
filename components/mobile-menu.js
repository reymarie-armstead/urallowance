import { pushRotate as Menu } from 'react-burger-menu'
import { Router } from 'routes'
import { login } from 'services/auth'
import { MobileMenuButton } from 'components/buttons'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '15px',
    top: '22px',
    zIndex: 2000
  },
  bmBurgerBars: {
    background: '#444444',
    borderRadius: '3px'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#282828',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMenuWrap: {
    zIndex: 3000
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default ({ isAuthenticated }) => {
  const buttons = [
    <MobileMenuButton onClick={() => Router.pushRoute('/')} key="home">
      Home
    </MobileMenuButton>,
    <MobileMenuButton
      onClick={() => Router.pushRoute('/contact')}
      key="contact"
    >
      Contact Me
    </MobileMenuButton>
  ]

  if (isAuthenticated) {
    buttons.push(
      <MobileMenuButton
        onClick={() => Router.pushRoute('/logout')}
        key="signout"
      >
        Signout
      </MobileMenuButton>
    )
  } else {
    buttons.push(
      <MobileMenuButton onClick={login} key="signin">
        Signin
      </MobileMenuButton>,
      <MobileMenuButton onClick={login} key="signup">
        Signup
      </MobileMenuButton>
    )
  }

  return (
    <Menu
      pageWrapId="pageWrap"
      outerContainerId="outerContainer"
      right
      styles={styles}
    >
      {buttons}
    </Menu>
  )
}
