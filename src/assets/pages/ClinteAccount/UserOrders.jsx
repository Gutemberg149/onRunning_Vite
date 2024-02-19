import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserOrders = () => {
  return (
    <Wrapper>
      <h4>Your Orders</h4>
      <p className="p1">Any On gear you've bought online will appear here.</p>
      <p className="p2">You currently don't have any purchases. We can help with that.</p>
      <Link to={"/ShoesPage"}>
        <button>Start Shopping</button>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 0 4rem;
  h4 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 3rem;
  }
  .p1 {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 5rem;
  }
  .p2 {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 3rem;
    width: 40rem;
  }
  button {
    width: 10rem;
    height: 3.5rem;
    background-color: black;
    border: none;
    border-radius: 3rem;
    color: white;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 6rem;
    cursor: pointer;
    &:hover {
      background-color: #272626;
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) {
    margin: 0.5rem;

    h4 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    .p1 {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    .p2 {
      font-size: 0.9rem;
      width: 100%;
    }
    button {
      width: 5rem;
      height: 2.5rem;
      background-color: black;
      border: none;
      border-radius: 3rem;
      color: white;
      font-size: 0.6rem;
      font-weight: 400;
      margin-bottom: 2rem;
      cursor: pointer;
      &:hover {
        background-color: #272626;
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) {
    margin: 0.5rem;

    h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    .p1 {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
    .p2 {
      font-size: 1.1rem;
      width: 100%;
    }
    button {
      width: 8rem;
      height: 3rem;
      background-color: black;
      border: none;
      border-radius: 3rem;
      color: white;
      font-size: 0.9rem;
      font-weight: 400;
      margin-bottom: 2rem;
      cursor: pointer;
      &:hover {
        background-color: #272626;
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) {
    margin: 0.5rem;
    h4 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    .p1 {
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
    .p2 {
      font-size: 1.2rem;
      width: 100%;
    }
    button {
      width: 10rem;
      height: 3.2rem;
      background-color: black;
      border: none;
      border-radius: 3rem;
      color: white;
      font-size: 1.1rem;
      font-weight: 400;
      margin-bottom: 2rem;
      cursor: pointer;
      &:hover {
        background-color: #272626;
      }
    }
  }
`;
export default UserOrders;
