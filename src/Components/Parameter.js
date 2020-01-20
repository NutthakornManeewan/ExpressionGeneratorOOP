import React, { PureComponent } from 'react'
class Parameter extends PureComponent {
	constructor(props) {
		super(props)
		const { label, Class, values, typeOfCal } = { ...props }
		this.state = {
			label: label,
			Class: Class,
			values: values,
			typeOfCal: typeOfCal,
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
				<h4>{`${this.state.label} | ${this.state.typeOfCal} | ${this.state.Class}`}</h4>
			</>
		)
	}
}

export default Parameter
