var Job = function() {
	return {
		id: '',
		title: '',
		company: '',
		dateApplied: new Date().toLocaleString('en-US', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}),
		url: '',
		location: 'Toronto',
		contact: {name: '', info: ''},
		status: 'Applied',
		notes: ''
	}
}