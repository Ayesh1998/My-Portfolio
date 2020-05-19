import React, { useEffect } from "react";
import "./programming-skills-styles.scss";
import Aos from "aos";
import SkillBar from "../skill-bar/skill-bar-component";
import { programmingSkills } from "../../data/skill";

const ProgrammingSkills = () => {
  useEffect(() => {
    // void reset();
    Aos.init({ duration: 1000 });
  }, []);

  let timeDelay = 1500;

  console.log(programmingSkills);
  return (
    <div className="programmingSkillsContainer">
      <div className="container">
        <div className="row">
          <div className="col-3" style={{ margin: "auto" }}>
            <div className="programmingSkillsTitle">
              <p
                style={{ fontSize: "30px", height: "100%", fontWeight: "800" }}
              >
                <span
                  class="rotate-characters-back-to-horizontal"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span
                    data-aos="zoom-out-left"
                    data-aos-duration="600"
                    data-aos-delay="1000"
                  >
                    S
                  </span>
                  <span
                    data-aos="zoom-out-left"
                    data-aos-duration="600"
                    data-aos-delay="1100"
                  >
                    K
                  </span>
                  <span
                    data-aos="zoom-out-left"
                    data-aos-duration="600"
                    data-aos-delay="1200"
                  >
                    I
                  </span>
                  <span
                    data-aos="zoom-out-left"
                    data-aos-duration="600"
                    data-aos-delay="1300"
                  >
                    L
                  </span>
                  <span
                    data-aos="zoom-out-left"
                    data-aos-duration="600"
                    data-aos-delay="1400"
                  >
                    L
                  </span>
                  <span
                    data-aos="zoom-out-left"
                    data-aos-duration="600"
                    data-aos-delay="1500"
                  >
                    S
                  </span>
                  <br />
                  <span
                    class="rotate-characters-back-to-horizontal"
                    style={{ writingMode: "vertical-rl" }}
                    data-aos="zoom-out-right"
                    data-aos-duration="600"
                    data-aos-delay="00"
                  >
                    P
                  </span>
                  <span
                    class="rotate-characters-back-to-horizontal"
                    style={{ writingMode: "vertical-rl" }}
                    data-aos="zoom-out-right"
                    data-aos-duration="600"
                    data-aos-delay="100"
                  >
                    R
                  </span>
                  <span
                    class="rotate-characters-back-to-horizontal"
                    style={{ writingMode: "vertical-rl" }}
                    data-aos="zoom-out-right"
                    data-aos-duration="600"
                    data-aos-delay="200"
                  >
                    O
                  </span>
                  <span
                    class="rotate-characters-back-to-horizontal"
                    style={{ writingMode: "vertical-rl" }}
                    data-aos="zoom-out-right"
                    data-aos-duration="600"
                    data-aos-delay="300"
                  >
                    G
                  </span>
                  <span
                    class="rotate-characters-back-to-horizontal"
                    style={{ writingMode: "vertical-rl" }}
                    data-aos="zoom-out-right"
                    data-aos-duration="600"
                    data-aos-delay="400"
                  >
                    R
                  </span>
                  <span
                    class="rotate-characters-back-to-horizontal"
                    style={{ writingMode: "vertical-rl" }}
                    data-aos="zoom-out-right"
                    data-aos-duration="600"
                    data-aos-delay="500"
                  >
                    M
                  </span>
                  <span
                    class="rotate-characters-back-to-horizontal"
                    style={{ writingMode: "vertical-rl" }}
                    data-aos="zoom-out-right"
                    data-aos-duration="600"
                    data-aos-delay="600"
                  >
                    M
                  </span>
                  <span
                    class="rotate-characters-back-to-horizontal"
                    style={{ writingMode: "vertical-rl" }}
                    data-aos="zoom-out-right"
                    data-aos-duration="600"
                    data-aos-delay="700"
                  >
                    I
                  </span>
                  <span
                    class="rotate-characters-back-to-horizontal"
                    style={{ writingMode: "vertical-rl" }}
                    data-aos="zoom-out-right"
                    data-aos-duration="600"
                    data-aos-delay="800"
                  >
                    N
                  </span>
                  <span
                    class="rotate-characters-back-to-horizontal"
                    style={{ writingMode: "vertical-rl" }}
                    data-aos="zoom-out-right"
                    data-aos-duration="600"
                    data-aos-delay="900"
                  >
                    G
                  </span>
                </span>
              </p>
              <p></p>
            </div>
          </div>
          <div
            className="col-9"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="1500"
          >
            {programmingSkills.map((item) => {
              console.log(item.timeDelay);
              return (
                <SkillBar
                  skillLevel={item.level}
                  skill={item.skill}
                  timeDelay={item.timeDelay}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingSkills;
