import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";


const initialState = {
    assignments: assignments,
    assignment: { _id: -1, title: "New Assignment 123",
        description: "New Description", type: "ASSIGNMENT",
        points: 100, initialDueDate: "Sept. 18, 2023, 11:59 PM",
        initialAvailableDate: "Sept. 6, 2023, 11:59 PM", initialUntilDate: ""},
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
            state.assignment = initialState.assignment;
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
            state.assignment = initialState.assignment;
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },

        cancelAssignment: (state) => {
            state.assignment = initialState.assignment;
        }
    },
});


export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment, cancelAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;