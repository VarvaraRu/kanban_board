import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice ({
    name: 'todos',
    initialState: {
        todos: [ {id:1, text: 'EXEMPLE: to do smth', status:'Backlog', description:'not yet', value:'EXEMPLE: to do smth', label:'EXEMPLE: to do smth'}, 
          {id:2, text: 'EXEMPLE: to do all things were planned before', status:'Ready', description:'not yet', value:'EXEMPLE: to do all things were planned before', label:'EXEMPLE: to do all things were planned before'}, 
          {id:3, text: 'EXEMPLE: to do this', status:'In progress', description:'not yet', value:'EXEMPLE: to do this', label:'EXEMPLE: to do this'}, 
          {id:4, text: 'EXEMPLE: to do that', status:'Finished', description:'not yet', value:'EXEMPLE: to do that', label:'EXEMPLE: to do that'},
          {id:5, text: 'EXEMPLE: dont do anything at all', status:'Finished', description:'not yet', value:'EXEMPLE: dont do anything at all', label:'EXEMPLE: dont do anything at all'},
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
                value : action.payload, 
                label : action.payload,
                })
            }
        }, 

        onChangeStatusTask (state, action) {
            // const taskToChange = state.todos.find(task => task.id === action.payload.id)
            console.log('it works')
        }
         
    }
}); 

export const {addNewTask, onChangeStatusTask} = todoSlice.actions;

export default todoSlice.reducer;