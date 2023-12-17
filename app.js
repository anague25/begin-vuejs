const app = Vue.createApp({
    data(){
        return{
            icon:'🐱‍🏍',
           user:[
            {
                author:'sonna',
                age : 25,
                bio:'a cool guy'
               }
           ]
        }
    },
    methods:{
        augmenterAge(){
            this.user[0].age++;
        },
        diminuerAge(){
            this.user[0].age--;
        }
    }

});

app.mount('#app');