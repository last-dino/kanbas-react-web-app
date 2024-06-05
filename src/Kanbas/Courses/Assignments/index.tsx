import { BsGripVertical } from "react-icons/bs";
import { LuFileSignature } from "react-icons/lu";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
    return (
        <div id="wd-assignments" className="vh-100">
            <AssignmentsControls /><br /><br /><br /><br />

            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-assignments-title p-3 ps-2 bg-secondary fw-bold">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentControlButtons />
                    </div>
                    <ul className="list-group rounded-0">
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex">
                            <BsGripVertical className="me-2 fs-3 align-self-center" />  
                            <LuFileSignature className="ms-2 me-4 fs-3 align-self-center text-success" />
                            <div className="align-self-center">
                                <a className="wd-assignment-link text-dark no-underline fw-bold" 
                                href="#/Kanbas/Courses/1234/Assignments/1">
                                A1 - ENV + HTML
                                </a><br/>
                                <h6><span className="text-danger">Multiple Modules</span> | Not available until May 29 at 12:00am |<br/>
                                Due Jun 5 at 11:59pm | 23 pts</h6>
                            </div>  
                            <div className="align-self-center flex-fill">
                                <LessonControlButtons />
                            </div>
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex">
                            <BsGripVertical className="me-2 fs-3 align-self-center" />
                            <LuFileSignature className="ms-2 me-4 fs-3 align-self-center text-success" />
                            <div className="align-self-center">
                                <a className="wd-assignment-link text-dark no-underline fw-bold"
                                href="#/Kanbas/Courses/1234/Assignments/2">
                                A2 - CSS + BOOTSTRAP
                                </a><br/>
                                <h6><span className="text-danger">Multiple Modules</span> | Not available until Jun 5 at 12:00am |<br/>
                                Due Jun 12 at 11:59pm | 32 pts</h6>
                            </div>
                            <div className="align-self-center flex-fill">
                                <LessonControlButtons />
                            </div>
                        </li>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex">
                            <BsGripVertical className="me-2 fs-3 align-self-center" />
                            <LuFileSignature className="ms-2 me-4 fs-3 align-self-center text-success" />
                            <div className="align-self-center">
                                <a className="wd-assignment-link text-dark no-underline fw-bold"
                                href="#/Kanbas/Courses/1234/Assignments/3">
                                A3 - JAVASCRIPT + REACT
                                </a><br/>
                                <h6><span className="text-danger">Multiple Modules</span> | Not available until Jun 5 at 12:00am |<br/>
                                Due Jun 19 at 11:59pm | 100 pts</h6>
                            </div>
                            <div className="align-self-center flex-fill">
                                <LessonControlButtons />
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export {};