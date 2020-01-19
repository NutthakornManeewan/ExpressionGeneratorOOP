import React from 'react'
import Expression from './Components/Expression/Expression'
import FixedModel from "./Components/Expression/FixedModel";
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
				{RandomModel}
				{ResidualModel}
				<FixedModel name="fixed_model" allowOperators={["+",".", "&"]} />
			</div>
		)
	}
}

export default App
