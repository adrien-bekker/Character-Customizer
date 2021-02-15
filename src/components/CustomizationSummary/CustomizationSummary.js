import React, { Fragment } from "react";
import "./CustomizationSummary.css";

const customizationSummary = (props) => {
    // Gets all of the traits values individually and calculates/displays their cost
    const traitSummary = Object.values(props.traits)
        .map(traitValue => {
            return <p style={{marginLeft: "-30px"}}><span style={{textTransform: "capitalize"}}>{traitValue}</span>: {parseInt(traitValue.charAt(traitValue.length - 1) * 2 -2)} 
                <img src="https://i.pinimg.com/originals/f9/da/09/f9da09a345b352d9f6cd4e59f66197c4.png" style={{width:"13px", height:"13px", marginLeft: "3px"}}/> </p>
        });

    return (
        <div className="CustomizationSummary">
            <button className="Close" onClick={props.close}>X</button>
            <h3 style={{marginLeft: "20px"}}>Current Traits:</h3>
            <ul>
                {traitSummary}
            </ul>
            <h3>Total Price: {props.price}<img src="https://i.pinimg.com/originals/f9/da/09/f9da09a345b352d9f6cd4e59f66197c4.png" style={{width:"13px", height:"13px", marginLeft: "3px"}}/></h3>
            <button>Continue</button>
        </div>
    );
};

export default customizationSummary;