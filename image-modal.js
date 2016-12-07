import React from "react";
import {Modal} from 'react-bootstrap';

export let ImageModal = React.createClass({

    getInitialState: function() {
        return {showModal: false}
    },
    showModal: function() {
        console.log("show: " + this.props.imgid);
        this.setState({showModal: true});
    },
    hideModal: function() {
        this.setState({showModal: false})
    },
    render: function() {

        return (
            <div>

                <img style={{
                    cursor: "pointer"
                }} src={this.props.content["images"]["low_resolution"]["url"]} onClick={this.showModal}/>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton onClick={this.hideModal}></Modal.Header>
                    <Modal.Body>
                        <img style={{
                            width: "100%"
                        }} src={this.props.content["images"]["standard_resolution"]["url"]} onClick={this.hideModal}/>

                    </Modal.Body>
                    <Modal.Footer>
                        <p style={{
                       textAlign: "left",
                            fontSize: 20,
                            fontFamily: "brandon-grotesque",
                            fontWeight: 200,
                            lineHeight: 1.2
                        }}>{this.props.content["caption"]["text"]}</p>
                    </Modal.Footer>
                </Modal>

            </div>

        )
    }

});

export default ImageModal;
