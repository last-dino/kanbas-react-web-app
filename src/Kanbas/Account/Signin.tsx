import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {toast} from "react-toastify";

export default function Signin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="shadow p-4 rounded bg-white" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Login</h2>
                <p className={'text-end'}>
                    Not have account? <Link to="/Kanbas/Account/Signup">Sign up</Link>

                </p>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    validationSchema={Yup.object({
                        username: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        password: Yup.string()
                            .min(8, 'Password must be at least 8 characters')
                            .required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        const registerApi = process.env.REACT_APP_REMOTE_SERVER + `/api/users/login`;
                        axios.post(registerApi, values, {
                            withCredentials: true
                        })
                            .then(response => {
                                toast("Login successfully. Welcome!", {type: "success"});
                                dispatch(setCurrentUser(response.data));
                                navigate(`/Kanbas/Dashboard`)
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
                                <label htmlFor="password" className="form-label">Password</label>
                                <Field name="password" type="password" className="form-control" />
                                <ErrorMessage name="password" component="div" className="text-danger" />
                            </div>




                            <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                                Login
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}