import React, { Component } from 'react';
import PropTypes from "prop-types";
import "./FaceTrait.css"
import hair1 from "../../../assets/hair1.png";
import hair2 from "../../../assets/hair2.png";
import hair3 from "../../../assets/hair3.png";
import eyes1 from "../../../assets/eyes1.png";
import eyes2 from "../../../assets/eyes2.png";
import eyes3 from "../../../assets/eyes3.png";
import nose1 from "../../../assets/nose1.png";
import nose2 from "../../../assets/nose2.png";
import nose3 from "../../../assets/nose3.png";
import mouth1 from "../../../assets/mouth1.png";
import mouth2 from "../../../assets/mouth2.png";
import mouth3 from "../../../assets/mouth3.png";


class FaceTrait extends Component {

    render() {

        let traits = {
            hair1: hair1,
            hair2: hair2,
            hair3: hair3,
            eyes1: eyes1,
            eyes2: eyes2,
            eyes3: eyes3,
            nose1: nose1,
            nose2: nose2,
            nose3: nose3,
            mouth1: mouth1,
            mouth2: mouth2,
            mouth3: mouth3
        };

        return (<img src={traits[this.props.type]} className={this.props.className}/>);
    }
};

// Requires type and className to be passed in (for which trait and it's corresponding style)
FaceTrait.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
};

export default FaceTrait;