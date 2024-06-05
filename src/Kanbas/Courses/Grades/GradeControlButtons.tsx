import { IoMdSettings } from "react-icons/io";
import { LuFileOutput, LuFileInput } from "react-icons/lu";

export default function ModulesControls() {
    return (
        <div id="wd-grades-controls" className="text-nowrap mb-4">
            <button id="wd-grades-setting-btn" className="btn btn-secondary float-end">
                <IoMdSettings className="position-relative fs-4" />
            </button>
            <div className="dropdown d-inline me-2 float-end">
                <button id="wd-grades-export-btn" className="btn btn-secondary dropdown-toggle"
                type="button" data-bs-toggle="dropdown">
                    <LuFileOutput className="position-relative me-2" style={{ bottom: "1px" }} />
                    Export
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a id="wd-export-btn" className="dropdown-item" href="#">
                            <LuFileOutput className="position-relative me-2" style={{ bottom: "1px" }} />
                            Export
                        </a>
                    </li>
                </ul>
            </div>
            <button id="wd-grades-import-btn" className="btn btn-secondary me-2 float-end">
                <LuFileInput className="position-relative me-2" style={{ bottom: "1px" }} />
                Import
            </button>
        </div>
    );
}

export {};