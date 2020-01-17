import React from 'react'
import CreateModel from './Containers/CreateModel'
import Parameter from './Components/Parameter'
import Expression from './Components/Expression'

const App = () => {
	const expressions = new Expression('fixed_model')
	expressions.pushParam(
		new Parameter({
			label: 'Variety',
			Class: 'value',
			values: 'Variety',
			typeOfCal: 'id'
		}).getReactComponent()
	)
	expressions.pushParam(
		new Parameter({
			label: '+',
			Class: 'operator',
			values: '+',
			typeOfCal: ''
		}).getReactComponent()
	)
	return (
		<div>
			<CreateModel>
				{expressions.getExpression().map(exp => exp)}
				<p>{`Size of expression = ${expressions.expressionSize()}`}</p>
			</CreateModel>
		</div>
	)
}

export default App
