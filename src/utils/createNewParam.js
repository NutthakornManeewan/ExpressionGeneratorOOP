export default ({ Class, typeOfCal = '' }) => {
	if (Class === 'operator') {
		const label = Math.random() < 0.5 ? '+' : '&'
		return {
			label,
			values: label,
			typeOfCal,
			Class
		}
	}
	const label = Math.random() < 0.5 ? 'A' : 'B'
	return {
		label,
		values: label,
		typeOfCal,
		Class
	}
}
