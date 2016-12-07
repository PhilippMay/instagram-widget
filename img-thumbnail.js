import React from "react";
import ImageModal from "./image-modal";

let ImageThumbnail = React.createClass({
    render: function() {
        return (

            <div style={{
                display: "inline-block",
                verticalAlign: "middle",
                position: "relative"
            }}>

                <ImageModal content={this.props.content}/>

                <div style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    zIndex: 10,
                    backgroundColor: "rgba(255,255,255,0.7)",
                    padding: 5,
                    borderRadius: 3
                }}>
                    <img style={{
                        display: "inline-block",
                        verticalAlign: "middle"
                    }} src="/icons/like.svg"/>
                    <span style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        fontSize: 16,
                        fontFamily: "brandon-grotesque",
                        fontWeight: 200,
                        paddingLeft: 5,
                        color: "#444"
                    }}>{this.props.content["likes"]["count"].toString()}</span>

                </div>

            </div>
        )
    }
})
export default ImageThumbnail;
