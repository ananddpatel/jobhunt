var db = firebase.database()
var jobsTable = db.ref('jobs')

var app = new Vue({
	el: '#app',
	data: {
		jobListing: {}
	},
	computed: {
		totalJobs() {
			return Object.keys(this.jobListing).length
		}
	},
	methods: {
		getAllJobs() {
			jobsTable.on('value', snapshot => app.jobListing = snapshot.val())
		},
		addJob() {
			Event.fire('add')
		},
		editJob(data) {
			Event.fire('edit', data)
		},
		num(key) {
			return Object.keys(this.jobListing).indexOf(key) + 1;
		}
	},
	created() {
		console.log('Vue app created')
		this.getAllJobs()
	}
})