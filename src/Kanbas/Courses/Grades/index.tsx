import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { MdInput } from "react-icons/md";
import GradeControlButtons from "./GradeControlButtons";

export default function Grades() {
    return (
        <div id="wd-grades" className="vh-100">
            <GradeControlButtons /><br /><br />

            <div id="wd-grades-search" className="d-flex mb-3">
                <div className="flex-fill me-1">
                    <label htmlFor="wd-grades-search-student" className="col-form-label fw-bold">Student Names</label>
                    <select id="wd-grades-search-student" className="form-select text-secondary ps-5" style={{ position: "relative" }}>
                        <option selected>Search Students</option>
                        <option value="S1">Jane Adams</option>
                        <option value="S2">Christina Allen</option>
                        <option value="S3">Samreen Ansari</option>
                        <option value="S4">Han Bao</option>
                        <option value="S5">Siran Cao</option>
                    </select>
                    <CiSearch className="position-absolute ms-3 fs-4" style={{ transform: "translateY(-135%)" }}/>
                </div>
                <div className="flex-fill ms-1">
                    <label htmlFor="wd-grades-search-assignment" className="col-form-label fw-bold">Assignment Names</label>
                    <select id="wd-grades-search-assignment" className="form-select text-secondary ps-5" style={{ position: "relative" }}>
                        <option selected>Search Assignments</option>
                        <option value="A1">A1 SETUP</option>
                        <option value="A2">A2 HTML</option>
                        <option value="A3">A3 CSS</option>
                        <option value="A4">A4 BOOTSTRAP</option>
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
                                <th className="text-center"><div>A1 SETUP</div><div className="fw-light" >Out of 100</div></th>
                                <th className="text-center"><div>A2 HTML</div><div className="fw-light" >Out of 100</div></th>
                                <th className="text-center"><div>A3 CSS</div><div className="fw-light" >Out of 100</div></th>
                                <th className="text-center"><div>A4 BOOTSTRAP</div><div className="fw-light" >Out of 100</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-danger">Jane Adams</td><td className="text-center">100%</td>
                                <td className="text-center">96.67%</td><td className="text-center">92.18%</td>
                                <td className="text-center">66.22%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Christina Allen</td><td className="text-center">100%</td>
                                <td className="text-center">100%</td><td className="text-center">100%</td>
                                <td className="text-center">100%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Samreen Ansari</td><td className="text-center">100%</td>
                                <td className="text-center">100%</td><td className="text-center">100%</td>
                                <td className="text-center">100%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Han Bao</td><td className="text-center">100%</td>
                                <td className="text-center">100%</td>
                                <td className="text-center">
                                    <input className="position-relative form-control" value="88.03" />
                                    <MdInput className="position-absolute ms-3 fs-4" style={{ transform: "translateY(-130%)" }}/>
                                </td>
                                <td className="text-center">98.99%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Siran Cao</td><td className="text-center">100%</td>
                                <td className="text-center">100%</td><td className="text-center">100%</td>
                                <td className="text-center">100%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export {};