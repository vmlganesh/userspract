/* eslint-disable eqeqeq */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Users from "./components/Users";
import Profile from "./components/Profile";

function App() {
  const [usersdata, setUsers] = useState([]);
  const [userdata, setUser] = useState([]);
  const url = `http://localhost:5000/api/users`;
  const getContacts = () => {
    axios.get(url).then((response) => {
      setUsers(response.data.data);
    });
  };
  const sayHello = (name) => {
    if (name != "" && name > 0) {
      const userurl = `http://localhost:5000/api/user/${name}`;
      axios.get(userurl).then((response) => {
        console.log(response);
        setUser(response.data.data);
      });
    }
  };

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {usersdata.map((product) => {
            var image = "";
            if (
              product.employee_image == "" ||
              product.employee_image == null
            ) {
              image =
                "http://ftidev.synverse.com/freedom_api/assets/img/default-avatar.png";
            } else {
              image = product.employee_image;
            }
            return (
              <Users
                e_first_name={product.e_first_name}
                e_last_name={product.e_last_name}
                e_email_address={product.e_email_address}
                employee_image={image}
                employee_id={product.employee_id}
                btn_value="View Profile"
                onPress={sayHello}
              />
            );
          })}
        </div>
        <div className="row">
          {userdata.map((productss) => {
            console.log(productss);
            var image = "";
            if (
              productss.employee_image == "" ||
              productss.employee_image == null
            ) {
              image =
                "http://ftidev.synverse.com/freedom_api/assets/img/default-avatar.png";
            } else {
              image = productss.employee_image;
            }
            return (
              <Users
                e_first_name={productss.e_first_name}
                e_last_name={productss.e_last_name}
                e_email_address={productss.e_email_address}
                employee_image={image}
                employee_id={productss.employee_id}
                btn_value="View Profile"
                onPress={sayHello}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
