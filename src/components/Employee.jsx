import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
const Employee = () => {
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
    <div className="container">
      <h1>Edit Profile</h1>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <div className="text-center">
            <img src={image} className="avatar img-circle" alt="avatar" />
            <h6>Upload a different photo...</h6>

            <input type="file" className="form-control" />
          </div>
        </div>
        <div className="col-md-9 personal-info">
          <h3>Personal info</h3>

          <form className="form-horizontal" role="form">
            <div className="form-group">
              <label className="col-lg-3 control-label">First name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  value={usersdata.e_first_name}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">Second name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  value={usersdata.e_second_name}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">Last name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  value={usersdata.e_last_name}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">Company:</label>
              <div className="col-lg-8">
                <input className="form-control" type="text" value="" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">Email:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  value={usersdata.e_email_address}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">Time Zone:</label>
              <div className="col-lg-8">
                <div className="ui-select">
                  <select id="user_time_zone" className="form-control">
                    <option value="Hawaii">(GMT-10:00) Hawaii</option>
                    <option value="Alaska">(GMT-09:00) Alaska</option>
                    <option value="Pacific Time (US &amp; Canada)">
                      (GMT-08:00) Pacific Time (US &amp; Canada)
                    </option>
                    <option value="Arizona">(GMT-07:00) Arizona</option>
                    <option value="Mountain Time (US &amp; Canada)">
                      (GMT-07:00) Mountain Time (US &amp; Canada)
                    </option>
                    <option
                      value="Central Time (US &amp; Canada)"
                      selected="selected"
                    >
                      (GMT-06:00) Central Time (US &amp; Canada)
                    </option>
                    <option value="Eastern Time (US &amp; Canada)">
                      (GMT-05:00) Eastern Time (US &amp; Canada)
                    </option>
                    <option value="Indiana (East)">
                      (GMT-05:00) Indiana (East)
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">Username:</label>
              <div className="col-md-8">
                <input className="form-control" type="text" value="janeuser" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">Password:</label>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="password"
                  value="11111122333"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">
                Confirm password:
              </label>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="password"
                  value="11111122333"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label"></label>
              <div className="col-md-8">
                <input
                  type="button"
                  className="btn btn-primary"
                  value="Save Changes"
                />
                <span></span>
                <input
                  type="reset"
                  className="btn btn-default"
                  value="Cancel"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Employee;
