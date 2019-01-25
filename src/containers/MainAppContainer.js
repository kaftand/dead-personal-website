import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TopicLink from '../components/TopicLink.js'
import Post from '../components/Post.js'


class MainAppContainer extends React.Component {
    constructor (props)
    {
        super(props);
    }
    render ()
    {
        var style = {
            borderRadius:"50%",
            width:"80%"
        }
        return  <div style={{alignContent:"center"}}>
                    <div style={{borderStyle:"outset", width:"60%", margin: "auto", backgroundColor:"#f7efef", height:"40%"}}>
                        <table style={{width:"100%"}}>
                        <tr>
                            <td><TopicLink type="DataViz"/></td>
                            <td><TopicLink type="me"/></td>
                            <td><TopicLink type="MachineLearning"/></td>
                        </tr>
                        </table>
                        <Post/>
                    </div>
                </div>
    }
}

export default MainAppContainer
