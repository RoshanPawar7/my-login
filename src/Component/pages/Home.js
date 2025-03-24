import building from "../../assets/building.jpg";
import Gallerypic1 from "../../assets/GalleryPic1.jpg"
import Gallerypic2 from "../../assets/GalleryPic2.jpg"
import Gallerypic3 from "../../assets/GalleryPic3.jpg"


import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="banner-wrapper">
        <img src={building}></img>
        </div>
     
      <div className="gallery-wrapper">
      <div className="gallery">
         <img src={Gallerypic1}>
         </img>
         <div className="gall-name">Parking Display</div>
      </div>
      <div className="gallery">
         <img src={Gallerypic2}>
         </img>
         <div className="gall-name">Lobby Area</div>
      </div>
      <div className="gallery">
         <img src={Gallerypic3}>
         </img>
         <div className="gall-name">Meeting Area</div>
      </div>
    </div>
    </div>   
  );
};

export default Home;
