import { useNavigate } from "react-router-dom";
import "./Home-Navbar.css";
// this is just basic formatting, still need to implement the links actually directing you to the pages after the pages are set up.
export const HomeNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-root-container">
      <ul className="navbar-list">
        <li
          className="link-item"
          onClick={() => {
            navigate("/about-me");
          }}
        >
          About Me
        </li>
        <li
          className="link-item"
          onClick={() => {
            navigate("/projects");
          }}
        >
          Projects
        </li>
        <li
          className="link-item"
          onClick={() => {
            navigate("/links");
          }}
        >
          Links
        </li>
      </ul>
    </div>
  );
};
