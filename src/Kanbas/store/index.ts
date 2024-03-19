import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentsReducer from "../Courses/Assigments/assignmentsReducer";
export interface KanbasState {
    modulesReducer: {
        modules: any[];
        module: any;
    };
    assignmentsReducer: {
        assignments: any[];
        assignment: any;
    };
}
const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentsReducer
    }
});


export default store;