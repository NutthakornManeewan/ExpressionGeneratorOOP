import CreateNewParam from '../../utils/createNewParam'
import Expression from './Expression'
import React from 'react'

class RandomModel extends Expression {
	componentDidUpdate() {
		if (this.haveOrOperator()) this.setState({ isEnd: true })
		if (this.haveAndOperator()) this.changeToCovariance(false)
	}

	haveAndOperator = () => {
		let { isVarianceStructure, expression } = { ...this.state }
		return (
			!!isVarianceStructure && expression.some(expr => expr.label === '&')
		)
	}
	haveOrOperator = () => {
		let { isEnd, expression } = { ...this.state }
		return (
			!isEnd &&
			expression.some(expr => expr.label === '||') &&
			expression.slice(-1)[0].Class === 'value'
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
					Operand
				</button>
				<button
					disabled={this.state.isEnd}
					onClick={() =>
						this.pushParam(
							CreateNewParam({ Class: 'operator', typeOfCal: '' })
						)
					}
				>
					Operator
				</button>
				{this.renderParameters()}
				{this.getJsonExpression()}
			</div>
		)
	}
}

export default RandomModel
