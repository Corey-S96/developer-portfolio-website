//external imports
import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//internal imports
import homeHero from "../images/undraw_Hello_re_3evm.png";
import design from "../images/undrawDesign.png";
import prototype from "../images/undrawPrototype.png";
import develop from "../images/undrawDevelop.png";
import deploy from "../images/undrawDeploy.png";

class Home extends React.Component {
  render() {
    return (
      <>
        <Container className="hero">
          <Row>
            <Col className="welcome-section">
              <h1>Hello!</h1>
              <h2>I'm Corey</h2>
              <p className="hero-p">
                Im a developer based out of Winnipeg, MB
                <br/>
                <br/>
                Like most millenials, I grew up using the internet. As I got older I found
                my passion for contributing to it by designing and building awesome websites and web apps.
                <br/>
                <br/>
                What sets me apart from other developers is my years of sales and marketing experience.
                Not only can I build your platform but I can optimize it to reach your target audience.
                Send me a message by using the button below, lets collaborate!
              </p>
              <Button className="msgBtn" href="/contact">Message Me</Button>
            </Col>
            <Col>
              <img src={homeHero} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="subText">
            <h1>How I make your ideas into reality...</h1>
          </Row>
          <Row>
            <Col>
              <img src={design} alt="Cartoon character designing website" />
              <h3>Design</h3>
              <p>
                First I design your platform, creating unique visual assets to fit your buisness needs or creative vision.
                Already have graphics, logo's and art you wish to use? No problem, I can implement it seemlessly into the
                designs to save you time and money.
              </p>
            </Col>
            <Col>
              <img src={prototype} alt="Cartoon character prototyping website" />
              <h3>Prototype</h3>
              <p>
                Next step is prototyping, I'm a visual person, before I develop anything its crucial that I see how you want your platform to function. 
                Using industry state of the art software and tools, I put your design into action
                so that you can see what you're paying for.
              </p>
            </Col>
            <Col>
              <img src={develop} alt="Cartoon character developing website" />
              <h3>Development</h3>
              <p>
                My favourite part! In the development stage I craft your idea and bring it to life. Making sure every link, button and
                animation is perfectly optimized to convey your message to the world. This is the stage where I work out all the little 
                details to ensure your platform does exactly what you need it to do.
              </p>
            </Col>
            <Col>
              <img src={deploy} alt="Cartoon character deploying website" />
              <h3>Deployment</h3>
              <p>
                The fourth and final stage, in this stage everything comes together to launch your awesome idea to the world!
                I take care of making sure your platform is easily accessible and maintained properly.
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
        </Container>
        
      </>
    );
  }
}

export default Home;
