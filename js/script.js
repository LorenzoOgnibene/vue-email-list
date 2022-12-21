const { createApp } = Vue;

createApp({
    data(){
        return{
            randomEmail : [],
            
    }
    },

    methods:{
           getRandomEmail(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response.data);
                        this.randomEmail.push(response.data)
                    })
                }
               console.log(this.randomEmail)
            }
        
    },
    created(){
        this.getRandomEmail();
    }
}).mount('#app')


