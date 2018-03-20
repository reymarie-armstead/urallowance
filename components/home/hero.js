import Link from 'next/link'
import { Grid, Progress, Segment } from 'semantic-ui-react'
import { Div, Img} from 'glamorous'
import { css } from 'glamor'
import { Text } from 'axs'
import { Responsive } from 'semantic-ui-react'
import { GREEN } from 'constants'
import { PrimaryButton } from 'components/buttons'

const heroClass = css({
  backgroundImage: `url('/static/img/herobg.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  marginTop: '-75px!important',
  paddingBottom: '100px!important',
  '@media(min-width: 768px)': {
    paddingTop: '220px!important',
  },
  ':after':{
    content:'""',
    backgroundImage: `url('/static/img/curveafter.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '8vw 0',
    position: 'absolute',
    left: '0',
    right: '0',
    bottom: '0',
  }
})

const tokendetails = css({
  backgroundImage: `url('/static/img/tokenbg.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  padding: '20px',
  borderRadius: '8px',
  marginTop: '40px',
  marginBottom: '40px',
  display: 'inline-block',
  ' p':{
    float: 'left',
    width: '290px',
    fontSize: '24px',
  }
})

const progressClass = css({
  backgroundColor: '#fff!important',
  borderBottomRightRadius: '18px!important',
  borderTopRightRadius: '18px!important',
  ' .bar':{
    borderBottomRightRadius: '18px!important',
    borderTopRightRadius: '18px!important',
    backgroundColor: '#95acff!important',
    position: 'relative',
    ':after':{
      content:'""',
      position: 'absolute',
      backgroundColor: '#1ac989',
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      top: '-5px',
      right: '0',
    }
  }
})

const aboutClass = css({
  padding: '120px 40px!important', 
})


const testimonial = css({
  ' .segment':{
    padding: '150px 100px',
    boxShadow: '0px 1px 12px 0 rgba(34,36,38,.2)',
    position: 'relative',
    border: '0',
    ':before':{
      content:'""',
      backgroundImage: `url('/static/img/quote.png')`,
      position: 'absolute',
      width: '130px',
      height: '100px',
      left: '50px',
      top: '-30px',
    },
  },
  ' h1':{
    color: '#1b1b5b',
    fontSize: '45px',
  },
  ' p':{
    color: '#4a4a4a',
    fontSize: '24px',
    marginBottom: '50px',
  },
  ' a':{
    
  }
})

const testiauthor = css({
  float: 'right',
  ' p':{
    textAlign: 'left',
    color: '#1b1b5b',
    fontSize: '18px',
    position: 'relative',
    ':before':{
      content:'""',
      width: '75px',
      height: '75px',
      borderRadius: '50%',
      backgroundColor: '#2852ea',
      position: 'absolute',
      left: '-100px',
      top: '-20px',
      },
    ' span':{
      color: '#bdbdbd',
    }
  },
})


const aboutURA = css({
  backgroundColor: '#1b1b5b',
  marginTop: '30px',
  padding: '30px',
  ' h1':{
    fontSize: '30px',
    fontFamily: `'Montserrat', sans-serif`,
    '@media(min-width: 768px)': {
      fontSize: '42px'
    },
  },
  ' p':{
    fontSize: '16px',
    fontWeight: '300',
    marginBottom: '80px',
    '@media(min-width: 768px)': {
      fontSize: '22px'
    },
  },
  ' a':{
    color: '#6d8cfe',
    fontSize: '14px',
    fontWeight: '300',
    position: 'absolute',
    bottom: '30px',
  }
})

const partnersClass = css({
  padding: '30px!important',
  ' h1':{
    color: '#1b1b5b',
    fontFamily: `'Montserrat', sans-serif`,
    fontSize: '40px',
    '@media(min-width: 768px)': {
      fontSize: '52px',
    },
  },
  ' p':{
    color: '#1b1b5b',
    fontSize: '18px',
    fontWeight: '300',
    marginBottom: '40px',
  }
})

const teamClass = css({
  paddingTop: '100px!important',
  paddingBottom: '200px!important',
  ' h1':{
    color: '#1b1b5b',
    fontWeight: '600',
    marginBottom: '10px',
    textAlign: 'center',
    fontSize: '40px',
    '@media(min-width: 768px)': {
      fontSize: '52px',
    },
  },
  ' h2':{
    fontSize: '32px',
    color: '#1b1b5b',
    fontWeight: '600',
    marginBottom: '10px',
  },
  ' p':{
    fontSize: '14px',
    color: '#1b1b5b',
    fontWeight: '300',
    marginBottom: '20px',
  }
})

const teamimg = css({
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  border: 'solid 1px #1b1b5b',
  position: 'relative',
  overflow: 'hidden',
  margin: '50px auto 0',
})

const roadtripClass = css({
  ' h1':{
    color: '#1b1b5b',
    fontSize: '42px',
    '@media(min-width: 768px)': {
      fontSize: '72px',
    },
  }
})

const chartClass = css({
  backgroundColor: '#f1f4f6',
  position: 'relative',
  marginTop: '13vw!important',
  ':before':{
    content:'""',
    backgroundImage: `url('/static/img/bgbefore.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '21vw 0',
    position: 'absolute',
    left: '0',
    right: '0',
    top: '-18vw',
  },
  ' h1':{
    color: '#1b1b5b',
    fontSize: '42px',
    '@media(min-width: 768px)': {
      fontSize: '72px',
    },
  }
})

