import React from "react";
import ReactDom from "react-dom";
import {Grid, Col, Row} from "react-bootstrap";
import $ from "jquery";

let InstagramWidget = React.createClass({

    getInitialState: function() {
        return ({data: []})
    },

    componentDidMount: function() {
        let url = "https://api.instagram.com/v1/users/self/media/recent/?count=40&access_token=" + this.props.token;
        let self = this;
        $.ajax({
            url: url,
            dataType: "jsonp",
            success: function(response) {
                console.log(response);

                self.setState({data: response["data"]})
            }
        })
    },
    renderItems: function(item, i) {
        return <div style={{
            display: "inline-block",
            verticalAlign: "middle"
        }} key={i}>
            <img src={item["images"]["low_resolution"]["url"]}/>
        </div>
    },
    render: function() {

        return (
            <div style={{
                maxWidth: 1300,
                margin: "auto"
            }}>{this.state.data.map(this.renderItems)}</div>
        )
    }
});

ReactDom.render(
    <InstagramWidget token="3570739697.b82b923.55199175e7604b71830d9848852b3252"/>, document.getElementById("insta-widget"))
