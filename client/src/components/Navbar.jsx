import { useNavigate } from "react-router-dom";
import "./Navbar.css";
// this is just basic formatting, still need to implement the links actually directing you to the pages after the pages are set up.
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-root-container">
      <ul className="navbar-list">
        <li
          className="link-item"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </li>
        <li
          className="link-item"
          onClick={() => {
            navigate("/projects");
          }}
        >
          Interested in my work?
        </li>
      </ul>
    </div>
  );
};
