import { StrictMode, useState } from "react";
import "./App.css";
import Header from "../components/Header/Header";
import Icons from "../components/icons_stack/Icons";
import MainComponent from "../components/mainComponent/MainComponent";

function App() {
  return (
    <>
      <div className="container">
        <div>
          <Header />
        </div>
        <div className="mainPage">
          <MainComponent/>
          <Icons/>
        </div>
      </div>
    </>
  );
}

export default App;
