import React from 'react'

export default function Profile(props) {
  return (
    <div className="col-lg-2">
      <div className="card mt-3">
        <img className="card-img-top" src={props.employee_image} />
        <div className="card-body">
          <h5 className="card-title">{props.e_first_name} {props.e_last_name}</h5>
          <p className="card-text">{props.e_email_address}</p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
          
          <input type="button" className="btn btn-primary" value={props.btn_value} onClick={() => { props.onPress(props.employee_id) }}/>
        </div>
      </div>
    </div>
  )
}