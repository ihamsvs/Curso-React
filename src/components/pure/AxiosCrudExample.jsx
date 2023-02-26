import React from 'react';
import { login, getAllUser, getAllPagedUser, getUserByID, CreateUser, UpdateUser, deleteUser } from '../../services/axiosCRUDService';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup'

const AxiosCrudExample = () => {
    
        const initialCredentials = {
          email: "",
          password: "",
        };

        const loginSchema = Yup.object().shape({
            emal: Yup.string()
              .email("Invalid email format")
              .required("Email is required"),
            password: Yup.string().required("Password is required"),
          });    

    const authUser = (values) => {
        login(values.email, values.password)
        .then((response)=> {
            if(response.data.token){
                alert(JSON.stringify(response.data.token))
                sessionStorage.setItem('token', response.data.token)
            }else{
                sessionStorage.removeItem('token')
                throw new Error('Login Failure')
                
            }
            
        })
        .catch((error)=> {
            alert(`Something went wrong: ${error}`)
            sessionStorage.removeItem('token')})
        .finally(()=> console.log('Login done'))
    }

    //CRUD Example

    const obtainAllUser = () => {
        getAllUser()
        .then((response) => {
            if(response.data.data && response.status === 200){
                console.log(response.status)
                alert(JSON.stringify(response.data.data))
            }else{
                throw new Error('No user found ')
            }
        })
        .catch((error) => alert(`Somethin went wrong: ${error}`))
    }

    const obtainAllPagedUser = (page) => {
        getAllPagedUser()
        .then((response) => {
            if(response.data.data && response.status === 200){
                console.log(response.status)
                alert(JSON.stringify(response.data.data))
            }else{
                throw new Error('No user found in page')
            }
        })
        .catch((error) => alert(`Somethin went wrong: ${error}`))
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
        .then((response)=>{
            if(response.data.data && response.status === 200){
                console.log(response.status)
                alert(JSON.stringify(response.data.data))
            }else{
                throw new Error('User not found')
            }
        })
        .catch((error) => alert(`Somethin went wrong: ${error}`))
    }


    const createnewUser = (name, job) => {
        CreateUser(name, job)
        .then((response)=> {
            if(response.data && response.status === 201){
                console.log(response.status)
                alert(JSON.stringify(response.data))
            }else{
                throw new Error('User not created')
            }
            
        })
        .catch((error) => alert(`Somethin went wrong: ${error}`))
        
    }

    const updateUserByID = (id,name,job) => {
        UpdateUser(id,name,job)
        .then((response)=>{
            if(response.data && response.status === 200){
                console.log(response.status)
                alert(JSON.stringify(response.data))
            }else{
                throw new Error('User not found & no update done')
            }
        })
        .catch((error) => alert(`Somethin went wrong: ${error}`))
    }

    const deleteUserByID = (id) => {
        deleteUser(id)
        .then((response)=>{
            if(response.status === 204){
                alert(`User with id: ${id} successfully deleted`)
            }else{
                throw new Error('User not found & no update done')
            }
        })
        .catch((error) => alert(`Somethin went wrong: ${error}`))
    }





    return (
        <div>
            
            <Formik
        //Usamos el initialValues para el formik y el validation schema para el Yup
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        // ** onSubmit Event
        onSubmit={async (values) => {
            authUser(values)
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
      {/*Example buttons to test API response */}
        <div>
            <button onClick={obtainAllUser}>Get all user with axios</button>
            <button onClick={()=>obtainAllPagedUser(1)}>Get all paged with axios</button>
            <button onClick={()=>obtainUserByID(1)}>Get user by ID</button>
            <button onClick={()=> createnewUser('morpheus', 'leader')}>Create User</button>
            <button onClick={()=> updateUserByID(1,'morpheus', 'developer')}>Update</button>
            <button onClick={()=> deleteUserByID(1)}>Delete</button>
        </div>

    </div>
    );
}

export default AxiosCrudExample;
