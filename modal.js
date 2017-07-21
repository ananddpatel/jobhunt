Vue.component('modal', {
	props: ['id', 'title'],
	template: `
		<div class="modal fade" :id="id" tabindex="-1" role="dialog">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title">{{title}}</h4>
		      </div>
		      <div class="modal-body">

				<div class="input-group">
				  <span class="input-group-addon">URL</span>
				  <input type="text" class="form-control" v-model="job.url">
				</div>

				<div class="input-group">
				  <span class="input-group-addon">Title</span>
				  <input type="text" class="form-control" v-model="job.title">
				</div>

				<div class="input-group">
				  <span class="input-group-addon">Company</span>
				  <input type="text" class="form-control" v-model="job.company">
				</div>

				<div class="input-group">
				  <span class="input-group-addon">Date</span>
				  <input type="text" class="form-control" v-model="job.dateApplied">
				</div>

				<div class="input-group">
  				  <span class="input-group-addon">Location</span>
				  <input type="text" class="form-control" v-model="job.location">
				</div>

				<div class="input-group">
  				  <span class="input-group-addon">Contact Name</span>
				  <input type="text" class="form-control" v-model="job.contact.name">
  				  <span class="input-group-addon">Info</span>
				  <input type="text" class="form-control" v-model="job.contact.info">
				</div>

				<div class="input-group">
  				  <span class="input-group-addon">Status</span>
				  <input type="text" class="form-control" v-model="job.status">
				</div>

				<div class="input-group">
				  <span class="input-group-addon">Notes</span>
				  <textarea type="text" class="form-control" v-model="job.notes"></textarea>
				</div>

		      </div>
		      <div class="modal-footer">
		        <button v-if="id === 'add'" @click="add" type="button" class="btn btn-success" data-dismiss="modal">Save</button>

		        <button v-if="id === 'edit'" @click="del" type="button" class="btn btn-danger pull-left btn-xs" data-dismiss="modal">Delete</button>
		        <button v-if="id === 'edit'" @click="edit" type="button" class="btn btn-success" data-dismiss="modal">Save</button>
		      </div>
		    </div><!-- /.modal-content -->
		  </div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
	`,
	data() {
		return {
			jobId: '',
			job: new Job()
		}
	},
	methods: {
		add() {
			jobsTable.push(this.job)
			this.job = new Job()
		},
		edit() {
			db.ref('/jobs/'+this.jobId).update(this.job)
		},
		del() {
			db.ref('/jobs/'+this.jobId).remove()
		}
	},
	created() {
		var self = this 
		Event.listen('edit', function(data) {
			self.job = data.data
			self.jobId = data.key
		})
		Event.listen('add', () => self.job = new Job())
	}
})