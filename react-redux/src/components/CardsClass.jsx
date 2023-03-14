import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { getCharacters } from "../redux/actions";

class CardsClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    return (
      <div>
        <h1>Cards Class</h1>
        <div>
          {this.props.characters.map((char) => {
            return <Card id={char.id} name={char.name} key={char.id} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => {
      dispatch(getCharacters());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsClass);
