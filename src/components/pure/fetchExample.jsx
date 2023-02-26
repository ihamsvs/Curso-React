import React, { useState, useEffect } from "react";
import { getAllPagedUsers, getAllUsers, getUserDetails, login } from "../../services/fetchService";

const FetchExample = () => {
  const [users, setUsers] = useState([]);
  const [selectUser, setSelectUser] = useState({});
  const [total_users, setTotal_users] = useState(12);
  const [pages, setPages] = useState(2);
  const [userPerPage, setUserPerPage] = useState(6);

  useEffect(() => {
    obtainUsers();
  }, []);

  const obtainUsers = () => {
    getAllUsers()
      .then((response) => {
        console.log(`All users`, response.data);
        setUsers(response.data);
        setPages(response.total_pages)
        setUserPerPage(response.per_page)
        setTotal_users(response.total)
      })
      .catch((error) => alert(`Error while retreibing your users ${error}`))
      .finally(() => {
        console.log("Ended obtain users:");
        console.table(users);
      });
  };

  const obtainPageUsers = (page) =>{
    getAllPagedUsers()
    .then((response) =>{
        console.log(`All paged Users`, response.data);
        setUsers(response.data);
        setPages(response.total_pages)
        setUserPerPage(response.per_page)
        setTotal_users(response.total)
    })
    .catch((error)=>{
        alert(`Error while retreiving the users: ${error}`)
    })
    .finally(()=>{
        console.log('Ended obtaining users')
        console.table(users)
    })
  }
  
  const obtainUserDetails = (id) =>{
    getUserDetails(id)
    .then((response)=>{
        setSelectUser(response.data)
    })
    .catch((error)=>console.log(error))
    .finally(()=>{
        console.log('Error while retreiving the users')
        console.table(selectUser)
    })
  }

  const authUser = () => {
    login('eve.holt@reqres.in', 'cityslicka')
    .then((response)=>{
      console.log('TOKEN', response.token)
      sessionStorage.setItem('token', response.token)
    })
    .catch((error)=>alert('Error while login user:', error))
    .finally(()=>{
      console.log('Ended login user. NAVIGATE TO HOME.....')
    })
  }


  return (
    <div>
    {/* Button to simulate login */}
    <button onClick={authUser}>Auth user</button>



      <h2>Users:</h2>
      {users.map((user, index) => (
        <p key={index} onClick={()=>obtainUserDetails(user.id)}>
            {user.first_name} {user.last_name}
        </p>
      ))}
        
        <p>Showing {userPerPage} user of {total_users} in total.</p>
      <button onClick={() => obtainPageUsers(1)}>
        1
      </button>
      <button onClick={() => obtainPageUsers(2)}>
        2
      </button>
      <div>
        { selectUser != null ? 
        (<div>
          <h3>User details</h3>
          <p>Name: {selectUser.first_name}</p>
          <p>Last name: {selectUser.last_name}</p>
          <p>Email: {selectUser.email}</p>
          <img alt="Avatar" src={selectUser.avatar} style={{height: '150px', width:'150px'}}></img>
        </div>):
        (<h6>Please click on a User to see its details</h6>)}
      </div>
    </div>
  );
};

export default FetchExample;
