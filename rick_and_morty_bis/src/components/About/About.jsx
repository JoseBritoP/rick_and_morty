import React from 'react'
import style from './About.module.css'
export default class About extends React.Component {
  render() {
    return (
      <div className={style.aboutContainer}>
        <div>
          <h1>Sobre mi</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, cumque ut vitae aliquid et nemo? Sunt, ullam, maiores quae optio fuga illum corporis nostrum quo sint laborum rerum nesciunt? Nulla!</p>
        </div>

        <div>
          <h2>Sobre el proyecto</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dignissimos? Fuga molestiae explicabo officiis vel mollitia similique eligendi at eum omnis excepturi, fugit eius maxime laboriosam autem cum soluta expedita!</p>
          <p>Herramientas utilizadas:</p>
          <ul>
            <li>JS</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </div>
      </div>

    )
  }
}
