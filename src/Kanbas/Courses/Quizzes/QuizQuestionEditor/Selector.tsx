import { BsCalendar2Range } from "react-icons/bs";
import { Link, useLocation, useParams } from "react-router-dom";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import MultipleChoiceEditor from "./MultipleChoiceEditor";
import TrueFalseEditor from "./TrueFalseEditor";
import FillInBlanksEditor from "./FillInBlanksEditor";
import { findQuizById } from "../client";

export default function Selector() {
    // const { cid, qid } = useParams();
    // const quiz = findQuizById(qid as string);
    const [currentEditor, setEditor] = useState("MultipleChoiceEditor");
    const [question, setQuestion] = useState<any>({
        title: "",
        questionType: "Multiple Choice",
        question: "",
        correctAnswer: "",
        answers: [],
        points: 0
    });

    return (
        <div>
        <div id="wd-question-editor" className="ms-5 mt-5 wd-flex-row-container">
            <input id="wd-question-title" className="form-control"
                 onChange={(e) => setQuestion({ ...question, title: e.target.value })} style={{ width: "13%", height: "5%", marginLeft: "350px" }}/>
            <div className="wd-flex-row-container">
            <select id="wd-group" className="wd-css-styling-dropdowns ms-5" style={{ height: "40px", width: "400px", borderColor: "#E8E9EB", borderWidth: "2px", borderRadius: "5px" }}
                onChange={(e) => {setEditor(e.target.value)}}>
                <option value="MultipleChoiceEditor">Multiple Choice</option>
                <option value="TrueFalseEditor">True/False</option>
                <option value="FillInBlanksEditor">Fill In the Blank</option>
            </select>
            </div>
            <label htmlFor="wd-question-points" className="mb-2 ms-5">Points</label>
            <input id="wd-question-points" className="form-control ms-2"
            onChange={(e) => setQuestion({ ...question, points: Number(e.target.value) })} style={{ width: "5%", height: "5%" }}/>
            <br />
            <br /><br />
        </div>
        <hr />
        {currentEditor === "MultipleChoiceEditor" ? (
            <MultipleChoiceEditor question={question} setQuestion={setQuestion} />
        ) : currentEditor === "TrueFalseEditor" ? (
            <TrueFalseEditor question={question} setQuestion={setQuestion} />
        ) : currentEditor === "FillInBlanksEditor" ? (
            <FillInBlanksEditor question={question} setQuestion={setQuestion} />
        ) : (
            "No Editor Selected"
        )}
        </div>
    );
}

export {};

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import MultipleChoiceEditor from "./MultipleChoiceEditor";
// import TrueFalseEditor from "./TrueFalseEditor";
// import FillInBlanksEditor from "./FillInBlanksEditor";
// import { findQuizById } from "../client";

// export default function Selector() {
//   const { cid, qid } = useParams();
//   const [quiz, setQuiz] = useState<any>(null);
//   const [currentEditor, setEditor] = useState("MultipleChoiceEditor");
//   const [question, setQuestion] = useState<any>({
//     title: "",
//     questionType: "Multiple Choice",
//     question: "",
//     correctAnswer: "",
//     answers: [],
//     points: 0
//   });

//   useEffect(() => {
//     const fetchQuiz = async () => {
//       try {
//         const fetchedQuiz = await findQuizById(qid as string);
//         setQuiz(fetchedQuiz);
//       } catch (error) {
//         console.error("Error fetching quiz:", error);
//       }
//     };

//     fetchQuiz();
//   }, [qid]);

//   const addQuestionToQuiz = () => {
//     if (quiz) {
//       const updatedQuiz = {
//         ...quiz,
//         questions: [...quiz.questions, question]
//       };
//       setQuiz(updatedQuiz);
//     }
//   };

//   return (
//     <div>
//       <div id="wd-assignments-editor" className="ms-5 mt-5 wd-flex-row-container">
//         <input
//           id="wd-name"
//           className="form-control"
//           onChange={(e) => setQuestion({ ...question, title: e.target.value })}
//           style={{ width: "13%", height: "5%", marginLeft: "350px" }}
//         />
//         <div className="wd-flex-row-container">
//           <select
//             id="wd-group"
//             className="wd-css-styling-dropdowns ms-5"
//             style={{
//               height: "40px",
//               width: "400px",
//               borderColor: "#E8E9EB",
//               borderWidth: "2px",
//               borderRadius: "5px"
//             }}
//             onChange={(e) => setEditor(e.target.value)}
//           >
//             <option value="MultipleChoiceEditor">Multiple Choice</option>
//             <option value="TrueFalseEditor">True/False</option>
//             <option value="FillInBlanksEditor">Fill In the Blank</option>
//           </select>
//         </div>
//         <label htmlFor="wd-name" className="mb-2 ms-5">Points</label>
//         <input
//           id="wd-name"
//           className="form-control ms-2"
//           onChange={(e) => setQuestion({ ...question, points: e.target.value })}
//           style={{ width: "5%", height: "5%" }}
//         />
//         <br />
//         <br /><br />
//       </div>
//       <hr />
//       {currentEditor === "MultipleChoiceEditor" ? (
//         <MultipleChoiceEditor question={question} setQuestion={setQuestion} />
//       ) : currentEditor === "TrueFalseEditor" ? (
//         <TrueFalseEditor question={question} setQuestion={setQuestion} />
//       ) : currentEditor === "FillInBlanksEditor" ? (
//         <FillInBlanksEditor question={question} setQuestion={setQuestion} />
//       ) : (
//         "No Editor Selected"
//       )}
//       <button onClick={addQuestionToQuiz}>Add Question to Quiz</button>
//     </div>
//   );
// }

// export {};
