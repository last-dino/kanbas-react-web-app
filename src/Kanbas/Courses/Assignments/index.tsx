export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment"
                   placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                       href="#/Kanbas/Courses/1234/Assignments/1">
                       A1 - ENV + HTML
                    </a><br/>
                    Multiple Modules | Not available until May 29 at 12:00am |<br/>
                    Due Jun 5 at 11:59pm | 23 pts
                </li>
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                       href="#/Kanbas/Courses/1234/Assignments/2">
                       A2 - CSS + BOOTSTRAP
                    </a><br/>
                    Multiple Modules | Not available until Jun 5 at 12:00am |<br/>
                    Due Jun 12 at 11:59pm | 32 pts
                </li>
                <li className="wd-assignment-list-item">
                    <a className="wd-assignment-link"
                       href="#/Kanbas/Courses/1234/Assignments/3">
                       A3 - JAVASCRIPT + REACT
                    </a><br/>
                    Multiple Modules | Not available until Jun 5 at 12:00am |<br/>
                    Due Jun 19 at 11:59pm | 100 pts
                </li>
            </ul>
        </div>
    );
}

export {};