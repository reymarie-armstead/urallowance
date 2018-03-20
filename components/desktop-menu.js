import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Link from 'next/link'
import { Img } from 'glamorous'
import { css } from 'glamor'

const menuClass = css({
  borderBottom: 'transparent!important',
  '& .item': { color: '#fff!important', },
  '& .active': { borderColor: '#6eda48!important' },
})

const menuMenuClass = css({
  position: 'absolute',
  right: '10px',
  top: '25px',
  display: 'none!important',
  '@media(min-width: 1080px)': {
    display: 'flex!important',
  }
})

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div key="desktopmenu">
        <Menu pointing secondary className={`${menuClass}`}>
          <Link href="/" prefetch>
            <a>
              <Img src="/static/img/logo.svg" height="65px" />
            </a>
          </Link>
          <Menu.Menu position='right' className={`${menuMenuClass}`}>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name='Pre Sale Contact Form' active={activeItem === 'Pre Sale Contact Form'} onClick={this.handleItemClick} />
            <Menu.Item name='White Paper' active={activeItem === 'White Paper'} onClick={this.handleItemClick} />
            <Menu.Item name='URA Presentation' active={activeItem === 'URA Presentation'} onClick={this.handleItemClick} />
            <Menu.Item name='The Platform Map' active={activeItem === 'The Platform Map'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>

      </div>
    )
  }
}