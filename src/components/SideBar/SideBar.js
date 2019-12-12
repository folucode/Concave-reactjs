import React from 'react'
import convert from 'convert-units'
import './SideBar.css'

const SideBar = (props) => {

  let drawerClasses = 'side-bar-container';
  if (props.show) {
    drawerClasses = 'side-bar-container open';
  }

  return (

    <div className={drawerClasses}>
      <div className="side-bar-logo">
        Concave
      </div>

      <ul className="side-bar-navigation">
        <li className="header">Select Conversion Mode</li>
        {convert().measures().map((measure) => {
          return (
            <li onClick={() => props.click(measure)} key={measure}>
              <a href="#">
                {measure}
              </a>
            </li>
          );
        })}
      </ul>
    </div>

  )
}

export default SideBar;