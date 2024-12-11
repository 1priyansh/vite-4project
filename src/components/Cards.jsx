import "../styles/style.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, React, useEffect } from "react";
import "./Stylesheet/Cards.css";
import Navbar from "./Navbar";
import { ClockLoader } from "react-spinners";

const Cards = () => {
  const { i } = useParams();
  console.log("id", i);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const response = axios
      .get(`https://fakestoreapi.com/products/${i}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching product details:", error);
      });
  }, [i]);

  return (
    <>
      <Navbar />
      {loading ? (
        <div
          className="spinner-container"
          style={{ width: "0%", margin: "auto" }}
        >
          <ClockLoader size={50} color="#36d7b7" loading={loading} />
        </div>
      ) : (
        <div className="outer-outer-1">
          <div className="outer-outer">
            <div className="outer-inner-1">
              <img
                src={product.image}
                style={{ width: "200px" }}
                alt={product.title}
              />
            </div>
            <div className="outer-inner-2">
              <div className="outer-inner-21">
                <p> ID :{product.id}</p>
                <p>{product.title}</p>
                <p>PRICE: ${product.price}</p>
                <p>{product.category}</p>
              </div>
              <div className="outer-inner-22">
                <p>{product.description}</p>
              </div>
              <div className="outer-inner-23">
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
