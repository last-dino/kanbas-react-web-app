import QuizControls from "./QuizControls";
import QuizDetails from "./QuizDetails";
import { useParams, useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as client from "./client"
import { setQuizzes, deleteQuizzes, updateQuizzes } from "./QuizReducer";
import QuizMenuButtons from "./QuizMenuButtons";
import { FaSortDown } from "react-icons/fa";
import { LuPlane } from "react-icons/lu";


export default function Quizzes({ courses }: { courses: any[]; }) {
   const { cid } = useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const course = courses.find((course) => course._id === cid);
   const { quizzes } = useSelector((state: any) => state.QuizReducer);

   const fetchQuizzes = async () => {
      const quizzes = await client.findQuizzesByCourse(cid as string);
      dispatch(setQuizzes(quizzes))
      console.log(quizzes)
    };
   useEffect(() => {
      fetchQuizzes();
   }, [cid]);
  
   const removeQuiz = async (quizId: string) => {
      await client.deleteQuiz(quizId);
      dispatch(deleteQuizzes(quizId));
   };

   const navigateToQuizDetail = (quizId: string, quizTitle: string) => {
      navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}`, { state: { title: quizTitle } });
   };

   return (
      <div id ="wd-quizzes">
         <QuizControls 
         addQuiz={() => {
            navigate(`/Kanbas/Courses/${cid}/Assignments/`); 
         }}/><br /><br />
         <ul id="wd-quizzes" className="list-group rounded-0">
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
               <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                  <FaSortDown className="mb-2" />
                  Assignment Quizzes
                  <div className="ms-auto">
                  </div>
               </div>
               <ul className="wd-assignments list-group rounded-0" style={{borderLeftWidth: "thick", borderLeftColor: "green", borderLeftStyle: "solid" }}>
                  {quizzes
                     .filter((quiz:any) => quiz.course === course.number)
                     .map((quiz: any) => (
                     <li key={quiz._id} className="wd-quiz list-group-item p-3" style={{ display: 'flex', justifyContent: 'left' }}>
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <LuPlane className="fs-4 text-success" style={{ marginTop: "5px" }} />
                     </div>
                     <div>
                     </div>
                     <div style={{ marginLeft: '10px'}} className="ms-3" onClick={() => navigateToQuizDetail(quiz._id, quiz.title)}>
                        <strong>{quiz.title}</strong>
                        <br />
                        <span> {quiz.available} | </span>
                        <strong>Due</strong>
                        <span> {quiz.due}| {quiz.points} pts| {quiz.questions}</span>
                     </div>
                     <div className="me-2 " style={{ marginLeft: 'auto'}}>
                        <QuizMenuButtons
                           quizId={quiz._id}
                           deleteQuiz={(quizId) => {removeQuiz(quizId);}}
                           editQuiz={() => navigate(`/Kanbas/Courses/${cid}/Assignments/`)}/>
                        {/* <AssignmentModifyControl 
                           assignmentId={assign._id}
                           deleteAssignment={(assignmentId) => {
                           removeAssignment(assignmentId);
                           }}/> */}
                     </div>
                     </li>
                     ))}
               </ul>  
            </li>
         </ul>
      </div>
   )
}