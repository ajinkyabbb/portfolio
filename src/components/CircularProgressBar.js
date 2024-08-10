import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState,useEffect } from "react";
import { motion, animate } from "framer-motion";
const CircularProgressBar = ({name, percentage}) => {
     const [progVal, setPrgVal] = useState(0);
  useEffect(() => {
    animate(0, percentage, {
      duration: 3,
      onUpdate: (cv) => {
        setPrgVal(cv.toFixed(0));
      },
    });
  }, [percentage]);

  
     return ( 
          <div className="d-flex justify-content-center"> 

        <motion.div  sm={12} className="text-center circular_bar" style = {{ width: "200px" }}>
             <CircularProgressbar className="circular_bar_2"  value = {progVal} text = {`${progVal}%`}  strokeWidth = {5}
               styles={buildStyles({
                    
                    pathColor: '#647bff',
                    textColor: '#647bff',
                    trailColor: 'none',

               })}
               />
               <h5 style={{color:'#647bff'}} className="circular_bar_2  mx-5 mt-3 py-2">{name} </h5>
        </motion.div>
               </div>
     );
}
 
export default CircularProgressBar;