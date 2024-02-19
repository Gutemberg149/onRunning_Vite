import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { conatctUsContext } from "../../contexts/ContactUsContext";

const MessageSent = () => {
  const { setMessageSent } = useContext(conatctUsContext);
  return (
    <Wrapper>
      <div className="element">
        <h1>Message sent successfully</h1>
        <Link to={"/"}>
          <button onClick={() => setMessageSent(false)}>Back to home</button>
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .element {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40rem;
    width: 36rem;
    background: rgb(0, 0, 0);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    box-shadow: inset -5px 5px 5px 0px rgba(36, 35, 35, 0.514), inset 0px -5px 5px 0px rgba(26, 56, 227, 0.041);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    h1 {
      color: #047f83;
      font-size: 2rem;
      margin-bottom: 4rem;
    }
    button {
      width: 8rem;
      height: 3rem;
      border: none;
      border: 2px solid #06a4a9;
      background-color: transparent;
      border-radius: 1rem;
      font-size: 1rem;
      font-weight: 600;
      color: #047f83;
      cursor: pointer;
      &:hover {
        background-color: #00fbff18;
      }
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100vw;

    .element {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 24rem;
      width: 100%;
      background: black;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      box-shadow: inset -5px 5px 5px 0px rgba(36, 35, 35, 0.514), inset 0px -5px 5px 0px rgba(26, 56, 227, 0.041);

      h1 {
        color: #047f83;
        font-size: 0.8rem;
        margin-bottom: 4rem;
        margin-left: 0;
      }
      button {
        width: 7rem;
        height: 2.5rem;
        border: none;
        border: 2px solid #06a4a9;
        background-color: transparent;
        border-radius: 1rem;
        font-size: 0.8rem;
        font-weight: 600;
        color: #047f83;
        cursor: pointer;
        &:hover {
          background-color: #00fbff18;
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100vw;

    .element {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 29rem;
      width: 100%;
      background: rgb(0, 0, 0);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      box-shadow: inset -5px 5px 5px 0px rgba(36, 35, 35, 0.514), inset 0px -5px 5px 0px rgba(26, 56, 227, 0.041);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      h1 {
        color: #047f83;
        font-size: 1.5rem;
        margin-bottom: 4rem;
      }
      button {
        width: 8rem;
        height: 3rem;
        border: none;
        border: 2px solid #06a4a9;
        background-color: transparent;
        border-radius: 1rem;
        font-size: 1rem;
        font-weight: 600;
        color: #047f83;
        cursor: pointer;
        &:hover {
          background-color: #00fbff18;
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100%;

    .element {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 31rem;
      width: 100%;
      background: rgb(0, 0, 0);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      box-shadow: inset -5px 5px 5px 0px rgba(36, 35, 35, 0.514), inset 0px -5px 5px 0px rgba(26, 56, 227, 0.041);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      h1 {
        color: #047f83;
        font-size: 1.5rem;
        margin-bottom: 4rem;
      }
      button {
        width: 8rem;
        height: 3rem;
        border: none;
        border: 2px solid #06a4a9;
        background-color: transparent;
        border-radius: 1rem;
        font-size: 1rem;
        font-weight: 600;
        color: #047f83;
        cursor: pointer;
        &:hover {
          background-color: #00fbff18;
        }
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1300px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100%;

    .element {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 40rem;
      background: rgb(0, 0, 0);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      box-shadow: inset -5px 5px 5px 0px rgba(36, 35, 35, 0.514), inset 0px -5px 5px 0px rgba(26, 56, 227, 0.041);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      h1 {
        color: #047f83;
        font-size: 1.5rem;
        margin-bottom: 4rem;
      }
      button {
        width: 8rem;
        height: 3rem;
        border: none;
        border: 2px solid #06a4a9;
        background-color: transparent;
        border-radius: 1rem;
        font-size: 1rem;
        font-weight: 600;
        color: #047f83;
        cursor: pointer;
        &:hover {
          background-color: #00fbff18;
        }
      }
    }
  }
`;
export default MessageSent;
