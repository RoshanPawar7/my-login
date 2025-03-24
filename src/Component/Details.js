import floor1 from "../assets/floor1.png";
import floor2 from "../assets/floor2.png";
import am1 from "../assets/am1.png";
import am2 from"../assets/am2.png";
import am3 from "../assets/am3.png";
import am4 from "../assets/am4.png";
import "./details.css";

const Details = () => {
  return (
    <div>
      <div className="detail-wrapper">
        <div className="floor">Floor Plan</div>
        <div className="inner-img">
          <div className="floor-img">
            <img src={floor1}></img>
            
          </div>
          <div className="floor-img">
            <img src={floor2}></img>
          </div>
        </div>
      </div>
      <div className="amunities">
        <div className="head">Amunities</div>
        <div className="amunities-wrapper">
            <div className="amuni-img">
                <img src={am1}></img>
             <div className="title">Hall</div>
            </div>
        
        <div className="amuni-img">
                <img src={am2}></img>
             <div className="title">Parking</div>
            </div>
            <div className="amuni-img">
                <img src={am3}></img>
             <div className="title">Cctv</div>
            </div>
            <div className="amuni-img">
                <img src={am4}></img>
             <div className="title">Rest Area</div>
            </div>
            
            </div>
      </div>
    </div>
  );
};

export default Details;
