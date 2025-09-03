import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";

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
      </Route>
    </Routes>
  );
};
