import React from "react";
import MyNavbar from "../components/nav-bar/nav-bar-component";
import HomeTopBanner from "../components/home-top-banner/home-top-banner-component";
import SkillsWorkCards from "../components/skills-work-cards/skills-work-cards-component";

const HomePage = (props) => {
  return (
    <div className="home-body">
      <MyNavbar />
      <HomeTopBanner />
      <SkillsWorkCards />
      <div className="container"></div>
    </div>
  );
};

export default HomePage;
