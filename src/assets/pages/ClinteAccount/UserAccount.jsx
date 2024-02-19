import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UserAccount = () => {
  return (
    <Wrapper>
      <main>
        <div className="topText">
          <h1>Hello</h1>
          <p>
            Stay one step ahead. Here you can easily manage your account, track orders, return items and talk to our Happiness <br />
            Delivery team.
          </p>
        </div>
        <div className="container">
          <h4>Your Orders</h4>
          <p>
            First time making an order? Here's a good place to start. <Link to={"/ShoesPage"}> Shop Now.</Link>
          </p>
        </div>
        <div className="container">
          <h4>Your Cyclon</h4>
          <p>
            Manage your <Link to={"/featured"}>Cyclon™</Link> subscription and stay in the loop.
          </p>
        </div>
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 0 0.5rem;
  padding: 0 3rem;
  .topText {
    margin-bottom: 2rem;
    width: 50vw;
    h1 {
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.3rem;
      font-weight: 400;
      width: 100%;
      line-height: 3rem;
    }
  }
  .container {
    margin-bottom: 3rem;
    h4 {
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }
    p {
      font-size: 1.4rem;
      font-weight: 300;
      color: #313030;
      margin-bottom: 2.5rem;
      a {
        color: black;
        font-weight: 500;
        text-decoration: underline;
      }
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) {
    margin: 0rem;
    padding: 0.4rem;
    .topText {
      margin-bottom: 1rem;
      width: 97vw;

      h1 {
        font-size: 0.9rem;
        font-weight: 500;
        margin-bottom: 1rem;
      }
      p {
        font-size: 0.9rem;
        font-weight: 300;
        width: 100%;
        line-height: 1.4rem;
      }
    }
    .container {
      margin-bottom: 2rem;
      h4 {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 1.1rem;
      }
      p {
        font-size: 1.1rem;
        font-weight: 300;
        color: #313030;
        margin-bottom: 2.5rem;
        a {
          color: black;
          font-weight: 500;
          text-decoration: underline;
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) {
    .topText {
      margin-bottom: 2rem;
      width: 97vw;
      h1 {
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 2rem;
      }
      p {
        font-size: 1rem;
        font-weight: 300;
        width: 100%;
        line-height: 2rem;
      }
    }
    .container {
      margin-bottom: 3rem;
      h4 {
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
      }
      p {
        font-size: 1.1rem;
        font-weight: 300;
        color: #313030;
        margin-bottom: 2.5rem;
        a {
          color: black;
          font-weight: 500;
          text-decoration: underline;
        }
      }
    }
  }
`;
export default UserAccount;
