import { BsPencil } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as client from "./client";
import "../../styles.css";

export default function QuizDetails() {
    const { cid, qid } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { title, role, _id } = location.state || {}; 
    const quizzes = useSelector((state: any) => state.QuizReducer.quizzes);
    const isCreatingNew = qid === 'new';
    const [attemptsLeft, setAttemptsLeft] = useState<number>(0);
    const [attempts, setAttempts] = useState<any[]>([]);
    const [selectedAttempt, setSelectedAttempt] = useState<any>(null);
    const [questions, setQuestions] = useState<any[]>([]);

    const formatDateForInput = (dateInput: any) => {
        if (!dateInput) return '';
        const date = new Date(dateInput);
        return date.toISOString().split('T')[0];
    }

    console.log("QuizDetails")
    console.log(quizzes);

    const defaultQuizDetails = {
        title: "New Quiz",
        quizType: "Graded Quiz",
        assignmentGroup: "Quizzes", 
        points: 0,
        shuffleAnswers: true, 
        timeLimit: 20, 
        multipleAttempts: 1,
        showCorrectAnswers: false,
        accessCode: "None",
        oneQuestionAtTime: true,
        webcamRequired: false,
        lockQuestionsAfterAnswering: false,
        due: formatDateForInput(new Date()),
        available: formatDateForInput(new Date()),
        until: formatDateForInput(new Date()),
        published: false,
    };

    const [quizDetails, setQuizDetails] = useState(defaultQuizDetails);
    console.log(quizDetails);

    useEffect(() => {
        if (!isCreatingNew) {
            const foundQuiz = quizzes.find((quiz: any) => quiz._id === qid);
            if (foundQuiz) {
                setQuizDetails(foundQuiz);
                setQuestions(foundQuiz.questions)
            } else {
                setQuizDetails(defaultQuizDetails)
            }
        }
    }, [qid, quizzes, isCreatingNew]);

    useEffect(() => {
        const loadQuizAttempts = async () => {
            try {
                const attempts = await client.fetchQuizAttempts(qid as string, _id); 
                setAttempts(attempts ? attempts.attempts : []);
            } catch (error) {
                console.error("Error loading quiz attempts:", error);
            }
        };
    
        loadQuizAttempts();
    }, [qid, _id]);
    
    const navigateToQuizEditor = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/QuizEditor`, { state: { quiz: quizDetails } });
    };
    const navigateToQuizPreview = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Preview`);
    };
    const navigateToTakeQuiz = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/take`);
    };

    client.fetchQuizAttempts(qid as string,  _id).then(({ attemptsLeft, attempts }) => {
        setAttemptsLeft(attemptsLeft);
        setAttempts(attempts || []);
    });
    const handleAttemptClick = (attempt: any) => {
        setSelectedAttempt(attempt);
    };

    return(
        <div id="wd-quizdetail" className="container mt-4">
            {role !== 'STUDENT' && (
                <div className="ms-auto" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button id="wd-preview-btn" className="btn btn-me btn-secondary me-3" onClick={navigateToQuizPreview}>
                        Preview
                    </button>
                    <button id="wd-add-group-btn" className="btn btn-me btn-secondary me-1" onClick={navigateToQuizEditor}>
                        <BsPencil className="position-relative me-2" style={{ bottom: "1px" }} />
                        Edit
                    </button>
                </div>
            )}
            <hr/>
            <table className="table table-details">
                <thead>
                    <tr>
                        <th><h3>{quizDetails.title}</h3></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Quiz Type</td>
                        <td>{quizDetails.quizType}</td>
                    </tr>
                    <tr>
                        <td>Points</td>
                        <td>{quizDetails.points}</td>
                    </tr>
                    <tr>
                        <td>Assignment Group</td>
                        <td>{quizDetails.assignmentGroup}</td>
                    </tr>
                    <tr>
                        <td>Shuffle Answers:</td>
                        <td>{quizDetails.shuffleAnswers ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                        <td>Time Limit</td>
                        <td>{quizDetails.timeLimit}</td>
                    </tr>
                    <tr>
                        <td>Multiple Attempts</td>
                        <td>{quizDetails.multipleAttempts}</td>
                    </tr>
                    <tr>
                        <td>Show Correct Answers</td>
                        <td>{quizDetails.showCorrectAnswers ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                        <td>Access Code</td>
                        <td>{quizDetails.accessCode}</td>
                    </tr>
                    <tr>
                        <td>One Question at a Time</td>
                        <td>{quizDetails.oneQuestionAtTime ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                        <td>Webcam Required</td>
                        <td>{quizDetails.webcamRequired ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                        <td>Lock Questions After Answering</td>
                        <td>{quizDetails.lockQuestionsAfterAnswering ? "Yes" : "No"}</td>
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
                    <td>{formatDateForInput(quizDetails.due)}</td>
                    <td>Everyone</td>
                    <td>{formatDateForInput(quizDetails.available)}</td>
                    <td>{formatDateForInput(quizDetails.until)}</td>
                </tbody>
            </table>
            {role !== 'FACULTY' && attemptsLeft > 0 && (
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <button id="wd-take-quiz-btn" className="btn btn-lg btn-danger me-1 center" onClick={navigateToTakeQuiz}>
                Take Quiz
                </button>
            </div>
            )}
            {role === 'STUDENT' && attemptsLeft === 0 && (
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', color: 'red' }}>
                    No more attempts left
                </div>
            )}

<hr />
            {attempts.length > 0 && (
                <div>
                    <h4>Previous Attempts</h4>
                    <ul className="list-group">
                        {attempts.map((attempt, index) => (
                            <li key={index} className="list-group-item" onClick={() => handleAttemptClick(attempt)}>
                                Attempt {index + 1}: Score {attempt.score}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {selectedAttempt && (
                <div className="mt-4">
                    <h4>Attempt Details</h4>
                    <div>
                        <h4>Attempt {selectedAttempt.attemptNumber}</h4>
                        <p>Score: {selectedAttempt.score}</p>
                        <div className="flex-questions-container">
            <ul className="list-group">
              {questions.length > 0 ? (
                questions.map((question, index) => (
                  <li className="list-group-item mb-3" key={index}>
                    <div className="p-2 mb-2" style={{ backgroundColor: "#f5f5f5", width:"100%"}}>
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="m-0">Question {index + 1}</h5>
                        <div className="d-flex align-items-center">
                          <h5 className="m-0 me-3">{question.points} points</h5>
                        </div>
                      </div>
                    </div>
                    <div>
                    
                    <div>
                        <div className="mt-3"><h5>{question.title}</h5></div>
                        <div><h6>{question.question}</h6></div>
                                
                        {question.questionType === "Fill In the Blank" ? (
                            <input
                            className="form-control"
                            type="text"
                            placeholder="Enter your answer here"
                            
                          />
                        ) : (
                            <ul className="list-group" style={{ marginBottom: "50px" }}>
                            {question.answers.length > 0 ? (question.answers.map((answer: string, index:number) => (

                                <li className="list-group-item" style={{ borderColor: "white" }}>
                                    <input
                                        type="radio"
                                        name={"choice" + question._id}
                                        id={question._id + index}
                                        style={{ marginRight: "10px", marginBottom: "15px" }}
                                        
                                    />

                                    <label htmlFor={question._id + index}> {answer} </label>
                                </li>
                            ))): ""}
                        </ul>
                        )}
                        
                        
                    </div>

                    </div>
                  </li>
                ))
              ) : ""}
            </ul>
        </div>
                    </div>
                </div>
            )}
        </div>
    )
}