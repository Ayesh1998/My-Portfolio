import React, { useEffect, useCallback, useRef, useState } from "react";
import { Image, Jumbotron } from "react-bootstrap";
import Aos from "aos";
import { useSpring, animated, useTransition } from "react-spring";
import "aos/dist/aos.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  0.9,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const HomeTopBanner = (prop) => {
  const [middleNameAnimation, setmiddleNameAnimation] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  //-------

  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#28d79f" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#28b4d7" },
  });

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(["Java", "JavaScript", "CSS"]), 2000)
    );
    ref.current.push(
      setTimeout(() => set(["React", "React-Native", "Flutter"]), 5000)
    );
    ref.current.push(
      setTimeout(() => set(["Dart", "Python", "Bootrap"]), 8000)
    );
    ref.current.push(
      setTimeout(() => set(["Materialize", "MongoDB", "Firebase"]), 10000)
    );
  }, []);

  //   useEffect(() => void reset(), []);

  //----------

  return (
    <div className="home-top-banner">
      <div
        className="home-top-banner-image"
        style={{ position: "relative", cursor: "pointer" }}
      >
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
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="800"
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
          data-aos="fade-left"
          data-aos-delay="800"
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
        <animated.div
          className="home-banner-mydetailsMiddle"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease"
          style={{
            border: "3px white solid",
            position: "absolute",
            textAlign: "center",
            top: "45%",
            margin: "0 auto",
            width: "31%",
            right: "30%",
            transform: middleNameAnimation.xys.interpolate(trans),
          }}
          onMouseMove={({ clientX: x, clientY: y }) =>
            setmiddleNameAnimation({ xys: calc(x, y) })
          }
          onMouseLeave={() => setmiddleNameAnimation({ xys: [0, 0, 1] })}
        >
          <Jumbotron
            style={{
              width: "100%",
              padding: "0px",
              margin: "0px 0px",
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
                data-aos="fade-down"
                data-aos-duration="3000"
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
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                {" "}
                Frontend Developer{" "}
              </span>
              <span
                style={{
                  marginLeft: "10px",
                  paddingRight: "8px",
                }}
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                {"  "}
                Backend Developer{" "}
              </span>
            </div>
          </Jumbotron>
        </animated.div>
      </div>
      <div>
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div
            className="transitions-item"
            key={key}
            style={rest}
            onClick={reset}
          >
            <animated.div style={{ overflow: "hidden", height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default HomeTopBanner;
