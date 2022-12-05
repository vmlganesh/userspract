import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Profile(props) {
  const { id } = useParams();
  console.log("Employee ID", id);
  const navigate = useNavigate();
  const [usersdata, setUsers] = useState([]);
  const url = `http://localhost:5000/api/user/${id}`;
  const getContacts = () => {
    axios.get(url).then((response) => {
      setUsers(response.data.data);
    });
  };
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var image = "";
  if (
    // eslint-disable-next-line eqeqeq
    usersdata.employee_image == "" ||
    usersdata.employee_image == null
  ) {
    image =
      "http://ftidev.synverse.com/freedom_api/assets/img/default-avatar.png";
  } else {
    image = usersdata.employee_image;
  }

  const navigateToProfileEdit = () => {
    // 👇️ navigate to /contacts
    navigate(`/Employee/${usersdata.employee_id}`);
  };
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img
              src={image}
              className="rounded-circle img-fluid"
              style={{ width: "150px" }}
            />
            <h5 className="my-3">
              {usersdata.e_first_name} {usersdata.e_last_name}
            </h5>
            <p className="text-muted mb-1">{usersdata.role_name}</p>
            <p className="text-muted mb-4">{usersdata.e_address}</p>
            <div className="d-flex justify-content-center mb-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={navigateToProfileEdit}
              >
                Edit
              </button>
              {/* <button type="button" className="btn btn-outline-primary ms-1">
                Message
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">
                  {usersdata.e_first_name} {usersdata.e_last_name}
                </p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{usersdata.e_email_address}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{usersdata.e_telephone}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Mobile</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{usersdata.e_telephone}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{usersdata.e_address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
