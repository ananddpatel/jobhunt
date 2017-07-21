window.Event = { // js pseudo OOP using object as a class
	vue: new Vue(),
	fire: function(event, data = null) {
		this.vue.$emit(event, data)
	},
	listen: function(event, callback) {
		this.vue.$on(event, callback)
	},
}