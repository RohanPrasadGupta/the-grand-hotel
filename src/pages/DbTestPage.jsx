// import { useEffect } from "react";
// import axios from "axios";
import { useState } from "react";
import { getCabin } from "../services/apiCabins";

const DbTestPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formDataBtn = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(
        "http://127.0.0.1:3000/api/users/v1/signIn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  function handleChnageForm(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const getDataBtn = async (e) => {
    e.preventDefault();
    console.log("Clicked");

    try {
      const response = await fetch("http://127.0.0.1:3000/api/users/v1/User", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Assuming response is JSON data
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function bookingBtn(e) {
    e.preventDefault();
    getCabin();
  }

  return (
    <div>
      DB test
      <button onClick={getDataBtn}>Get Data</button>
      <div>
        <p>name</p>
        <input
          name="name"
          type="text"
          value={user.name}
          onChange={handleChnageForm}
        />
        <p>email</p>
        <input
          name="email"
          type="text"
          value={user.email}
          onChange={handleChnageForm}
        />
        <p>password</p>
        <input
          name="password"
          type="text"
          value={user.password}
          onChange={handleChnageForm}
        />
        <p>confirmPassword</p>
        <input
          name="confirmPassword"
          type="text"
          value={user.confirmPassword}
          onChange={handleChnageForm}
        />
        <button onClick={formDataBtn}>UserData</button>
        <button onClick={bookingBtn}>Cabin Info</button>
      </div>
    </div>
  );
};

export default DbTestPage;
