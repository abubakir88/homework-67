import React from "react";
import { Link } from "react-router-dom";
function Home({ data }) {
  const Data = data?.data;
  return (
    <>
      <div className="container">
        <div className="users">
          <div className="header">
            <p className="user_p">User Card</p>
          </div>
          <div className="user_cards">
            {Data ? (
              Data?.map((el, i) => (
                <div className="user_card" key={i}>
                  <p>
                    Name:<span>{el?.name}</span>
                  </p>
                  <p>
                    Email: <span>{el?.email} </span>
                  </p>
                  <p>
                    Address: <span>{el?.address?.street} </span>
                  </p>
                  <p>
                    Phone: <span>{el?.phone} </span>
                  </p>
                  <p>
                    Website: <span>{el?.website} </span>
                  </p>
                  <p>
                    Company: <span>{el?.company?.name} </span>
                  </p>
                </div>
              ))
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae optio quia cumque ipsam omnis rem tenetur consequatur
                suscipit praesentium enim placeat sit vel, maiores, doloremque
                distinctio! Sunt laborum ratione qui.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
