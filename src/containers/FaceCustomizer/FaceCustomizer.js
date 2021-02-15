import React, { Component, Fragment } from "react";
import Face from "../../components/Face/Face";
import GraphicControls from "../../components/GraphicControls/GraphicControls"
import "./FaceCustomizer.css"
import CustomizationSummary from "../../components/CustomizationSummary/CustomizationSummary";
import Backdrop from "../../components/Backdrop/Backdrop";

class FaceCustomizer extends Component
{
    // Holds state of the trait customization
    state = {
        traits: {
            hair: "hair1",
            eyes: "eyes1",
            nose: "nose1",
            mouth: "mouth1"
        },
        price: 0,
        finishing: false
    };

    // Method for switching traits with left arrow
    nextTrait = (type) => {
        let prevTraits = {...this.state.traits};
        let prevTraitNum = parseInt(prevTraits[type].charAt(prevTraits[type].length - 1)); 
        let price = this.state.price;
        if (prevTraitNum == 3) {
            prevTraits[type] = type + "1";
            price -= 4;
        }
        else {
            prevTraits[type] = type + (prevTraitNum + 1);
            price += 2;
        }

        this.setState({
            traits: prevTraits,
            price: price
        });
    }

    // Method for switching traits with right arrow
    prevTrait = (type) => {
        let prevTraits = {...this.state.traits};
        let prevTraitNum = parseInt(prevTraits[type].charAt(prevTraits[type].length - 1)); 
        let price = this.state.price;
        if (prevTraitNum == 1) {
            prevTraits[type] = type + "3";
            price += 4;
        }
        else {
            prevTraits[type] = type + (prevTraitNum - 1);
            price -= 2;
        }

        this.setState({
            traits: prevTraits,
            price: price
        });
    }

    finishing = () => {
        this.setState({finishing: !this.state.finishing});
    }

    // Returns current traits with face and the customization controls
    render() {
        return (
            <div style={this.props.style}>
                <Face 
                hair={this.state.traits.hair} 
                eyes={this.state.traits.eyes} 
                nose={this.state.traits.nose} 
                mouth={this.state.traits.mouth} />
                {this.state.finishing ? <Backdrop><CustomizationSummary traits={this.state.traits} close = {this.finishing} price={this.state.price} /> </Backdrop> : null}
                {/* Inline styles to center paragraph and resize coin image */}
                <p 
                    style={this.state.finishing ? {marginTop: "-255px", width: "150px", paddingLeft: "50px", marginLeft: "auto", marginRight: "auto"} : 
                    {margin: "auto", width: "150px", paddingLeft: "50px"}}>
                        Total Price: {this.state.price} <img src="https://i.pinimg.com/originals/f9/da/09/f9da09a345b352d9f6cd4e59f66197c4.png" style={{width:"15px", height:"15px"}}/>
                </p>
                <GraphicControls
                left = {this.prevTrait}
                right = {this.nextTrait}
                style = {this.state.finishing ? {marginTop: "-16px"}: null} />
                <div className="Done"><button disabled={this.state.price == 0 || this.state.finishing} onClick={this.finishing}>Finish Customization</button></div>
            </div>
        );
    }
}
export default FaceCustomizer;