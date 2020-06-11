import React from "react";
import MyNavbar from "../components/nav-bar/nav-bar-component";
import HomeTopBanner from "../components/home-top-banner/home-top-banner-component";
import SkillsWorkCards from "../components/skills-work-cards/skills-work-cards-component";
import ProgrammingSkills from "../components/programming-skills/programming-skills-component";
import MyselfTopQoute from "../components/myself-top-qoute/myself-top-qoute-component";
import SkillBar from "../components/skill-bar/skill-bar-component";
import OtherSkills from "../components/other-skills/other-skills-component";
import MyProjects from "../components/myprojects/myprojects-component";

const HomePage = (props) => {
  return (
    <div className="home-body">
      <HomeTopBanner />
      <MyNavbar />
      <MyselfTopQoute />
      <SkillsWorkCards />
      <ProgrammingSkills />
      <OtherSkills />
      <MyProjects />

      <div className="container"></div>
    </div>
  );
};

export default HomePage;
