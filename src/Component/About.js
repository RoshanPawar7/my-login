import Banner1 from "../assets/Banner1.jpg";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="main-wrapper">
        <img src={Banner1}></img>
      </div>
      <div className="wrapper-info">
        <div className="info">
          Building construction is the process of assembling materials and
          erecting structures to create residential, commercial, or industrial
          buildings. It involves planning, designing, and executing construction
          activities.
        </div>
      </div>
      <div className="build-info">
        <div className="right">
          <p>
            Key Phases: Planning and Design: Involves architectural design,
            structural calculations, and material selection. Site Preparation:
            Clearing land, excavation, and leveling. Foundation Work: Laying the
            base (footings and slabs) to support the structure. Structural
            Framework: Erecting columns, beams, and slabs for stability.
            Enclosure: Adding walls, roofing, and external finishes. Interior
            Work: Electrical, plumbing, flooring, and painting. Finishing and
            Inspection: Final touches and ensuring compliance with building
            codes.
          </p>
          <p>
            Concrete: For foundations, slabs, and beams. Steel: For
            reinforcement and structural strength. Bricks and Blocks: For walls.
            Wood: For doors, windows, and frames. Glass and Aluminum: For
            windows and facades.
          </p>
        </div>
        <div className="left">
        </div>
      </div>
    </div>
  );
};
export default About;
