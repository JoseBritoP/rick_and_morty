import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <hr />
        <p>ID: {this.props.id}</p>
        <p>Name: {this.props.name}</p>
        <hr />
      </div>
    );
  }
}

export default Card;
