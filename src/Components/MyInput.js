import {ErrorMessage} from "formik";

export default function MyInput ({ field, form, ...props }) {
    return (
        <div>
            <input {...field} {...props} placeholder={props.label}/>
            <ErrorMessage name={field.name} component="div" />
        </div>
    );
};

