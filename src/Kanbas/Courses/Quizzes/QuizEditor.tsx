import QuizEditorButtons from "./QuizEditorButtons";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { updateQuizzes } from "./QuizReducer";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import WysiwygEditor from "./WysiwygEditor";
import * as client from "./client";

export default function QuizEditor() {
    // const { cid, qid } = useParams();
    // const navigate = useNavigate();
    const location = useLocation();
    const quizTitle = location.state?.title; 

    return (
        <div className="container mt-4">
            <div>
                <QuizEditorButtons/>
            </div>
            <br />
            <input className="form-control"
                type="text"
                id="quizTitle"
                value={quizTitle || ''} 
                //   onChange={(e) => setAssignment((a: any) => ({ ...a, title: e.target.value }))}
            />
            <form>
                <div className="mb-3 pt-4">
                    <WysiwygEditor/>
                </div>
                <div className="row mb-3">
                <div className="col-md-10">
                    <div className="mb-3 row">
                    <label htmlFor="points" className="col-sm-4 col-form-label text-end">Quiz Type</label>
                    <div className="col-sm-8">
                    <select id="assignmentGroup" className="form-select">
                        <option selected>Graded Quiz</option>
                        <option value="Practice-Quiz">Practice Quiz</option> 
                        <option value="Graded-Survey">Graded Survey</option>
                        <option value="Ungraded-Survey">Ungraded Survey</option> 
                        </select>
                    </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="assignmentGroup" className="col-sm-4 col-form-label text-end">Assignment Group</label>
                        <div className="col-sm-8">
                            <select id="assignmentGroup" className="form-select">
                            <option selected>Quizzes</option>
                            <option value="Exams">Exams</option> 
                            <option value="Assignments">Assignments</option>
                            <option value="Project">Project</option> 
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="entryOption" className="col-sm-4 col-form-label mb-3"><strong>Options</strong></label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="textEntry" />
                        <label className="form-check-label" htmlFor="textEntry">
                            Text Entry
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="websiteUrl" />
                        <label className="form-check-label" htmlFor="websiteUrl">
                            Website URL
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="mediaRecordings" />
                        <label className="form-check-label" htmlFor="mediaRecordings">
                            Media Recordings
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="studentAnnotation" />
                        <label className="form-check-label" htmlFor="studentAnnotation">
                            Student Annotation
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="fileUploads" />
                        <label className="form-check-label" htmlFor="fileUploads">
                            File Uploads
                        </label>
                    </div>
                    <div className="mb-3 row">
                    <label htmlFor="assignTo" className="col-sm-4 col-form-label text-end">Assign</label>
                    <div className="col-sm-8">
                        <div className="p-2 border">
                        <label htmlFor="assignToPeople" className="col-sm-4 col-form-label text-start">Assign to</label>
                        <input className="form-control mb-3"
                            type="text"
                            id="assignTo"
                            placeholder="Everyone"
                        />
                        <label htmlFor="dueDate" className="form-label">Due</label>
                        <input className="form-control mb-3"
                            type="date"
                            id="dueDate"
                            // value={formatDateForInput(assignment.dueDate)}
                            // onChange={(e) => setAssignment((a: any) => ({ ...a, dueDate: e.target.value }))}
                        />
                        <div className="row">
                            <div className="col">
                            <label htmlFor="availableFrom" className="form-label">Available from</label>
                            <input className="form-control mb-3"
                                type="date"
                                id="availableFrom"
                                // value={formatDateForInput(assignment.availableFrom)}
                                // onChange={(e) => setAssignment((a: any) => ({ ...a, availableFrom: e.target.value }))}
                            />
                            </div>
                            <div className="col">
                            <label htmlFor="until" className="form-label">Until</label>
                            <input className="form-control mb-3"
                                type="date"
                                id="until"
                                // value={formatDateForInput(assignment.until)}
                                // onChange={(e) => setAssignment((a: any) => ({ ...a, until: e.target.value }))}
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="mb-3 row">
                    <div className="d-flex justify-content-end">
                    <button className="btn btn-secondary me-1" >
                        Cancel
                    </button>
                    <button className="btn btn-danger">
                        Save
                    </button>
                    </div>
                    </div>
                </div>
                </div>
            </form>
        </div>
      );
}