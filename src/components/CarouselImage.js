import a from '../images/webDevelopementSkills/web_developement.jpg'
const CarouselImage = ({ image }) => {
    console.log(image)
    return (
      <div>
       <img key={image} src={require(`../images/webDevelopementSkills/${image}.jpg`)} className="img-responsive" />
      </div>
    );
  };
  
  export default CarouselImage;