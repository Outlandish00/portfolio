import "./AboutMe.css";
import { Navbar } from "./Navbar";
export const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-header">
        <h1>About Me</h1>
      </div>
      <div className="about-me-info-container">
        <div className="info-card">
          <div className="info-header">
            <h2>Background</h2>
          </div>
          <div className="info-body">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum
          </div>
        </div>
        <div className="info-card">
          <div className="info-header">
            <h2>Skills</h2>
          </div>
          <div className="info-body">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum
          </div>
        </div>
        <div className="info-card">
          <div className="info-header">
            <h2>Schooling</h2>
          </div>
          <div className="info-body">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};
