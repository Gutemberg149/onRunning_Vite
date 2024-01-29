import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logoImg/logowhite.png";
import beans from "../../images/feautres/section6/beans.avif";
import Recycling_Shoe from "../../images/feautres/section6/Recycling_Shoe.avif";
import inovative from "../../images/feautres/section6/inovative.avif";
import lightWeight from "../../images/feautres/section6/lightWeight.avif";
import whiteShoe from "../../images/feautres/section6/whiteShoe.avif";
import waste from "../../images/feautres/section6/waste.avif";
import womanRunning from "../../images/feautres/section6/womanRunning.avif";
import Navbar from "../../componentes/navbar/Navbar";
import Footer from "../../componentes/footer/Footer";
import twoRunning from "../../images/feautres/twoRunning.avif";
import CyclonWork from "./CyclonWork";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useEffect, useRef } from "react";

const Featured = () => {
  const [moveFunction, setMoveFunction] = useState(false); //section 6
  const [moveBcgImg, setMoveBcgImg] = useState(false); //section 6
  const [moveboxMission, setMoveboxMission] = useState(false); //section 6
  const [moveOverlayContainer, setMoveOverlayContainer] = useState(0); //section 6

  //funções para movimentações das divs OverlayContainer na seção 6
  const screenSize = useRef(window.innerWidth);

  const moveOverlayLeft = () => {
    if (screenSize.current <= 600) {
      if (moveOverlayContainer > -2000) {
        setMoveOverlayContainer(moveOverlayContainer - 260);
      } else {
        return;
      }
    } else if (screenSize.current <= 900) {
      if (moveOverlayContainer > -1800) {
        setMoveOverlayContainer(moveOverlayContainer - 230);
        console.log("---");
        console.log(moveOverlayContainer);
      } else {
        return;
      }
    } else {
      if (moveOverlayContainer > -1500) {
        setMoveOverlayContainer(moveOverlayContainer - 700);
      } else {
        return;
      }
    }
  };

  const moveOverlayRight = () => {
    if (screenSize.current <= 600) {
      if (moveOverlayContainer < -700) {
        setMoveOverlayContainer(moveOverlayContainer + 260);
      } else {
        return;
      }
    } else if (screenSize.current <= 900) {
      if (moveOverlayContainer < -600) {
        setMoveOverlayContainer(moveOverlayContainer + 230);
        console.log("+++");
        console.log(moveOverlayContainer);
      }
    } else {
      if (moveOverlayContainer < 0) {
        setMoveOverlayContainer(moveOverlayContainer + 700);
      } else {
        return;
      }
    }
  };

  useEffect(() => {
    if (moveFunction) {
      const moveDivFunction1 = () => {
        setMoveboxMission(!moveboxMission);
        setMoveOverlayContainer(-700);
        setTimeout(() => {
          setMoveBcgImg(!moveBcgImg);
        }, 500);
      };
      moveDivFunction1();
    } else {
      const moveDivFunction2 = () => {
        setMoveBcgImg(!moveBcgImg);
        setMoveOverlayContainer(0);
        setTimeout(() => {
          setMoveboxMission(!moveboxMission);
        }, 500);
      };
      moveDivFunction2();
    }
  }, [moveFunction]);

  return (
    <Wrapper>
      <main>
        <nav className="sec1">
          <div className="navbar">
            <Link to={"/"}>
              <img src={logo} alt="" className="logo" />
            </Link>
            <Navbar />
          </div>
          <div className="text">
            <h3>Cyclon™</h3>
            <p>
              Run. Recycle. Repeat. Discover our groundbreaking circularity
              program.
            </p>
          </div>
        </nav>

        <section className="IframeSection">
          <iframe
            src={`https://www.youtube.com/embed/viy9oyRxfdw`}
            frameBorder={0}
            allowFullScreen
            allow="autoplay"
          />
        </section>

        <section className="sec3">
          <h3>Here's how Cyclon™ works.</h3>
          <CyclonWork />
        </section>

        <section className="sec4">
          <h3>Meet The Roger</h3>
          <p>
            A fully recyclable running shoe made from castor beans. (Yes,
            beans.) Lightweight, agile and super responsive, it's engineered to
            perform. And you'll never own it, because it's only available via
            subscription to Cyclon™.
          </p>
          <Link to={"/singleproduct/8"}>
            <button className="btnSec">Shop The Roger</button>
          </Link>
        </section>

        <section className="sec5">
          <img src={twoRunning} alt="" />
        </section>

        <section className="sec6">
          <div className="sec6Container">
            <div
              className="leftBcgSec6"
              style={
                !moveBcgImg
                  ? { transform: `translateX(${-25}rem)` }
                  : { transform: `translateX(${0}px)` }
              }
            >
              <img src={womanRunning} alt="" />
              <div className="shadowLayer"></div>
            </div>

            <div
              className="rightBcgSec6"
              style={
                !moveBcgImg
                  ? { transform: `translateX(${-25}rem)` }
                  : { transform: `translateX(${0}px)` }
              }
            >
              <img src={womanRunning} alt="" style={{ width: "100vw" }} />
              <div className="shadowLayer"></div>
            </div>

            <div
              className="boxMission"
              onClick={() => setMoveFunction(!moveFunction)}
              style={
                moveFunction
                  ? { transform: `translateX(${-62.5}rem)`, opacity: "0.5" }
                  : { transform: `translateX(${0}px)`, opacity: "1" }
              }
            >
              <h4>Our mission</h4>
              <p>Ignite the power of the human spirit through movement</p>
              <button
                className="containerReadMore"
                onClick={() => setMoveFunction(!moveFunction)}
              >
                <div className="btnReadMore">
                  <div className="redmoreImg"></div>
                  <p>Read more</p>
                </div>
              </button>
            </div>
          </div>

          <div
            className="OverlayContainer"
            style={
              moveBcgImg
                ? { transform: `translateX(${moveOverlayContainer}px)` }
                : { transform: `translateX(${moveOverlayContainer}px)` }
            }
          >
            <div className="bigBox">
              <h4>Inspired by athletes.</h4>
              <img src={Recycling_Shoe} alt="" />
              <div className="shadowLayerBigBox"></div>
            </div>

            <div className="smallBox">
              <h4>Powered by swiss engineering</h4>
              <img src={waste} alt="" />
              <div className="shadowLayerSmallBox"></div>
            </div>
            <div className="bigBox">
              <h4>We belive in amzing things happen when we move.</h4>
              <img src={inovative} alt="" />
              <div className="shadowLayerBigBox"></div>
            </div>
            <div className="smallBox">
              <h4>Whether that is breaking records on the track...</h4>
              <img src={beans} alt="" />
              <div className="shadowLayerSmallBox"></div>
            </div>
            <div className="bigBox">
              <h4>
                ...Or developing innovative new technologies for a more
                sustainable future.
              </h4>
              <img src={whiteShoe} alt="" />
              <div className="shadowLayerBigBox"></div>
            </div>
            <div className="smallBox logSmallContainer">
              <h4>Light weight</h4>
              <img src={lightWeight} alt="" className="logSmallImg" />
              <div className="shadowLayerSmallBox"></div>
            </div>
          </div>
          {moveFunction && (
            <div className="sec6Btns">
              <button
                className="ClickVolta"
                onClick={() => setMoveFunction(!moveFunction)}
              >
                <AiOutlineClose className="iconX" />
              </button>

              <div className="divbtn">
                <div className="sec6BtnLeft" onClick={() => moveOverlayLeft()}>
                  <FiArrowLeft
                    className="arowLefet"
                    style={{ fontSize: "1.875rem" }}
                  />
                </div>
                <div
                  className="sec6BtnRight"
                  onClick={() => moveOverlayRight()}
                >
                  <FiArrowRight
                    className="arowRight"
                    style={{ fontSize: "1.875rem" }}
                  />
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="sec7">
          <h3>The tee you'll never trash</h3>
          <p>
            Meet the 100% recyclable, bio-based Cyclon-T. (Yes, made from castor
            beans.) Exclusively available to Cloudneo subscribers*, this time,
            you can own it. Run in it. Wear it proud. Wear it until it’s all
            worn out. Then, send it back to us. And you know … Recycle. Repeat.
            *To purchase the Cyclon-T, you must be a Cloudneo subscriber. If you
            haven’t joined the community yet, now’s your chance.
          </p>
        </section>
        <section className="IframeSection">
          <iframe
            src={`https://www.youtube.com/embed/gdjan_DKShM`}
            frameBorder={0}
            allowFullScreen
            allow="autoplay"
          />
        </section>
      </main>

      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  main {
    .navbar {
      display: flex;
      align-items: center;
      padding-top: 1.5rem;
      .logo {
        mix-blend-mode: color-burn;
        width: 6.25rem;
        margin: 1.25rem 3.75rem;
        cursor: pointer;
      }
    }
    .sec1 {
      width: 100%;
      height: 40rem;
      background-color: #fac892;
      .text {
        padding: 4rem;
        h3 {
          font-size: 7rem;
          font-weight: 500;
        }
        p {
          font-size: 3.5rem;
        }
      }
    }
    .IframeSection {
      width: 100%;
      position: relative;
      overflow: hidden;
      padding: 25%;
      background-color: #fac892;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
    }
    .sec3 {
      background-color: #fac892;
      h3 {
        font-size: 4rem;
        font-weight: 400;
        margin-left: 5rem;
        padding: 5rem 0;
      }
    }

    .sec4 {
      height: 60rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h3 {
        font-size: 7rem;
        font-weight: 500;

        padding: 0 5rem 1rem 5rem;
      }
      p {
        font-size: 3.5rem;
        font-weight: 300;
        padding: 0 5rem 0 5rem;
      }
      .btnSec {
        width: 20rem;
        height: 5rem;
        background-color: black;
        border-radius: 4rem;
        border: 2px solid black;
        font-size: 1.5rem;
        font-weight: 500;
        color: white;
        font-weight: 300;
        margin: 4rem 5rem 0 5rem;
        transition: all ease 0.36s;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .sec5 {
      width: 100vw;
      margin-bottom: 8rem;
      img {
        width: 101%;
      }
    }
    .sec6 {
      position: relative;
      height: 100vh;
      overflow: hidden;
      background-color: #fac892;
      margin-bottom: 8rem;
      .sec6Container {
        display: grid;
        grid-template-columns: 70% 30%;
        height: 100vh;
      }
      .leftBcgSec6 {
        height: 100vh;
        transition: all 0.4s ease-in;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .shadowLayer {
          width: 100%;
          height: 31.25rem;
          position: absolute;
          bottom: 0;
          z-index: 95;
          background-image: linear-gradient(
            to top,
            #000000a2,
            #000000a2,
            transparent
          );
        }
      }
      .rightBcgSec6 {
        width: 62.5rem;
        transition: all 0.4s ease-in;
        img {
          width: 90.375rem;
          object-fit: cover;
        }
        .shadowLayer {
          width: 100%;
          height: 70rem;
          position: absolute;
          bottom: 0;
          z-index: 95;
          background-image: linear-gradient(
            to top,
            #000000a2,
            #000000a2,
            transparent
          );
        }
      }
      .boxMission {
        position: absolute;
        width: 46rem;
        margin-bottom: 1.25rem;
        bottom: 8.125rem;
        left: 3.125;
        z-index: 97;
        transition: all ease-in 0.5s;
        padding-left: 1.7rem;
        h4 {
          font-size: 4.688rem;
          color: white;
          font-weight: 500;
          margin-bottom: 1.25rem;
        }
        p {
          font-size: 2.813rem;
          color: white;
          font-weight: 400;
          line-height: 3.125rem;
        }
        .containerReadMore {
          width: 17.5rem;
          height: 6.25rem;
          display: flex;
          align-items: center;
          margin-top: 1.25rem;
          border-radius: 3.125rem;
          border: none;
          background-color: transparent;

          .btnReadMore {
            display: flex;
            width: 17.5rem;
            height: 6.25rem;
            background-color: #dcad03;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-radius: 3.125rem;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            &:hover {
              width: 16.25rem;
              height: 6.563rem;
            }
            .redmoreImg {
              width: 5.25rem;
              height: 5.25rem;
              border-radius: 50%;
              background-image: url(${waste});
              background-size: cover;
              background-position: 0;
            }
            p {
              font-size: 1.563rem;
              margin-right: 0.938rem;
              color: black;
            }
          }
        }
      }
      .OverlayContainer {
        height: 50rem;
        position: absolute;
        display: flex;
        top: 12.5rem;
        z-index: 98;
        left: 56.25rem;
        transition: all 0.3s ease-in;

        .bigBox {
          position: relative;
          width: 31.25rem;
          height: 41.688rem;
          margin: 0 1.9rem;
          border-radius: 0.7rem;
          box-shadow: rgba(50, 50, 93, 0.25) 0 0.375rem 0.75rem -0.125rem,
            rgba(0, 0, 0, 0.3) 0 0.188rem 0.438rem -0.188rem;
          cursor: pointer;
          h4 {
            position: absolute;
            color: white;
            font-size: 1.875rem;
            bottom: 1.875rem;
            padding: 0 1.5rem;
            z-index: 98;
            font-weight: 500;
          }

          img {
            width: 31.25rem;
            border-radius: 0.7rem;
          }
          .shadowLayerBigBox {
            width: 100%;
            height: 11rem;
            position: absolute;
            bottom: 0;
            z-index: 96;
            background-image: linear-gradient(to top, #000000a2, transparent);
            border-radius: 0.6rem;
            cursor: pointer;
          }
        }
        .smallBox {
          position: relative;
          width: 28.125rem;
          height: 37.5rem;
          border-radius: 0.7rem;
          box-shadow: rgba(50, 50, 93, 0.25) 0 0.375rem 0.75rem -0.125rem,
            rgba(0, 0, 0, 0.3) 0 0.188rem 0.438rem -0.188rem;
          cursor: pointer;
          h4 {
            position: absolute;
            color: white;
            font-size: 1.563rem;
            bottom: 1.875rem;
            padding: 0 1.5rem;
            z-index: 98;
            font-weight: 400;
            width: 100%;
          }

          img {
            width: 28.1rem;
            border-radius: 0.625rem;
          }
          .shadowLayerSmallBox {
            width: 100%;
            height: 9rem;
            position: absolute;
            bottom: 0;
            z-index: 95;
            border-radius: 0.5rem;
            background-image: linear-gradient(to top, #000000a2, transparent);
          }
        }
        .logsmallbox {
          width: fit-content;
          background-color: black;
          height: 37.5rem;
          object-fit: cover;
        }
      }

      .sec6Btns {
        width: 100rem;
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 100;
        position: absolute;
        z-index: 99;
        bottom: 2rem;
        left: 15rem;
        padding: 0 6.25rem 0 0;
        .ClickVolta {
          width: 6.875rem;
          height: 6.875rem;
          background-color: black;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease-in;
          cursor: pointer;

          .iconX {
            color: white;
            font-size: 1.563rem;
            font-weight: 500;
            transition: all ease-in-out 0.3s;
          }
          &:hover > .iconX {
            font-size: 2.5rem;
            font-weight: 900;
          }
        }
        .divbtn {
          display: flex;
          width: 20rem;
          justify-content: space-between;
          .sec6BtnLeft,
          .sec6BtnRight {
            width: 6.875rem;
            height: 6.875rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: black;
            color: white;
            border-radius: 50%;
            cursor: pointer;
            &:hover {
              background-color: #191818;
              border: 0.125rem solid black;
            }
          }
        }
      }
    }
    .sec7 {
      height: 60rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h3 {
        font-size: 7rem;
        font-weight: 500;

        padding: 0 5rem 1rem 5rem;
      }
      p {
        font-size: 3.5rem;
        font-weight: 300;
        padding: 0 5rem 0 5rem;
      }
      .btnSec {
        width: 20rem;
        height: 5rem;
        background-color: black;
        border-radius: 4rem;
        border: 2px solid black;
        font-size: 1.5rem;
        font-weight: 500;
        color: white;
        font-weight: 300;
        margin: 4rem 5rem 0 5rem;
        transition: all ease 0.36s;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      .navbar {
        display: flex;
        align-items: center;
        padding-top: 5rem;
        .logo {
          mix-blend-mode: null;
          width: 4rem;
          margin: 2rem 0rem 0rem 0rem;
          cursor: pointer;
        }
      }
      .sec1 {
        width: 100%;
        height: auto;
        background-color: #fac892;
        .text {
          padding: 0.5rem;
          h3 {
            font-size: 2rem;
            font-weight: 500;
          }
          p {
            font-size: 1.5rem;
          }
        }
      }
      .IframeSection {
        width: 100%;
        position: relative;
        overflow: hidden;
        padding: 25%;
        background-color: #fac892;
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }
      }

      .sec3 {
        background-color: #fac892;
        h3 {
          font-size: 1.4rem;
          font-weight: 400;
          margin-left: 0.5rem;
          padding: 0.5rem 0;
        }
      }

      .sec4 {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem 1rem;
        h3 {
          font-size: 1.8rem;
          font-weight: 500;
          padding: 0;
        }
        p {
          font-size: 1.1rem;
          font-weight: 300;
          padding: 0 0rem 0 0rem;
        }
        .btnSec {
          width: 9rem;
          height: 3rem;
          background-color: black;
          border-radius: 4rem;
          border: 2px solid black;
          font-size: 1rem;
          font-weight: 500;
          color: white;
          font-weight: 300;
          margin: 1rem 0rem 0 0rem;
          transition: all ease 0.36s;
          cursor: pointer;
          &:hover {
            transform: scale(1.1);
          }
        }
      }

      .sec5 {
        width: 100vw;
        margin-bottom: 2rem;
        img {
          width: 100%;
        }
      }
      .sec6 {
        display: grid;
        grid-template-columns: 99% 1%;
        height: 100%;
        background-color: #fac892;
        margin-bottom: 0rem;
        .sec6Container {
          display: grid;
          grid-template-columns: 99% 1%;
          height: 100%;
        }
        .leftBcgSec6 {
          height: 100vh;
          width: 40rem;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .shadowLayer {
            width: 100%;
            height: 40rem;
            position: absolute;
            bottom: 0;
            z-index: 95;
            background-image: linear-gradient(
              to top,
              #000000b9,
              #000000a2,
              transparent
            );
          }
        }
        .rightBcgSec6 {
          width: 0rem;
          transition: all 0.4s ease-in;
          border: 3px solid black;
          img {
            width: 90rem;
            object-fit: cover;
          }
          .shadowLayer {
            width: 100%;
            height: 70rem;
            position: absolute;
            bottom: 0;
            z-index: 95;
            background-image: linear-gradient(
              to top,
              #000000a2,
              #000000a2,
              transparent
            );
          }
        }
        .boxMission {
          position: absolute;
          width: 18rem;
          margin-bottom: 1rem;
          bottom: 2rem;
          left: 3.125;
          z-index: 97;
          transition: all ease-in 0.5s;
          padding-left: 1.7rem;
          h4 {
            font-size: 1.8rem;
            color: white;
            font-weight: 500;
            margin-bottom: 0rem;
          }
          p {
            font-size: 1.2rem;
            color: white;
            font-weight: 400;
            line-height: 1.5rem;
          }
          .containerReadMore {
            width: 10rem;
            height: 3rem;
            display: flex;
            align-items: center;
            margin-top: 1.25rem;
            border-radius: 3.125rem;
            border: none;
            background-color: transparent;

            .btnReadMore {
              display: flex;
              width: 10rem;
              height: 4rem;
              background-color: #dcad03;
              display: flex;
              justify-content: space-around;
              align-items: center;
              border-radius: 3.125rem;
              transition: all 0.3s ease-in-out;
              cursor: pointer;
              &:hover {
                width: 12rem;
                height: 5rem;
              }
              .redmoreImg {
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                background-image: url(${waste});
                background-size: cover;
                background-position: 0;
              }
              p {
                font-size: 1rem;
                font-weight: 500;
                margin-right: 0.938rem;
                color: black;
              }
            }
          }
        }
        .OverlayContainer {
          height: 25rem;
          width: 110rem;
          position: absolute;
          display: flex;
          top: 10rem;
          z-index: 98;
          left: 50rem;
          transition: all 0.3s ease-in;

          .bigBox {
            overflow: hidden;
            position: relative;
            width: 14rem;
            height: 20rem;
            margin: 0 1.9rem;
            border-radius: 0.7rem;
            box-shadow: rgba(50, 50, 93, 0.25) 0 0.375rem 0.75rem -0.125rem,
              rgba(0, 0, 0, 0.3) 0 0.188rem 0.438rem -0.188rem;
            cursor: pointer;
            h4 {
              position: absolute;
              color: white;
              font-size: 1rem;
              bottom: 1.4rem;
              padding: 0 1.5rem;
              z-index: 98;
              font-weight: 400;
            }

            img {
              width: 20rem;
              border-radius: 0.7rem;
            }
            .shadowLayerBigBox {
              width: 100%;
              height: 10rem;
              position: absolute;
              bottom: 0;
              z-index: 96;
              background-image: linear-gradient(to top, #050505c2, transparent);
              border-radius: 0.6rem;
              cursor: pointer;
            }
          }
          .smallBox {
            position: relative;
            width: 12rem;
            height: 18rem;
            border-radius: 0.7rem;
            box-shadow: rgba(50, 50, 93, 0.25) 0 0.375rem 0.75rem -0.125rem,
              rgba(0, 0, 0, 0.3) 0 0.188rem 0.438rem -0.188rem;
            overflow: hidden;
            cursor: pointer;
            h4 {
              position: absolute;
              color: white;
              font-size: 1rem;
              bottom: 1.875rem;
              padding: 0 1.5rem;
              z-index: 98;
              font-weight: 400;
              width: 100%;
            }

            img {
              width: 18rem;
              border-radius: 0.625rem;
            }
            .shadowLayerSmallBox {
              width: 100%;
              height: 9rem;
              position: absolute;
              bottom: 0;
              z-index: 95;
              border-radius: 0.5rem;
              background-image: linear-gradient(to top, #000000a2, transparent);
            }
          }
          .logSmallContainer {
            display: flex;
            align-items: center;
            justify-content: center;
            .logSmallImg {
              width: 100%;
              background-color: black;
              height: 24rem;
              object-fit: cover;
            }
          }
        }

        .sec6Btns {
          width: 15rem;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 100;
          position: absolute;
          z-index: 99;
          bottom: 2rem;
          left: 7rem;
          padding: 0;
          .ClickVolta {
            width: 3.5rem;
            height: 3.5rem;
            background-color: black;
            border-radius: 50%;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease-in;
            cursor: pointer;

            .iconX {
              color: white;
              font-size: 1.4rem;
              font-weight: 500;
              transition: all ease-in-out 0.3s;
            }
            &:hover > .iconX {
              font-size: 1.5rem;
              font-weight: 900;
            }
          }
          .divbtn {
            display: flex;
            width: 9rem;
            justify-content: space-between;
            .sec6BtnLeft,
            .sec6BtnRight {
              width: 3.5rem;
              height: 3.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: black;
              color: white;
              border-radius: 50%;
              cursor: pointer;
              &:hover {
                background-color: #191818;
                border: 0.125rem solid black;
              }
            }
          }
        }
      }
      .sec7 {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem 1rem;
        h3 {
          font-size: 1.5rem;
          font-weight: 500;
          padding: 0;
        }
        p {
          font-size: 1.1rem;
          font-weight: 300;
          padding: 0 0rem 0 0rem;
        }
        .btnSec {
          width: 9rem;
          height: 3rem;
          background-color: black;
          border-radius: 4rem;
          border: 2px solid black;
          font-size: 1rem;
          font-weight: 500;
          color: white;
          font-weight: 300;
          margin: 1rem 0rem 0 0rem;
          transition: all ease 0.36s;
          cursor: pointer;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      .navbar {
        display: flex;
        align-items: center;
        padding-top: 5rem;
        .logo {
          mix-blend-mode: null;
          width: 4rem;
          margin: 2rem 0rem 0rem 0rem;
          cursor: pointer;
        }
      }
      .sec1 {
        width: 100%;
        height: auto;
        background-color: #fac892;
        .text {
          padding: 0.5rem;
          h3 {
            font-size: 2.2rem;
            font-weight: 500;
          }
          p {
            font-size: 1.7rem;
          }
        }
      }
      .IframeSection {
        width: 100%;
        position: relative;
        overflow: hidden;
        padding: 25%;
        background-color: #fac892;
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }
      }

      .sec3 {
        background-color: #fac892;
        h3 {
          font-size: 1.6rem;
          font-weight: 400;
          margin-left: 0.5rem;
          padding: 0.5rem 0;
        }
      }

      .sec4 {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem 1rem;
        h3 {
          font-size: 2rem;
          font-weight: 500;
          padding: 0;
        }
        p {
          font-size: 1.3rem;
          font-weight: 300;
          padding: 0 0rem 0 0rem;
        }
        .btnSec {
          width: 9rem;
          height: 3rem;
          background-color: black;
          border-radius: 4rem;
          border: 2px solid black;
          font-size: 1rem;
          font-weight: 500;
          color: white;
          font-weight: 300;
          margin: 1rem 0rem 0 0rem;
          transition: all ease 0.36s;
          cursor: pointer;
          &:hover {
            transform: scale(1.1);
          }
        }
      }

      .sec5 {
        width: 100vw;
        margin-bottom: 2rem;
        img {
          width: 100%;
        }
      }
      .sec6 {
        display: grid;
        grid-template-columns: 99% 1%;
        height: 100%;
        background-color: #fac892;
        margin-bottom: 0rem;
        .sec6Container {
          display: grid;
          grid-template-columns: 99% 1%;
          height: 100%;
        }
        .leftBcgSec6 {
          height: 100vh;
          width: 40rem;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .shadowLayer {
            width: 100%;
            height: 40rem;
            position: absolute;
            bottom: 0;
            z-index: 95;
            background-image: linear-gradient(
              to top,
              #000000b9,
              #000000a2,
              transparent
            );
          }
        }
        .rightBcgSec6 {
          width: 0rem;
          transition: all 0.4s ease-in;
          border: 3px solid black;
          img {
            width: 90rem;
            object-fit: cover;
          }
          .shadowLayer {
            width: 100%;
            height: 70rem;
            position: absolute;
            bottom: 0;
            z-index: 95;
            background-image: linear-gradient(
              to top,
              #000000a2,
              #000000a2,
              transparent
            );
          }
        }
        .boxMission {
          position: absolute;
          width: 24rem;
          margin-bottom: 1rem;
          bottom: 2rem;
          left: 3.125;
          z-index: 97;
          transition: all ease-in 0.5s;
          padding-left: 1.7rem;

          h4 {
            font-size: 2rem;
            color: white;
            font-weight: 500;
            margin-bottom: 0rem;
          }
          p {
            font-size: 1.4rem;
            color: white;
            font-weight: 400;
            line-height: 1.5rem;
          }
          .containerReadMore {
            width: 12rem;
            height: 3rem;
            display: flex;
            align-items: center;
            margin-top: 1.25rem;
            border-radius: 3.125rem;
            border: none;
            background-color: transparent;

            .btnReadMore {
              display: flex;
              width: 12rem;
              height: 4rem;
              background-color: #dcad03;
              display: flex;
              justify-content: space-around;
              align-items: center;
              border-radius: 3.125rem;
              transition: all 0.3s ease-in-out;
              cursor: pointer;
              &:hover {
                width: 12rem;
                height: 5rem;
              }
              .redmoreImg {
                width: 3.5rem;
                height: 3.5rem;
                border-radius: 50%;
                background-image: url(${waste});
                background-size: cover;
                background-position: 0;
              }
              p {
                font-size: 1.2rem;
                font-weight: 500;
                margin-right: 0.938rem;
                color: black;
              }
            }
          }
        }
        .OverlayContainer {
          height: 25rem;
          width: 110rem;
          position: absolute;
          display: flex;
          top: 10rem;
          z-index: 98;
          left: 50rem;
          transition: all 0.3s ease-in;

          .bigBox {
            overflow: hidden;
            position: relative;
            width: 14rem;
            height: 20rem;
            margin: 0 1.9rem;
            border-radius: 0.7rem;
            box-shadow: rgba(50, 50, 93, 0.25) 0 0.375rem 0.75rem -0.125rem,
              rgba(0, 0, 0, 0.3) 0 0.188rem 0.438rem -0.188rem;
            cursor: pointer;
            h4 {
              position: absolute;
              color: white;
              font-size: 1rem;
              bottom: 1.4rem;
              padding: 0 1.5rem;
              z-index: 98;
              font-weight: 400;
            }

            img {
              width: 20rem;
              border-radius: 0.7rem;
            }
            .shadowLayerBigBox {
              width: 100%;
              height: 10rem;
              position: absolute;
              bottom: 0;
              z-index: 96;
              background-image: linear-gradient(to top, #050505c2, transparent);
              border-radius: 0.6rem;
              cursor: pointer;
            }
          }
          .smallBox {
            position: relative;
            width: 12rem;
            height: 18rem;
            border-radius: 0.7rem;
            box-shadow: rgba(50, 50, 93, 0.25) 0 0.375rem 0.75rem -0.125rem,
              rgba(0, 0, 0, 0.3) 0 0.188rem 0.438rem -0.188rem;
            overflow: hidden;
            cursor: pointer;
            h4 {
              position: absolute;
              color: white;
              font-size: 1rem;
              bottom: 1.875rem;
              padding: 0 1.5rem;
              z-index: 98;
              font-weight: 400;
              width: 100%;
            }

            img {
              width: 18rem;
              border-radius: 0.625rem;
            }
            .shadowLayerSmallBox {
              width: 100%;
              height: 9rem;
              position: absolute;
              bottom: 0;
              z-index: 95;
              border-radius: 0.5rem;
              background-image: linear-gradient(to top, #000000a2, transparent);
            }
          }
          .logSmallContainer {
            display: flex;
            align-items: center;
            justify-content: center;
            .logSmallImg {
              width: 100%;
              background-color: black;
              height: 24rem;
              object-fit: cover;
            }
          }
        }

        .sec6Btns {
          width: 15rem;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 100;
          position: absolute;
          z-index: 99;
          bottom: 2rem;
          left: 7rem;
          padding: 0;
          .ClickVolta {
            width: 3.5rem;
            height: 3.5rem;
            background-color: black;
            border-radius: 50%;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease-in;
            cursor: pointer;

            .iconX {
              color: white;
              font-size: 1.4rem;
              font-weight: 500;
              transition: all ease-in-out 0.3s;
            }
            &:hover > .iconX {
              font-size: 1.5rem;
              font-weight: 900;
            }
          }
          .divbtn {
            display: flex;
            width: 9rem;
            justify-content: space-between;
            .sec6BtnLeft,
            .sec6BtnRight {
              width: 3.5rem;
              height: 3.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: black;
              color: white;
              border-radius: 50%;
              cursor: pointer;
              &:hover {
                background-color: #191818;
                border: 0.125rem solid black;
              }
            }
          }
        }
      }
      .sec7 {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem 1rem;
        h3 {
          font-size: 1.5rem;
          font-weight: 500;
          padding: 0;
        }
        p {
          font-size: 1.1rem;
          font-weight: 300;
          padding: 0 0rem 0 0rem;
        }
        .btnSec {
          width: 9rem;
          height: 3rem;
          background-color: black;
          border-radius: 4rem;
          border: 2px solid black;
          font-size: 1rem;
          font-weight: 500;
          color: white;
          font-weight: 300;
          margin: 1rem 0rem 0 0rem;
          transition: all ease 0.36s;
          cursor: pointer;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      .navbar {
        display: flex;
        align-items: center;
        padding-top: 5rem;
        .logo {
          mix-blend-mode: null;
          width: 5rem;
          margin: 2rem 0rem 0rem 0rem;
          cursor: pointer;
        }
      }
      .sec1 {
        width: 100%;
        height: auto;
        background-color: #fac892;
        .text {
          padding: 0.5rem;
          h3 {
            font-size: 2.6rem;
            font-weight: 600;
          }
          p {
            font-size: 2rem;
          }
        }
      }
      .IframeSection {
        width: 100%;
        position: relative;
        overflow: hidden;
        padding: 25%;
        background-color: #fac892;
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }
      }

      .sec3 {
        background-color: #fac892;
        padding-top: 1rem;
        h3 {
          font-size: 2rem;
          font-weight: 400;
          margin-left: 2rem;
          padding: 0.5rem 0;
        }
      }

      .sec4 {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem 1rem;
        h3 {
          font-size: 2.6rem;
          font-weight: 500;
          padding: 0;
        }
        p {
          font-size: 1.6rem;
          font-weight: 300;
          padding: 0rem;
        }
        .btnSec {
          width: 12rem;
          height: 5rem;
          background-color: black;
          border-radius: 4rem;
          border: 2px solid black;
          font-size: 1.4rem;
          font-weight: 500;
          color: white;
          font-weight: 300;
          margin: 1rem 0rem 0 0rem;
          transition: all ease 0.36s;
          cursor: pointer;
          &:hover {
            transform: scale(1.1);
          }
        }
      }

      .sec5 {
        width: 100vw;
        margin-bottom: 0rem;
        img {
          width: 100%;
        }
      }
      .sec6 {
        position: relative;
        height: 90vh;
        width: 100vw;
        overflow: hidden;
        margin-bottom: 0rem;
        .sec6Container {
          display: grid;
          grid-template-columns: 99% 1%;
          height: 100%;
        }
        .leftBcgSec6 {
          height: 100vh;
          width: 100%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .shadowLayer {
            width: 100%;
            height: 40rem;
            position: absolute;
            bottom: 0;
            z-index: 95;
            background-image: linear-gradient(
              to top,
              #000000b9,
              #000000a2,
              transparent
            );
          }
        }
        .rightBcgSec6 {
          height: 100vh;
          width: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .shadowLayer {
            width: 100%;
            height: 70rem;
            position: absolute;
            bottom: 0;
            z-index: 95;
            background-image: linear-gradient(
              to top,
              #000000a2,
              #000000a2,
              transparent
            );
          }
        }
        .boxMission {
          position: absolute;
          width: 30rem;
          margin-bottom: 1rem;
          bottom: 2rem;
          left: 3.3;
          z-index: 97;
          transition: all ease-in 0.5s;
          padding-left: 1.7rem;

          h4 {
            font-size: 3rem;
            color: white;
            font-weight: 500;
            margin-bottom: 0rem;
          }
          p {
            font-size: 1.8rem;
            color: white;
            font-weight: 400;
            line-height: 2.5rem;
          }
          .containerReadMore {
            width: 15rem;
            height: 6rem;
            display: flex;
            align-items: center;
            margin-top: 1.25rem;
            border-radius: 3.125rem;
            border: none;
            background-color: transparent;

            .btnReadMore {
              display: flex;
              width: 15rem;
              height: 5.5rem;
              background-color: #dcad03;
              display: flex;
              justify-content: space-around;
              align-items: center;
              border-radius: 3.125rem;
              transition: all 0.3s ease-in-out;
              cursor: pointer;
              &:hover {
                width: 12rem;
                height: 4.5rem;
              }
              .redmoreImg {
                width: 5rem;
                height: 5rem;
                border-radius: 50%;
                background-image: url(${waste});
                background-size: cover;
                background-position: 0;
              }
              p {
                font-size: 1.6rem;
                font-weight: 500;
                margin-right: 0.938rem;
                color: black;
              }
            }
          }
        }
        .OverlayContainer {
          height: 25rem;
          width: 110rem;
          position: absolute;
          display: flex;
          top: 10rem;
          z-index: 98;
          left: 50rem;
          transition: all 0.3s ease-in;

          .bigBox {
            overflow: hidden;
            position: relative;
            width: 17rem;
            height: 23rem;
            margin: 0 1.9rem;
            border-radius: 0.7rem;
            box-shadow: rgba(50, 50, 93, 0.25) 0 0.375rem 0.75rem -0.125rem,
              rgba(0, 0, 0, 0.3) 0 0.188rem 0.438rem -0.188rem;
            cursor: pointer;
            h4 {
              position: absolute;
              color: white;
              font-size: 1.3rem;
              bottom: 1.4rem;
              padding: 0 1.5rem;
              z-index: 98;
              font-weight: 400;
            }

            img {
              width: 20rem;
              border-radius: 0.7rem;
            }
            .shadowLayerBigBox {
              width: 100%;
              height: 10rem;
              position: absolute;
              bottom: 0;
              z-index: 96;
              background-image: linear-gradient(to top, #050505c2, transparent);
              border-radius: 0.6rem;
              cursor: pointer;
            }
          }
          .smallBox {
            position: relative;
            width: 16rem;
            height: 21rem;
            border-radius: 0.7rem;
            box-shadow: rgba(50, 50, 93, 0.25) 0 0.375rem 0.75rem -0.125rem,
              rgba(0, 0, 0, 0.3) 0 0.188rem 0.438rem -0.188rem;
            overflow: hidden;
            cursor: pointer;
            h4 {
              position: absolute;
              color: white;
              font-size: 1.3rem;
              bottom: 1.875rem;
              padding: 0 1.5rem;
              z-index: 98;
              font-weight: 400;
              width: 100%;
            }

            img {
              width: 18rem;
              border-radius: 0.625rem;
            }
            .shadowLayerSmallBox {
              width: 100%;
              height: 9rem;
              position: absolute;
              bottom: 0;
              z-index: 95;
              border-radius: 0.5rem;
              background-image: linear-gradient(to top, #000000a2, transparent);
            }
          }
        }

        .sec6Btns {
          width: 18rem;
          height: 75px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 100;
          position: absolute;
          z-index: 99;
          bottom: 2rem;
          left: 7rem;
          padding: 0;
          .ClickVolta {
            width: 4.5rem;
            height: 4.5rem;
            background-color: black;
            border-radius: 50%;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease-in;
            cursor: pointer;

            .iconX {
              color: white;
              font-size: 1.9rem;
              font-weight: 500;
              transition: all ease-in-out 0.3s;
            }
            &:hover > .iconX {
              font-size: 2rem;
              font-weight: 900;
            }
          }
          .divbtn {
            display: flex;
            width: 10rem;
            justify-content: space-between;
            .sec6BtnLeft,
            .sec6BtnRight {
              width: 4.5rem;
              height: 4.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: black;
              color: white;
              border-radius: 50%;
              cursor: pointer;
              &:hover {
                background-color: #191818;
                border: 0.125rem solid black;
              }
            }
          }
        }
      }
      .sec7 {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem 1rem;
        h3 {
          font-size: 2.2rem;
          font-weight: 500;
          padding: 0;
        }
        p {
          font-size: 1.4rem;
          font-weight: 400;
          padding: 0 0rem 0 0rem;
        }
        .btnSec {
          width: 9rem;
          height: 3rem;
          background-color: black;
          border-radius: 4rem;
          border: 2px solid black;
          font-size: 1rem;
          font-weight: 500;
          color: white;
          font-weight: 300;
          margin: 1rem 0rem 0 0rem;
          transition: all ease 0.36s;
          cursor: pointer;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
`;
export default Featured;
