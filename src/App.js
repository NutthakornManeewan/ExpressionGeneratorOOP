import React from 'react'
import Expression from './Components/Expression/Expression'
import RandomModel from './Components/Expression/RandomModel'
// const RandomModel = (
// 	<Expression name="RandomModel" allowOperators={['+', '.', '||', '&']} />
// )
// const ResidualModel = (
// 	<Expression name="ResidualModel" allowOperators={['+', '.', '||', '&']} />
// )
class App extends React.PureComponent {
	render() {
		return (
			<div>
				<Expression name="Fixed Model" allowOperators={['+', '.']} />
				<RandomModel
					name="Random Model"
					allowOperators={['+', '.', '&', '||']}
				/>
			</div>
		)
	}
}

export default App
