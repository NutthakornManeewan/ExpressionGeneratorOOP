import CreateNewParam from '../../utils/createNewParam'
import Expression from './Expression'
import React from 'react'

class RandomModel extends Expression {
	componentDidUpdate() {
		if (this.haveOrOperator()) this.setState({ isEnd: true })
		if (this.haveAndOperator()) this.changeToCovariance()
	}

	haveAndOperator = () => {
		let { isVarianceStructure, expression } = { ...this.state }
		return (
			!isVarianceStructure &&
			expression.some(expr => expr.props.label === '&')
		)
	}
	haveOrOperator = () => {
		let { isEnd, expression } = { ...this.state }
		return (
			!isEnd &&
			expression.some(expr => expr.props.label === '||') &&
			expression.slice(-1)[0].props.Class === 'value'
		)
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

export default RandomModel
