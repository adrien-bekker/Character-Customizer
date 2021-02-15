import React from "react";
import GraphicControl from "./GraphicControl/GraphicControl";
import "./GraphicControls.css";

const controls = [
    { label: "Hair", type: "hair" },
    { label: "Eyes", type: "eyes" },
    { label: "Nose", type: "nose" },
    { label: "Mouth", type: "mouth" }
];

// Creates each graphic control component with each face trait
const graphicControls = (props) => (
    <div className="GraphicControls" style={props.style}>
        {controls.map(ctrl => (
            <GraphicControl 
            key={ctrl.label} 
            label={ctrl.label}
            type={ctrl.type}
            left={() => props.left(ctrl.type)}
            right={() => props.right(ctrl.type)} />
        ))}
    </div>
);

export default graphicControls;