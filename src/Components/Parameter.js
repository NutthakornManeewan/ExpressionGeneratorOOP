class Parameter {
	constructor({ label, Class, values, typeOfCal }) {
		this.label = label
		this.Class = Class
		this.values = values
		this.typeOfCal = typeOfCal
		this.isOperator = Class === 'operator' ? true : false
	}
	isOperator = () => this.isOperator
	setTypeOfCal = type_of_cal => (this.typeOfCal = type_of_cal)
	getParams = () => ({
		label: this.label,
		Class: this.Class,
		values: this.values,
		typeOfCal: this.typeOfCal
	})
}

export default Parameter
