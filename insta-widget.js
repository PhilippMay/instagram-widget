import React from "react";
import ReactDom from "react-dom";
import $ from "jquery";
import ImageThumbnail from "./img-thumbnail";

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
                self.setState({data: response["data"]})
            }
        })
    },
    renderItems: function(item, i) {
        return <ImageThumbnail key={i} content={item}/>
    },
    render: function() {

        return (
            <div style={{
                maxWidth: 1000,
                margin: "auto"
            }}>
                {this.state.data.map(this.renderItems)}</div>
        )
    }
});

ReactDom.render(
    <InstagramWidget token="3570739697.b82b923.55199175e7604b71830d9848852b3252"/>, document.getElementById("insta-widget"))
