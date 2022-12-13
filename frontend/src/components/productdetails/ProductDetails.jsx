import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Store } from "../../Store";
import { RiDislikeFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

const ProductDetails = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const [like, setLike] = useState(true);
  const [whiteList, setWhiteList] = useState(true);
  const [comment, setComment] = useState([]);
  const { cart } = state;
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const id = userInfo && userInfo._id;
  const [product, setProduct] = useState({});
  const params = useParams();
  const { slug } = params;
  const [text, setText] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        console.log(result.data);
        setProduct(result.data);
      } catch (err) {
        console.log("Error!");
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    if (Object.keys(product).length !== 0) {
      const fetchProductLike = async () => {
        try {
          const result = await axios.get(
            `/api/products/like/${product._id}/${id}`
          );
          setLike(result.data.like);
        } catch (err) {
          console.log("Error!");
        }
      };
      const fetchProductWhiteList = async () => {
        try {
          const result2 = await axios.get(
            `/api/products/whiteList/${product._id}/${id}`
          );
          setWhiteList(result2.data.like);
        } catch (err) {
          console.log("Error!");
        }
      }
      const fetchProductComment = async () => {
        try {
          const result = await axios.get(
            `/api/products/comments/${product._id}`
          );
          console.log(result.data);
          setComment(result.data?.comments);
        } catch (err) {
          console.log("Error!");
        }
      };
      fetchProductWhiteList();
      fetchProductLike();
      fetchProductComment();
    }
  }, [product]);
  const prductLikeHandler = async () => {
    try {
      await axios.post(`/api/products/like`, {
        id: product._id,
        userId: id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const prductWhiteListHandler = async () => {
    try {
      await axios.post(`/api/products/whiteList`, {
        id: product._id,
        userId: id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const addToCart = () => {
    if (!id) {
      window.alert("Sorry. You must login.");
    } else {
      setLike((el) => !el);
      prductLikeHandler();
    }
  };
  const addToCart2 = () => {
    if (!id) {
      window.alert("Sorry. You must login.");
    } else {
      setWhiteList((el) => !el);
      prductWhiteListHandler();
    }
  };

  const addComment = async () => {
    if (!id) {
      window.alert("Sorry. You must login.");
    } else {
      try {
        await axios.post(`/api/products/comment`, {
          id: product._id,
          userId: id,
          comment: text,
        });
        setText("");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <div className="product-row">
        <div className="product-col">
          <img src={product?.image} alt={product?.name} />
          <Link to={`../seller/${product?.sellerId}`}>
            <img
              className="seller-product"
              src={product?.sellerImage}
              alt={product?.seller}
            />
          </Link>
        </div>
        <div className="product-col">
          <div className="product-info">
            <div className={` ${!like ? "product-add" : "proudct-remove"}`}>
              <button onClick={addToCart}>
                {!like ? (
                  <AiFillHeart style={{ marginRight: "10px" }} />
                ) : (
                  <RiDislikeFill style={{ marginRight: "10px" }} />
                )}
                {!like ? "Add to Wishlist" : "Remove from Wishlist"}
              </button>
            </div>
            <h2 className="product-title">{product?.name}</h2>
            <span className="category">{product?.category}</span>
          </div>
          <div className="product-info">
            <span className="price">
              Price: ฿{Number(product?.price).toFixed(2)}
            </span>
            <span className="desc">{product?.description}</span>
            <span>City : {product?.city}</span>
          </div>
          <div className="flex">
            <div className="more-detail">
              <a target="_blank" rel="noreferrer" href={product.link}>
                Go to Website
              </a>
            </div>
            <div className={` ${!whiteList ? "like-add" : "like-remove"}`}>
              <button onClick={addToCart2}>
                {!whiteList ? (
                  <AiOutlineLike style={{ marginRight: "10px" }} />
                ) : (
                  <AiFillLike style={{ marginRight: "10px" }} />
                )}
                {!whiteList ? "Like" : "Unlike"}
              </button>
            </div>
          </div>
          <div className="comment-container">
            {comment?.map((el, index) => (
              <div className="comment">
                <div className="comment-heading">
                  <img src={`${el?.user?.image}`} width="50px" height="50px" alt="" />
                  <div className="comment-info">
                    <p className="comment-author">{el?.user?.name}</p>
                    <div className="comment-body">
                      <p>{el?.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="comment" style={{ display: "flex" }}>
              <textarea
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder="Enter your comment"
              ></textarea>

              <div>
                <button onClick={addComment} class="my-button">
                  SEND
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
