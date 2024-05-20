export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label><br /><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of 
                your Web application running on Netlify. The landing page should include 
                the following: Your full name and section Links to each of the lab assignments 
                Link to the Kanbas application Links to all relevant source code repositories 
                The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECTS">PROJECTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="PERCENTAGE">Percentage</option>
                            <option value="LETTER">Letter</option>
                            <option value="NUMBER">Number</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="ONLINE">Online</option>
                            <option value="IN-PERSON">In Person</option>
                        </select>
                        <p>
                            <label>Online Entry Options</label><br/>
                            
                            <input type="checkbox" name="online-entry" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label><br />

                            <input type="checkbox" name="online-entry" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label><br />

                            <input type="checkbox" name="online-entry" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                            <input type="checkbox" name="online-entry" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                            <input type="checkbox" name="online-entry" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label><br />
                        </p>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label>Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label><br/>
                        <input id="wd-assign-to" placeholder="Everyone" /><br/><br/>
                        <label htmlFor="wd-due-date">Due</label><br/>
                        <input type="date" id="wd-due-date" /><br/><br/>
                        <table>
                            <tr>
                                <td><label htmlFor="wd-available-from">Available from</label></td>
                                <td><label htmlFor="wd-available-until">Until</label></td>
                            </tr>
                            <tr>
                                <td><input type="date" id="wd-available-from" /></td>
                                <td><input type="date" id="wd-available-until" /></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <hr/>
            <table width="100%">
                <tr>
                    <td align="right">
                        <button>Cancel</button> <button>Save</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export {};