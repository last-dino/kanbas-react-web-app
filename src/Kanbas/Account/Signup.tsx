import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {toast} from "react-toastify";

export default function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="shadow p-4 rounded bg-white" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Register</h2>
                <p className={'text-end'}>
                    Already have an account? <Link to="/Kanbas/Account/Signin">Sign in</Link>
                </p>
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        role: 'STUDENT',
                    }}
                    validationSchema={Yup.object({
                        username: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        email: Yup.string().email('Invalid email address').required('Required'),
                        password: Yup.string()
                            .min(8, 'Password must be at least 8 characters')
                            .required('Required'),
                        confirmPassword: Yup.string()
                            .oneOf([Yup.ref('password')], 'Passwords must match')
                            .required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        const registerApi = process.env.REACT_APP_REMOTE_SERVER + `/api/users/register`;
                        axios.post(registerApi, values)
                            .then(response => {
                                toast("Registration successful.", {type: "success"});
                                dispatch(setCurrentUser(response.data));
                                navigate("/Kanbas/Dashboard");
                            })
                            .catch(error => {
                                console.error(error);
                                toast(error.response.data.message, {type: "error"});
                            })
                            .finally(() => {
                                setSubmitting(false);
                            });
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <Field name="username" type="text" className="form-control" />
                                <ErrorMessage name="username" component="div" className="text-danger" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <Field name="email" type="email" className="form-control" />
                                <ErrorMessage name="email" component="div" className="text-danger" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <Field name="password" type="password" className="form-control" />
                                <ErrorMessage name="password" component="div" className="text-danger" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <Field name="confirmPassword" type="password" className="form-control" />
                                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="role" className="form-label">Role</label>
                                <Field as="select" name="role" className="form-select">
                                    <option value="STUDENT">Student</option>
                                    <option value="FACULTY">Faculty</option>
                                </Field>
                            </div>

                            <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                                Register
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}