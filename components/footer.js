import Link from 'next/link'
import { Div, Footer, Img } from 'glamorous'
import { Grid } from 'semantic-ui-react'
import { css } from 'glamor'

const footerClass = css({
  ' ul':{
    listStyle: 'none',
    padding: '0',
    '@media(min-width: 768px)': {
      paddingLeft: '15px',
    }
  },
  ' h2':{
    fontSize:'42px',
  },
  ' li':{
    fontSize:'22px',
    fontWeight:'300',
    lineHeight: '2',
  }
})

export default () => [
    <Footer
      backgroundColor="#2852ea"
      color="#fff"
      bottom="0px"
      left="0px"
      textAlign="left"
      width="100vw"
      key="footer"
    >
      <Grid className={`${footerClass}`}>
        <Grid.Row>
          <Grid.Column
            mobile={16}
            tablet={8}
            computer={4}
          >
            <ul>
            <h2>Product</h2>
              <li>Get Started</li>
              <li>Program Guide</li>
              <li>Presentation</li>
              <li>Download</li>
            </ul>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={8}
            computer={4}
          >
            <ul>
            <h2>Contact</h2>
              <li>URAllowance, LLC</li>
              <li>Spruce Creek Dr.Las Vegas 89135</li>
              <li>fsc@urallowance.com</li>
              <li>+1 (702)279-5892</li>
            </ul>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={8}
            computer={3}
          >
            <ul>
            <h2>About</h2>
              <li>Blog</li>
              <li>Team</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={8}
            computer={5}
          >
            <ul>
              <Link href="/" prefetch>
                <a>
                  <Img src="/static/img/logo.svg" />
                </a>
              </Link>
              <li>Copyright 2018</li>
              <li>Terms & Condations</li>
              <li>Policy</li>
            </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Footer>
]
