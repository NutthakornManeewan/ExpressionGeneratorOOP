import CreateNewParam from "../../utils/createNewParam"
import Expression from './Expression'
import React from 'react'

class FixedModel extends Expression {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<h3>{this.state.name}</h3>
				<button
					onClick={() =>
						this.pushParam(
							CreateNewParam({
								Class: 'value',
								typeOfCal: 'VARIETY'
							})
						)
					}
				>
					OPERAND
				</button>
				<button
					onClick={() =>
						this.pushParam(
							CreateNewParam({ Class: 'operator', typeOfCal: '' })
						)
					}
				>
					OPERAND
				</button>
				{this.state.expression.map(expr => expr)}
			</div>
		)
	}
}

export default FixedModel
