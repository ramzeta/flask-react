import React from "react";
import Menu from "../menu/Menu";
import { useFormik } from 'formik';

const Register = () => {


    const validate = values => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Required';
        } else if (values.username.length > 15) {
            errors.username = 'Must be 15 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        /*
            Minimo 8 caracteres
            Maximo 15
            Al menos una letra mayúscula
            Al menos una letra minuscula
            Al menos un dígito
            No espacios en blanco
            Al menos 1 caracter especial
        */
        //password /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
        if (!values.password) {
            errors.password = 'Required';
        } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/i.test(values.email)) {
            errors.password = 'Invalid password ';
        }
        return errors;
    };
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            email: '',
            username: 'aaa',
            password: ''
        },
        validate: () => {
            if (values) { return values };
        },
        onSubmit: values => {
            //register user
            alert(JSON.stringify(values, null, 2));
        },
    });

    // A custom validation function. This must return an object
    // which keys are symmetrical to our values/initialValues

    return (
        <>
            <Menu></Menu>
            <div className="container mt-4">
                <form onSubmit={formik.handleSubmit} >

                    <label className="m-2" htmlFor="username">User Name</label>
                    <br />
                    <input
                        id="username"
                        name="username"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    <br />
                    <br />
                    <label className="m-2" htmlFor="password">Password</label>
                    <br />
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <br />
                    <br />
                    <label className="m-2" htmlFor="email">Email Address</label>
                    <br />
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <br />
                    <button className="m-2" type="submit">Submit</button>
                </form>
            </div>

        </>
    );
};

export default Register;