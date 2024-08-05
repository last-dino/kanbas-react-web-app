import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentsReducer from "../Courses/Assignments/reducer";
import accountReducer from "../Account/reducer";
import QuizReducer from "../Courses/Quizzes/QuizReducer";

const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentsReducer,
        accountReducer,
        QuizReducer,
    },
});
export default store;