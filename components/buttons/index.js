import { css } from 'glamor'
import { Button } from 'glamorous'
import { Button as SemanticButton } from 'semantic-ui-react'
import { GREEN } from 'constants'

export const MobileMenuButton = props => (
  <Button
    {...props}
    backgroundColor="transparent"
    border="none"
    color="#fff"
    lineHeight="30px"
    cursor="pointer"
  />
)

const primaryButtonClass = css({
  '.ui.button': {
    backgroundColor: GREEN,
    border: 'none',
    color: '#fff',
    borderRadius: '10px',
    fontSize: '18px',
    fontFamily: `'Montserrat', sans-serif`,
    width: '300px',
    fontWeight: '700',
    lineHeight: '30px',
    paddingLeft: '42px',
    paddingRight: '42px',
    cursor: 'pointer',
    '> i.icon': {
      color: '#fff',
      float: 'right',
      marginLeft: '5px!important',
      fontSize: '1.8em',
    }
  }
})

export const PrimaryButton = props => (
  <SemanticButton {...props} className={`${primaryButtonClass}`} />
)

const secondaryButtonClass = css({
  '.ui.button': {
    backgroundColor: '#282828',
    border: 'none',
    color: '#fff',
    textTransform: 'uppercase',
    lineHeight: '30px',
    '> i.icon': {
      color: '#fff'
    }
  }
})

export const SecondaryButton = props => (
  <SemanticButton {...props} className={`${secondaryButtonClass}`} />
)
