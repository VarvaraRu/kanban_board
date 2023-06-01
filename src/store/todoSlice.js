import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice ({
    name: 'todos',
    initialState: {
        todos: [ {id:1, text: 'EXEMPLE: to do smth', status:'Backlog', description:'not yet', label:'EXEMPLE: to do smth'}, 
          {id:2, text: 'EXEMPLE: to do all things were planned before', status:'Ready', description:'not yet', label:'EXEMPLE: to do all things were planned before'}, 
          {id:3, text: 'EXEMPLE: to do this', status:'In progress', description:'not yet', label:'EXEMPLE: to do this'}, 
          {id:4, text: 'EXEMPLE: to do that', status:'Finished', description:'not yet', label:'EXEMPLE: to do that'},
          {id:5, text: 'EXEMPLE: dont do anything at all', status:'Finished', description:'not yet', label:'EXEMPLE: dont do anything at all'},
        ]
    },  
    reducers: {
        addNewTask (state, action) {
            
            if (action.payload !== ''){
            state.todos.push({
                id : Math.random(), 
                text: action.payload,
                status: 'Backlog',
                description: 'not yet',
                label : action.payload,
                })
            }
        }, 

        onChangeStatusTask (state, action) {
            // const changedTask = state.todos.find(task => task.id === action.payload)
            console.log(action.payload)
            // changedTask.status = newStatus

            // console.log(state.todos)
            // console.log(action)


            // console.log('it works')
            // console.log(task.id)   
            // console.log(task.status)   
            // console.log(newStatus)   
            // console.log(taskId)  
        }
            
    }
}); 

export const {addNewTask, onChangeStatusTask} = todoSlice.actions;

export default todoSlice.reducer;