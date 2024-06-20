import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import GradeControlButtons from "./GradeControlButtons";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Grades() {
    const { cid } = useParams();
    const enrollments = db.enrollments.filter((enrollment: any) => enrollment.course === cid);
    const assignments = db.assignments.filter((assignment: any) => assignment.course === cid);
    const grades = db.grades;
    const users = db.users;

    return (
        <div id="wd-grades" className="vh-100">
            <GradeControlButtons /><br /><br />

            <div id="wd-grades-search" className="d-flex mb-3">
                <div className="flex-fill me-1">
                    <label htmlFor="wd-grades-search-student" className="col-form-label fw-bold">Student Names</label>
                    <select id="wd-grades-search-student" className="form-select text-secondary ps-5" style={{ position: "relative" }}>
                        <option selected>Search Students</option>
                        {enrollments.map((enrollment: any) => {
                            const user = users.find((user: any) => user._id === enrollment.user);
                            if (!user) {
                                return null; // Skip rendering if user is not found
                            }
                            return (
                                <option value={user._id}>{user.firstName} {user.lastName}</option>   
                            );
                        })}
                    </select>
                    <CiSearch className="position-absolute ms-3 fs-4" style={{ transform: "translateY(-135%)" }}/>
                </div>
                <div className="flex-fill ms-1">
                    <label htmlFor="wd-grades-search-assignment" className="col-form-label fw-bold">Assignment Names</label>
                    <select id="wd-grades-search-assignment" className="form-select text-secondary ps-5" style={{ position: "relative" }}>
                        <option selected>Search Assignments</option>
                        {assignments.map((assignment: any) => 
                            <option value={assignment._id}>{assignment.title}</option>)}
                    </select>
                    <CiSearch className="position-absolute ms-3 fs-4" style={{ transform: "translateY(-135%)" }}/>
                </div>
            </div>

            <div className="mb-3">
                <button id="wd-add-group-btn" className="btn btn-secondary">
                    <CiFilter className="position-relative me-1 fs-3" />
                    Apply Filters
                </button>
            </div>

            <div id="wd-grades-table">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className="pb-4">Student Name</th>
                                {assignments.map((assignment: any) => 
                                    <th className="text-center">
                                        <div>{assignment.title}</div>
                                        <div className="fw-light" >Out of {assignment.points}</div>
                                    </th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {enrollments.map((enrollment: any) => {
                                const user = users.find((user: any) => user._id === enrollment.user);
                                if (!user) {
                                    return null; // Skip rendering if user is not found
                                }
                                return (
                                    <tr>
                                        <td className="text-danger">{user.firstName} {user.lastName}</td>
                                        {assignments.map((assignment: any) => {
                                            const grade = grades.find((g: any) => g.student === enrollment.user && g.assignment === assignment._id);
                                            return (
                                                <td key={assignment._id} className="text-center">
                                                    {grade ? `${grade.grade}%` : ''}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export {};