import styled from "styled-components";
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import bandeira from "./bandeira.webp";
import { Link } from "react-router-dom";

import { useBcg } from "../../contexts/OrdeStausContext";
const Footer = () => {
  const { dispatch, setTrackerData } = useBcg(); //useContext was used here so it can be called in this page and also in Orderstatus's page. (full explanation in OrderstausContext's page).

  function OrderAndStatus() {
    dispatch({ type: null });
    setTrackerData(true), setReturnData(false);
  }
  function dispatchLi2() {
    dispatch({ type: "li2" });
    setTrackerData(false), setReturnData(false);
  }
  function dispatchLi3() {
    dispatch({ type: "li3" });
    setTrackerData(false), setReturnData(false);
  }
  function dispatchLi9() {
    dispatch({ type: "li9" });
    setTrackerData(false), setReturnData(false);
  }
  function dispatchLi7() {
    dispatch({ type: "li7" });
    setTrackerData(false), setReturnData(false);
  }
  function dispatchLi8() {
    dispatch({ type: "li8" });
    setTrackerData(false), setReturnData(false);
  }

  return (
    <Wrapper>
      <div className="footerBody">
        <div className="signUpContainer">
          <h3>Sign up now</h3>
          <span>Stay in the loop, with exclusive offers and product previews.</span>
          <div className="bottomContainerSignUp">
            <Link to={"/signUpPage"}>
              <div className="signuP">Sign up here</div>
            </Link>
            <div className="divContact">
              <div className="iconContainer">
                <CiMail className="icon" />
              </div>
              <Link to={"/contactus"}>
                <p>Contact us</p>
              </Link>
            </div>
            <div className="brazil">
              <div className="flag"></div>
              <p>Brazil</p>
            </div>
          </div>
        </div>

        <div className="listOfInfo">
          <div className="footerGeneralInfo">
            <ul>
              <Link to={"/signUpPage"}>
                <li className="strongCaseLi">Join the On community</li>
              </Link>
              <Link to={"/orderstatus"}>
                <li onClick={OrderAndStatus} className="strongCaseLi">
                  Order & return status
                </li>
              </Link>
              <Link to={"/referfriend"}>
                <li className="strongCaseLi">Refer a friend</li>
              </Link>
              <Link to={"/stores"}>
                <li className="strongCaseLi">Stores</li>
              </Link>
            </ul>
          </div>

          <div className="footerGeneralInfo">
            <ul>
              <li className="strongCaseLi">Help & support</li>
              <Link to={"/contactus"}>
                <li>Contact us</li>
              </Link>

              <Link to={"/orderstatus"}>
                <li onClick={dispatchLi2}>Returns & exchanges</li>
              </Link>
              <Link to={"/orderstatus"}>
                <li onClick={dispatchLi3}>Shipping & delivery</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="left">
          <Link to={"/orderstatus"}>
            <p onClick={dispatchLi9}>Terms & conditions</p>
          </Link>
          <Link to={"/orderstatus"}>
            <p onClick={dispatchLi7}>Security & privacy</p>
          </Link>
          <Link to={"/orderstatus"}>
            <p onClick={dispatchLi8}>Accessibility</p>
          </Link>
        </div>
        <div className="socialMedias">
          <a href="https://www.facebook.com/on/" target="_blank">
            <BiLogoFacebook className="socialMediaIcon" />
          </a>
          <a href="https://www.instagram.com/on/" target="_blank">
            <AiOutlineInstagram className="socialMediaIcon" />
          </a>
          <a href="https://www.linkedin.com/company/on-ag/?originalSubdomain=br" target="_blank">
            <FaLinkedinIn className="socialMediaIcon" />
          </a>
          <a href="https://twitter.com/on_running" target="_blank">
            <AiOutlineTwitter className="socialMediaIcon" />
          </a>
          <a href="https://www.youtube.com/on-running" target="_blank">
            <AiFillYoutube className="socialMediaIcon" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  background-color: #131420;

  padding-top: 1rem;
  a {
    color: #c9c8c8;
    cursor: pointer;
  }
  .footerBody {
    width: 100vw;
    padding: 0.5rem;
    display: flex;
    justify-content: space-around;
    .signUpContainer {
      width: 25rem;
      margin-top: 1rem;
      h3 {
        font-size: 1.5rem;
        color: #cfcccc;
      }
      span {
        font-size: 0.9rem;
        color: #cfcccc;
        margin-top: 2rem;
      }
      .bottomContainerSignUp {
        .signuP {
          border: 1px solid #cfcccc;
          border-radius: 0.6rem;
          color: #cfcccc;
          font-size: 0.9rem;
          width: 8rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1rem;
          cursor: pointer;
          &:hover {
            background-color: #cfcccc35;
          }
        }
        .divContact {
          width: 8.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #cfcccc;
          margin-top: 1rem;

          .iconContainer {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            font-size: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #8080803c;
          }
          p {
            font-size: 1rem;
          }
        }
        .brazil {
          width: 5.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
          .flag {
            width: 1.7rem;
            height: 1.7rem;
            border-radius: 50%;
            background-image: url(${bandeira});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
          p {
            font-size: 1rem;
            color: #cfcccc;
          }
        }
      }
    }
    .listOfInfo {
      display: flex;
      margin-right: 3rem;
      width: 50%;
      display: flex;
      justify-content: space-between;

      .footerGeneralInfo {
        display: flex;
        justify-content: space-between;
        color: #cfcccc;
        margin-left: 0rem;

        cursor: pointer;
        ul {
          list-style: none;
          .strongCaseLi {
            font-size: 1.4rem;
            font-weight: 700;
            line-height: 3.3rem;
          }
          li {
            font-size: 1rem;
            line-height: 2.4rem;
            position: relative;
            width: fit-content;
            &::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 0.125rem;
              background-color: #cfcccc;
              bottom: 0.625rem;
              left: 0;
              transform: scaleX(0);
              transform-origin: bottom left;
              transition: all 0.4s ease-in;
            }
            &:hover::after {
              transform: scaleX(1);
              transform-origin: bottom left;
            }
          }
        }
      }
    }
    .footerGeneralInfo {
      display: flex;
      justify-content: space-between;
      color: #cfcccc;
      margin-left: 9.375rem;
      cursor: pointer;
      ul {
        list-style: none;
        .strongCaseLi {
          font-size: 1.9rem;
          font-weight: 700;
          line-height: 3.75rem;
        }
        li {
          font-size: 1rem;
          line-height: 3.125rem;
          position: relative;
          width: fit-content;
          &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 0.125rem;
            background-color: #cfcccc;
            bottom: 0.625rem;
            left: 0;
            transform: scaleX(0);
            transform-origin: bottom left;
            transition: all 0.4s ease-in;
          }
          &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }
      }
    }
  }
  .footerBottom {
    display: flex;
    justify-content: space-between;
    align-items: top;
    height: 7rem;
    padding: 2rem 4.5rem;
    color: #f0efef;

    .left {
      display: flex;
      justify-content: space-around;
      p {
        font-size: 1rem;
        color: #9c9a9a;
        margin-right: 1.8rem;
        cursor: pointer;
        &:hover {
          color: white;
        }
      }
    }
    .socialMedias {
      display: flex;

      .socialMediaIcon {
        font-size: 1.6rem;
        margin-right: 3rem;
        color: #9c9a9a;
        cursor: pointer;
        &:hover {
          color: white;
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    a {
      color: #c9c8c8;
      cursor: pointer;
    }
    .footerBody {
      width: 100vw;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .signUpContainer {
        margin: 1rem 0;
        height: 8rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
          font-size: 1.1rem;
          color: #dddddd;
        }
        span {
          font-size: 0.8rem;
          color: #dddddd;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .bottomContainerSignUp {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 4rem;
          .signuP {
            border: 1px solid #dddddd;
            border-radius: 0.6rem;
            color: #cfcccc;
            font-size: 0.7rem;
            width: 5rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 0;

            cursor: pointer;
            &:hover {
              background-color: #cfcccc35;
            }
          }
          .divContact {
            width: 8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #cfcccc;
            font-size: 1rem;
            margin-top: 0;

            .iconContainer {
              width: 2rem;
              height: 2rem;
              border-radius: 50%;
              font-size: 1.4rem;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #8080803c;
              margin-right: 0.2rem;
            }
            p {
              font-size: 0.7rem;
            }
          }
          .brazil {
            margin-top: 0;
            width: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 0.2rem;
            .flag {
              width: 1.4rem;
              height: 1.4rem;
              border-radius: 50%;
              margin-right: 0.2rem;
              background-image: url(${bandeira});
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
            }
            p {
              font-size: 0.7rem;
              color: #cfcccc;
            }
          }
        }
      }
      .listOfInfo {
        display: flex;
        justify-content: space-around;
        margin-right: 0rem;
        width: 100%;

        .footerGeneralInfo {
          display: flex;
          justify-content: space-between;
          color: #cfcccc;
          margin-left: 0rem;

          cursor: pointer;
          ul {
            list-style: none;

            .strongCaseLi {
              font-size: 0.8rem;
              font-weight: 700;
              line-height: 2rem;
            }
            li {
              font-size: 0.7rem;
              line-height: 1.3rem;
              position: relative;
              width: fit-content;
              &::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 0.125rem;
                background-color: #cfcccc;
                bottom: 0.625rem;
                left: 0;
                transform: scaleX(0);
                transform-origin: bottom left;
                transition: all 0.4s ease-in;
              }
              &:hover::after {
                transform: scaleX(1);
                transform-origin: bottom left;
              }
            }
          }
        }
      }
    }
    .footerBottom {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 5rem;
      padding: 0.5rem;
      color: #f0efef;
      width: 100%;
      .left {
        display: flex;
        justify-content: space-around;
        p {
          font-size: 0.6rem;
          color: #9c9a9a;
          margin-right: 0.5rem;
          cursor: pointer;
          &:hover {
            color: white;
          }
        }
      }
      .socialMedias {
        display: flex;
        margin-top: 1rem;
        .socialMediaIcon {
          font-size: 1rem;
          margin-right: 1rem;
          color: #9c9a9a;
          cursor: pointer;
          &:hover {
            color: white;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    a {
      color: #c9c8c8;
      cursor: pointer;
    }
    .footerBody {
      width: 100vw;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem 1.5rem;
      .signUpContainer {
        margin: 0;
        height: 8rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
          font-size: 1.8rem;
          color: #dddddd;
          margin: 0rem;
        }
        span {
          margin: 0rem;
          font-size: 1.1rem;
          color: #dddddd;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .bottomContainerSignUp {
          margin-top: 0.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 4rem;

          .signuP {
            border: 1px solid #dddddd;
            border-radius: 0.6rem;
            color: #cfcccc;
            font-size: 1rem;
            width: 8rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 0;

            cursor: pointer;
            &:hover {
              background-color: #cfcccc35;
            }
          }
          .divContact {
            width: 10rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #cfcccc;
            font-size: 1rem;
            margin-top: 0;

            .iconContainer {
              width: 3rem;
              height: 3rem;
              border-radius: 50%;
              font-size: 1.8rem;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #8080803c;
              margin-right: 0rem;
            }
            p {
              font-size: 1.1rem;
            }
          }
          .brazil {
            margin-top: 0;
            width: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 0.2rem;
            .flag {
              width: 1.7rem;
              height: 1.7rem;
              border-radius: 50%;
              margin-right: 0.2rem;
              background-image: url(${bandeira});
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
            }
            p {
              font-size: 1.2rem;
              color: #cfcccc;
            }
          }
        }
      }
      .listOfInfo {
        display: flex;
        justify-content: space-around;
        align-items: start;
        margin-right: 0rem;
        margin-left: 0;
        margin-top: 1rem;
        width: 100%;
        .footerGeneralInfo {
          margin-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: start;
          color: #cfcccc;
          margin-left: 0rem;

          cursor: pointer;
          ul {
            list-style: none;

            .strongCaseLi {
              font-size: 1.2rem;
              font-weight: 700;
              line-height: 2.4rem;
            }
            li {
              font-size: 1rem;
              line-height: 2rem;
              position: relative;
              width: fit-content;
              &::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 0.125rem;
                background-color: #cfcccc;
                bottom: 0.625rem;
                left: 0;
                transform: scaleX(0);
                transform-origin: bottom left;
                transition: all 0.4s ease-in;
              }
              &:hover::after {
                transform: scaleX(1);
                transform-origin: bottom left;
              }
            }
          }
        }
      }
    }
    .footerBottom {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 5rem;
      padding: 0.5rem;
      color: #f0efef;
      width: 100%;

      .left {
        display: flex;
        justify-content: space-around;
        p {
          font-size: 1rem;
          color: #9c9a9a;
          margin-right: 0.5rem;
          cursor: pointer;
          &:hover {
            color: white;
          }
        }
      }
      .socialMedias {
        display: flex;
        margin-top: 1rem;
        .socialMediaIcon {
          font-size: 1.6rem;
          margin-right: 1rem;
          color: #9c9a9a;
          cursor: pointer;
          &:hover {
            color: white;
          }
        }
      }
    }
  }

  @media only screen and (min-device-width: 901px) and (max-device-width: 1300px) and (-webkit-min-device-pixel-ratio: 2) {
    a {
      color: #c9c8c8;
      cursor: pointer;
    }
    .footerBody {
      width: 100vw;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-around;
      .signUpContainer {
        width: 40%;
        margin-left: 0rem;
        padding-right: 2rem;
        h3 {
          font-size: 1.6rem;
          color: #cfcccc;
        }
        span {
          font-size: 1.1rem;
          color: #cfcccc;
          margin-top: 1.7rem;
        }
        .bottomContainerSignUp {
          .signuP {
            border: 2px solid #cfcccc;
            border-radius: 0.6rem;
            color: #cfcccc;
            font-size: 1rem;
            width: 9rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 2rem;
            cursor: pointer;
            &:hover {
              background-color: #cfcccc35;
            }
          }
          .divContact {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #cfcccc;
            font-size: 1.25rem;
            margin-top: 2rem;
            width: fit-content;
            .iconContainer {
              width: 2.5rem;
              height: 2.5rem;
              border-radius: 50%;
              font-size: 1.2rem;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #8080803c;
              margin-right: 0.5rem;
            }
            p {
              font-size: 1.1rem;
            }
          }
          .brazil {
            max-width: 7.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 2rem;
            margin-left: 0;
            width: fit-content;
            .flag {
              width: 1.875rem;
              height: 1.875rem;
              border-radius: 50%;
              margin-right: 0.5rem;
              background-image: url(${bandeira});
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
            }
            p {
              font-size: 1rem;
              color: #cfcccc;
            }
          }
        }
      }
      .listOfInfo {
        width: 60%;
        display: flex;
        justify-content: space-between;
        margin-right: 0rem;
        margin-left: 1rem;

        .footerGeneralInfo {
          display: flex;
          justify-content: space-between;
          color: #cfcccc;
          margin-left: 0rem;
          cursor: pointer;
          ul {
            width: 100%;
            list-style: none;

            .strongCaseLi {
              font-size: 1.4rem;
              font-weight: 700;
              line-height: 3.75rem;
            }
            li {
              font-size: 1.25rem;
              line-height: 3.125rem;
              position: relative;
              width: fit-content;
              &::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 0.125rem;
                background-color: #cfcccc;
                bottom: 0.625rem;
                left: 0;
                transform: scaleX(0);
                transform-origin: bottom left;
                transition: all 0.4s ease-in;
              }
              &:hover::after {
                transform: scaleX(1);
                transform-origin: bottom left;
              }
            }
          }
        }
      }
      .footerGeneralInfo {
        display: flex;
        justify-content: space-between;
        color: #cfcccc;
        margin-left: 9.375rem;
        cursor: pointer;
        ul {
          list-style: none;
          .strongCaseLi {
            font-size: 1.9rem;
            font-weight: 700;
            line-height: 3.75rem;
          }
          li {
            font-size: 1.25rem;
            line-height: 3.125rem;
            position: relative;
            width: fit-content;
            &::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 0.125rem;
              background-color: #cfcccc;
              bottom: 0.625rem;
              left: 0;
              transform: scaleX(0);
              transform-origin: bottom left;
              transition: all 0.4s ease-in;
            }
            &:hover::after {
              transform: scaleX(1);
              transform-origin: bottom left;
            }
          }
        }
      }
    }
    .footerBottom {
      display: flex;
      justify-content: space-between;
      align-items: top;
      height: 6.25rem;
      padding: 0rem 4.5rem;
      color: #f0efef;

      .left {
        display: flex;
        justify-content: space-around;
        p {
          font-size: 1.2rem;
          color: #9c9a9a;
          margin-right: 1.875rem;
          cursor: pointer;
          &:hover {
            color: white;
          }
        }
      }
      .socialMedias {
        display: flex;
        .socialMediaIcon {
          font-size: 1.6rem;
          margin-right: 3rem;
          color: #9c9a9a;
          cursor: pointer;
          &:hover {
            color: white;
          }
        }
      }
    }
  }
`;
export default Footer;
