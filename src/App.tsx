import React from 'react';
import {HashRouter, Route, Routes, Navigate, BrowserRouter} from "react-router-dom";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <HashRouter>
      <ToastContainer />
      <div className="h-100">
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
