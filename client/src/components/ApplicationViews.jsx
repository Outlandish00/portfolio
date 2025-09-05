import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="about-me"
          element={
            <>
              <AboutMe />
            </>
          }
        />
        <Route
          path="projects"
          element={
            <>
              <Projects />
            </>
          }
        />
      </Route>
    </Routes>
  );
};
