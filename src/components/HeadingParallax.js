import bgImage from "../images/bg.png";
import lightBgImage from "../images/6186698.jpg"
import { useThemeState } from "../context/themeContext";
import { useParallax } from "../parallex/useParallax";
import { motion } from "framer-motion";
const HeadingParallax = ({heading,children}) => {
  const {
    // primaryX,
    // primaryY,
    secondaryX,
    secondaryY,
    onMouseMoveHandler,
    onMouseLeaveHandler,
  } = useParallax();

  const { theme } = useThemeState();
  const textColor = theme === "dark" ? "light" : "dark";
  return (
    <motion.div
      data-bs-theme={theme}
      className={`container-fluid home text-${textColor}`}
      style={{ backgroundImage: `url(${theme === "dark" ? bgImage : lightBgImage})`,}}
      onMouseMove={onMouseMoveHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className="heading-parallax">
        <motion.h1
          className="parallax-h1"
          style={{
            x: secondaryX,
            y: secondaryY
          }}
        >
        {heading}
        </motion.h1>
        <h1 className="heading-h1">{heading}</h1>
      </div>
      <div>
        {children}
      </div>
    </motion.div>
  );
};

export default HeadingParallax;
