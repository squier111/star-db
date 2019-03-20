import React , {Component} from 'react'
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header d-flex">
          <h3>
              Star DB
          </h3>
          <ul className="d-flex">
            <li>
              <a href = "javascript:void(0);">People</a>
            </li>
            <li>
              <a href = "javascript:void(0);">Planets</a>
            </li>
            <li>
              <a href = "javascript:void(0);">Starships</a>
            </li>
          </ul>
      </div>
    )
  }

}