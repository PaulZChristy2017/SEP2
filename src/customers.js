import React from 'react';

const Customers = ({ customers }) => {
    return (
        <div>
          <center><h1>Eagle Event Planning</h1></center>
          <center><h1>Customer List</h1></center>
          {customers.map((customers) => (
            <div class="card">
              <div class="card-body">
                <h5>Name:    {customers.fName} {customers.lName}</h5>
                <h6>ID:      {customers.id}</h6>
                <h6>Email:   {customers.email}</h6>
                <h6>Phone:   {customers.phone}</h6>
                <h6>Address: {customers.address}</h6>
                <h6>Active:  {customers.active}</h6>
              </div>
            </div>
          ))}
        </div>
    )
};

export default Customers;