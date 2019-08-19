import React from 'react';

const Events = ({ events }) => {
    return (
        <div>
          <center><h1>Eagle Event Planning</h1></center>
          <center><h1>Events List</h1></center>
          {events.map((events) => (
            <div class="card">
              <div class="card-body">
                <h5>Event: {events.id}</h5>
                <h6>Planner ID: {events.plannerid}</h6>
                <h6>Customer ID: {events.customerid}</h6>
                <h6>Event Name:   {events.eventName}</h6>
                <h6>Venue Name:   {events.venueName}</h6>
                <h6>Venue Address: {events.venueAddress}</h6>
                <h6>Event Date:  {events.eventDate}</h6>
                <h6>Table Size:  {events.tableSize}</h6>
                <h6>Expected Guests:  {events.expectedGuests}</h6>
                <h6>Empty Seats %:  {events.emptyPercentage}</h6>
              </div>
            </div>
          ))}
        </div>
    )
};

export default Events;