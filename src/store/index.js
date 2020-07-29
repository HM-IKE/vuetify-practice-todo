import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        "task":[
            {"id": "0", "todo": "This area show todo task"},
            {"id": "1", "todo": "This"},
            {"id": "2", "todo": "This area"},
            {"id": "3", "todo": "This area show"},
            {"id": "4", "todo": "This area show todo"},
            {"id": "5", "todo": "This area show todo task"},
            {"id": "6", "todo": "This area show todo task"},
            {"id": "7", "todo": "This area show todo task"},
            {"id": "8", "todo": "This area show todo task"},
            {"id": "9", "todo": "This area show todo task"},
            {"id": "10", "todo": "This area show todo task"},
            {"id": "11", "todo": "This area show todo task"},
            {"id": "12", "todo": "This area show todo task"},
            {"id": "13", "todo": "This area show todo task"},
            {"id": "14", "todo": "This area show todo task"},
            {"id": "15", "todo": "This area show todo task"},
            {"id": "16", "todo": "This area show todo task"},
            {"id": "17", "todo": "This area show todo task"},
            {"id": "18", "todo": "This area show todo task"},
            {"id": "19", "todo": "This area show todo task"},
            {"id": "20", "todo": "This area show todo task"},
          ],
    },
    mutations: {
        regist(state, newtask){
            state.task.push(newtask)
        }
    },
    getter: {

    }
})