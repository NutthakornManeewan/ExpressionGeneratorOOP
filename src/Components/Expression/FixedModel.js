import CreateNewParam from '../../utils/createNewParam'
import Expression from './Expression'
import React from 'react'

class FixedModel extends Expression {
	componentDidUpdate() {
		if (
			!this.state.isEnd &&
			this.state.expression.some(expr => expr.props.label === '&')
		) {
			this.setState({ isEnd: true })
		}
	}

	render() {
		return (
			<div>
				<h3>{this.state.name}</h3>
				<button
					disabled={this.state.isEnd}
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
					disabled={this.state.isEnd}
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
