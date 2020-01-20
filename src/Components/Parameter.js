import React, { Component } from 'react'
class Parameter extends Component {
	constructor(props) {
		super(props)
		const { label, Class, values, typeOfCal } = { ...props }
		this.state = {
			label,
			Class,
			values,
			typeOfCal,
			isOperator: Class === 'operator' ? true : false
		}
	}

	setTypeOfCal = type_of_cal => {
		let { typeOfCal } = { ...this.state }
		typeOfCal = type_of_cal
		this.setState({ typeOfCal })
	}
	getParams = () => ({
		label: this.label,
		Class: this.Class,
		values: this.values,
		typeOfCal: this.typeOfCal
	})
	render() {
		return (
			<>
				<p>{`${this.state.label} | ${this.state.typeOfCal} | ${this.state.Class}`}</p>
			</>
		)
	}
}

export default Parameter
