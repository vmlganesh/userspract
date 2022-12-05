import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

export default function Users() {
  const navigate = useNavigate();
  const [usersdata, setUsers] = useState([]);
  const url = `http://localhost:5000/api/users`;
  const getContacts = () => {
    axios.get(url).then((response) => {
      setUsers(response.data.data);
    });
  };
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <table className="table align-middle mb-0 bg-white">
      <thead className="bg-light">
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Status</th>
          <th>Dob</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {usersdata.map((product) => {
          var image = "";
          if (
            // eslint-disable-next-line eqeqeq
            product.employee_image == "" ||
            product.employee_image == null
          ) {
            image =
              "http://ftidev.synverse.com/freedom_api/assets/img/default-avatar.png";
          } else {
            image = product.employee_image;
          }

          const navigateToProfile = () => {
            // 👇️ navigate to /contacts
            navigate(`/Profile/${product.employee_id}`);
          };
          const navigateToProfileEdit = () => {
            // 👇️ navigate to /contacts
            navigate(`/Employee/${product.employee_id}`);
          };
          return (
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={image}
                    alt=""
                    style={{ width: " 45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1" onClick={navigateToProfile}>
                      {product.e_first_name} {product.e_last_name}
                    </p>
                    <p className="text-muted mb-0">{product.e_email_address}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{product.role_name}</p>
                <p className="text-muted mb-0">{product.department_name}</p>
              </td>
              <td>
                <span className="d-inline">{product.status_name}</span>
              </td>
              <td>{product.e_dob}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-link btn-sm btn-rounded"
                  onClick={navigateToProfileEdit}
                >
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
