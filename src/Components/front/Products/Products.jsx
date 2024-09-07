import React from "react";
import "./Products.css";
import data from "../../back/Data/Data";
import Items from "../../Items/Items";

const Products = () => {

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          {data.productItems.map((item, index) => {
            return (
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <Items item = {item} name = {item.name} price = {item.price} image = {item.image}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
