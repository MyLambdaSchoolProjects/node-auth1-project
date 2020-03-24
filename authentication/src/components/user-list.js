import React, { useState } from "react";
import axiosWithAuth from "./Auth";

const GetUsers = (props) => {
  const [usersList, setUsersList] = useState([]);
  axiosWithAuth()
    .get("/users")
    .then(res =>{
        console.log('response', res);
        setUsersList(...usersList, res);
    })
    .catch(err => console.log(err));
  return (
    <div>
        {usersList.map(users => {
            return(
                <div>
                    <h1>Users List</h1>
                    <p>user: {users.username}</p>
                </div>
            )
        })}
    </div>
  );
};

export default GetUsers;