import styled from "styled-components";
import logo from "../../images/logoImg/logowhite.png";
import mountain2 from "../../images/orderStatus/mountain2.avif";
import { Link } from "react-router-dom";
import Order from "./order/Order";
import Returns from "./returns/Returns";
import Shipping from "./shipping/Shipping";
import ProductInfo from "./info/ProductInfo";
import Sustainability from "./sustainability/Sustainability";
import Cyclon from "./cyclon/Cyclon";
import Security from "./securityandprivacy/ArraySecurity ";
import Accessibility from "./accessibility/Accessibility";
import TermsAndCondition from "./termsAndCondition/TermsAndCondition";
import { useState } from "react";
import Order_ReturnTracker from "./Order_ReturnTracker";
import ReturnExchangeForm from "./return _exchange_form/ReturnExchangeForm";
import Footer from "../../componentes/footer/Footer";
import { useBcg } from "../../contexts/OrdeStausContext";

const Orderstatus = () => {
  const [returnData, setReturnData] = useState(false);
  const { state, dispatch, trackerData, setTrackerData } = useBcg(); //useContext was used here so it can be called in this page and also in footer's page (full explanation in OrderstausContext's page).

  //this functions are fro when the buttons in sec1 be called, one box closes and the other opens.
  const handleTracker = () => {
    setTrackerData(true);
    setReturnData(false);
  };
  const handleReturn = () => {
    setTrackerData(false);
    setReturnData(true);
  };

  return (
    <Wrapper>
      <div className="topMessage">
        <p>If your Tracking number is like MISSING_1, don’t worry. We are still waiting for the Correios to provide your tracking code.</p>
      </div>

      <section className="sec1">
        <nav>
          <Link to={"/"}>
            <img src={logo} alt="" className="logo" />
          </Link>
          <Link to={"/"}>
            <button className="homeBtn">Back to homepage</button>
          </Link>
        </nav>

        <div className="contaText">
          <p className="topText">
            <Link to={"/"}>HOME</Link> * HELP CENTER
          </p>
          <h3>How can we help you?</h3>
          <div className="btns">
            <button className="btn btn1" onClick={() => handleTracker()}>
              Looking fro your order?
            </button>
            <button className="btn btn2" onClick={() => handleReturn()}>
              Need to return a product?
            </button>
            <Link to={"/stores"}>
              <button className="btn btn3">Where to buy</button>
            </Link>
          </div>
        </div>
      </section>

      <main>
        <section className="sec2">
          <div className="leftList">
            <ul>
              <li
                onClick={() => dispatch({ type: "li1" }, setTrackerData(false), setReturnData(false))}
                className={state.Li1 === "Li1" ? "orange" : "liBcgDynamic"}
              >
                Orders
              </li>
              <li
                onClick={() => dispatch({ type: "li2" }, setTrackerData(false), setReturnData(false))}
                className={state.Li2 === "Li2" ? "orange" : "liBcgDynamic"}
              >
                Returns and exchanges
              </li>
              <li
                onClick={() => dispatch({ type: "li3" }, setTrackerData(false), setReturnData(false))}
                className={state.Li3 === "Li3" ? "orange" : "liBcgDynamic"}
              >
                Shipping
              </li>
              <li
                onClick={() => dispatch({ type: "li4" }, setTrackerData(false), setReturnData(false))}
                className={state.Li4 === "Li4" ? "orange" : "liBcgDynamic"}
              >
                Product info
              </li>

              <li
                onClick={() => dispatch({ type: "li5" }, setTrackerData(false), setReturnData(false))}
                className={state.Li5 === "Li5" ? "orange" : "liBcgDynamic"}
              >
                Sustainability
              </li>
              <li
                onClick={() => dispatch({ type: "li6" }, setTrackerData(false), setReturnData(false))}
                className={state.Li6 === "Li6" ? "orange" : "liBcgDynamic"}
              >
                Cyclon™
              </li>

              <li
                onClick={() => dispatch({ type: "li7" }, setTrackerData(false), setReturnData(false))}
                className={state.Li7 === "Li7" ? "orange" : "liBcgDynamic"}
              >
                Security and privacy
              </li>
              <li
                onClick={() => dispatch({ type: "li8" }, setTrackerData(false), setReturnData(false))}
                className={state.Li8 === "Li8" ? "orange" : "liBcgDynamic"}
              >
                Accessibility
              </li>
              <li
                onClick={() => dispatch({ type: "li9" }, setTrackerData(false), setReturnData(false))}
                className={state.Li9 === "Li9" ? "orange" : "liBcgDynamic"}
              >
                Terms and conditions
              </li>
            </ul>
          </div>
          {trackerData ? (
            <Order_ReturnTracker />
          ) : returnData ? (
            <ReturnExchangeForm />
          ) : (
            <div className="RightInfo">
              {state.Li1 === "Li1" && <Order />}
              {state.Li2 === "Li2" && <Returns />}
              {state.Li3 === "Li3" && <Shipping />}
              {state.Li4 === "Li4" && <ProductInfo />}
              {state.Li5 === "Li5" && <Sustainability />}
              {state.Li6 === "Li6" && <Cyclon />}
              {state.Li7 === "Li7" && <Security />}
              {state.Li8 === "Li8" && <Accessibility />}
              {state.Li9 === "Li9" && <TermsAndCondition />}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .topMessage {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #22826aeb;
    height: 3rem;
    color: #f2f2f2;
  }

  .sec1 {
    position: relative;
    background-image: url(${mountain2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50rem;
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 5rem;
      .logo {
        mix-blend-mode: darken;
        width: 6.25rem;
        margin: 1.25rem 3.75rem;
        width: 7rem;
        z-index: 96;
        cursor: pointer;
      }
      .homeBtn {
        width: 12rem;
        height: 3.5rem;
        border: white 4px solid;
        color: white;
        background-color: transparent;
        border-radius: 3rem;
        font-size: 1.1rem;
        cursor: pointer;

        &:hover {
          background-color: #ffffff35;
        }
      }
    }
    .contaText {
      height: 85%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10rem;
      z-index: 96;

      .topText {
        width: 60rem;
        font-size: 1.6rem;
        font-weight: 300;
        letter-spacing: 4px;
        color: white;
        z-index: 96;
        a {
          color: white;
          font-weight: 600;
        }
      }
      h3 {
        font-size: 4rem;
        color: white;
        z-index: 96;
        margin-bottom: 3rem;
      }
      .btns {
        .btn {
          width: 22rem;
          height: 5rem;
          background-color: #000000e1;
          border: none;
          color: white;
          margin-right: 1rem;
          border-radius: 5rem;
          font-size: 1.2rem;
          cursor: pointer;

          &:hover {
            background-color: #000000b5;
          }
        }
      }
    }
  }
  main {
    .sec2 {
      height: auto;
      display: flex;
      padding: 10rem;
      background-color: #f8f6f6;
      .leftList {
        margin-right: 1.5rem;
        background-color: white;
        width: 45%;
        height: 50rem;
        display: flex;
        padding-left: 1.5rem;
        border-radius: 1em;
        box-shadow: rgba(149, 157, 165, 0.064) 0px 8px 24px;
        ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .liBcgDynamic {
            width: fit-content;
            height: fit-content;
            font-size: 1.8rem;
            font-weight: 400;
            margin-bottom: 2rem;
            background: linear-gradient(to right, #ffc250 50%, white 50%);
            background-size: 200% 100%;
            background-position: right bottom;
            padding: 0 1rem;
            border-radius: 2rem;
            transition: all 0.5s ease-out;

            cursor: pointer;
            &:hover {
              background-position: left bottom;
            }
          }
          .orange {
            width: fit-content;
            padding: 0 1rem;
            border-radius: 2rem;
            height: fit-content;
            font-size: 2rem;
            font-weight: 400;
            margin-bottom: 1.5rem;
            background: #ffc250;
            background-size: 200% 100%;
            background-position: right bottom;
            transition: all 0.5s ease-out;
            cursor: pointer;
          }
        }
      }
      .RightInfo {
        background-color: #f8f6f6;
        border-radius: 1em;
        width: 55%;
        padding: 0 0.5rem;
      }
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    .topMessage {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #22826aeb;
      height: 3rem;
      color: #f2f2f2;
      padding: 0.2rem;
      p {
        font-size: 0.5rem;
      }
    }

    .sec1 {
      position: relative;
      background-image: url(${mountain2});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 55vh;
      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        margin-bottom: 0rem;
        .logo {
          mix-blend-mode: darken;
          width: 2.5rem;
          margin: 0.8rem 0rem 0rem 0rem;
          z-index: 96;
          cursor: pointer;
        }
        .homeBtn {
          width: 4rem;
          height: 2rem;
          border: white 1px solid;
          color: white;
          background-color: transparent;
          border-radius: 3rem;
          font-size: 0.4rem;
          cursor: pointer;

          &:hover {
            background-color: #ffffff35;
          }
        }
      }
      .contaText {
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        padding-left: 1rem;
        z-index: 96;
        margin-top: 0rem;

        .topText {
          width: 50vh;
          font-size: 0.6rem;
          font-weight: 300;
          letter-spacing: 4px;
          color: white;
          z-index: 96;

          a {
            color: white;
            font-weight: 500;
          }
        }
        h3 {
          font-size: 1.2rem;
          color: white;
          z-index: 96;
          margin-bottom: 0.5rem;
        }
        .btns {
          display: flex;
          flex-direction: column;

          .btn {
            width: 10rem;
            height: 2.5rem;
            background-color: #000000e1;
            border: none;
            color: white;
            margin-bottom: 0.6rem;
            border-radius: 5rem;
            font-size: 0.7rem;

            cursor: pointer;

            &:hover {
              background-color: #000000b5;
            }
          }
        }
      }
    }
    main {
      .sec2 {
        height: auto;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background-color: #f8f6f6;
        .leftList {
          margin-right: 0rem;
          background-color: white;
          width: 99%;
          height: 62vh;
          display: flex;
          padding: 0 0.4rem;
          border-radius: 1em;
          box-shadow: rgba(149, 157, 165, 0.064) 0px 8px 24px;
          ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .liBcgDynamic {
              width: fit-content;
              height: fit-content;
              font-size: 0.8rem;
              font-weight: 400;
              margin-bottom: 0.8rem;
              background: linear-gradient(to right, #ffc250 50%, white 50%);
              background-size: 200% 100%;
              background-position: right bottom;
              transition: all 0.5s ease-out;
              cursor: pointer;
              &:hover {
                background-position: left bottom;
              }
            }
            .orange {
              width: fit-content;
              height: fit-content;
              font-size: 0.8rem;
              font-weight: 400;
              margin-bottom: 1.5rem;
              background: #ffc250;
              background-size: 200% 100%;
              background-position: right bottom;
              transition: all 0.5s ease-out;
              cursor: pointer;
            }
          }
        }
        .RightInfo {
          background-color: #f8f6f6;
          border-radius: 1em;
          width: 100%;
          padding: 0 0.5rem;
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    .topMessage {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #22826aeb;
      height: 3rem;
      color: #f2f2f2;
      padding: 0.2rem;
      p {
        font-size: 0.7rem;
      }
    }

    .sec1 {
      position: relative;
      background-image: url(${mountain2});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 55vh;
      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        margin-bottom: 1rem;
        .logo {
          mix-blend-mode: darken;
          width: 3rem;
          margin: 0.8rem 0rem 0rem 0rem;
          z-index: 96;
          cursor: pointer;
        }
        .homeBtn {
          width: 8rem;
          height: 2rem;
          border: white 2px solid;
          color: white;
          background-color: transparent;
          border-radius: 3rem;
          font-size: 0.8rem;
          cursor: pointer;

          &:hover {
            background-color: #ffffff35;
          }
        }
      }
      .contaText {
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        padding-left: 1rem;
        z-index: 96;
        margin-top: 0rem;

        .topText {
          width: 50vh;
          font-size: 0.8rem;
          font-weight: 300;
          letter-spacing: 4px;
          color: white;
          z-index: 96;

          a {
            color: white;
            font-weight: 500;
          }
        }
        h3 {
          font-size: 1.5rem;
          color: white;
          z-index: 96;
          margin-bottom: 0.5rem;
        }
        .btns {
          display: flex;
          flex-direction: column;

          .btn {
            width: 12rem;
            height: 3rem;
            background-color: #000000e1;
            border: none;
            color: white;
            margin-bottom: 0.6rem;
            border-radius: 5rem;
            font-size: 0.9rem;

            cursor: pointer;

            &:hover {
              background-color: #000000b5;
            }
          }
        }
      }
    }
    main {
      .sec2 {
        height: auto;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background-color: #f8f6f6;
        .leftList {
          margin-right: 0rem;
          background-color: white;
          width: 90%;
          height: 80vh;
          display: flex;
          padding-left: 1rem;
          border-radius: 1em;
          box-shadow: rgba(149, 157, 165, 0.064) 0px 8px 24px;
          ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .liBcgDynamic {
              width: fit-content;
              height: fit-content;
              font-size: 1.2rem;
              font-weight: 400;
              margin-bottom: 1rem;
              background: linear-gradient(to right, #ffc250 50%, white 50%);
              background-size: 200% 100%;
              background-position: right bottom;
              transition: all 0.5s ease-out;
              cursor: pointer;
              &:hover {
                background-position: left bottom;
              }
            }
            .orange {
              width: fit-content;
              height: fit-content;
              font-size: 1.3rem;
              font-weight: 400;
              margin-bottom: 1.5rem;
              background: #ffc250;
              background-size: 200% 100%;
              background-position: right bottom;
              transition: all 0.5s ease-out;
              cursor: pointer;
            }
          }
        }
        .RightInfo {
          background-color: #f8f6f6;
          border-radius: 1em;
          width: 100%;
          padding: 0 0.5rem;
        }
      }
    }
  }

  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    .topMessage {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #22826aeb;
      height: 4rem;
      color: #f2f2f2;
      padding: 0.2rem;
      p {
        font-size: 0.8rem;
      }
    }

    .sec1 {
      position: relative;
      background-image: url(${mountain2});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 55vh;
      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        .logo {
          mix-blend-mode: darken;
          width: 4rem;
          margin: 0.8rem 0rem 0rem 0rem;
          z-index: 96;
          cursor: pointer;
        }
        .homeBtn {
          width: 9rem;
          height: 2.5rem;
          border: white 2px solid;
          color: white;
          background-color: transparent;
          border-radius: 3rem;
          font-size: 0.9rem;
          cursor: pointer;

          &:hover {
            background-color: #ffffff35;
          }
        }
      }
      .contaText {
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        padding-left: 1rem;
        z-index: 96;
        margin-top: 0rem;
        .topText {
          width: 50vh;
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: 4px;
          color: white;
          z-index: 96;
          a {
            color: white;
            font-weight: 600;
          }
        }
        h3 {
          font-size: 1.7rem;
          color: white;
          z-index: 96;
          margin-bottom: 0.5rem;
        }
        .btns {
          display: flex;
          flex-direction: column;

          .btn {
            width: 14rem;
            height: 3rem;
            background-color: #000000e1;
            border: none;
            color: white;
            margin-bottom: 0.5rem;
            border-radius: 5rem;
            font-size: 1rem;
            margin-bottom: 0.7rem;
            cursor: pointer;

            &:hover {
              background-color: #000000b5;
            }
          }
        }
      }
    }
    main {
      .sec2 {
        height: auto;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background-color: #f8f6f6;
        .leftList {
          margin-right: 0rem;
          background-color: white;
          width: 90%;
          height: 90vh;
          display: flex;
          padding-left: 1rem;
          border-radius: 1em;
          box-shadow: rgba(149, 157, 165, 0.064) 0px 8px 24px;
          ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .liBcgDynamic {
              width: fit-content;
              height: fit-content;
              font-size: 1.5rem;
              font-weight: 400;
              margin-bottom: 1rem;
              background: linear-gradient(to right, #ffc250 50%, white 50%);
              background-size: 200% 100%;
              background-position: right bottom;
              transition: all 0.5s ease-out;
              cursor: pointer;
              &:hover {
                background-position: left bottom;
              }
            }
            .orange {
              width: fit-content;
              height: fit-content;
              font-size: 1.65rem;
              font-weight: 400;
              margin-bottom: 1.5rem;
              background: #ffc250;
              background-size: 200% 100%;
              background-position: right bottom;
              transition: all 0.5s ease-out;
              cursor: pointer;
            }
          }
        }
        .RightInfo {
          background-color: #f8f6f6;
          border-radius: 1em;
          width: 100%;
          padding: 0 0.5rem;
        }
      }
    }
  }

  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    .topMessage {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #22826aeb;
      height: 3rem;
      color: #f2f2f2;
      padding: 0.1rem;
      p {
        font-size: 0.9rem;
      }
    }

    .sec1 {
      position: relative;
      background-image: url(${mountain2});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 50vh;
      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem;

        .logo {
          mix-blend-mode: darken;
          width: 4rem;
          margin: 0.8rem 0rem 0rem 0rem;
          z-index: 96;
          cursor: pointer;
        }
        .homeBtn {
          width: 9rem;
          height: 2.5rem;
          border: white 2px solid;
          color: white;
          background-color: transparent;
          border-radius: 3rem;
          font-size: 0.9rem;
          cursor: pointer;

          &:hover {
            background-color: #ffffff35;
          }
        }
      }
      .contaText {
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        padding-left: 1rem;
        z-index: 96;
        margin-top: 0rem;
        .topText {
          width: 50vh;
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: 4px;
          color: white;
          z-index: 96;
          a {
            color: white;
            font-weight: 600;
          }
        }
        h3 {
          font-size: 1.5rem;
          color: white;
          z-index: 96;
          margin-bottom: 0rem;
        }
        .btns {
          display: flex;
          margin-top: 1.5rem;
          .btn {
            width: 15rem;
            height: 3.5rem;
            background-color: #000000e1;
            border: none;
            color: white;
            margin-bottom: 0.5rem;
            border-radius: 5rem;
            font-size: 1rem;

            cursor: pointer;

            &:hover {
              background-color: #000000b5;
            }
          }
        }
      }
    }
    main {
      .sec2 {
        height: auto;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background-color: #f8f6f6;
        .leftList {
          margin-right: 0rem;
          background-color: white;
          width: 90%;
          height: 100vh;
          display: flex;
          padding-left: 1rem;
          border-radius: 1em;
          box-shadow: rgba(149, 157, 165, 0.064) 0px 8px 24px;
          ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .liBcgDynamic {
              width: fit-content;
              height: fit-content;
              font-size: 1.8rem;
              font-weight: 400;
              margin-bottom: 1rem;
              background: linear-gradient(to right, #ffc250 50%, white 50%);
              background-size: 200% 100%;
              background-position: right bottom;
              transition: all 0.5s ease-out;
              cursor: pointer;
              &:hover {
                background-position: left bottom;
              }
            }
            .orange {
              width: fit-content;
              height: fit-content;
              font-size: 2rem;
              font-weight: 400;
              margin-bottom: 1.5rem;
              background: #ffc250;
              background-size: 200% 100%;
              background-position: right bottom;
              transition: all 0.5s ease-out;
              cursor: pointer;
            }
          }
        }
        .RightInfo {
          background-color: #f8f6f6;
          border-radius: 1em;
          width: 100%;
          padding: 0 0.5rem;
        }
      }
    }
  }
`;
export default Orderstatus;
