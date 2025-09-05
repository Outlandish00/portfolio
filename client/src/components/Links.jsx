import "./Links.css";
import { Navbar } from "./Navbar";
export const Links = () => {
  return (
    <div className="links-container">
      <div className="links-title">
        <h1>Links</h1>
      </div>
      <div className="link-button-container">
        <div className="link-button">GitHub</div>
        <div className="link-button">Email</div>
        <div className="link-button">LinkedIn</div>
      </div>
      <Navbar />
    </div>
  );
};
