import React from 'react'
import Select from "../Select/Select";
import './Calculation.css'
import {
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";

const Calculation = (props) => (
  <div className="calculation">
    <Form>
      <div className="form-row">
        <FormGroup className="col-sm-9 col-md-12">
          <label htmlFor="inputEmail4">Email</label>
          <Input value={props.value} type="number" onChange={props.change}></Input>
        </FormGroup>
      </div>
      <div className="form-row">
        <FormGroup className="col-sm-9 col-md-12">
          <label htmlFor="inputAddress">From</label>
          <Select
            measure={props.measure}
            change={props.changeFrom}
            label="From"
          />
        </FormGroup>
        <FormGroup className="col-sm-9 col-md-12">
          <label htmlFor="inputAddress">To</label>
          <Select
            measure={props.measure}
            change={props.changeTo}
            label="To"
          />
        </FormGroup>
      </div>
      <Button onClick={props.convert} color="warning" type="submit">
        Convert
        </Button>
    </Form>

  </div>
)

export default Calculation