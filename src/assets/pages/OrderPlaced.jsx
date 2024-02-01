import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import logo from "../images/logoImg/logo.jpeg";
import { Link } from "react-router-dom";
import Navbar from "../componentes/navbar/Navbar";
import Footer from "../componentes/footer/Footer";
import { CheckingCardContext } from "../contexts/CheckCartContext";
const OrderPlaced = () => {
  // This usedContext  bellow is necessary bcs the "checkCard" is been used in OrderPlaced page to reload the page and clear the Cart. Before that, despite the localstorage has been cleared as the Paymentent is complited, the cart would not automatically clear.
  const { checkCard } = useContext(CheckingCardContext);

  useEffect(() => {
    if (checkCard === true) {
      window.location.reload();
    }
  }, [checkCard]);
  return (
    <Wrapper>
      <nav>
        <Navbar />
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>
      </nav>
      <main>
        <h1>Thank you for your order</h1>
        <p>Your order has been placed and is being processed. You will receive an email with the order details.</p>
        <Link to={"/"}>
          <span>Back to home page</span>
        </Link>
      </main>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  nav {
    padding: 0 4rem;
    .logo {
      width: 5.25rem;
      margin: 2.55rem 3.75rem;
      border-radius: 50%;
    }
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    padding-top: 3rem;
    h1 {
      font-size: 4rem;
      color: #262525;
      margin-bottom: 5rem;
    }
    p {
      font-size: 2rem;
      color: #262525;
      margin-bottom: 6rem;
    }
    a {
      font-size: 1.5rem;
      text-decoration: underline;
      color: #ff5100;
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 1.5rem;
      padding: 0rem;
      .logo {
        width: 3.25rem;
        margin: 2.55rem 2.75rem;
      }
    }
    main {
      padding: 0.5rem;
      height: 50vh;
      h1 {
        width: 100%;
        font-size: 1.5rem;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        margin-bottom: 2rem;
      }
      a {
        font-size: 1.2rem;
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;
      padding: 0rem;
      .logo {
        width: 3.25rem;
        margin: 2.55rem 2.75rem;
      }
    }
    main {
      padding: 0.5rem;
      height: 50vh;
      h1 {
        width: 100%;
        font-size: 1.7rem;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        margin-bottom: 2rem;
      }
      a {
        font-size: 1.2rem;
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;
      padding: 0rem;
      .logo {
        width: 3.25rem;
        margin: 2.55rem 2.75rem;
      }
    }
    main {
      padding: 0.5rem;
      height: 50vh;
      h1 {
        width: 100%;
        font-size: 1.7rem;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        margin-bottom: 2rem;
      }
      a {
        font-size: 1.2rem;
      }
    }
  }
`;
export default OrderPlaced;
