import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from '../NavBar/NavBar';
// import Calculation from "./components/Calculation/Calculation";
// import Answer from "./components/Answer/Answer";

export default props => (
  <Container fluid className={classNames('content', { 'is-open': props.isOpen })}>
    <NavBar toggle={props.toggle} />
    
    
  </Container>
)
