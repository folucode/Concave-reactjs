import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import convert from 'convert-units'

const SideBar = props => (
  <div className={classNames('sidebar', { 'is-open': props.isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={props.toggle} style={{ color: '#fff' }}>&times;</span>
      <h3>Concave App.</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Pick a conversion mode</p>

        {convert().measures().sort().map((measure) => {
          return (
            <NavItem onClick={() => props.click(measure)} key={measure}>
              <NavLink>
                <FontAwesomeIcon icon={faArrowCircleRight} className="mr-2" /> {measure}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
    </div>
  </div>
);

export default SideBar;
