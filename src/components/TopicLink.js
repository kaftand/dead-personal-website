import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MachineLearningImg from '../assets/images/MachineLearning.png'
import DataVizImg from '../assets/images/DataViz.png'
import me from '../assets/images/me.jpg'

class TopicLink extends Component
{
    constructor(props)
    {
        super(props)
        this.type = props.type
        //this.selected = props.selected
    }
    render ()
    {
        var backgroundColor = "blue"
        if(this.props.selected == this.props.type) {
            backgroundColor = "7dc97d"
        } else {
            backgroundColor = "white"
        }

        if(this.props.type == "DataViz") {
            var image = DataVizImg
            var desc = "Data Visualization"
        } else if(this.props.type == "MachineLearning") {
            var image = MachineLearningImg
            var desc = "Machine Learning"
        } else if(this.props.type == "me") {
            var image = me
            var desc = ""
        }
        var style = {
            borderRadius:"50%",
            backgroundColor:backgroundColor,
            width:"80%"
        }
        console.log(this)
        var callBack = function() {this.props.selectMode(this.type)}.bind(this)
        return (<figure>
                    <img src={image} style={style} onClick={callBack}/>
                    <figcaption style={{textAlign:"center", fontFamily:"sans-serif", fontVariant:"small-caps"}} onClick={callBack}>{desc}</figcaption>
                </figure>)
    }
}

function selectMode (mode) {
    return ({
        type:"MODE_SELECTED",
        payload:mode
    })
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectMode:selectMode}, dispatch)
}

function mapStateToProps(state) {
    return {
        selected: state.selected,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicLink)
