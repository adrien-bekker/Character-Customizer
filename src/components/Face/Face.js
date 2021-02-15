import React, { useContext, Fragment } from "react";
import FaceTrait from "./FaceTrait/FaceTrait";
import "./Face.css";


const face = (props) => (

    // Obtains one of each face attribute

        <div className="Face">
            <FaceTrait type={props.hair} className="Hair" />
            <FaceTrait type={props.eyes} className="Eyes" />
            <FaceTrait type={props.nose} className="Nose"/>
            <FaceTrait type={props.mouth} className="Mouth" />
        </div>
    );

const hairStyle = {

}

export default face;