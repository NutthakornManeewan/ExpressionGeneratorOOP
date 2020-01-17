class Expression {
	constructor(name = 'untitled') {
		this.name = name
		this.size = 0
		this.expression = []
		this.isVarianceStructure = true
	}

	expressionSize = () => this.size
	expressionName = () => this.name
	getExpression = () => this.expression
	isVariance = () => this.isVarianceStructure
	changeToCovariance = () => (this.isVarianceStructure = false)
	pushParam = param => {
		this.expression.push(param)
		this.size = this.expression.length
	}
}

export default Expression
