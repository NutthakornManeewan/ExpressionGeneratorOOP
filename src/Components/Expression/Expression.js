import React, { Component } from 'react'
import _ from "lodash"
import Parameter from '../Parameter'
import CreateNewParam from '../../utils/createNewParam'
class Expression extends Component {
	constructor(props) {
		super(props)
		let { name, allowOperators } = { ...props }
		this.state = {
			name,
			size: 0,
			isEnd: false,
			expression: [],
			isVarianceStructure: true,
			allowPushOperand: true,
			allowOperators
		}
	}

	changeToCovariance = (varicance_struct = true) => {
		let { isVarianceStructure } = { ...this.state }
		isVarianceStructure = varicance_struct
		this.setState({ isVarianceStructure })
	}
	pushParam = param => {
		let { allowPushOperand, expression } = { ...this.state }
		if (allowPushOperand && param.Class !== 'operator')
			this.updateExpression(expression, param)
		else if (
			!allowPushOperand &&
			param.Class === 'operator' &&
			this.isOperatorAllows(param.label)
		)
			this.updateExpression(expression, param)
	}

	// private method (virtual)
	updateExpression = (expression_list, param) => {
		let { size, allowPushOperand } = { ...this.state }
		expression_list.push(
			<Parameter
				key={_.uniqueId('param_')}
				label={param.label}
				values={param.values}
				Class={param.Class}
				typeOfCal={param.typeOfCal}
			/>
		)
		size = expression_list.length
		allowPushOperand = !allowPushOperand
		this.setState({ size, allowPushOperand, expression: expression_list })
	}
	isOperatorAllows = operator => {
		return this.state.allowOperators.some(ope => ope === operator)
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

export default Expression
