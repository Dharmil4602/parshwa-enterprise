import React from 'react'
import { Link } from 'react-router-dom';
import ProductDetail from './ProductDetail';

function ProductItem(props) {
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
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