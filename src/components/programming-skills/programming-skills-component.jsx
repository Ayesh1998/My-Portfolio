import React, { useEffect } from "react";
import "./programming-skills-styles.scss";
import Aos from "aos";
import SkillBar from "../skill-bar/skill-bar-component";

const ProgrammingSkills = () => {
  useEffect(() => {
    // void reset();
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container">
      <SkillBar skillLevel="20" skill="Java" />
    </div>
  );
};

export default ProgrammingSkills;
