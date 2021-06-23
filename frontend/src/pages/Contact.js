import React, { Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//internal imports
import design from "../images/undrawDesign.png";
import prototype from "../images/undrawPrototype.png";
import develop from "../images/undrawDevelop.png";
import deploy from "../images/undrawDeploy.png";


const Contact = () => {
  const [contactData, setContactData] = useState({
    
    name: "",
    email: "",
    phoneNumber: "",
    content: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (key, val) => {

    setContactData({ ...contactData, [key]: val });
  };

  const onSubmit = (e) => {

    e.preventDefault();
    setMessage("");
    if (contactData.name == "" || contactData.email == "") {
      setMessage("Fill out required fields");
      return;
    }
    fetch("/contact_form/entries", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(contactData),
    }).then((response) => {
      if (response) {
        if (response.status === 201) {
          setMessage("Thanks for reaching out! I'll get back to you soon!");
        } else {
          setMessage("Please make sure you fill out all fields before submitting");
        }
      }
    });
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
          <h1>Message me your idea!</h1>
          
          
          </Col>
        </Row>
    
        <form className="form">
          <Row>
            <Col>
              <label htmlFor="name">Name:</label>
              <input
                value={contactData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                type="text"
                id="name"
                placeholder="John Smith"
                name="name"
                required
              />
            </Col>
            <Col>
              <label htmlFor="email">Email:</label>
              <input
                value={contactData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                type="email"
                id="email"
                placeholder="yourname@email.com"
                required
              />
            </Col>
            <Col>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                value={contactData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                type="phoneNumber"
                id="phoneNumber"
                placeholder="xxx-xxx-xxxx"
                required
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <label htmlFor="content">Content</label>
              <textarea
                type="text"
                value={contactData.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
                rows="3"
                cols="30"
                name="content"
                id="content"
                placeholder="I want to make a website that wil..."
                required
              ></textarea>
            </Col>
          </Row>

          <Row>
            <Col>
              <input className="contactSubmitBtn"
                type="submit"
                onClick={onSubmit}
                value="Submit"
                className="button-contact"
              />
              <p>{message}</p>
            </Col>
          </Row>
        </form>
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
};

export default Contact;
