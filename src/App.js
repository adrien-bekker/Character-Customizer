import React, { Fragment } from "react";
import './App.css';
import "./containers/FaceCustomizer/FaceCustomizer";
import FaceCustomizer from "./containers/FaceCustomizer/FaceCustomizer";
import Toolbar from "./components/Navigation/Toolbar/Toolbar"

function App() {
  return (
    <Fragment>
      <Toolbar />
      <FaceCustomizer style={{paddingTop: "56px"}}></FaceCustomizer>
    </Fragment>
  );
}

export default App;
