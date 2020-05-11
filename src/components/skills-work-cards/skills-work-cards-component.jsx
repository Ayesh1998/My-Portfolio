import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";

const SkillsWorkCards = (prop) => {
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src={require("../../assets/coding-skills.png")}
            style={{ width: "63%", height: "40%", margin: "10px auto" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ textAlign: "center" }}>
            <Button variant="dark" style={{ margin: "0px auto" }}>
              My Other Skills
            </Button>
          </Card.Footer>
        </Card>
        <Card>
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
        <Card>
          <Card.Img
            variant="top"
            src={require("../../assets/skills.png")}
            style={{ width: "63%", height: "40%", margin: "10px auto" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
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
