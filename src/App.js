import React from 'react'
import Expression from './Components/Expression/Expression'
import RandomModel from './Components/Expression/RandomModel'

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
