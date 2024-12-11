import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/productStyle.css";
import { ClockLoader } from "react-spinners";
import { Link } from "react-router-dom";

const Products = () => {
  const categoryList = [
    "All",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  const fetchProducts = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchCategories = () => {
    if (category === "All") {
      axios
        .get(`https://fakestoreapi.com/products`)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      axios
        .get(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [category]);

  const handleClick = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="container">
      <h1>Products</h1>
      <div></div>
      {loading ? (
        <div
          className="spinner-container"
          style={{ width: "0%", margin: "auto" }}
        >
          <ClockLoader size={50} color="#36d7b7" loading={loading} />
        </div>
      ) : (
        <div>
          <div className="category-div">
            {!!categoryList?.length &&
              categoryList?.map((item, index) => (
                <button
                  className={`btn ${item === category ? "selected" : ""}`}
                  key={index}
                  value={item}
                  onClick={handleClick}
                >
                  {item}
                </button>
              ))}
          </div>

          <div className="grid-container">
            {!!data?.length &&
              data?.map((product) => (
                <div key={product.id} className="card">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-image"
                    />
                    <div className="card-details">
                      <h3>{product.name}</h3>
                      <p style={{ textAlign: "center" }}>{product.title}</p>
                      <p style={{ textAlign: "center" }}>
                        Price: ${product.price}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
