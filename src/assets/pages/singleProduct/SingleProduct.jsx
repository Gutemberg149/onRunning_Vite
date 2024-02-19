import styled from "styled-components";
import Navbar from "../../componentes/navbar/Navbar";
import logo from "../../images/logoImg/logo.jpeg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import Sizeguide from "./Sizeguide";
import { TfiClose } from "react-icons/tfi";
import Footer from "../../componentes/footer/Footer";
import QuickFacts from "./QuickFacts";
import CartShop from "./shopHere/ShopHere";
import { listProduct } from "../../utils/APIArray";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartToggleContex";

import { useRef } from "react";

const SingleProduct = () => {
  const [moveCarroseel, setMoveCarrosel] = useState(0);
  const [toggleX, setToggleX] = useState(false);
  const [toggleShipping, setToggleShipping] = useState(false);
  const [toggleMaterials, setToggleMaterials] = useState(false);

  const screenSize = useRef(window.innerWidth);

  const moveRight = () => {
    if (screenSize.current <= 374) {
      if (moveCarroseel < -35) {
        setMoveCarrosel(0);
      } else {
        setMoveCarrosel(moveCarroseel - 10.7);
        console.log(moveCarroseel);
      }
    } else if (screenSize.current <= 600) {
      if (moveCarroseel < -75) {
        setMoveCarrosel(0);
      } else {
        setMoveCarrosel(moveCarroseel - 21);
        console.log(moveCarroseel);
      }
    } else if (screenSize.current <= 900) {
      if (moveCarroseel < -80) {
        setMoveCarrosel(0);
      } else {
        setMoveCarrosel(moveCarroseel - 25);
        console.log(moveCarroseel);
      }
    } else if (screenSize.current <= 1350) {
      if (moveCarroseel < -70) {
        setMoveCarrosel(0);
      } else {
        setMoveCarrosel(moveCarroseel - 40);
        console.log(moveCarroseel);
      }
    } else {
      if (moveCarroseel < -60) {
        setMoveCarrosel(0);
      } else {
        setMoveCarrosel(moveCarroseel - 35);
        console.log(moveCarroseel);
      }
    }
  };

  const moveLeft = () => {
    if (screenSize.current <= 374) {
      if (moveCarroseel >= 0) {
        return;
      } else {
        setMoveCarrosel(moveCarroseel + 10.7);
      }
    } else if (screenSize.current <= 600) {
      if (moveCarroseel >= 0) {
        return;
      } else {
        setMoveCarrosel(moveCarroseel + 21);
      }
    } else if (screenSize.current <= 900) {
      if (moveCarroseel >= 0) {
        return;
      } else {
        setMoveCarrosel(moveCarroseel + 25);
      }
    } else if (screenSize.current <= 1350) {
      if (moveCarroseel >= 0) {
        return;
      } else {
        setMoveCarrosel(moveCarroseel + 40);
      }
    } else {
      if (moveCarroseel >= 0) {
        return;
      } else {
        setMoveCarrosel(moveCarroseel + 35);
      }
    }
    console.log(moveCarroseel);
  };

  const { id } = useParams();

  //context to move cart shop in and out
  const { showCart } = useContext(CartContext);

  return (
    <Wrapper>
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>

        <Navbar />
      </div>

      <section className="section1">
        <div className="carrossel">
          <div className="innerCarrossel" style={{ transform: `translateX(${moveCarroseel}rem)` }}>
            <div className="prodContainer">
              <img src={listProduct[id].img01} alt="" />
            </div>
            <div className="prodContainer">
              <img src={listProduct[id].img02} alt="" />
            </div>
            <div className="prodContainer">
              <img src={listProduct[id].img03} alt="" />
            </div>
            <div className="prodContainer">
              <img src={listProduct[id].img04} alt="" />
            </div>
            <div className="prodContainer">
              <img src={listProduct[id].img05} alt="" />
            </div>
          </div>

          <div className="btnsCarroessel">
            <>
              <div className="btnCarrossel" onClick={() => moveLeft()}>
                <BsChevronLeft className=" btnLeft" />
              </div>

              <div className="btnCarrossel" onClick={() => moveRight()}>
                <BsChevronRight className=" btnRight" style={{ fontWeight: "700" }} />
              </div>
            </>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="infoContainer">
          <section className="sizeSection">
            <div className="dropContainer">
              <h4>Size & fit</h4>
              <TfiClose
                className="xToggle"
                onClick={() => setToggleX(!toggleX)}
                style={{
                  transform: `rotate(${toggleX ? "180deg" : "90deg"})`,
                }}
              />
            </div>
            {!toggleX ? (
              ""
            ) : (
              <div className="sizeGuideTable" style={{ transition: "all ease 0.4s" }}>
                <Sizeguide />
              </div>
            )}
          </section>
          <hr />
          <section className="Shipping">
            <div className="dropContainer">
              <h4>Shipping & Returns</h4>
              <TfiClose
                className="xToggle"
                onClick={() => setToggleShipping(!toggleShipping)}
                style={{
                  transform: `rotate(${toggleShipping ? "180deg" : "90deg"})`,
                }}
              />
            </div>
            {toggleShipping && (
              <div className="ShipContent">
                <p>Free shipping on all orders </p>
                <p>Free 30 days return period</p>
              </div>
            )}
          </section>
          <hr />
          <section className="materials">
            <div className="dropContainer">
              <h4>Materials & Supplier</h4>
              <TfiClose
                className="xToggle"
                onClick={() => setToggleMaterials(!toggleMaterials)}
                style={{
                  transform: `rotate(${toggleMaterials ? "180deg" : "90deg"})`,
                }}
              />
            </div>
            {toggleMaterials && (
              <div className="MaterialContainer">
                <div>
                  <h5>Materials</h5>
                  <p>Polyester: 100% recycled</p>
                </div>
                <div>
                  <h5>Supplier Transparency</h5>
                  <p>Diamond, Vietnam</p>
                </div>
              </div>
            )}
          </section>
        </div>
        <hr />
      </section>

      <section className="section3">
        <QuickFacts />
      </section>

      <div className="cartshop" style={{ right: `${showCart}px` }}>
        <CartShop />
      </div>
      <footer>
        {" "}
        <Footer />
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  overflow-x: hidden;
  position: relative;
  .navbar {
    .logo {
      width: 4rem;
      margin: 3rem 3.75rem;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .section1 {
    .carrossel {
      position: relative;
      .innerCarrossel {
        display: flex;
        transition: all 0.6s ease;
        .prodContainer {
          width: 60rem;
          height: 35rem;
          background-color: #f6f4f3;
          margin: 0.4rem;

          img {
            width: 30rem;
          }
        }
      }
      .btnsCarroessel {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 12rem;
        height: 5rem;
        position: absolute;
        bottom: 2rem;
        left: 5rem;

        .btnCarrossel {
          background-color: white;
          width: 4rem;
          height: 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          border-radius: 50%;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          cursor: pointer;
          &:hover {
            background-color: #fafafa;
            font-size: 1.9rem;
          }
        }
      }
    }
  }
  .section2 {
    width: 50rem;
    margin-left: 4rem;
    margin-top: 6rem;

    hr {
      margin: 2rem 0;
    }
    .sizeSection {
      margin-bottom: 2rem;
    }
    .infoContainer {
      .dropContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;

        h4 {
          font-size: 1.8rem;
          color: #302f2f;
          font-weight: 300;
          letter-spacing: 0.21rem;
          margin-left: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .xToggle {
          font-size: 1.1rem;
          font-weight: 700;
          width: 4rem;
          transition: all ease 0.4s;
          cursor: pointer;
        }
      }
      .ShipContent {
        margin-top: 2rem;
        margin-bottom: 4rem;
        p {
          font-size: 1.3rem;
          margin-left: 0.5rem;
          line-height: 2.7rem;
          font-weight: 300;
        }
      }
    }
    .materials {
      .MaterialContainer {
        display: flex;
        height: 16rem;
        div {
          margin-right: 11rem;
          margin-top: 3rem;
          h5 {
            font-size: 1.6rem;
            font-weight: 500;
          }
          p {
            font-size: 1.2rem;
            margin-top: 1rem;
          }
        }
      }
    }
  }

  .section3 {
    margin: 6rem 0 2rem 0;
  }
  .cartshop {
    position: absolute;
    top: 9.5rem;
    transition: all ease-in 0.4s;
  }

  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    .navbar {
      .logo {
        width: 2rem;
        margin: 4rem 1rem 1rem 1rem;
        border-radius: 50%;
        cursor: pointer;
      }
    }
    .section1 {
      top: 0;
      .carrossel {
        position: relative;
        .innerCarrossel {
          display: flex;
          transition: all 0.6s ease;
          .prodContainer {
            width: 10rem;
            height: 10rem;
            background-color: #f6f4f3;
            margin: 0.4rem;
            img {
              width: 10rem;
            }
          }
        }
        .btnsCarroessel {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 9rem;
          height: 3rem;
          position: absolute;
          bottom: -3rem;
          left: 2rem;
          .btnCarrossel {
            background-color: white;
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.8rem;
            border-radius: 50%;
            box-shadow: rgba(100, 100, 111, 0.328) 0px 7px 29px 0px;
            cursor: pointer;
            &:hover {
              background-color: #fafafa;
              font-size: 1rem;
            }
          }
        }
      }
    }
    .section2 {
      display: none;
    }
    .section3 {
      margin: 4rem 0 0 0;
      height: 12rem;
    }
    .cartshop {
      position: absolute;
      top: 4rem;
      transition: all ease-in 0.4s;
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    .navbar {
      .logo {
        width: 3rem;
        margin: 7rem 1rem 1rem 1rem;
        border-radius: 50%;
        cursor: pointer;
      }
    }
    .section1 {
      top: 0;
      .carrossel {
        position: relative;
        .innerCarrossel {
          display: flex;
          transition: all 0.6s ease;
          .prodContainer {
            width: 20rem;
            height: 20rem;
            background-color: #f6f4f3;
            margin: 0.4rem;
            img {
              width: 20rem;
            }
          }
        }
        .btnsCarroessel {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 8rem;
          height: 5rem;
          position: absolute;
          bottom: -5rem;
          left: 0.5rem;

          .btnCarrossel {
            background-color: white;
            width: 3rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            border-radius: 50%;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            cursor: pointer;
            &:hover {
              background-color: #fafafa;
              font-size: 1.9rem;
            }
          }
        }
      }
    }
    .section2 {
      display: none;
    }
    .section3 {
      margin: 5rem 0 0 0;
      height: 20rem;
    }
    .cartshop {
      position: absolute;
      top: 4rem;
      transition: all ease-in 0.4s;
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    .navbar {
      .logo {
        width: 3.5rem;
        margin: 7rem 1rem 1rem 1rem;
        border-radius: 50%;
        cursor: pointer;
      }
    }
    .section1 {
      top: 0;
      .carrossel {
        position: relative;
        .innerCarrossel {
          display: flex;
          transition: all 0.6s ease;
          .prodContainer {
            width: 24rem;
            height: 24rem;
            background-color: #f6f4f3;
            margin: 0.4rem;
            img {
              width: 24rem;
            }
          }
        }
        .btnsCarroessel {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 9rem;
          height: 5rem;
          position: absolute;
          bottom: -5rem;
          left: 0.5rem;

          .btnCarrossel {
            background-color: white;
            width: 3.5rem;
            height: 3.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.6rem;
            border-radius: 50%;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            cursor: pointer;
            &:hover {
              background-color: #fafafa;
              font-size: 2.1rem;
            }
          }
        }
      }
    }
    .section2 {
      display: none;
    }
    .section3 {
      margin: 5rem 0 2.5rem 0;
      height: 20rem;
    }
    .cartshop {
      position: absolute;
      top: 4rem;
      transition: all ease-in 0.4s;
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1390px) and (-webkit-min-device-pixel-ratio: 2) {
    .navbar {
      .logo {
        width: 3.5rem;
        margin: 7rem 1rem 1rem 1rem;
        border-radius: 50%;
        cursor: pointer;
      }
    }
    .section1 {
      top: 0;
      .carrossel {
        position: relative;
        .innerCarrossel {
          display: flex;
          transition: all 0.6s ease;
          .prodContainer {
            width: 24rem;
            height: 24rem;
            background-color: #f6f4f3;
            margin: 0.4rem;
            img {
              width: 24rem;
            }
          }
        }
        .btnsCarroessel {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 9rem;
          height: 5rem;
          position: absolute;
          bottom: -5rem;
          left: 0.5rem;

          .btnCarrossel {
            background-color: white;
            width: 3.5rem;
            height: 3.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.6rem;
            border-radius: 50%;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            cursor: pointer;
            &:hover {
              background-color: #fafafa;
              font-size: 2.1rem;
            }
          }
        }
      }
    }
    .section2 {
      display: none;
    }
    .section3 {
      margin: 5rem 0 2.5rem 0;
      height: 20rem;
    }
    .cartshop {
      position: absolute;
      top: 6.5rem;
      transition: all ease-in 0.4s;
    }
  }
`;
export default SingleProduct;
