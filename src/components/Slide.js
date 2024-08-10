import useTilt from "../hooks/useTilt";
import a from "../images/webDevelopementSkills/web_developement.jpg";
function Slide({ category, skills, image, activeKey }) {

  const imageStyle = {
    height: "400px",
    // width: "100px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(1,1,2,2)), url(${require(`../images/webDevelopementSkills/${image}.jpg`)})`,
    position:"relative"    
    // filter: "brightness(60%) blur(0px)",
    // filter: "",
  };
  // const active = true
  // const ref = useTilt(active);
  return (
    <div
      // ref={ref}
      className="slide  text-center d-flex justify-content-center"
      data-active={true}
      // style={{ position: "relative"}}
      style={imageStyle}
    >
      {/* <div className="" style={imageStyle}></div> */}
      <div
        className="slideContent text-center"
        style={{
          color: "white",
          textShadow: " 2px 7px 5px rgba(0,0,0,3), 0px -4px 30px rgba(255,255,255,0.01)", 
          filter: "brightness(100%)",
          position: "absolute",
          bottom: "5%",
        }}
      >
        <div className="slideContentInner">
          <h1 style={{color:"#647bff", background: `linear-gradient(to bottom, rgba(0,0,0,0) 100%, rgba(0,0,0,1)),`}} className="text-center">{category}</h1>
          <ul className="d-flex justify-content-center flex-column" style={{ listStyle: "none" }}>
            {skills.map((s, index) => {
              return <li className="text-center" key={index}>{s.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Slide;
