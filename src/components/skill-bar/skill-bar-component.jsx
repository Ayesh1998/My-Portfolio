import React from "react";
import "./skill-bar-styles.scss";

const SkillBar = (props) => {
  let widths = `width${props.skillLevel}`;
  return (
    <div className="container">
      <div className="row oneSkill">
        <div class="col-12 progress2 progress-moved">
          <div className="row">
            <div className="col-1.5 oneSkillTitle" style={{ margin: "auto" }}>
              <span>{props.skill}</span>
            </div>
            <div class="col-10" style={{ margin: "auto 0px", padding: "0px" }}>
              <div className="progress-bar3" id={widths}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
