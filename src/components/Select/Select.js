import React from "react";
import convert from 'convert-units'
import { Input } from 'reactstrap'

const Select = (props) => {
	return (
		<Input id="inputState" type="select" onChange={props.change}>
			{convert()
				.possibilities(props.measure)
				.map(function (item) {
					return (
						<option key={item} value={item}>
							{convert().describe(item).singular + ("(" + item + ")").trim()}
						</option>
					);
				})}
		</Input >
	);
};


export default Select;