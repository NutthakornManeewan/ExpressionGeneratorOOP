import React from 'react'
import CreateModel from './Containers/CreateModel'
import Parameter from './Components/Parameter'
import Expression from './Components/Expression'

const App = () => {
	const expressions = new Expression('fixed_model')
	const component1 = new Parameter({
		label: 'variety',
		values: 'variety',
		Class: 'value',
		typeOfCal: 'id'
	})
	const component2 = new Parameter({
		label: '+',
		Class: 'operator',
		values: '+',
		typeOfCal: ''
	})
	expressions.pushParam(component1)
	expressions.pushParam(component2)
	expressions.pushParam(
		new Parameter({
			label: 'EarHeight',
			Class: 'value',
			value: '15',
			typeOfCal: 'ear_height'
		})
	)
	expressions.pushParam(
		new Parameter({
			label: '*',
			Class: 'operator',
			values: '*',
			typeOfCal: ''
		})
	)
	return (
		<div>
			<CreateModel>
				{expressions
					.getExpression()
					.map(exp => exp.getReactComponent())}
				<p>{`Size of expression = ${expressions.expressionSize()}`}</p>
			</CreateModel>
		</div>
	)
}

export default App
