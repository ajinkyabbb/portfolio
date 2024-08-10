import { Container, Row, Col } from "react-bootstrap";
import HeadingParallax from "../components/HeadingParallax";
import ProgressBar from "../components/ProgressBar";
import { useInfoContext } from "../context/infoContext";
import CircularProgressBar from "../components/CircularProgressBar";

const MySkills = () => {
  const { mySkills, professionalSkills1 } = useInfoContext().aboutMe;
  return (
    <div>
      <HeadingParallax heading={"My Skills"}>
        <Container className="my-5">
          <Row className="justify-content-center">
            <Col lg={6} className="mb-5">
              {mySkills && mySkills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  title={skill.skillName}
                  value={skill.percentage}
                />
              ))}
            </Col>
            <Col sm={10} lg={6} xl={5} className="d-flex justify-content-center gap-2 flex-wrap">
              {" "}
              {professionalSkills1.map((skill,index) => (
                <CircularProgressBar
                key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </HeadingParallax>
    </div>
  );
};

export default MySkills;
