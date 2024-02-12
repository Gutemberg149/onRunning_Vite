import styled from "styled-components";
import { prodArrayCarrossel } from "../utils/APIArray";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const ProductesSugested = () => {
  const [moveCarrossel, setMoveCarrossel] = useState(0);
  const [arrayLength, setArrayLength] = useState(prodArrayCarrossel.length);

  const screenSize = useRef(window.innerWidth);

  const moveRight = () => {
    if (screenSize.current <= 600) {
      setArrayLength(arrayLength - 1);
      setMoveCarrossel(moveCarrossel - 352);
      if (moveCarrossel < -2816) {
        setMoveCarrossel(0);
        setArrayLength(10);
      }
    } else if (screenSize.current <= 900) {
      setArrayLength(arrayLength - 1);
      setMoveCarrossel(moveCarrossel - 360);
      if (moveCarrossel < -2880) {
        setMoveCarrossel(0);
        setArrayLength(10);
      }
    } else if (screenSize.current <= 1300) {
      setArrayLength(arrayLength - 1);
      setMoveCarrossel(moveCarrossel - 550);
      if (moveCarrossel < -2880) {
        setMoveCarrossel(0);
        setArrayLength(10);
        console.log("arrayLength:" + arrayLength);
        console.log("moveCarrossel:" + moveCarrossel);
      }
    } else {
      if (arrayLength > 1) {
        setArrayLength(arrayLength - 1);
        setMoveCarrossel(moveCarrossel - 600);
        if (moveCarrossel < -3000) {
          setMoveCarrossel(0);
          setArrayLength(10);
          console.log("arrayLength:" + arrayLength);
        }
        console.log("arrayLength:" + arrayLength);
        console.log(moveCarrossel);
      } else {
        return;
      }
    }
  };

  const moveLeft = () => {
    if (screenSize.current < 600) {
      if (arrayLength < prodArrayCarrossel.length) {
        setArrayLength(arrayLength + 1);
        setMoveCarrossel(moveCarrossel + 350);
      } else {
        return;
      }
    } else if (screenSize.current < 900) {
      if (arrayLength < prodArrayCarrossel.length) {
        setArrayLength(arrayLength + 1);
        setMoveCarrossel(moveCarrossel + 360);
      } else {
        return;
      }
    } else if (screenSize.current < 1300) {
      if (arrayLength < prodArrayCarrossel.length) {
        setArrayLength(arrayLength + 1);
        setMoveCarrossel(moveCarrossel + 550);
      } else {
        return;
      }
    } else {
      if (arrayLength < prodArrayCarrossel.length) {
        setArrayLength(arrayLength + 1);
        setMoveCarrossel(moveCarrossel + 600);
      } else {
        return;
      }
    }
  };

  return (
    <Wrapper>
      <h3>You may be interested in</h3>
      <div className="btnLeft" onClick={() => moveLeft()}>
        <FiArrowLeft />
      </div>
      <div className="btnRight" onClick={() => moveRight()}>
        <FiArrowRight />
      </div>
      <div className="itensSec5">
        {prodArrayCarrossel.map((item) => {
          return (
            <Link to={`/singleproduct/${item.id}`} key={item.id}>
              <div className="boxSec5" style={{ transform: `translateX(${moveCarrossel}px)` }} key={item.id}>
                <img src={item.img01} alt="" />
                <div className="infoBox">
                  <div className="innerInfobox">
                    <h4>{item.title}</h4>
                    <p className="description">{item.introduction}</p>
                    <p className="colors">{item.colors} Colors</p>
                    <span>R${item.price}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 43rem;
  width: auto;

  h3 {
    position: absolute;
    top: 0rem;
    left: 4rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: #2b2b2b;
  }
  .btnLeft {
    position: absolute;
    left: 30rem;
    top: 615px;
    font-size: 2.5rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #6d6c6c;
    box-shadow: rgba(100, 100, 111, 0.292) 0 0.438rem 1.813rem 0;
    z-index: 99;
    cursor: pointer;
    &:hover {
      background-color: #cdcbcb;
      color: white;
    }
  }
  .btnRight {
    position: absolute;
    right: 30rem;
    top: 615px;
    font-size: 2.5rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #6d6c6c;
    box-shadow: rgba(100, 100, 111, 0.32) 0 0.438rem 1.813rem 0;
    z-index: 99;
    cursor: pointer;
    &:hover {
      background-color: #cdcbcb;
      color: white;
    }
  }
  a {
    color: #2b2b2b;
    object-fit: contain;
  }
  .itensSec5 {
    display: flex;
    align-items: center;
    width: 94%;
    overflow: hidden;
    height: 39rem;
    background-color: transparent;

    .boxSec5 {
      box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
      margin: 1.5rem;
      height: 33rem;
      width: 28rem;
      position: relative;
      background-color: #f5f3f3;
      transition: all 0.5s ease-in-out;
      cursor: pointer;
      overflow-y: hidden;
      img {
        width: 100%;
      }
      .infoBox {
        position: absolute;
        background-color: white;
        bottom: 0;
        width: 100%;
        height: 30%;
        .innerInfobox {
          margin: 0.6rem 1.25rem;
          h4 {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            letter-spacing: 0.063rem;
          }
          .description,
          .colors {
            font-size: 0.9rem;
            font-weight: 400;
            letter-spacing: 0.063rem;
            margin-bottom: 0.4rem;
          }
          span {
            font-size: 1rem;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20rem;
    width: 100vw;
    margin-top: 4rem;
    margin-bottom: 5rem;
    background-color: transparent;
    box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
    h3 {
      position: absolute;
      top: -3rem;
      left: 1.5rem;
      font-size: 1.1rem;
      font-weight: 500;
      color: #2b2b2b;
    }
    .btnLeft {
      position: absolute;
      left: 2.5rem;
      top: 20.5rem;
      font-size: 2rem;
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: gray;
      box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
      z-index: 99;

      cursor: pointer;
      &:hover {
        background-color: #cdcbcb;
        color: white;
      }
    }
    .btnRight {
      position: absolute;
      right: 2.5rem;
      top: 20.5rem;
      font-size: 2rem;
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: gray;
      box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
      z-index: 99;
      cursor: pointer;
      &:hover {
        background-color: #cdcbcb;
        color: white;
      }
    }
    a {
      color: #2b2b2b;
      object-fit: contain;
    }
    .itensSec5 {
      display: flex;
      align-items: center;
      width: 94%;
      overflow: hidden;
      .boxSec5 {
        margin: 1rem;
        height: 24rem;
        width: 20rem;
        position: relative;
        background-color: white;
        box-shadow: null;
        transition: all 0.5s ease-in-out;
        overflow: hidden;
        cursor: pointer;
        img {
          overflow: hidden;
          width: 90%;
        }
        .infoBox {
          position: absolute;
          background-color: white;
          bottom: 0;
          width: 100%;
          height: 40%;
          padding: 0.4rem;

          .innerInfobox {
            margin: 0.1rem;
            h4 {
              font-size: 0.8rem;
              font-weight: 600;
              margin-bottom: 0.1rem;
              letter-spacing: 0.07rem;
            }
            .description,
            .colors {
              font-size: 0.75rem;
              font-weight: 500;
              letter-spacing: 0.063rem;
              margin-bottom: 0.2rem;
            }
            span {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 32rem;
    width: 100vw;
    margin-top: 4rem;
    margin-bottom: 4rem;
    box-shadow: null;
    h3 {
      position: absolute;
      top: -1rem;
      left: 1.5rem;
      font-weight: 500;
      color: #2b2b2b;
      font-size: 1.3rem;
    }
    .btnLeft {
      position: absolute;
      left: 8rem;
      top: 31rem;
      font-size: 2rem;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: gray;
      box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
      z-index: 99;

      cursor: pointer;
      &:hover {
        background-color: #cdcbcb;
        color: white;
      }
    }
    .btnRight {
      position: absolute;
      right: 8rem;
      top: 31rem;
      font-size: 2rem;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: gray;
      box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
      z-index: 99;
      cursor: pointer;
      &:hover {
        background-color: #cdcbcb;
        color: white;
      }
    }
    a {
      color: #2b2b2b;
      object-fit: contain;
    }
    .itensSec5 {
      display: flex;
      align-items: center;
      width: 94%;
      overflow: hidden;

      .boxSec5 {
        margin: 1rem;
        height: 28rem;
        width: 22rem;
        position: relative;
        background-color: #f5f3f3;
        transition: all 0.5s ease-in-out;

        cursor: pointer;
        img {
          overflow: hidden;
          width: 20rem;
        }
        .infoBox {
          position: absolute;
          background-color: white;
          bottom: 0;
          width: 100%;
          height: 40%;
          padding: 0.6rem;

          .innerInfobox {
            margin: 0.25rem;
            h4 {
              font-size: 1.2rem;
              font-weight: 600;
              margin-bottom: 0.2rem;
              letter-spacing: 0.063rem;
            }
            .description,
            .colors {
              font-size: 1rem;
              font-weight: 400;
              letter-spacing: 0.063rem;
              margin-bottom: 0.2rem;
            }
            span {
              font-size: 1.1rem;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1300px) and (-webkit-min-device-pixel-ratio: 2) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 34rem;
    width: 100vw;
    margin-top: 4rem;
    margin-bottom: 3rem;

    h3 {
      position: absolute;
      top: -1rem;
      left: 2.6rem;
      font-weight: 500;
      color: #2b2b2b;
      font-size: 1.5rem;
    }
    .btnLeft {
      position: absolute;
      left: 20rem;
      top: 32rem;
      font-size: 2rem;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: gray;
      box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
      z-index: 99;

      cursor: pointer;
      &:hover {
        background-color: #cdcbcb;
        color: white;
      }
    }
    .btnRight {
      position: absolute;
      right: 20rem;
      top: 32rem;
      font-size: 2rem;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: gray;
      box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
      z-index: 99;
      cursor: pointer;
      &:hover {
        background-color: #cdcbcb;
        color: white;
      }
    }
    a {
      color: #2b2b2b;
      object-fit: contain;
    }
    .itensSec5 {
      display: flex;
      align-items: center;
      width: 94%;
      overflow: hidden;
      .boxSec5 {
        margin: 1rem;
        height: 28rem;
        width: 23rem;
        position: relative;
        background-color: #f5f3f3;
        box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
        transition: all 0.5s ease-in-out;

        cursor: pointer;
        img {
          overflow: hidden;
          width: 20rem;
        }
        .infoBox {
          position: absolute;
          background-color: white;
          bottom: 0;
          width: 100%;
          height: 40%;
          padding: 0.6rem;

          .innerInfobox {
            margin: 0.25rem;
            h4 {
              font-size: 1.2rem;
              font-weight: 600;
              margin-bottom: 0.2rem;
              letter-spacing: 0.063rem;
            }
            .description,
            .colors {
              font-size: 1rem;
              font-weight: 400;
              letter-spacing: 0.063rem;
              margin-bottom: 0.2rem;
            }
            span {
              font-size: 1.1rem;
            }
          }
        }
      }
    }
  }
`;

export default ProductesSugested;
