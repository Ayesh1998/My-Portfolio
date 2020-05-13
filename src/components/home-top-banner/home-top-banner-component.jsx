import React, { useEffect, useCallback, useRef, useState } from "react";
import { Image, Jumbotron } from "react-bootstrap";
import Aos from "aos";
import { useSpring, animated, useTransition, useTrail } from "react-spring";
import "aos/dist/aos.css";
import "./home-top-banner-styles.scss";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  0.9,
];
const transmiddleNameAnimation = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const HomeTopBanner = (prop) => {
  const [trail, setTrail] = useTrail(5, () => ({
    xy: [0, 0],
    config: (i) => (i === 0 ? fast : slow),
  }));
  const [middleNameAnimation, setmiddleNameAnimation] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 800, friction: 200 },
  }));

  useEffect(() => {
    // void reset();
    Aos.init({ duration: 1000 });
  }, []);

  //-------

  //   const ref = useRef([]);
  //   const [items, set] = useState([]);
  //   const transitions = useTransition(items, null, {
  //     from: {
  //       opacity: 0,
  //       height: 0,
  //       innerHeight: 0,
  //       transform: "perspective(600px) rotateX(0deg)",
  //       color: "#8fa5b6",
  //     },
  //     enter: [
  //       { opacity: 1, height: 80, innerHeight: 80 },
  //       { transform: "perspective(600px) rotateX(180deg)", color: "#28d79f" },
  //       { transform: "perspective(600px) rotateX(0deg)" },
  //     ],
  //     leave: [
  //       { color: "#c23369" },
  //       { innerHeight: 0 },
  //       { opacity: 0, height: 0 },
  //     ],
  //     update: { color: "#28b4d7" },
  //   });

  //   const reset = useCallback(() => {
  //     ref.current.map(clearTimeout);
  //     ref.current = [];
  //     set([]);
  //     ref.current.push(
  //       setTimeout(() => set(["Java", "JavaScript", "CSS"]), 2000)
  //     );
  //     ref.current.push(
  //       setTimeout(() => set(["React", "React-Native", "Flutter"]), 5000)
  //     );
  //     ref.current.push(
  //       setTimeout(() => set(["Dart", "Python", "Bootrap"]), 8000)
  //     );
  //     ref.current.push(
  //       setTimeout(() => set(["Materialize", "MongoDB", "Firebase"]), 10000)
  //     );
  //   }, []);

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
          style={{ width: "100%", height: "100vh" }}
        />

        {/* <div
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
        </div> */}
      </div>
      {/* 
      <div>
        sdfsdf
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div
            className="transitions-item"
            style={{
              overflow: "hidden",
              width: "300px",
              color: "white",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              fontSize: "5em",
              fontWeight: "800",
              textTransform: "uppercase",
              willChange: "transform, opacity, height",
              whiteSpace: "nowrap",
              cursor: "pointer",
              lineHeight: "80px",
            }}
            key={key}
            style={rest}
            onClick={reset}
          >
            <animated.div style={{ overflow: "hidden", height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div> */}

      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <div
        style={{ top: "0%" }}
        className="hooks-main"
        onMouseMove={(e) =>
          setTrail({ xy: [e.clientX - 100, e.clientY - 100] })
        }
      >
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{ transform: props.xy.interpolate(trans) }}
          />
        ))}
      </div>
      <animated.div
        className="home-banner-mydetailsMiddle"
        data-aos="fade-up"
        data-aos-duration="1000"
        style={{
          border: "3px white solid",
          position: "absolute",
          textAlign: "center",
          top: "45%",
          margin: "0 auto",
          width: "35%",
          right: "30%",
          transform: middleNameAnimation.xys.interpolate(
            transmiddleNameAnimation
          ),
        }}
        onMouseMove={({ clientX: x, clientY: y }) =>
          setmiddleNameAnimation({ xys: calc(x, y) })
        }
        onMouseLeave={() => setmiddleNameAnimation({ xys: [0, 0, 1] })}
      >
        <Jumbotron
          style={{
            width: "100%",
            padding: "16px",
            margin: "0px 0px",
            backgroundColor: "rgba(21, 19, 19, 0)",
            color: "white",
          }}
        >
          <h1 style={{ display: "inline" }}>Hello.. I'm </h1>
          <h1 style={{ color: "#DE25B0", display: "inline" }}>Ayesh Lakshan</h1>
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
  );
};

export default HomeTopBanner;
