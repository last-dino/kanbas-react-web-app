import { useNavigate, useParams, useLocation } from "react-router-dom";

export default function QuizEditorButtons() {
    const { cid, qid } = useParams();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const navigateToQuestionEditor = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/QuestionEditor`);
    };

    const navigateToDetailEditor = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/QuizEditor`);
    };
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            </div>
            <hr/>
            <div id="wd-css-navigating-with-tabs">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" onClick={navigateToDetailEditor}>Details</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-danger" onClick={navigateToQuestionEditor}>Questions</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
