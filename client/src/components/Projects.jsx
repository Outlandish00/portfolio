import { Navbar } from "./Navbar";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Projects</h1>
      </div>
      <div className="project-card-container">
        <div className="project-card-outline">
          <div className="project-img-header">imgplaceholder</div>
          <div className="bottom-half">
            <div className="project-title-header">TItle Placeholder</div>
            <div className="project-body"></div>
          </div>
        </div>
        <div className="project-card-outline">
          <div className="project-img-header">imgplaceholder</div>
          <div className="bottom-half">
            <div className="project-title-header">TItle Placeholder</div>
            <div className="project-body"></div>
          </div>
        </div>
        <div className="project-card-outline">
          <div className="project-img-header">imgplaceholder</div>
          <div className="bottom-half">
            <div className="project-title-header">TItle Placeholder</div>
            <div className="project-body"></div>
          </div>
        </div>
        <div className="project-card-outline">
          <div className="project-img-header">imgplaceholder</div>
          <div className="bottom-half">
            <div className="project-title-header">TItle Placeholder</div>
            <div className="project-body">Lorem Ipsum </div>
          </div>
        </div>
        <div className="project-card-outline">
          <div className="project-img-header">imgplaceholder</div>
          <div className="bottom-half">
            <div className="project-title-header">TItle Placeholder</div>
            <div className="project-body">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem
              IpsumLorem Ipsum Lorem Ipsum
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};
