//external imports
import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//internal imports
import cvHero from "../images/undrawResume.png";
import books from "../images/undrawBooks.png";
import truck from "../images/undrawTruck.png";


class Cv extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col className="welcome-section">
              <h1>Personal Resume</h1>
              <h2>Creativity | Ambition | Passion</h2>
              <p className="hero-p">
                Designing your brand is what I do, I treat your business as my own.
                When I create assets/tools for you, I make sure its always tailored to
                your buisness needs.
              </p>
              <Button className="msgBtn" href="/contact">Message Me</Button>
            </Col>
            <Col>
              <img src={cvHero} />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <img src={books} alt="cartoon man walking on textbooks" />
            </Col>
            <Col>
              <u><h1>Education</h1></u>
              <br/>
              <br/>
              
                <h3>Red River College</h3>
                <p>
                  Associates Degree - Business Administration (2018)
                </p>
                <br/>
                <h3>York University</h3>
                <p>
                  Certificate - Full Stack Web Development (2021)
                </p>

            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
            <u><h1>Experience</h1></u>
            <br/>
            <br/>
              <h2>Graphic Designer - Nick Paul Construction</h2>
              <p>
                (May 2020 - Current)
              </p>
              <br/>
              <h2>Responsibilities:</h2>
              <ul>
                <li className="li">
                  Manage and optimize company <a  href="https://nickpaulconstruction.com/" target="_blank"> website</a>
                </li>
                <li className="li">
                  Create content and establish social media presence
                </li>
                <li className="li">
                  Create advertising campaigns to generate leads
                </li>
                <li className="li">
                  Create graphic art and various digital assets customized to company needs
                </li>
                <li className="li">
                  Assist employees with technical support as needed
                </li>
                <li className="li">
                  Provide solutions for ease of communcation and record keeping within the company
                </li>
              </ul>
            </Col>
            <Col>
              <img src={truck} alt="mission" />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col className="two-col-titles">
              <h2 className="two-col-titles-h2">Skills and Attributes</h2>
            </Col>
            <Col className="two-col-titles">
              <h2 className="two-col-titles-h2">Technology and Software I use</h2>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col xs lg ="6">
              <p>
                Strategic problem solver
                <br />
                Exceptional communication skills
                <br />
                Excellent negotiator
                <br />
                Established business development skills
                <br />
                Quick learner
                <br/>
                Accepts coaching and critique graciously
              </p>
            </Col>
    
            <Col >
              <p>
                Figma
                <br />
                Adobe Creative Suite
                <br />
                Webflow
                <br />
                WordPress
                <br />
                Elementor
                <br />
                Trello
                <br />
            </p>
            </Col>
            <Col xs lg ="3">
              <p>
                HTML/CSS/JavaScript
                <br />
                React
                <br />
                Express
                <br />
                Bootsrap
                <br />
                JQuery
                <br />
                TailWind CSS
                <br />
            </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Cv;
