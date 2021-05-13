//configuração basica do viuew
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js from dev-tester',
        taskName: '',
        tasks: [
            {name: 'Estudar js'},
            {name: 'Estudar Vue'},
            {name: 'Fazer Compras'}
        ]
        
    },
    methods: {
        addTask(){
            this.tasks.push({ name: this.taskName })
        }
    }
})