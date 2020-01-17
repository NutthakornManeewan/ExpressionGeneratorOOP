import React, { useEffect } from 'react'
import Parameter from './Components/Parameter'
import Expression from './Components/Expression'
const expressions = new Expression('fixed_model')

const App = () => {
	const addNewOperator = () => {
		expressions.pushParam(
			new Parameter({
				label: Math.random() < 0.5 ? '+' : '.',
				values: '+',
				typeOfCal: '',
				Class: 'operator'
			})
		)
	}
	const addNewParam = () => {
		expressions.pushParam(
			new Parameter({
				label: 'A',
				values: 'A',
				typeOfCal: 'type',
				Class: 'value'
			})
		)
	}
	useEffect(() => {
		console.log(expressions)
	}, [])

	const renderParams = () => {
		console.log(expressions)
		const expression_list = expressions.getExpression()
		if (!!expression_list) {
			return expression_list.map(expr => (
				<h4>{expr.getParams().label}</h4>
			))
		}
	}

	return (
		<div>
			<button onClick={() => addNewParam()}>Create new operand</button>
			<button onClick={() => addNewOperator()}>
				Create new operator
			</button>
			{renderParams()}
		</div>
	)
}

export default App
