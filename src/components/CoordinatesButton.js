import React from 'react';

class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    let mouseCoordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(mouseCoordinates)
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    );
  }

}

export default CoordinatesButton
