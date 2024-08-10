import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";


const ProgressBar = ({ value, title }) => {
  const [progVal, setPrgVal] = useState(0);
  useEffect(() => {
    animate(0, value, {
      duration: 2,
      onUpdate: (cv) => {
        setPrgVal(cv.toFixed(0));
      },
    });
  }, [value]);
  return (
    <div className="d-flex m-0 flex-column justify-content-center">
      <div className="text-center bio my-3">
        <span className="text-center fs-3 bio_text px-3">{title}</span>
      </div>
      <div className="progressbar-container">
        <div className="progressbar">
          <motion.div
            className="bar"
            animate={{
              width: `${value}%`,
            }}
            transition={{
              duration: 2,
            }}
          >
            <div className="progressbar-text-container">
              <p
                style={{
                  position: "absolute",
                  left: `${progVal - 10}%`,
                  top: "5%",
                }}
              >{`${progVal}%`}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
