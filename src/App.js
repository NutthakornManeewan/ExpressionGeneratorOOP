import React from 'react'
import FixedModel from './Components/Expression/Expression'
import RandomModel from './Components/Expression/RandomModel'
import ResidualModel from './Components/Expression/ResidualModel'

const fixedModelProps = { name: 'Fixed Model', allowOperators: ['+', '.'] }
const randomModelProps = {
	name: 'Random Model',
	allowOperators: ['+', '.', '||', '&']
}
const residualModelProps = {
	name: 'Random Model',
	allowOperators: ['.', '||']
}

class App extends React.PureComponent {
	render() {
		return (
			<div>
				<FixedModel {...fixedModelProps} />
				<RandomModel {...randomModelProps} />
				<ResidualModel {...residualModelProps} />
			</div>
		)
	}
}

export default App
