import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function AssignmentsControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>
            <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>
            <div className="d-inline-block float-end me-5 position-relative">
                <input type="search" id="wd-assignment-search" className="form-control text-secondary ps-5 fs-4"
                    placeholder="Search..." style={{ position: "relative" }} />
                <CiSearch className="position-absolute ms-3 fs-3" style={{ top: "50%", transform: "translateY(-50%)" }}/>
            </div>
        </div>
    );
}

export {};