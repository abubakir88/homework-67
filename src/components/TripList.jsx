// style
import "./TripList.css";
import { useState, useEffect } from "react";

function TripList() {
  const [trips, setTrips] = useState([]);

  //   console.log(trips);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);

  return (
    <div className="trip-list">
      <h1>TripList</h1>
      <div className="cards">
        <ul>
          {trips &&
            trips.map((trip) => {
              return (
                <li key={trip.id}>
                  <h2>Id: {trip.id}</h2>
                  <h3>Name: {trip.name}</h3>
                  <p>Username: {trip.username}</p>
                  <p>Email: {trip.email}</p>
                  <p>Website: {trip.website}</p>
                  <p>
                    Address: {`${trip.address.city},${trip.address.street}`}
                  </p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default TripList;
