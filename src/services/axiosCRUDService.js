import axios from 'axios'

/**
 * Login method to ReqRes endpoint
 * @param {string} email 
 * @param {string } password 
 */
export const login = (email, password) => {

    let body = {
        email: email,
        password: password
    }

    //Returns the response with a promise
    return axios.post('https://reqres.in/api/login', body )

}

// TODO Obtain All users
export const getAllUser = () => {
    return axios.get('https://reqres.in/api/users')
}

//TODO Obtain All Pages Users
export const getAllPagedUser = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

// TODO Obtain user by id

export const getUserByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

// TODO Create User

export const CreateUser = (name, job) => {
    let body = {
        name: name,
        job: job
    }

    //Returns the response with a promise
    return axios.post('https://reqres.in/api/users', body )
}

// TODO Update User
    
export const UpdateUser = (id,name, job) => {
    let body = {
        name: name,
        job: job
    }

    //Returns the response with a promise
    return axios.put(`https://reqres.in/api/users/${id}`, body )
}


// TODO Delete User

export const deleteUser = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}