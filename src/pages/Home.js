import { useParallax } from "../parallex/useParallax";
import { motion } from "framer-motion";
import HeadingParallax from "../components/HeadingParallax";
import logo1 from "../images/Vector 1.png";
import hero from "../images/hero.png";
const textVarients = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: (delay) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5 * delay,
      staggerChildren: 0.1,
    },
  }),
};

const SlideVarients = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 100,
    },
  },
};

const Home = () => {
  const {
    primaryX,
    primaryY,
    secondaryX,
    secondaryY,
    onMouseMoveHandler,
    onMouseLeaveHandler,
  } = useParallax();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AJINKYA_BANSODE_RESUME.pdf"; // Adjust this path to match the location of your PDF file
    link.download = "Ajinkya_Bansode_Resume.pdf"; // Name the downloaded file
    link.click();
  };
 
  return (
    <HeadingParallax >
      <motion.div
      className="main"
        onMouseMove={onMouseMoveHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <div className="container hello_container">
          <div className="home_h1 d-none d-md-block">
            <motion.h1
              variants={textVarients}
              initial="initial"
              animate="animate"
              custom={1}
              className=""
              style={{
                x: primaryX,
                y: primaryY,
              }}
            >
              HELLO
            </motion.h1>
          </div>

          <motion.img
            style={{
              x: secondaryX,
              y: secondaryY,
            }}
            className="vector"
            src={`${logo1}`}
          ></motion.img>
          <div className="container">
            <div className="row home-inner d-flex justify-content-center align-items-center p-0">
              <div className="col-md-7 col-lg-7 d-flex justify-content-center order-2 order-ms-2 order-md-1 px-0 ">
                <div className="z-3 user-select-none  align-self-start">
                  <motion.div
                    variants={textVarients}
                    animate="animate"
                    initial="initial"
                    custom={2}
                    className="p-0"
                  >
                    <h1 className="p-0">
                      I'M
                      <br />
                      AJINKYA BANSODE
                    </h1>
                    <div className="underline"></div>
                  </motion.div>

                  <motion.p
                    variants={textVarients}
                    animate="animate"
                    initial="initial"
                    custom={3}
                    className="fs-3"
                  >
                    I am a React Developer
                  </motion.p>
                  <motion.div
                    variants={textVarients}
                    animate="animate"
                    initial="initial"
                    custom={4}
                  >
                    <a className="downolad_cv p-3" onClick={handleDownload}>
                      <i className="fa-solid fa-cloud-arrow-down fs-6 me-2"></i>
                      <span className="fs-6">Download CV</span>
                    </a>
                  </motion.div>
                </div>
              </div>

              <div className="z-3 col-sm-3 col-md-3 col-lg-4 align-self-start  d-flex justify-content-center order-1 order-sm-1 order-md-2 ">
                <img
                  className="mx-1  hero_image_home"
                  src={hero}
                  style={{ maxHeight: "650px" }}
                />
              </div>

              <div className="col-md-1 col-lg-1 order-3  align-self-center order-sm-3 order-md-3 follow_me_div">
                <div className="text-white follow_me d-flex justify-content-center gap-3 align-items-center ">
                  <div style={{color:"#647bff"}} className="h5">Follow me</div>
                  <div style={{width: "100px", border: "#647bff solid 2px"}}></div>
                  <span>
                    <i
                      className="fa-brands fa-facebook-f"
                      style={{color: "#647bff"}}
                    ></i>
                  </span>
                  <span>
                    <i className="fa-brands fa-github" 
                    style={{color: "#647bff"}}
                    ></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
      

          <motion.div
          className="slidingTextContainer"
          variants={SlideVarients}
          initial="initial"
          animate="animate"

        >
          Creating captivating web experiences with React, HTML, JavaScript, and
          CSS
        </motion.div>
        </div>

       
      </motion.div>
    </HeadingParallax>
  );
};

export default Home;
