import React from "react";
import MyNavbar from "../components/nav-bar/nav-bar-component";
import HomeTopBanner from "../components/home-top-banner/home-top-banner-component";
import SkillsWorkCards from "../components/skills-work-cards/skills-work-cards-component";
import ProgrammingSkills from "../components/programming-skills/programming-skills-component";
import MyselfTopQoute from "../components/myself-top-qoute/myself-top-qoute-component";

const HomePage = (props) => {
  return (
    <div className="home-body">
      <HomeTopBanner />
      <MyNavbar />
      <MyselfTopQoute />
      <SkillsWorkCards />
      <ProgrammingSkills />

      <div className="container"></div>
    </div>
  );
};

export default HomePage;
