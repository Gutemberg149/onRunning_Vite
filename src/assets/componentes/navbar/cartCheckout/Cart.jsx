import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProdDetailContetx } from "../../../contexts/ProdetailContext";
import { OpensignUpContext } from "../../../contexts/OpenSigUpContext";
import { userAuthContext } from "../../../contexts/UserAuthContext";

const Cart = () => {
  const { id } = useParams();
  const [warningSignal, setWarningSignal] = useState(false);

  //context to send and delete itens from the cart.
  const { removeProduct, cartItems, decreaseProducQty, increaseProducQty, total, countShopBag } = useContext(ProdDetailContetx);

  cartItems;

  //This context is to open and close dropDown container using the X icon when the screen is small.
  const { setTogglevisibilityCart } = useContext(OpensignUpContext);

  //this context is for display warning that the user has to be logged in in order to proceed to checkoutPage. The use state is in UserAuthContext because it needs to be changed when the user loggin sign up. Also when the user is logged in useEffect set the setWarningSignal to false making it not showing.
  const { blockLinkDiv, setBlockLink } = useContext(userAuthContext);
  let user = JSON.parse(localStorage.getItem("userAuth"));
  useEffect(() => {
    if (user === false) {
      setBlockLink(true);
    } else {
      setBlockLink(false);
      setWarningSignal(false);
    }
    //when the user first access the site he/she gets an "userAUth===false" in localStorage, avoiding errors bcs of userAuth === null.
    if (user === null) {
      localStorage.setItem("userAuth", JSON.stringify(false));
    }
  }, [user]);

  return (
    <Wrapper>
      <div className="cartBody">
        <div className="innerCartBody">
          <div className="topCart">
            <div className="leftSide">
              <h1>Your cart</h1>
              <div className="numberOfItens">
                {countShopBag} {countShopBag > "1" ? <p> Items</p> : <p>Item</p>}
              </div>
            </div>

            <div className="rightSide">
              <div id="closeBtnNav" onMouseEnter={() => setTogglevisibilityCart(false)} onMouseLeave={() => setTogglevisibilityCart(true)}>
                <IoIosCloseCircle className="close-icon" />
              </div>

              <div className="warningNoUser" style={{ display: `${warningSignal ? "block" : "none"}` }}>
                <p>Login or Sign-up to proceed to check out</p>
              </div>
            </div>
          </div>

          {cartItems.map((item) => {
            return (
              <div className="prodInCart" key={item.id}>
                <div className="left">
                  <img src={item.img01} alt="" />
                  <div className="info">
                    <h3>{item.title}</h3>
                    <p className="gender">Mens</p>
                    <p className="color">{item.color}</p>
                    <p className="size">BR {item.size} (mens)</p>
                    <div className="buttonContainer">
                      <div className="btn minus" onClick={() => decreaseProducQty(item.id)}>
                        -
                      </div>
                      <div className="qtd">{item.qty}</div>
                      <div className="btn plus" onClick={() => increaseProducQty(item.id)}>
                        +
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right">
                  <div className="price">R$ {item && item.price}</div>
                  <div className="deleteContainer">
                    <BsTrash className="delete" onClick={() => removeProduct(item.id)} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="checkOutContainer">
          <div className="top">
            <div className="shipping">
              <p>Shipping</p>
              <p>free</p>
            </div>
            <div className="total">
              <p>Total</p>
              <p>R$ {total.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</p>
            </div>
          </div>
          {/* onMouseEnter={() => setTogglevisibilityCart(false)} */}
          <div className="checkOutDiv">
            <div className="blockLink" style={{ display: `${blockLinkDiv ? "block" : "none"}` }} onClick={() => setWarningSignal(true)}></div>
            <Link to={"/checkout"} className="checkout" onClick={() => setTogglevisibilityCart(false)}>
              <p>Check out</p>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  overflow-y: scroll;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  .cartBody {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 54.5rem;
    width: 100%;

    .innerCartBody {
      padding: 4rem;
      .topCart {
        display: flex;
        justify-content: space-between;

        .leftSide {
          h1 {
            font-size: 2.2rem;
            font-weight: 500;
          }
          .numberOfItens {
            margin-top: 1rem;
            margin-left: 0.5rem;
            font-size: 1.3rem;
            display: flex;
            p {
              margin-left: 1rem;
            }
          }
        }
        .rightSide {
          #closeBtnNav {
            display: none;
          }
          .warningNoUser {
            background-color: #a70303e2;
            height: fit-content;
            padding: 0.2rem 0.8rem;
            border-radius: 1rem;
            p {
              color: white;
              font-size: 1rem;
            }
          }
        }
      }

      .prodInCart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 18rem;
        border-bottom: #c7c4c4 0.5px solid;
        .left {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 35rem;
          height: 18rem;
          img {
            width: 15rem;
          }
          .info {
            min-width: 10rem;
            display: flex;
            flex-direction: column;
            align-items: left;
            justify-content: center;
            h3 {
              font-size: 1.6rem;
              font-weight: 600;
            }
            p {
              margin-top: 0.4rem;
              font-size: 1.1rem;
              font-weight: 400;
              color: #343434;
            }
            .buttonContainer {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 1rem;
              .btn {
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                border: 1px solid gray;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.7rem;
                font-weight: 200;
                cursor: pointer;
                &:hover {
                  background-color: #efeded;
                  border: none;
                }
              }
              .qtd {
                font-size: 1.4rem;
                font-weight: 300;
              }
            }
          }
        }
        .right {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          height: 100%;
          width: 10rem;
          .price {
            font-size: 1.4rem;
            font-weight: 300;
          }
          .deleteContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 4rem;
            height: 4rem;
            cursor: pointer;
          }
          .delete {
            font-size: 1.5rem;
          }
        }
      }
    }

    .checkOutContainer {
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: sticky;
      bottom: 0;
      z-index: 110;
      padding: 1rem;
      height: 14rem;
      box-shadow: 0px -2px 5px 3px #cac8c8;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;

      cursor: pointer;
      .top {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
        .shipping {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          width: 40rem;
          border-bottom: 0.5px solid gray;
        }
        .total {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.4rem;
          font-weight: 600;
          width: 40rem;
          border-bottom: 0.5px solid gray;
        }
      }
      .checkOutDiv {
        width: 20rem;
        position: relative;
        border-radius: 5rem;
        .blockLink {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 5rem;
          top: 0;
          left: 0;
          background-color: transparent;
          z-index: 99;
        }
        .checkout {
          width: 100%;
          height: 4rem;
          background-color: #1f1e1e;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f9f5f5;
          border-radius: 5rem;
          &:hover {
            background-color: #323232;
            font-size: 1.2rem;
            border: 2px solid #393838;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    .cartBody {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 54.5rem;
      width: 100vw;

      .innerCartBody {
        padding: 0.3rem;
        height: 100%;
        width: 100%;

        .topCart {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 0.2rem;
          .leftSide {
            h1 {
              font-size: 1.5rem;
            }
            .numberOfItens {
              margin-top: 0rem;
              margin-left: 0rem;
              font-size: 1.2rem;
              display: flex;
              p {
              }
            }
          }
          .rightSide {
            /* border: 1px solid blue; */
            height: 4rem;
            position: relative;
            .warningNoUser {
              background-color: #a70303e2;
              height: fit-content;
              padding: 0.1rem 0.2rem;
              border-radius: 1rem;
              margin-top: 2.5rem;
              p {
                color: white;
                font-size: 0.7rem;
              }
            }
            #closeBtnNav {
              position: absolute;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 3rem;
              width: 3rem;
              top: -0.5rem;
              right: -0.5rem;
              .close-icon {
                color: #af0303;
                font-size: 1.7rem;
              }
            }
          }
        }

        .prodInCart {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 14rem;
          width: 100%;

          .left {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 72%;
            height: 100%;
            margin-right: 0;

            img {
              width: 50%;
            }
            .info {
              min-width: 8rem;
              display: flex;
              flex-direction: column;
              align-items: left;
              justify-content: center;
              h3 {
                font-size: 1.2rem;
                font-weight: 600;
              }
              p {
                margin-top: 0.4rem;
                font-size: 1rem;
                font-weight: 400;
                color: #343434;
              }
              .buttonContainer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 1rem;
                .btn {
                  width: 3rem;
                  height: 3rem;
                  border-radius: 50%;
                  border: 1px solid gray;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 1.9rem;
                  font-weight: 200;
                  cursor: pointer;
                  &:hover {
                    background-color: #efeded;
                    border: none;
                  }
                }
                .qtd {
                  font-size: 1.5rem;
                  font-weight: 300;
                }
              }
            }
          }
          .right {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            width: 28%;
            .price {
              font-size: 1.4rem;
              font-weight: 300;
            }
            .deleteContainer {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 4rem;
              height: 4rem;
              cursor: pointer;
            }
            .delete {
              font-size: 1.5rem;
            }
          }
        }
      }

      .checkOutContainer {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: sticky;
        bottom: 0;
        z-index: 110;
        padding: 1rem 0.5rem;
        height: 14rem;
        box-shadow: 0px -2px 5px 3px #cac8c8;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        width: 100%;

        cursor: pointer;
        .top {
          width: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          .shipping {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            font-size: 1.2rem;
            margin-bottom: 1rem;
            width: 96%;
            border-bottom: 0.5px solid gray;
          }
          .total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.3rem;
            font-weight: 500;
            width: 95%;
            border-bottom: 0.5px solid gray;
          }
        }
        .checkOutDiv {
          width: 7rem;
          height: 2.5rem;
          position: relative;
          border-radius: 5rem;
          .blockLink {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 5rem;
            top: 0;
            left: 0;
            background-color: transparent;
            z-index: 99;
          }
          .checkout {
            width: 100%;
            height: 100%;
            background-color: #1f1e1e;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #f9f5f5;
            border-radius: 5rem;
            font-size: 0.9rem;
            &:hover {
              background-color: #323232;

              font-size: 1rem;
              border: 2px solid #393838;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    .cartBody {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 54.5rem;
      width: 100%;
      .innerCartBody {
        padding: 1rem;
        height: 100%;
        width: 100%;

        .topCart {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 0.5rem;
          .leftSide {
            h1 {
              font-size: 1.8rem;
            }
            .numberOfItens {
              margin-top: 0rem;
              margin-left: 0rem;
              font-size: 1.3rem;
              display: flex;
              p {
              }
            }
          }
          .rightSide {
            height: 4rem;
            position: relative;
            .warningNoUser {
              background-color: #a70303e2;
              height: fit-content;
              padding: 0.1rem 0.4rem;
              border-radius: 1rem;
              margin-top: 2.5rem;
              p {
                color: white;
                font-size: 0.7rem;
              }
            }
            #closeBtnNav {
              position: absolute;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 3rem;
              width: 3rem;
              top: -0.5rem;
              right: -0.5rem;
              .close-icon {
                color: #af0303;
                font-size: 1.8rem;
              }
            }
          }
        }

        .prodInCart {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 14rem;
          width: 100%;

          .left {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 72%;
            height: 100%;
            margin-right: 0;

            img {
              width: 50%;
            }
            .info {
              min-width: 8rem;
              display: flex;
              flex-direction: column;
              align-items: left;
              justify-content: center;
              h3 {
                font-size: 1.2rem;
                font-weight: 600;
              }
              p {
                margin-top: 0.4rem;
                font-size: 1rem;
                font-weight: 400;
                color: #343434;
              }
              .buttonContainer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 1rem;
                .btn {
                  width: 3rem;
                  height: 3rem;
                  border-radius: 50%;
                  border: 1px solid gray;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 1.9rem;
                  font-weight: 200;
                  cursor: pointer;
                  &:hover {
                    background-color: #efeded;
                    border: none;
                  }
                }
                .qtd {
                  font-size: 1.5rem;
                  font-weight: 300;
                }
              }
            }
          }
          .right {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            width: 28%;
            .price {
              font-size: 1.4rem;
              font-weight: 300;
            }
            .deleteContainer {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 4rem;
              height: 4rem;
              cursor: pointer;
            }
            .delete {
              font-size: 1.5rem;
            }
          }
        }
      }

      .checkOutContainer {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: sticky;
        bottom: 0;
        z-index: 110;
        padding: 1rem 0.5rem;
        height: 14rem;
        box-shadow: 0px -2px 5px 3px #cac8c8;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        width: 100%;

        cursor: pointer;
        .top {
          width: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          .shipping {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            font-size: 1.2rem;
            margin-bottom: 1rem;
            width: 96%;
            border-bottom: 0.5px solid gray;
          }
          .total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.3rem;
            font-weight: 500;
            width: 95%;
            border-bottom: 0.5px solid gray;
          }
        }
        .checkOutDiv {
          width: 8rem;
          height: 2.5rem;
          position: relative;
          border-radius: 5rem;
          margin-bottom: 1rem;
          .blockLink {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 5rem;
            top: 0;
            left: 0;
            background-color: transparent;
            z-index: 99;
          }
          .checkout {
            width: 100%;
            height: 100%;
            background-color: #1e1f1e;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #f9f5f5;
            border-radius: 5rem;
            margin-top: 1rem;
            font-size: 0.9rem;
            &:hover {
              background-color: #323232;
              font-size: 1.2rem;
              border: 2px solid #393838;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    .cartBody {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 54.5rem;
      width: 100%;

      .innerCartBody {
        padding: 0.3rem;
        height: 100%;
        width: 100%;

        .topCart {
          display: flex;
          padding: 0 0.5rem;
          justify-content: space-between;
          align-items: center;

          .leftSide {
            h1 {
              font-size: 1.5rem;
            }
            .numberOfItens {
              margin-top: 0rem;
              margin-left: 0rem;
              font-size: 1.5rem;
              display: flex;
              p {
              }
            }
          }
          .rightSide {
            height: 4rem;
            position: relative;
            .warningNoUser {
              background-color: #a70303e2;
              height: fit-content;
              padding: 0.1rem 0.4rem;
              border-radius: 1rem;
              margin-top: 2.5rem;
              p {
                color: whit;
                font-size: 0.7rem;
              }
            }
            #closeBtnNav {
              position: absolute;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 3rem;
              width: 3rem;
              top: -0.5rem;
              right: -0.5rem;
              .close-icon {
                color: #af0303;
                font-size: 1.9rem;
              }
            }
          }
        }

        .prodInCart {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 14rem;
          width: 100%;

          .left {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 72%;
            height: 100%;
            margin-right: 0;

            img {
              width: 50%;
            }
            .info {
              min-width: 8rem;
              display: flex;
              flex-direction: column;
              align-items: left;
              justify-content: center;
              h3 {
                font-size: 1.2rem;
                font-weight: 600;
              }
              p {
                margin-top: 0.4rem;
                font-size: 1rem;
                font-weight: 400;
                color: #343434;
              }
              .buttonContainer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 1rem;
                .btn {
                  width: 3rem;
                  height: 3rem;
                  border-radius: 50%;
                  border: 1px solid gray;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 1.9rem;
                  font-weight: 200;
                  cursor: pointer;
                  &:hover {
                    background-color: #efeded;
                    border: none;
                  }
                }
                .qtd {
                  font-size: 1.5rem;
                  font-weight: 300;
                }
              }
            }
          }
          .right {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            width: 28%;
            .price {
              font-size: 1.4rem;
              font-weight: 300;
            }
            .deleteContainer {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 4rem;
              height: 4rem;
              cursor: pointer;
            }
            .delete {
              font-size: 1.5rem;
            }
          }
        }
      }

      .checkOutContainer {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: sticky;
        bottom: 0;
        z-index: 110;
        padding: 1rem 0.5rem;
        height: 14rem;
        box-shadow: 0px -2px 5px 3px #cac8c8;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        width: 100%;
        cursor: pointer;
        .top {
          width: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          .shipping {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            font-size: 1.2rem;
            margin-bottom: 1rem;
            width: 96%;
            border-bottom: 0.5px solid gray;
          }
          .total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.3rem;
            font-weight: 500;
            width: 95%;
            border-bottom: 0.5px solid gray;
          }
        }
        .checkOutDiv {
          width: 10rem;
          height: 3rem;
          position: relative;
          border-radius: 5rem;
          margin-bottom: 1rem;
          .blockLink {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 5rem;
            top: 0;
            left: 0;
            background-color: transparent;
            z-index: 99;
          }
          .checkout {
            width: 100%;
            height: 100%;
            background-color: #1f1e1e;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #f9f5f5;
            border-radius: 5rem;
            margin-top: 1rem;
            &:hover {
              background-color: #323232;

              font-size: 1.2rem;
              border: 2px solid #393838;
            }
          }
        }
      }
    }
  }
`;
export default Cart;
