import { useEffect, useState } from "react";
import Home from "../components/cards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
function AppLayout() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // user
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setUser(res);
        });
    }

    fetchData();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={user} />} />
      </Routes>
    </>
  );
}

export default AppLayout;
