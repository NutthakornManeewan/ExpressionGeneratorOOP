class Expression {
	constructor(name = 'untitled', allowOperators = ['+', '.']) {
		this.name = name
		this.size = 0
		this.expression = []
		this.isVarianceStructure = true
		this.allowPushOperand = true
		this.allowOperators = allowOperators
	}

	expressionSize = () => this.size
	expressionName = () => this.name
	getExpression = () => this.expression
	isVariance = () => this.isVarianceStructure
	changeToCovariance = () => (this.isVarianceStructure = false)
	pushParam = param => {
		if (this.allowPushOperand && param.Class !== 'operator')
			this.updateExpression(this.expression, param)
		else if (
			!this.allowPushOperand &&
			param.Class === 'operator' &&
			this.isOperatorAllows(param.label)
		)
			this.updateExpression(this.expression, param)
	}

	// private method (virtual)
	updateExpression = (expression_list, param) => {
		expression_list.push(param)
		this.size = expression_list.length
		this.allowPushOperand = !this.allowPushOperand
	}
	isOperatorAllows = operator => {
		return this.allowOperators.some(ope => ope === operator)
	}
}

export default Expression