const commentClass = css({
  backgroundColor: '#f1f4f6',
  paddingTop: '50px!important',
  paddingBottom: '0px!important',
  ' h1':{
    color: '#1b1b5b',
    fontSize: '34px',
    fontWeight: '600',
    fontFamily: `'Montserrat', sans-serif`,
  },
  ' p':{
    color: '#1b1b5b',
    fontSize: '20px',
    fontWeight: '300',
    float: 'right',
  }
})

const tokenClass = css({
  backgroundColor: '#fff',
  backgroundImage: `url('/static/img/bg-1.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  backgroundRepeat: 'no-repeat',
  paddingTop: '200px!important',
  paddingBottom: '100px!important',
})

const signups = css({
  backgroundColor: '#f1f4f6',
  backgroundImage: `url('/static/img/bg-2.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  backgroundRepeat: 'no-repeat',
  height: '500px',
  paddingBottom: '5vw!important',
  marginTop: '0px!important',
  '@media(min-width: 768px)': {
    height: '60vw',
  },
  '@media(min-width: 992px)': {
    height: '55vw',
  },
  '@media(min-width: 1200px)': {
    height: '600px',
  },
  ' p':{
    fontSize: '30px',
    maxWidth: '850px',
    margin: '0 auto 40px',
    fontWeight: '600',
    '@media(min-width: 768px)': {
      fontSize: '5vw',
    },
    '@media(min-width: 992px)': {
      fontSize: '5vw',
    },
    '@media(min-width: 1200px)': {
      fontSize: '45px',
    },
  }
})

const cryptokid = css({
  padding: '40px!important',
  ' p':{
    fontSize: '22px',
    color: '#282828',
    maxWidth: '520px',
    marginTop: '30px',
  },
  ' h1':{
    fontFamily: `'Montserrat', sans-serif`,
    color: '#282828',
    fontWeight: '700',
    fontSize: '42px',
    marginTop: '20px',
  },
  ' a':{
    fontSize: '16px',
    fontWeight: '600',
    color: '#2852ea',
  }
})

const buttons = [
  <PrimaryButton content="Watch our demo" icon="play circle" key="watchHero" />
]

const buttonsjoin = [
  <PrimaryButton content="Join Now" key="joinNow" />
]

const buttonssignup = [
  <PrimaryButton content="Sign Up Today" key="signup" />
]

const heroContent = [
  <Text
    is="h1"
    css={{ color: '#fff', marginBottom: '10px' }}
    f={['46px', '48px', '50px', '52px']}
    key="slogan"
  >
    Family-Smart Contracts can solidify the unity of UR-Family 
  </Text>,
  <Text
    is="p"
    css={{ color: '#fff', lineHeight: '1.8em' }}
    pb={['15px']}
    f={['1rem', '1.2rem', '22px']}
    key="slogan2"
  >
    (your family) while simultaneously embracing the inevitable future of cryptocurrency.
  </Text>
]

const heroContentLarge = [...heroContent, buttons]

const urkidsContent = [
  <Text
    is="h1"
    css={{ color: '#1b1b5b', marginBottom: '15px', fontWeight: '600' }}
    f={['26px', '28px', '40px', '42px']}
    key="urkids"
  >
    OUR future and the future for UR-kids (your kids) will be entangled with cryptocurrency.
  </Text>,
  <Text
    is="p"
    css={{ color: '#1b1b5b', lineHeight: '1.8em', fontWeight: '700'}}
    f={['18px', '20px', '22px']}
    key="urkids2"
  >
    By getting the FAMILY involved we will bring back Old School responsibilities, instilling an Old School sense of PRIDE for what ONE has EARNED.
  </Text>,
  <Text
    is="p"
    css={{ color: '#23235f', lineHeight: '1.8em', fontWeight: '300' }}
    pb={['15px']}
    f={['14px', '16px', '18px']}
    key="urkids3"
  >
    UR-Allowance (your allowance) is a 2-sided, crypto-based platform powered by the UR-Allowance token, URA, an Erc-20 token. One side is for parents and one side for kids. Registration is as simple as entering your Ethereum address. We understand the importance of privacy. 
  </Text>
]

const tokenContent = [
  <Text
    is="h1"
    css={{ color: '#fff', marginBottom: '10px', fontWeight: '600' }}
    pb={['15px']}
    f={['26px', '28px', '30px', '32px']}
    key="uratoken"
  >
    With What? <br />UR-Allowance Token (URA) 
  </Text>,
  <Text
    is="p"
    css={{ color: '#fff', lineHeight: '1.8em', fontWeight: '300' }}
    pb={['15px']}
    f={['14px', '16px', '18px']}
    key="uratoken2"
  >
    UR-Allowance (your allowance) is a 2-sided, crypto-based platform powered by the UR-Allowance token, URA, an Erc-20 token. One side is for parents and one side for kids. Registration is as simple as entering your Ethereum address. We understand the importance of privacy. Especially when your children are part of the equation. That is one of the many reasons why we are introducing Family-Smart Contracts. Bringing the Family together again while bridging the gaps between being responsible, staying safe, and having a good time.
  </Text>
]

export default () => [
  <Div key="body">
    <Grid className={`${heroClass}`} padded={false}>
      <Grid.Row>
        <Grid.Column tablet={8} computer={8} centered="true" verticalAlign="bottom" only="tablet computer">
          <Img src="/static/img/phone.png" display="block" maxWidth="100%" margin="auto"/>
        </Grid.Column>
        <Grid.Column verticalAlign="top" mobile={16} tablet={8} computer={6}>
          {heroContentLarge}
          <br />
          <div className={`${tokendetails}`}>
            <h5>Token Details</h5>
            <p>Symbol = <strong>URA</strong></p>
            <p>Supply = <strong>1,000,000,000</strong></p><br />
            <p>Name = <strong>URAllowance</strong></p>
            <p>Decimals = <strong>18</strong></p>
          </div>
          <Text 
            is="p"
            f={['18px', '22px', '25px']}
          >
            Funding Goals  <strong>Hard Cap = 22,500 Ethereum (ETH)</strong>
          </Text>
          <Progress className={`${progressClass}`} percent={80} />
          <Text 
            is="p"
            css={{ fontWeight: '300', float: 'right' }}
            f={['16px', '20px', '22px']}
            >This ICO will only last for  
            <Text 
              is="span" 
              css={{ color: '#1de199', fontWeight: '700', marginLeft: '8px' }}
            >
              6 weeks
            </Text>
          </Text>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid>
      <Grid.Row>
        <Grid.Column tablet={8} computer={8} centered="true" verticalAlign="middle" only="tablet computer">
          <Img src="/static/img/img2.png" display="block" maxWidth="100%" marginLeft="-130px" />
        </Grid.Column>
        <Grid.Column verticalAlign="middle" mobile={16} tablet={8} computer={5}>
          {urkidsContent}
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid centered className={`${tokenClass}`}>
      <Grid.Row>
        <Grid.Column verticalAlign="middle" textAlign="center" mobile={16} tablet={12} computer={10}>
          {tokenContent}
          {buttonsjoin}
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid centered className={`${aboutClass}`}>
      <Grid.Row stretched>
        <Grid.Column textAlign="left" mobile={16} tablet={8} computer={4}>
          <div className={`${aboutURA}`}>
            <Img src="/static/img/icon-settings.png" display="block" maxWidth="100%" margin="0 auto"/>
            <h1>URAllowance Platform</h1>
            <p>URAllowance (your allowance) is a 2-sided, crypto-based platform powered by the URAllowance token, URA, an ERC-20 token. the ICO is finished.</p>
            <Link href="/">
              <a>READ MORE</a>
            </Link>
          </div>
        </Grid.Column>
        <Grid.Column textAlign="left" mobile={16} tablet={8} computer={4}>
          <div className={`${aboutURA}`}>
            <Img src="/static/img/icon-family.png" display="block" maxWidth="100%" margin="0 auto"/>
            <h1>Family-Smart Contracts</h1>
            <p>By getting the FAMILY involved we will bring back Old School responsibilities, instilling an Old School sense of PRIDE for what ONE has EARNED.</p>
            <Link href="/">
              <a>READ MORE</a>
            </Link>
          </div>
        </Grid.Column>
        <Grid.Column textAlign="left" mobile={16} tablet={8} computer={4}>
          <div className={`${aboutURA}`}>
            <Img src="/static/img/icon-school.png" display="block" maxWidth="100%" margin="0 auto"/>
            <h1>Getting Schools Involved</h1>
            <p>By getting the PTA involved we can use UR-Allowance to reward students for their participation in fundraisers. </p>
            <Link href="/">
              <a>READ MORE</a>
            </Link>
          </div>
        </Grid.Column>
        <Grid.Column textAlign="left" mobile={16} tablet={8} computer={4}>
          <div className={`${aboutURA}`}>
            <Img src="/static/img/icon-dollar.png" display="block" maxWidth="100%" margin="0 auto"/>
            <h1>Earning While Learning</h1>
            <p>UR-Allowance is a tool for earning cryptocurrency but it's also for learning cryptocurrency, teaching our kids how to integrate crypto into everyday life.</p>
            <Link href="/">
              <a>READ MORE</a>
            </Link>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid container centered className={`${testimonial}`}>
      <Grid.Row>
        <Grid.Column verticalAlign="middle" textAlign="center">
          <Segment>
            <h1>They Are Already Talking About Us...</h1>
            <p>If anyone doubts the sustained viability of cryptocurrencies, then please observe the increasing adoption by our children. Their views and understandings will be the foundation of their adult generation and those views will mold the world. <Link href="https://t.co/K2JBydCX6F"><a> https://t.co/K2JBydCX6F via @youtube</a></Link></p>
            <div className={`${testiauthor}`}>
              <p>— John McAfee (@officialmcafee) <br /><span>January 22, 2018</span></p>
            </div>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid container centered className={`${partnersClass}`}>
      <Grid.Row>
        <Grid.Column verticalAlign="middle" textAlign="center">
          <h1>Partners</h1>
          <p>UR-Allowance partners section with content here. UR-Allowance partners section with content here.UR-Allowance partners section with content here. UR-Allowance partners section with content here.</p>
          <Img src="/static/img/icon-hsbc.png" display="inline-block" maxWidth="100%" margin="30px auto"/>
          <Img src="/static/img/icon-oracon.png" display="inline-block" maxWidth="100%" margin="30px auto"/>
          <Img src="/static/img/icon-fedex.png" display="inline-block" maxWidth="100%" margin="30px auto"/>
          <Img src="/static/img/icon-ahold.png" display="inline-block" maxWidth="100%" margin="30px auto"/>
          <Img src="/static/img/icon-dominos.png" display="inline-block" maxWidth="100%" margin="30px auto"/>
          <Img src="/static/img/icon-mini.png" display="inline-block" maxWidth="100%" margin="30px auto"/>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid className={`${cryptokid}`}>
      <Grid.Row>
        <Grid.Column verticalAlign="top" mobile={16} tablet={8} computer={5} textAlign="left">
          <Img src="/static/img/img1.jpg" display="block" maxWidth="100%" marginTop="20px" />
          <p>Cryptokid Chats #3</p>
        </Grid.Column>
        <Grid.Column verticalAlign="top" mobile={16} tablet={8} computer={5} textAlign="left">
          <Img src="/static/img/img2.jpg" display="block" maxWidth="100%" marginTop="20px" />
          <p>Cryptokid URAllowance Chats</p>
        </Grid.Column>
        <Grid.Column verticalAlign="top" mobile={16} tablet={8} computer={6} textAlign="left">
          <h1>Cryptokid</h1>
          <p>This is our original concept idea and presentation that we were showing to gather feedback on our idea. Most of our original idea is preserved in the URAllowance business model you know and love. </p>
          <Link href="/">
            <a>VIEW MORE</a>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid className={`${teamClass}`}>
      <Grid.Row>
        <Grid.Column>
          <h1>The URAllowance Team</h1>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column verticalAlign="middle" textAlign="center" mobile={16} tablet={8} computer={5}>
          <div className={`${teamimg}`}>
            <Img src="/static/img/michael-martinjr.jpg" display="block" maxWidth="100%"  />
          </div>
            <h2>Michael Martin Jr.</h2>
            <p>CEO/Visionary and Co-Founder</p>
        </Grid.Column>
        <Grid.Column verticalAlign="middle" textAlign="center" mobile={16} tablet={8} computer={5}>
          <div className={`${teamimg}`}>
            <Img src="/static/img/chris-butler.jpg" display="block" maxWidth="100%"  />
          </div>
            <h2>Chris Butler</h2>
            <p>President/Visionary and Co-Founder</p>
        </Grid.Column>
        <Grid.Column verticalAlign="middle" textAlign="center" mobile={16} tablet={8} computer={5}>
          <div className={`${teamimg}`}>
            <Img src="/static/img/ashton-addison.jpg" display="block" maxWidth="100%"  />
          </div>
            <h2>Ashton Addison</h2>
            <p>ICO Expert Advisor</p>
        </Grid.Column>
        <Grid.Column verticalAlign="middle" textAlign="center" mobile={16} tablet={8} computer={5}>
          <div className={`${teamimg}`}>
            <Img src="/static/img/michel-louie.jpg" display="block" maxWidth="100%"  />
          </div>
            <h2>Michel Louie</h2>
            <p>ICO/Blockchain Expert Advisor</p>
        </Grid.Column>
        <Grid.Column verticalAlign="middle" textAlign="center" mobile={16} tablet={8} computer={5}>
          <div className={`${teamimg}`}>
            <Img src="/static/img/misha-trubkin.jpg" display="block" maxWidth="100%"  />
          </div>
            <h2>Misha Trubkin</h2>
            <p>Strategic Partnerships and ICO Expert Advisor</p>
        </Grid.Column>
        <Grid.Column verticalAlign="middle" textAlign="center" mobile={16} tablet={8} computer={5}>
          <div className={`${teamimg}`}>
            <Img src="/static/img/larron-armstead.jpg" display="block" maxWidth="100%"  />
          </div>
            <h2>Larron Armstead</h2>
            <p>CTO/Futurist</p>
        </Grid.Column>
        <Grid.Column verticalAlign="middle" textAlign="center" mobile={16} tablet={8} computer={5}>
          <div className={`${teamimg}`}>
            <Img src="/static/img/matthew.jpg" display="block" maxWidth="100%"  />
          </div>
            <h2>Matthew &ldquo;Cryptokid&rdquo;</h2>
            <p>Video Content Creator/Teacher/Student</p>
        </Grid.Column>
        <Grid.Column verticalAlign="middle" textAlign="center" mobile={16} tablet={8} computer={5}>
          <div className={`${teamimg}`}>
            <Img src="/static/img/lori-brown.jpg" display="block" maxWidth="100%"  />
          </div>
            <h2>Lori Brown</h2>
            <p>Media and Press Expert Advisor</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid centered className={`${roadtripClass}`}>
      <Grid.Row>
        <Grid.Column verticalAlign="middle" textAlign="center">
          <h1>They Road Trip</h1>
          <Img src="/static/img/roadtrip.png" display="block" maxWidth="100%" margin="0 auto" />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid centered className={`${chartClass}`}>
      <Grid.Row>
        <Grid.Column verticalAlign="middle" textAlign="center">
          <h1>Token Allocation</h1>
          <Img src="/static/img/chart.jpg" display="block" maxWidth="100%" margin="0 auto" />
          <h1>Funds Allocation</h1>
          <Img src="/static/img/chart2.jpg" display="block" maxWidth="100%" margin="0 auto" />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid centered className={`${commentClass}`}>
      <Grid.Row>
        <Grid.Column verticalAlign="middle" mobile={16} tablet={8} computer={8}>
          <Img src="/static/img/group-img.png" display="block" maxWidth="100%" margin="0 auto"/>
        </Grid.Column>
        <Grid.Column verticalAlign="middle" mobile={16} tablet={8} computer={6} textAlign="left">
          <h1>&ldquo;Comment and Partner feedback can be placed here.&rdquo;</h1>
          <p>-Max Anderson</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid centered className={`${signups}`}>
      <Grid.Row>
        <Grid.Column verticalAlign="bottom" textAlign="center">
          <p>Limited Sign-Ups Available Early Reserve Bonuses Apply</p>
          {buttonssignup}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Div>
]
