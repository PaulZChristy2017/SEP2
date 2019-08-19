import React from 'react';

const Users = ({ users }) => {
    return (
        <div>
          <center><h1>Eagle Event Planning</h1></center>
          <center><h1>User List</h1></center>
          {users.map((users) => (
            <div class="card">
              <div class="card-body">
                <h5>Name:     {users.fName} {users.lName}</h5>
                <h6>ID:       {users.id}</h6>
                <h6>Email:    {users.email}</h6>
                <h6>Password: {users.password}</h6>
                <h6>Permissions: {users.permissions}</h6>
                <h6>Active: {users.active}</h6>
              </div>
            </div>
          ))}
        </div>
    )
};

export default Users;