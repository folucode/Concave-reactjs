import React from 'react'
import convert from 'convert-units'
import './SideBar.css'

const SideBar = (props) => {

  let drawerClasses = 'sidebar-container';
  if(props.show) {
      drawerClasses = 'sidebar-container open';
  }

  return (


    <div className={drawerClasses}>
      <div className="sidebar-logo">
        Concave
      </div>
      
      <ul className="sidebar-navigation">
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