Vue.component('task-list', {
	template: '<div><task v-for="task in tasks">{{task.task}}</task></div>',

	data() {
		return {
			tasks: [
				{task: "go to the store", completed: true},
				{task: "buy some eggs", completed: false},
				{task: "buy some oil", completed: false},
				{task: "buy the book", completed: true},
			]
		}
	}
});

Vue.component('message', {
	props: ['title', 'body'],
	data() {
		return {
			isVisible: true
		};
	},
	template: `			
			<article v-show="isVisible" class="message">
			  <div class="message-header">
			    <p>{{title}}</p>
			    <button class="delete" v-on:click="toggleVisible" aria-label="delete"></button>
			  </div>
			  <div class="message-body">
			    {{body}}
			  </div>
			</article>
			`,

	methods: {
		toggleVisible() {
			this.isVisible = !this.isVisible;
		}
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>'
});
new Vue({
	el: '#app'
});