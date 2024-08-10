import { useRef, useEffect, useState } from "react";

const ZigZagCard = ({ imageSrc, title, text, reverse }) => {
  const imageRef = useRef();
  const [image, setImage] = useState();
  useEffect(() => {
    setImage(require(`../images/projectPhotos/${imageSrc}.png`));
    setTimeout(() => {
      if (imageRef.current) {
        const imageHeight = imageRef.current.naturalHeight;
        if (imageHeight < 1000) {
          imageRef.current.classList.remove("project_img");
        }
      }
    }, 1000);
  }, [imageSrc]);
  return (
    <div
      className={`card  d-flex border-0 bg-transparent`}
      style={{ maxWidth: "100%" }}
    >
      <div className={`row g-0 ${reverse ? " flex-row-reverse text-end" : ""}`}>
        <div className="col-md-6 project_img_div text-center">
          <img
            ref={imageRef}
            src={image}
            className="img-fluid project_img"
            alt="Card"
          />
        </div>
        <div className="col-md-6">
          <div className="card-body text-center bio">
            <h1
              style={{ color: "#647bff" }}
              className="card-title col-md-10 bio_text"
            >
              {title}
            </h1>
            <ul style={{ listStyle: "none" }}>
              {text.map((p, index) => (
                <li key={index}>
                  <p className="card-text fs-5 pt-4 text-start col-md-10">
                    {p.para}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZigZagCard;
