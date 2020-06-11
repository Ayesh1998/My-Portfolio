import React, { useEffect } from "react";
import "./other-skills-styles.scss";
import Aos from "aos";
import SkillBar from "../skill-bar/skill-bar-component";
import { programmingSkills } from "../../data/skill";

const OtherSkills = () => {
  useEffect(() => {
    // void reset();
    Aos.init({ duration: 1000 });
  }, []);

  let timeDelay = 1500;

  console.log(programmingSkills);
  return (
    <div className="otherSkillsContainer" id="otherSkillssMove">
      <main class="page-content">
        <div
          class="cards card1"
          data-aos="zoom-in-left"
          data-aos-duration="600"
          data-aos-delay="1000"
        >
          <div class="content">
            <h2 class="title">Other Tech Skills</h2>
            <p class="copy">
              Adobe Photoshop, Illustrator, Adobe XD, JUnit, Kali Linux, GIT,
              GitHub, GitLab
            </p>
            {/* <button class="btn">Book Now</button> */}
          </div>
        </div>
        <div
          class="cards card2"
          styles={{ borderRadius: "10px" }}
          data-aos="zoom-in-left"
          data-aos-duration="600"
          data-aos-delay="1300"
        >
          <div class="content">
            <h2 class="title">Other Skills</h2>
            <p class="copy">
              Teamwork, Leadership, Good communication skills, Creative
              thinking, Phenomenal time management, Work under pressure, Complex
              problem solver
            </p>
            {/* <button class="btn">View Trips</button> */}
          </div>
        </div>
        <div
          class="cards card3"
          data-aos="zoom-in-left"
          data-aos-duration="600"
          data-aos-delay="1500"
        >
          <div class="content">
            <h2 class="title">HOBBIES</h2>
            <p class="copy">
              Traveling, Photography, Watching Sci-Fi movies, Playing Cricket,
              Video Games,Reading articles about new technologies
            </p>
            {/* <button class="btn">View Trips</button> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default OtherSkills;
