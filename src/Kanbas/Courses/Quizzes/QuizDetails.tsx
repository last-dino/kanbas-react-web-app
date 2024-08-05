import { BsPencil } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../../styles.css";

export default function QuizDetails() {
    const location = useLocation();
    const quizTitle = location.state?.title;
    const { cid, qid } = useParams();
    const navigate = useNavigate();
    // const quiz = useSelector((state: any) => state.QuizReducer); 
    
    const navigateToQuizEditor = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit`, { state: { title: quizTitle } });
    };

    return(
        <div id="wd-quizdetail">
            <div className="ms-auto" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button id="wd-preview-btn" className="btn btn-me btn-secondary me-3">
                    Preview
                </button>
                <button id="wd-add-group-btn" className="btn btn-me btn-secondary me-1" onClick={navigateToQuizEditor}>
                    <BsPencil className="position-relative me-2" style={{ bottom: "1px" }} />
                    Edit
                </button>
            </div><hr/>
            <table className="table table-details">
                <thead>
                    <tr>
                        <th><h3>{quizTitle}</h3></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Quiz Type</td>
                        <td>Graded Quiz</td>
                    </tr>
                    <tr>
                        <td>Points</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <td>Assignment Group</td>
                        <td>QUIZZES</td>
                    </tr>
                    <tr>
                        <td>Shuffle Answers</td>
                        <td>YES</td>
                    </tr>
                    <tr>
                        <td>Time Limit</td>
                        <td>20 Minutes</td>
                    </tr>
                    <tr>
                        <td>Multiple Attempts</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>View Responses</td>
                        <td>Always</td>
                    </tr>
                    <tr>
                        <td>Show Correct Answers</td>
                        <td>Immediately</td>
                    </tr>
                    <tr>
                        <td>One Question at a Time</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Require Respondus LockDown Browser</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>Required to View Quiz Results</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>Webcam Required</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>Lock Questions After Answering</td>
                        <td>No</td>
                    </tr>
                </tbody>
            </table><hr/>
            <table className="simple-table">
                <thead>
                    <tr>
                        <th>Due</th>
                        <th>For</th>
                        <th>Avaliable from</th>
                        <th>Until</th>
                    </tr>
                </thead>
                <tbody>
                    <td>Sep 21 at 1pm</td>
                    <td>Everyone</td>
                    <td>Sep 21 at 11:40am</td>
                    <td>Sep 21 at 1pm</td>
                </tbody>
            </table>
        </div>
    )
}