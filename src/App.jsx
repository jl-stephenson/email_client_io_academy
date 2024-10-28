import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inbox from "./components/Inbox";
import SentFolder from "./components/SentFolder";
import DeletedFolder from "./components/DeletedFolder";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [composeEmailVisible, setComposeEmailVisible] = useState(false);

  function handleMenuClick() {
    setShowNavbar(!showNavbar);
  }

  function showModal() {
    setComposeEmailVisible(true);
  }

  return (
    <BrowserRouter>
      <div className="flex bg-gray-700 text-white items-center w-screen justify-between p-6">
        <button
          className="border p-2 rounded-md sm:hidden"
          onClick={handleMenuClick}
        >
          Menu
        </button>
        <h1>Email Client</h1>
        <div className="flex items-center">
          <span className="sm:pr-4 pr-2 text-2xl">
            <i className="fa-solid fa-circle-user"></i>
          </span>
          <h4>User Name</h4>
        </div>
      </div>
      <div className="flex w-screen">
        <NavBar
          showModal={showModal}
          status={showNavbar ? "block" : "hidden"}
          handleMenuClick={handleMenuClick}
        />
        <div className="flex w-screen border min-w-10 sm:static relative z-0 overscroll-none">
          <div className="absolute z-20 bg-white w-full sm:w-1/2 sm:ml-200">
            {composeEmailVisible && (
              <Modal setComposeEmailVisible={setComposeEmailVisible} />
            )}
          </div>
          <Routes>
            <Route path="/" element={<Inbox />} />
            <Route path="/sent" element={<SentFolder />} />
            <Route path="/deleted" element={<DeletedFolder />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
