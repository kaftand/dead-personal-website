import React, {Component} from 'react';
import {connect} from 'react-redux';
import DataViz from '../assets/DataViz.js'
import MachineLearning from '../assets/MachineLearning.js'
import Background from '../assets/Background.js'

class Post extends Component
{
    constructor(props) {
        super(props)
    }
    render() {
        if (this.props.selected == "DataViz") {
            return DataViz
        } else if (this.props.selected == "MachineLearning") {
            return MachineLearning
        } else if (this.props.selected == "me")  {
            return Background
        } else {
            return <div/>
        }
    }
}

function mapStateToProps(state) {
    return {
        selected: state.selected,
    };
}

export default connect(mapStateToProps)(Post)
