import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./index.css";

const breakPoints = [
  { width: 300, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];
const ProductsList = () => {
  return (
    <div>
      <div className="title-products">
        <h2>Les produits temoins de notre savoir faire !</h2>
      </div>
      <div className="products">
        <div className="category">
          <span style={{ textAlign: "center" }}>Enfants</span>
        </div>
        <br />
        <div className="product">
          <Carousel breakPoints={breakPoints}>
            <Item>
              <img src="/Images/Products/Product8.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product9.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product10.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product12.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product13.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product16.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product17.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product21.jpg" alt="Product" />
            </Item>
          </Carousel>
        </div>
        <br />
        <div className="category">
          <span style={{ textAlign: "center" }}>Femmes</span>
        </div>
        <br />
        <div className="product">
          <Carousel breakPoints={breakPoints}>
            <Item>
              <img src="/Images/Products/Product1.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product2.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product23.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product24.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product3.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product4.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product6.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product7.jpg" alt="Product" />
            </Item>
          </Carousel>
        </div>
        <br />
        <div className="category">
          <span style={{ textAlign: "center" }}>Hommes</span>
        </div>
        <br />
        <div className="product">
          <Carousel breakPoints={breakPoints}>
            <Item>
              <img src="/Images/Products/Product25.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product26.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product27.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product29.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product30.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product31.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product32.jpg" alt="Product" />
            </Item>
            <Item>
              <img src="/Images/Products/Product33.jpg" alt="Product" />
            </Item>
          </Carousel>
        </div>
        <br />
        <br />
      </div>
     
    </div>
  );
};

export default ProductsList;
