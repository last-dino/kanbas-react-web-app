import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import Grades from "./Grades";
import PeopleTable from "./People/Table";
import { FaGlasses } from "react-icons/fa";
import Quizzes from "./Quizzes";
import QuizDetails from "./Quizzes/QuizDetails";
import QuizEditor from "./Quizzes/QuizEditor";
import QuizQuestionsEditor from "./Quizzes/QuizQuestionEditor/index";
import Selector from "./Quizzes/QuizQuestionEditor/Selector";
import Preview from "./Quizzes/QuizQuestionEditor/Preview";

export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    const isQuizzesPage = pathname === `/Kanbas/Courses/${cid}/Quizzes`;
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]} 
                {isQuizzesPage && (
                    <button className="btn btn-secondary btn-m float-end">
                        <FaGlasses /> Student View
                    </button>
                )}
            </h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home courses={courses}/>} />
                        <Route path="Modules" element={<Modules courses={courses}/>} />
                        <Route path="Piazza" element={<h2>Piazza</h2>} />
                        <Route path="Zoom" element={<h2>Zoom</h2>} />
                        <Route path="Assignments" element={<Assignments courses={courses}/>} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<PeopleTable />} />
                        <Route path="People/:uid" element={<PeopleTable />} />
                        <Route path="Quizzes" element={<Quizzes courses={courses}/>} />
                        <Route path="Quizzes/:qid" element={<QuizDetails/>} />
                        <Route path="Quizzes/:qid/DetailEditor" element={<QuizEditor />} />
                        <Route path="Quizzes/:qid/QuestionEditor" element={<QuizQuestionsEditor />} />
                        <Route path="Quizzes/:qid/QuestionEditor/new" element={<Selector />} />
                        <Route path="Quizzes/:qid/Preview" element={<Preview />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export {};