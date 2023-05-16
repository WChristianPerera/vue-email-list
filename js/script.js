const app = Vue.createApp({
	data() {
		return {
			randomEmail: [],
		}
	},
	methods: {
		getRandomEmail() {
            for(let i = 0; i < 10; i++){
			    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(serverResponse => this.randomEmail.push(serverResponse.data.response));
               
            }
				       
        },

	},
});

app.mount('#app');
