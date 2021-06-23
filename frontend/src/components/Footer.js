import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends React.Component {
  render() {
    return (
      <>
      <Container className="footer">
        <Row className="footer-section">
          <Col>
            <p>
              <b><u>Location</u></b> 
              <br/>
              Winnipeg, MB
              <br/>
              (subject to change...)
            </p>
          </Col>
          <Col>
            <p>
              <b><u>Contact</u></b>
              <br />
              Email: schleiningcorey@gmail.com <br />
              Phone: 204-918-5872
            </p>
          </Col>
          <Col>
            <p>
              <b><u>Hours</u></b>
              <br />
              Mon-Fri: 9:00 am to 6:30 pm <br />
              Sat: 9:00 am to 1:00 pm
              <br />
            </p>
          </Col>
        </Row>
        <Row className="footer-section">
          <Col className="copyright">
            <p>
              Copyright. All rights reserved: Corey Schleining
              <br/>
              <Link to="admin-login"> ADMIN LOGIN</Link>
            </p>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default Footer;
