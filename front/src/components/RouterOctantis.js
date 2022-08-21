import * as React from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import Field from "../pages/Field";
import WineCellar from "../pages/WineCellar";

const RouterOctantis = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="champ" />} />
      <Route path="/chai" element={<WineCellar />} />
      <Route path="/champ" element={<Field />} />
    </Routes>
  );
};
export default RouterOctantis;
