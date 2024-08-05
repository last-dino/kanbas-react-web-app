import { IoEllipsisVertical } from "react-icons/io5";
import { RiForbidLine } from "react-icons/ri";
import { FaRegSquareCheck } from "react-icons/fa6";
import { useState } from "react";

export default function QuizMenuButtons(
    {   
        quizId, 
        deleteQuiz, 
        editQuiz} : 
    {
        quizId: string;
        deleteQuiz: (quizId: string) => void;
        editQuiz: (quizId: string) => void;
    }
) {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const [isPublished, setIsPublished] = useState(false);
    const togglePublishStatus = () => {
        setIsPublished(!isPublished);  // Toggles the publish status
        console.log(isPublished ? "Unpublished" : "Published"); 
    };

    return (
    <div className="float-end mt-3"> 
        {isPublished ? (
            <FaRegSquareCheck className="text-success fs-4 me-2" onClick={togglePublishStatus} />
        ) : (
            <RiForbidLine className="text-danger fs-4 me-2" onClick={togglePublishStatus} />
        )}
        <IoEllipsisVertical className="fs-4" onClick={toggleMenu} /> 
        {showMenu && (
        <ul className="dropdown-menu show">
          <li><button className="dropdown-item" onClick={() => editQuiz(quizId)}>Edit</button></li>
          <li><button className="dropdown-item" onClick={() => deleteQuiz(quizId)}>Delete</button></li>
          <li><button className="dropdown-item" onClick={togglePublishStatus}>
                        {isPublished ? 'Unpublish' : 'Publish'}</button></li>
        </ul>
      )}
    </div> 
    );
}