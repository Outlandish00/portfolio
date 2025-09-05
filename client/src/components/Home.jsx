import { HomeNavbar } from "./Home-Navbar";
import "./Home.css";
import { Navbar } from "./Navbar";
import profilePic from "../assets/Professional-Photo.png";

export const Home = () => {
  return (
    <div className="home-root-container">
      <div className="image">
        <img src={profilePic}></img>
      </div>
      <div className="right-side-container">
        <div className="home-header">
          <h1>Tyler's Portfolio</h1>
        </div>
        <div className="home-body">
          A <span className="green">Software Developer</span> with a stack in:{" "}
          <span className="green">
            {" "}
            React, JavaScript, C#, .Net, and EFCore
          </span>
        </div>
        <div className="navbar-container">
          <HomeNavbar />
        </div>
      </div>
    </div>
  );
};
