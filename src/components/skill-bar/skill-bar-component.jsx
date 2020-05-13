import React, { useEffect } from "react";
import "./skill-bar-styles.scss";
import Aos from "aos";

const SkillBar = (props) => {
  let widths = `width${props.skillLevel}`;
  useEffect(() => {
    // void reset();
    Aos.init({ duration: 1000 });
  }, []);

  let barColor = props.timeDelay ? "color1" : "color2";
  let classNameColor = `progress-bar3 ${barColor}`;

  return (
    <div className="container">
      <div
        className="row oneSkill"
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-delay="1700"
      >
        <div class="col-12 progress2 progress-moved">
          <div className="row">
            <div
              className="col-1.5 oneSkillTitle"
              style={{ margin: "auto", fontFamily: "Work Sans" }}
            >
              <span>{props.skill}</span>
            </div>
            <div class="col-10" style={{ margin: "auto 0px", padding: "0px" }}>
              <div className={classNameColor} id={widths}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
