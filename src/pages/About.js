import useTilt from "../hooks/useTilt";

import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import HeadingParallax from "../components/HeadingParallax";
import { useState } from "react";
import aboutme from "../images/hero.png"
import { useInfoContext } from "../context/infoContext";
import { animate, delay, motion } from "framer-motion";
import { useParallax } from "../parallex/useParallax";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { aboutPara, aboutMeLabels } = useInfoContext().aboutMe;
  function handleClick(index) {
    setActiveTab(index);
  }
  const textVarients = {
    initial: {
      x: -50,
      opacity: 0,
    },
    animate: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3 * index,
      },
    }),
  };

  const { primaryX, primaryY, onMouseMoveHandler, onMouseLeaveHandler } =
    useParallax();
  return (
    <motion.div
      onMouseMove={onMouseMoveHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <HeadingParallax heading={"About Me"}>
        <Container className="">
          <Row className="justify-content-center ">
            <Col className="d-flex slides justify-content-center" md="4">
              <div className="">
                <img
                  className="my-1 p-0 m-0 about_me_img"
                  src={aboutme}
                  width={"400px"}
                  alt="hero"
                ></img>
              </div>
            </Col>
            <Col className="" md="8" xl="8">
              <motion.div className="bio p-3">
                <motion.span
                  className="fs-4 px-2 bio_text"
                  variants={textVarients}
                  animate="animate"
                  initial="initial"
                >
                  Bio
                </motion.span>
                {aboutPara.map((paragraph, index) => (
                  <motion.p
                      initial={{opacity:0}}
                      animate={{opacity:1,transition:{duration:5}}}
                      className="fw-normal about_text fs-5"
                      key={index}
                  >
                    {paragraph}
                  </motion.p>
                ))}

                <Container className=" text-center pt-5">
                  <Row>
                    {Object.entries(aboutMeLabels).map(([label], index) => (
                      <Col
                        key={index}
                        className={`about_features ${
                          activeTab === index ? "active" : ""
                        }`}
                        onClick={() => handleClick(index)}
                      >
                        <h4 className="">{label}</h4>
                      </Col>
                    ))}
                  </Row>
                </Container>

                <Container>
                  <Row>
                    <Col className="p-3">
                      {Object.entries(aboutMeLabels).map(
                        ([label, value], index) => (
                          <ListGroup className="list-group-flush" key={index}>
                            {activeTab === index &&
                              value.map((el, idx) => (
                                <motion.ListGroupItem
                                  variants={textVarients}
                                  initial="initial"
                                  animate="animate"
                                  custom={idx}
                                  className="no-background_li fs-5"
                                  key={idx}
                                >
                                  <p className="border-bottom">{el}</p>
                                </motion.ListGroupItem>
                              ))}
                          </ListGroup>
                        )
                      )}
                    </Col>
                  </Row>
                </Container>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </HeadingParallax>
    </motion.div>
  );
};

export default About;
