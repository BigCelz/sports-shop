import React from "react";
import Card from "react-bootstrap/Card";
import "./Items.css";
import { useCart } from "react-use-cart";

const Items = (props) => {
  const { addItem } = useCart();

  return (
    <div className="items">
      <div className="container">
        <div className="card-container">
          <Card className="card shadow">
            <Card.Body>
              <img src={props.image} alt="" className="img-fluid item-image" />
              <div className="item-details">
                <Card.Title className="item-name">{props.name}</Card.Title>
                <Card.Text className="item-price">${props.price}</Card.Text>
                <div className="btn-container">
                  <button
                    onClick={() => addItem(props.item)}
                    className="item-btn"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Items;
