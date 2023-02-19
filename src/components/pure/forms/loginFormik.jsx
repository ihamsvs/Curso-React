import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  emal: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        //Usamos el initialValues para el formik y el validation schema para el Yup
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        // ** onSubmit Event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          // We save the data in the localStorage
          localStorage.setItem('credentials', values)
        }}
      >
        {/* We obtain props from Formik */}

        
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
          } = props;

          return (
            <Form>
              <label htmlFor="email">Email</label>
              <Field
                id="firstName"
                type="email"
                name="email"
                placeholder="exampleemail@gmail.com"
              />

              {/*Email errors */}
              {errors.email && touched.email && (
                <div className="error">
                  <p>{errors.email}</p>
                </div>
              )}
              <label htmlFor="password">Contraseña</label>
              <Field
                id="password"
                name="password"
                placeholder="password"
                type="password"
              />
              {errors.password && touched.password && (
                <div className="error">
                  <p>{errors.password}</p>
                </div>
              )}
              <button type="submit">Login</button>
              {isSubmitting ? (<p>Login Your Credentials...</p>) : null}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginFormik;
