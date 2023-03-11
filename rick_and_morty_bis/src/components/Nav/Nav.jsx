import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'

export default class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCharacter: null
    };
  }

  render() {
    return (
      <nav className={style.nav}>
        <h1>Desde Nav</h1>
        <SearchBar onSearch={this.props.onSearch}/>
        {/* <SearchBar onSearch={(characterID) => window.alert(characterID)}/> */}
      </nav>
    )
  }
}
