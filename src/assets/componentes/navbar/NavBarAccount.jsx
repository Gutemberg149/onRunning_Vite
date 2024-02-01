import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../contexts/UserAuthContext";
import { IoIosCloseCircle } from "react-icons/io";
import { OpensignUpContext } from "../../contexts/OpenSigUpContext";

const NavBarAccount = () => {
  const { user, logOut } = useUserAuth();

  //the code capture the name set in localStore in the UserAuthContext file ,then user only the first word in case the user has signed with name and family name, then send the reult to line 18.
  let localStorageUserName = JSON.parse(localStorage.getItem("localStorageUserName")) || [];
  let UserNameTrimmed = "";
  if (localStorageUserName.length > 0) {
    UserNameTrimmed = localStorageUserName.split(" ")[0];
  }

  const { setTogglevisibilitySignUp } = useContext(OpensignUpContext);

  return (
    <Wrapper>
      <header>
        <div className="left">
          <h3>Hello {UserNameTrimmed}</h3>
          <p>Welcome to your account.</p>
          <Link to={"/account"} onMouseEnter={() => setTogglevisibilitySignUp(true)} onMouseLeave={() => setTogglevisibilitySignUp(false)}>
            <p>View Your Profile and Orders.</p>
          </Link>
        </div>

        <div id="closeBtnNav" onMouseEnter={() => setTogglevisibilitySignUp(false)} onMouseLeave={() => setTogglevisibilitySignUp(true)}>
          <IoIosCloseCircle className="close-icon" />
        </div>
      </header>
      <main>
        <h5>Your details</h5>
        <p className="pTag">EMAIL</p>
        <p className="pData">{user && user.email}</p>
      </main>
      <div className="btnsContainer">
        <button className="btnBottom checkout" onClick={logOut}>
          Log out
        </button>
        <Link to={"/account"}>
          <button className="btnBottom yourAccount">Your Acount</button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  header {
    display: flex;
    justify-content: space-between;
    .left {
      h3 {
        font-size: 3rem;
        font-weight: 400;
        color: #3a3939;
      }
      p {
        font-size: 2.3rem;
        font-weight: 400;
        color: #3a3939;
      }
      a {
        text-decoration: underline;
      }
    }

    #closeBtnNav {
      display: none;
    }
  }
  main {
    height: 55%;
    h5 {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 2rem;
    }
    .pTag {
      font-size: 1.2rem;
      font-weight: 400;
      color: #969595;
      margin-bottom: 0.5rem;
      letter-spacing: 0.2rem;
    }
    .pData {
      font-size: 1.2rem;
      font-weight: 300;
      color: #242323;
      margin-bottom: 1rem;
    }
  }
  .btnsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    .btnBottom {
      width: 20rem;
      height: 5rem;
      background-color: white;
      border: none;
      border: 2px solid black;
      margin: 0 2rem;
      border-radius: 3rem;
      font-size: 1.5rem;
      cursor: pointer;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 100%;

    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      .left {
        h3 {
          font-size: 1.5rem;
          font-weight: 500;
          color: #3a3939;
          margin-top: 2rem;
        }
        p {
          font-size: 1.2rem;
          font-weight: 400;
          color: #3a3939;
        }
        a {
          text-decoration: underline;
        }
      }
      #closeBtnNav {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        width: 3rem;
        margin-left: 1rem;
        .close-icon {
          color: #af0303;
          font-size: 1.8rem;
        }
      }
    }
    main {
      height: 55%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      font-size h5 {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 1rem;
      }
      .pTag {
        font-size: 1.2rem;
        font-weight: 400;
        color: #969595;
        letter-spacing: 0.2rem;
      }
      .pData {
        font-size: 1.2rem;
        font-weight: 300;
        color: #242323;
        margin-bottom: 3rem;
      }
    }
    .btnsContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      .btnBottom {
        width: 45vw;
        height: 3rem;
        background-color: white;
        border: none;
        border: 2px solid black;
        margin: 0 0.5rem;
        border-radius: 2rem;
        font-size: 1.2rem;
        cursor: pointer;
        &:hover {
          background-color: black;
          color: white;
        }
      }
    }
  }

  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 1rem;

    header {
      .left {
        h3 {
          font-size: 1.7rem;
          font-weight: 500;
          color: #3a3939;
          margin-top: 2rem;
        }
        p {
          font-size: 1.2rem;
          font-weight: 400;
          color: #3a3939;
        }
        a {
          text-decoration: underline;
        }
      }
      #closeBtnNav {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        width: 3rem;
        margin-left: 1rem;
        .close-icon {
          color: #af0303;
          font-size: 2rem;
        }
      }
    }
    main {
      height: 55%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      h5 {
        font-size: 1.6rem;
        font-weight: 400;
        margin-bottom: 0.8rem;
      }
      .pTag {
        font-size: 1.2rem;
        font-weight: 400;
        color: #969595;
        letter-spacing: 0.2rem;
      }
      .pData {
        font-size: 1.2rem;
        font-weight: 300;
        color: #242323;
        margin-bottom: 2rem;
      }
    }
    .btnsContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      .btnBottom {
        width: 20vw;
        height: 2.5rem;
        background-color: white;
        border: none;
        border: 2px solid black;
        margin: 0 1rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        cursor: pointer;
        &:hover {
          background-color: black;
          color: white;
        }
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 1rem;

    header {
      .left {
        h3 {
          font-size: 2rem;
          font-weight: 500;
          color: #3a3939;
          margin-top: 2rem;
        }
        p {
          font-size: 1.3rem;
          font-weight: 400;
          color: #3a3939;
        }
        a {
          text-decoration: underline;
        }
      }
      #closeBtnNav {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        width: 3rem;
        margin-left: 1rem;
        .close-icon {
          color: #af0303;
          font-size: 2.1rem;
        }
      }
    }
    main {
      height: 55%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      h5 {
        font-size: 1.6rem;
        font-weight: 400;
        margin-bottom: 0.8rem;
      }
      .pTag {
        font-size: 1.2rem;
        font-weight: 400;
        color: #969595;
        letter-spacing: 0.2rem;
      }
      .pData {
        font-size: 1.2rem;
        font-weight: 300;
        color: #242323;
        margin-bottom: 2rem;
      }
    }
    .btnsContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      .btnBottom {
        width: 9rem;
        height: 3rem;
        background-color: white;
        border: none;
        border: 2px solid black;
        margin: 0 1rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        cursor: pointer;
        &:hover {
          background-color: black;
          color: white;
        }
      }
    }
  }
`;
export default NavBarAccount;
