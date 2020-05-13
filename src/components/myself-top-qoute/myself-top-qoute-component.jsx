import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import Aos from "aos";

const MyselfTopQoute = () => {
  useEffect(() => {
    // void reset();
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="home-banner-mydetailsTopLeft"
      style={{
        marginTop: "20px",
        textAlign: "center",
        // top: "-4%",
        // right: "17%",
        width: "100%",
      }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Jumbotron
        style={{
          padding: "0px 0px",
          border: "3px #4D4B4B solid",
          borderRadius: "10px",
          boxShadow: "3px 5px 3px #4D4B4B",
          width: "81%",
          margin: "0px auto",
          backgroundColor: "rgba(21, 19, 19, 0)",
          color: "#545353",
          fontFamily: "Lemonada",
        }}
      >
        <p
          style={{
            marginTop: "1.5%",
            fontWeight: 600,
            fontFamily: "Lemonada",
            fontSize: "23px",
          }}
        >
          I am a human with multiple-talents. I spent most of the time designing
          and building digital products like web sites, mobile applications,
          APIs etc. So, you can call me as a front-end developer, back-end
          developer,product designer, UX,UI designer, native or hybrid mobile
          designer or product manager. I love travelling, playing computer
          games, playing cricket and watching sci-fi movies
        </p>
      </Jumbotron>
    </div>
  );
};

export default MyselfTopQoute;
