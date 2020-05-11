import React, { useEffect } from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
import Aos from "aos";

const SkillsWorkCards = (prop) => {
  useEffect(() => {
    // void reset();
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container" style={{ marginTop: "5%", marginBottom: "5%" }}>
      <CardDeck style={{ textAlign: "center" }}>
        <Card data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <Card.Img
            variant="top"
            src={require("../../assets/coding-skills.png")}
            style={{ width: "63%", height: "45%", margin: "10px auto" }}
          />
          <Card.Body>
            <Card.Title>Programming Skills</Card.Title>
            <Card.Text>
              JavaScript, Java, C, Python, ReactJS, React Native, Dart, Flutter,
              etc....
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ textAlign: "center" }}>
            <Button variant="dark" style={{ margin: "0px auto", width: "60%" }}>
              Programming Skills
            </Button>
          </Card.Footer>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <Card.Img
            variant="top"
            src={require("../../assets/my-work.png")}
            style={{ width: "63%", height: "45%", margin: "10px auto" }}
          />
          <Card.Body>
            <Card.Title>My Work</Card.Title>
            <Card.Text>
              Mobile Applications, Web Applications, Desktop Apps, etc....{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ textAlign: "center" }}>
            <Button variant="dark" style={{ margin: "0px auto", width: "60%" }}>
              My Work
            </Button>
          </Card.Footer>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          <Card.Img
            variant="top"
            src={require("../../assets/skills.png")}
            style={{ width: "63%", height: "45%", margin: "10px auto" }}
          />
          <Card.Body>
            <Card.Title>Other Skills</Card.Title>
            <Card.Text>
              Time Managment, Data Structures & Algorithms, etc....
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ textAlign: "center" }}>
            <Button variant="dark" style={{ margin: "0px auto", width: "60%" }}>
              Other Skills
            </Button>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default SkillsWorkCards;
