import React, { useEffect } from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
import Aos from "aos";

const SkillsWorkCards = (prop) => {
  useEffect(() => {
    // void reset();
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <CardDeck style={{ textAlign: "center" }}>
        <Card data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <Card.Img
            variant="top"
            src={require("../../assets/coding-skills.png")}
            style={{ width: "63%", height: "40%", margin: "10px auto" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>This is</Card.Text>
          </Card.Body>
          <Card.Footer style={{ textAlign: "center" }}>
            <Button variant="dark" style={{ margin: "0px auto" }}>
              My Other Skills
            </Button>
          </Card.Footer>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <Card.Img
            variant="top"
            src={require("../../assets/my-work.png")}
            style={{ width: "63%", height: "40%", margin: "10px auto" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ textAlign: "center" }}>
            <Button variant="dark" style={{ margin: "0px auto" }}>
              My Other Skills
            </Button>
          </Card.Footer>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          <Card.Img
            variant="top"
            src={require("../../assets/skills.png")}
            style={{ width: "63%", height: "40%", margin: "10px auto" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>This is a wide</Card.Text>
          </Card.Body>
          <Card.Footer style={{ textAlign: "center" }}>
            <Button variant="dark" style={{ margin: "0px auto" }}>
              My Other Skills
            </Button>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default SkillsWorkCards;
