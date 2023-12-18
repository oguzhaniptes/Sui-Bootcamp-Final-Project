import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import CreateNotice from "../Pages/CreateNotice";
import FoundDocument from "../Pages/FoundDocument";

const Router: React.FC = () => {
  return (
    <>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" index element={<App />} />
          <Route path="/found-doc" index element={<FoundDocument />} />
          <Route path="/create-notice" index element={<CreateNotice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
