import React from 'react'
import { Link } from 'react-router-dom';

function ProductItem(props) {
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem", 
boxShadow: "0px 3px 15px 0px rgba(0,0,0,0.58)" }}>
        <img src={props.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <Link to='/productdetail' target={"_blank"} className="btn btn-primary">
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem