import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
//Models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User()
    const initialValues = {
        username : '',
        email: '',
        password :'',
        confirm: '',
        role: ROLES.USER

    }

    // *** Debe tener los mismos datos que el inital values
    const regsiterSchema = Yup.object().shape(
        {
            username: Yup.string().min(6, 'Username too short').max(12, 'Username too long').required,
            emal: Yup.string().email("Invalid email format").required("Email is required"),
            role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN],'Ypu must select a Role: User / Admin').required("Role is required"),
            password: Yup.string().min(8,'Password to short').required('Password is required'),
            confirm: Yup.string().when("password",{
                is: value => (value && value.lenght > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],'Password must match!'
                )
            }).required('You mnust confirm the password')                     
        }
    )

    const submit = (values) =>{
        alert('Register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
            initialValues={initialValues}
            validationSchema={regsiterSchema}
            onSubmit={async (values) => {
                await new Promise((r)=> setTimeout(r, 1000))
                alert(JSON.stringify(values, null, 2))}}
            >
            {({values, touched, errors, onSubmitting, handleChange, handleBlur})=>(
                <Form>
                    <label htmlFor='username'>Username</label>
                    <Field id="username" type="text" name="username" placeholder="Your username"></Field>
                    {/* Username Errors */}
                    {
                        errors.username && touched.username && (
                            <ErrorMessage name='username' component='div'></ErrorMessage>
                        )
                    }
                    <label htmlFor='email'>Email</label>
                    <Field id="email" type="email" name="email" placeholder="example@g,ail.com"></Field>
                    {/* Email Errors */}
                    {
                        errors.email && touched.email && (
                            <ErrorMessage name='email' component='div'></ErrorMessage>
                        )
                    }
                    <label htmlFor='password'>Password</label>
                    <Field id="password" name="password" placeholder="password" type="password"></Field>
                     {/* Password Errors */}
                    {
                        errors.password && touched.password && (
                            <ErrorMessage name='password' component='div'></ErrorMessage>
                        )
                    }
                    <label htmlFor='confirm'>Password</label>
                    <Field id="confirm" name="confirm" placeholder="Confirm Passowrd" type="password"></Field>
                     {/* Confirm Errors */}
                     {
                        errors.confirm && touched.confirm && (
                            <ErrorMessage name='password' component='div'></ErrorMessage>
                        )
                    }                  

                    <button type='submit'>Register Account</button>
                    {onsubmit ?(<p>Your credentials is loading</p>) : null}
                    
                </Form>
            )}

            </Formik>
        </div>
    );
}

export default RegisterFormik;
