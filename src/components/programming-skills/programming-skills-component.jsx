import React, { useEffect } from "react";
import "./programming-skills-styles.scss";
import Aos from "aos";

const ProgrammingSkills = () => {
  useEffect(() => {
    // void reset();
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container">
      <div class="progress">
        <div class="progress-value"></div>
      </div>
    </div>
  );
};

export default ProgrammingSkills;
