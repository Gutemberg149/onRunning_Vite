import { useReducer, useState } from "react";
import styled from "styled-components";
import Navbar from "../../componentes/navbar/Navbar";
import logo from "../../images/logoImg/logowhite.png";
import { Link } from "react-router-dom";
import Footer from "../../componentes/footer/Footer";
import UserAccount from "./UserAccount";
import UserOrders from "./UserOrders";
import UserProfile from "./UserProfile";
import ReducerAccountBcg from "./ReducerAccountBcg";
import initialState from "./ReducerAccountBcg";

const Account = () => {
  const [state, dispatch] = useReducer(ReducerAccountBcg, initialState);

  return (
    <Wrapper>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>
        <Navbar />
      </nav>

      <div className="menuList">
        <ul>
          <li onClick={() => dispatch({ type: "li1" })} className={state.Li1 === "Li1" ? "orange" : "liBcgDynamic"}>
            Account
          </li>
          <li onClick={() => dispatch({ type: "li2" })} className={state.Li2 === "Li2" ? "orange" : "liBcgDynamic"}>
            Orders
          </li>
          <li onClick={() => dispatch({ type: "li3" })} className={state.Li3 === "Li3" ? "orange" : "liBcgDynamic"}>
            Profile
          </li>
        </ul>
      </div>

      <main>{state.Li1 === "Li1" ? <UserAccount /> : state.Li2 === "Li2" ? <UserOrders /> : <UserProfile />}</main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff8f0;
  width: 100vw;
  nav {
    padding: 0 4rem;
    .logo {
      width: 5.25rem;
      margin: 2.55rem 3.75rem;
      mix-blend-mode: darken;
    }
  }
  .menuList {
    margin: 4rem;
    width: 30rem;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      li {
        font-size: 2rem;
        font-weight: 500;
        cursor: pointer;
      }
      .orange {
        width: fit-content;
        height: fit-content;
        background: #ffc250;
        background-size: 200% 100%;
        background-position: right bottom;
        transition: all 0.3s ease-out;
        cursor: pointer;
      }
      .liBcgDynamic {
        width: fit-content;
        height: fit-content;
        background: linear-gradient(to right, #ffc250 50%, transparent 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        transition: all 0.3s ease-out;
        cursor: pointer;
        &:hover {
          background-position: left bottom;
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) {
    margin: 0rem;
    nav {
      padding: 0rem;
      .logo {
        width: 3.25rem;
        margin: 0;
        margin-top: 4.5rem;
        border-radius: 50%;
      }
    }
    .menuList {
      margin: 1rem;
      width: 90vw;

      ul {
        width: 100%;
        li {
          font-size: 1rem;
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) {
    nav {
      width: 95%;
      padding: 0 0rem;
      .logo {
        width: 4.25rem;
        margin: 0;
        margin-top: 7rem;
        border-radius: 50%;
      }
    }
    .menuList {
      margin: 1rem;
      width: 90vw;

      ul {
        width: 100%;
        li {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
export default Account;
