import React from "react";
import LandingContent from "@/components/landingcomponents/landing-content";
import LandingHero from "@/components/landingcomponents/landing-hero";
import LandingNavbar from "@/components/landingcomponents/landing-navbar";

const HomePage = () => {
  return (
    <div className="h-full p-4">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default HomePage;
