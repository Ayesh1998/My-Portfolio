import React from "react";
import { Image, Jumbotron } from "react-bootstrap";

const HomeTopBanner = (props) => {
  return (
    <div className="home-top-banner">
      <div className="home-top-banner-image" style={{ position: "relative" }}>
        <img
          src={require("../../assets/black_background_fabric-wallpaper-2560x1440.jpg")}
          alt=""
          style={{ width: "100%", height: "90vh" }}
        />
        <div
          className="home-banner-mydetailsTopLeft"
          style={{
            position: "absolute",
            textAlign: "left",
            top: "-4%",
            right: "17%",
            width: "100%",
          }}
        >
          <Jumbotron
            style={{
              width: "67%",
              margin: "0px auto",
              backgroundColor: "rgba(21, 19, 19, 0)",
              color: "white",
            }}
          >
            <p style={{ marginTop: "5%", fontWeight: 600, fontSize: "17px" }}>
              I am a human with multiple-talents. <br />I spent most of the time
              designing and building
              <br /> digital products like web sites, mobile applications, APIs
              etc.
              <br />
              So, you can call me as a front-end developer,
              <br />
              back-end developer,product designer, UX,UI designer,
              <br /> native or hybrid mobile designer or product manager.
              <br />
              I love travelling, playing computer games, playing cricket
              <br /> and watching sci-fi movies
            </p>
          </Jumbotron>
        </div>
        <div
          className="home-banner-mydetailsBottomRight"
          style={{
            position: "absolute",
            textAlign: "right",
            bottom: "0%",
            left: "17%",
            width: "100%",
          }}
        >
          <Jumbotron
            style={{
              width: "67%",
              margin: "0px auto",
              backgroundColor: "rgba(21, 19, 19, 0)",
              color: "white",
            }}
          >
            <p style={{ marginTop: "5%" }}>
              I am a human with multiple-talents.
              <br />
            </p>
          </Jumbotron>
        </div>
        <div
          className="home-banner-mydetailsMiddle"
          style={{
            position: "absolute",
            textAlign: "center",
            top: "32%",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <Jumbotron
            style={{
              width: "67%",
              margin: "0px auto",
              backgroundColor: "rgba(21, 19, 19, 0)",
              color: "white",
            }}
          >
            <h1>I'm Ayesh Lakshan</h1>
            <div>
              <span
                style={{
                  borderRight: "2px white solid",
                  marginLeft: "10px",
                  paddingRight: "8px",
                }}
              >
                {" "}
                UX/UI Designer{" "}
              </span>
              <span
                style={{
                  borderRight: "2px white solid",
                  marginLeft: "10px",
                  paddingRight: "8px",
                }}
              >
                {" "}
                Frontend Developer{" "}
              </span>
              <span
                style={{
                  marginLeft: "10px",
                  paddingRight: "8px",
                }}
              >
                {"  "}
                Backend Developer{" "}
              </span>
            </div>
          </Jumbotron>
        </div>
      </div>
    </div>
  );
};

export default HomeTopBanner;
