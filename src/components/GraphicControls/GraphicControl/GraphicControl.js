import React from "react";
import "./GraphicControl.css";

// Creates a component with a given label and buttons to customize traits
const graphicControl = (props) => (
    <div className="GraphicControl">
        <div>{props.label}</div>
        <button onClick={props.left}>&lt;</button>
        <button onClick={props.right}>&gt;</button>
    </div>
);

export default graphicControl;