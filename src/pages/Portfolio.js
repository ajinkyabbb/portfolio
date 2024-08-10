import HeadingParallax from "../components/HeadingParallax";
import { useEffect, useState } from "react";
import ZigZagCard from "../components/ZigZagCard";
// import img from "../images/projectPhotos/E-Learning-Website.png";  
import { useInfoContext } from "../context/infoContext";

const Portfolio = () => {
  const { Portfolio } = useInfoContext().aboutMe;
  return (
    <HeadingParallax heading={"Portfolio"}>
      <div className="mt-5 container">
        {Portfolio.map((project, index) => (
          <div key={index}>
            <ZigZagCard
              title={project.projectName}
              imageSrc={project.image}
              text = {project.projectDescription}
              reverse={index % 2 == 0 ? false : true}
            />
          </div>
        ))}
      </div>
    </HeadingParallax>
  );
};

export default Portfolio;
