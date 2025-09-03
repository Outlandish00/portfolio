import { useNavigate } from "react-router-dom";
// this is just basic formatting, still need to implement the links actually directing you to the pages after the pages are set up.
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div className="navbar-item">Lorem Ipsum</div>
      <div className="navbar-item">Lorem Ipsum</div>
      <div className="navbar-item">Lorem Ipsum</div>
      <div className="navbar-item">Lorem Ipsum</div>
    </div>
  );
};
