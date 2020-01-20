export default ({ Class, typeOfCal = '' }) => {
	if (Class === 'operator') {
		let label = '',
			randNum = Math.random()
		if (randNum <= 0.25) label = '&'
		else if (randNum > 0.25 && randNum <= 0.5) label = '||'
		else if (randNum > 0.5 && randNum <= 0.75) label = '.'
		else label = '+'
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
