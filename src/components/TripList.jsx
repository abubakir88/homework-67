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
                  <p>
                    Username: <span>{trip.username}</span>
                  </p>
                  <p>
                    Email: <span>{trip.email}</span>
                  </p>
                  <p>
                    Website: <span>{trip.website}</span>
                  </p>
                  <p>
                    Address:
                    <span>
                      {" "}
                      {`${trip.address.city},${trip.address.street}`}
                    </span>
                  </p>
                  <p>
                    Phone: <span>{trip.phone}</span>
                  </p>
                  <div className="btns">
                    <button>Posts</button>
                    <button>Todos</button>
                    <button>Album</button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default TripList;
