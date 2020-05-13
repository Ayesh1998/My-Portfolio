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

  console.log(programmingSkills);
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="programmingSkillsTitle">
            <p>
              <span
                class="rotate-characters-back-to-horizontal"
                style={{ writingMode: "vertical-rl" }}
              >
                Programming
              </span>
            </p>
            <p>
              <span
                class="rotate-characters-back-to-horizontal"
                style={{ writingMode: "vertical-rl" }}
              >
                Skills
              </span>
            </p>
          </div>
        </div>
        <div className="col-9">
          {programmingSkills.map((item) => {
            return <SkillBar skillLevel={item.level} skill={item.skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgrammingSkills;
