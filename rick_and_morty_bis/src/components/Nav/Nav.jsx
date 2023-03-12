import React from 'react'
import {Link} from 'react-router-dom'
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
    const {onSearch} = this.props
    return (
      <nav className={style.nav}>
        <h1>Puede haber una imagen logo de rick and morty</h1>
        <div className={style.routes}>
          <Link to={"/home"}>
            <h3>Home</h3>          
          </Link>
          <Link to={'/about'}>
            <h3>About</h3>
          </Link>
        </div>

        <SearchBar onSearch={onSearch}/>
      </nav>
    )
  }
}
