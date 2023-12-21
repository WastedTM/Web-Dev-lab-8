import React from "react";
import {Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import MyInput from "./MyInput";

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Введіть правильний email').required('Це поле є обов\'язковим'),
    password: Yup.string().required('Це поле є обов\'язковим'),
});

const initialValues = {
    email: '',
    password: '',
};

const LoginForm = () => {
    const handleSubmit = (values, { setSubmitting }) => {
        console.log('Відправлено:', values);
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <Field
                    type="email"
                    id="email"
                    name="email"
                    label="Емейл"
                    component={MyInput}
                />

                <Field
                    type="password"
                    id="password"
                    name="password"
                    label="Пароль"
                    component={MyInput}
                />
                <div>
                    <button type="submit">Увійти</button>
                </div>
            </Form>
        </Formik>
    );
};

export default LoginForm;