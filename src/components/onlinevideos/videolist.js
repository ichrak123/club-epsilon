import React from "react";
import ReactDOM from "react-dom";

import Player from "./videoscard.js";


class VideoList extends React.Component {
    constructor(props) {
        super(props)
  this.state = {
    open: false

    
  }
}

  onOpenModal = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.onOpenModal}>chapitre </button> 
       
        <div>
           
        <Player open={this.state.open} toggleModal={this.onOpenModal} />
        </div>
      </div>
    );
  }
}


export default VideoList