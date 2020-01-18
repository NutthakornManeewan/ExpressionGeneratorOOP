import React from 'react'
import Expression from './Components/Expression/Expression'
const FixedModel = <Expression name="FixedModel" allowOperators={['+', '.']} />
const RandomModel = (
	<Expression name="RandomModel" allowOperators={['+', '.', '||', '&']} />
)
const ResidualModel = (
	<Expression name="ResidualModel" allowOperators={['+', '.', '||', '&']} />
)
class App extends React.PureComponent {
	render() {
		return (
			<div>
				{FixedModel}
				{RandomModel}
				{ResidualModel}
			</div>
		)
	}
}

export default App
