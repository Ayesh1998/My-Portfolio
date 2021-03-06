import React, { useEffect } from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
import Aos from "aos";
import "./skills-work-cards-styles.scss";
import { FaArrowDown } from "react-icons/fa";

const SkillsWorkCards = (prop) => {
  useEffect(() => {
    // void reset();
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="skillsWorkCardsContainer">
      <div
        className="container skillsWorkCardsContainer"
        style={{ marginTop: "5%", marginBottom: "5%" }}
      >
        <CardDeck style={{ textAlign: "center" }}>
          <Card
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            style={{ borderRadius: "10px" }}
          >
            <Card.Img
              variant="top"
              src={require("../../assets/coding-skills.png")}
              style={{
                width: "63%",
                height: "45%",
                margin: "10px auto",
                fontFamily: "Work Sans",
              }}
            />
            <Card.Body>
              <Card.Title
                style={{
                  fontFamily: "Work Sans",
                  fontWeight: "800",
                  color: "#E41AEF",
                }}
              >
                Programming Skills
              </Card.Title>
              <Card.Text style={{ fontFamily: "Work Sans" }}>
                JavaScript, Java, C, Python, ReactJS, React Native, Dart,
                Flutter, etc....
                <br />
                <div class="arrow bounce">
                  <FaArrowDown size="25px" />
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ textAlign: "center" }}>
              <Button
                variant="dark"
                style={{
                  margin: "0px auto",
                  width: "60%",
                  fontFamily: "Work Sans",
                }}
              >
                Programming Skills
              </Button>
            </Card.Footer>
          </Card>
          <Card
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            style={{ borderRadius: "10px" }}
          >
            <Card.Img
              variant="top"
              src={require("../../assets/my-work.png")}
              style={{ width: "63%", height: "45%", margin: "10px auto" }}
            />
            <Card.Body>
              <Card.Title
                style={{
                  fontFamily: "Work Sans",
                  fontWeight: "800",
                  color: "#E41AEF",
                }}
              >
                My Work
              </Card.Title>
              <Card.Text style={{ fontFamily: "Work Sans" }}>
                Mobile Applications, Web Applications, Desktop Apps, etc....{" "}
                <br />
                <div class="arrow bounce">
                  <FaArrowDown size="25px" />
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ textAlign: "center" }}>
              <Button
                variant="dark"
                style={{
                  margin: "0px auto",
                  width: "60%",
                  fontFamily: "Work Sans",
                }}
              >
                My Work
              </Button>
            </Card.Footer>
          </Card>
          <Card
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
            style={{ borderRadius: "10px" }}
          >
            <Card.Img
              variant="top"
              src={require("../../assets/skills.png")}
              style={{ width: "63%", height: "45%", margin: "10px auto" }}
            />
            <Card.Body>
              <Card.Title
                style={{
                  fontFamily: "Work Sans",
                  fontWeight: "800",
                  color: "#E41AEF",
                }}
              >
                Other Skills
              </Card.Title>
              <Card.Text style={{ fontFamily: "Work Sans" }}>
                Time Managment, Data Structures & Algorithms, etc....
                <br />
                <div class="arrow bounce">
                  <FaArrowDown size="25px" />
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ textAlign: "center" }}>
              <Button
                variant="dark"
                style={{
                  margin: "0px auto",
                  width: "60%",
                  fontFamily: "Work Sans",
                }}
              >
                Other Skills
              </Button>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
};

export default SkillsWorkCards;
