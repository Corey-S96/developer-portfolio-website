//external imports
import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//internal imports
import portfolioHeader from "../images/undrawPortfolio.png";
import example2 from "../images/FF CONSC LOGO 2ND DRAFT.jpg";
import example3 from "../images/QFC COVER PHOTO.jpg";
import example1 from "../images/NP CONSC FB AD 1.jpg";
import webDesign1 from "../images/screelyDesktop.png";
import webDesign2 from "../images/screelyMobile.png";

class Portfolio extends React.Component {
  render() {
    return (
      <>
      <Container className="about-hero">
          <Row>
            <Col className="welcome-section">
              <h1>Corey Schleining</h1>
              <h2>Design and Development Portfolio</h2>
              <p className="hero-p">
                I have a variety of services available, I do Web Design, mockups, logo design, social media post creation and
                of course, developing your assets into an platform.
              </p>
              <Button className="msgBtn" href="/contact">Message Me</Button>
            </Col>
            <Col>
              <img src={portfolioHeader} />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <h2>Graphic Art</h2>
              <p>
                Graphic Art is what drives the internet advertising space. If you want to be heard, you have to be seen first.
                for years I have been designing posters, profile images and social media posts to help businesses be seen and leave
                a lasting impression on potential customers.
              </p>
            </Col>
          </Row>
        </Container>

        <Container>
          <img height="600px" src={example1} alt="Facebook advertisement asset for Nick Paul Construction" />
        </Container>
        <Container>
          <img height="600px" src={example2} alt="Logo image asset for Final Finish Construction" />
        </Container>
        <Container>
          <img src={example3} alt="Facebook cover photo for Quick Credit Financing" />
        </Container>

        <Container>
          <Row>
            <Col>
              <h2>Website Design and Development</h2>
              <p>
                A passion of mine, I hand code your website from start to finish utilizing industry standard technology such as HTML, CSS and Javascript.
                Using the power of web frameworks such as React, Express and Bootstrap, I ensure your site is built beautifully and dynamically. Already have a
                site made with Webflow, Wordpress or another website builder? No problem, I love using those frameworks and can do your re-design or re-branding
                with ease.
              </p>
              <Button className="msgBtn" href="/contact">Message Me</Button>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
              <h1>Nick Paul Construction</h1>
              
          </Row>
          <Row >
            <Col>
            <img width="600px" src={webDesign1} alt="Mockup for Nick Paul Contruction Website" />
            <a href="https://nickpaulconstruction.com/" target="_blank" className="portfolioWorkLink">Visit the Live site here</a>
            </Col>
            <Col>
            <img height="400px" src={webDesign2} alt="Mockup for Nick Paul Contruction Website" />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Portfolio;
