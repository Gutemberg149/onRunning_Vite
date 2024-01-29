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
      if (arrayLength > 1) {
        setArrayLength(arrayLength - 1);
        setMoveCarrossel(moveCarrossel - 318);
      } else {
        return;
      }
    } else if (screenSize.current <= 900) {
      if (arrayLength > 1) {
        setArrayLength(arrayLength - 1);
        setMoveCarrossel(moveCarrossel - 350);
      } else {
        return;
      }
    } else if (screenSize.current <= 1300) {
      if (arrayLength > 1) {
        setArrayLength(arrayLength - 1);
        setMoveCarrossel(moveCarrossel - 580);
      } else {
        return;
      }
    } else {
      if (arrayLength > 1) {
        setArrayLength(arrayLength - 1);
        setMoveCarrossel(moveCarrossel - 604);
      } else {
        return;
      }
    }
  };

  const moveLeft = () => {
    if (screenSize.current < 600) {
      if (arrayLength < prodArrayCarrossel.length) {
        setArrayLength(arrayLength + 1);
        setMoveCarrossel(moveCarrossel + 318);
      } else {
        return;
      }
    } else if (screenSize.current < 900) {
      if (arrayLength < prodArrayCarrossel.length) {
        setArrayLength(arrayLength + 1);
        setMoveCarrossel(moveCarrossel + 350);
      } else {
        return;
      }
    } else if (screenSize.current < 1300) {
      if (arrayLength < prodArrayCarrossel.length) {
        setArrayLength(arrayLength + 1);
        setMoveCarrossel(moveCarrossel + 580);
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
              <div
                className="boxSec5"
                style={{ transform: `translateX(${moveCarrossel}px)` }}
                key={item.id}
              >
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
  height: 56.25rem;
  width: auto;

  h3 {
    position: absolute;
    top: 0px;
    left: 6.25rem;
    font-size: 3.438rem;
    font-weight: 500;
    color: #2b2b2b;
  }
  .btnLeft {
    position: absolute;
    left: 2.5rem;
    top: 520px;
    font-size: 32.5rem;
    width: 5.313rem;
    height: 5.313rem;
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
    top: 32.5rem;
    font-size: 3.125rem;
    width: 5.313rem;
    height: 5.313rem;
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
      margin: 1.563rem;
      height: 43.75rem;
      position: relative;
      background-color: #f5f3f3;
      box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
      transition: all 0.5s ease-in-out;
      cursor: pointer;
      img {
        width: 34.37rem;
      }
      .infoBox {
        position: absolute;
        background-color: white;
        bottom: 0;
        width: 100%;
        height: 25%;
        .innerInfobox {
          margin: 1.25rem;
          h4 {
            font-size: 1.375rem;
            font-weight: 600;
            margin-bottom: 0.625rem;
            letter-spacing: 0.063rem;
          }
          .description,
          .colors {
            font-size: 1.125;
            font-weight: 400;
            letter-spacing: 0.063rem;
            margin-bottom: 0.5rem;
          }
          span {
            font-size: 1.25rem;
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
    height: 30rem;
    width: 100vw;
    margin-top: 4rem;
    margin-bottom: 7rem;

    h3 {
      position: absolute;
      top: -3rem;
      left: 1.5rem;
      font-size: 1.3rem;
      font-weight: 500;
      color: #2b2b2b;
    }
    .btnLeft {
      position: absolute;
      left: 2.5rem;
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
      right: 2.5rem;
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
        position: relative;
        background-color: #f5f3f3;
        box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
        transition: all 0.5s ease-in-out;

        cursor: pointer;
        img {
          overflow: hidden;

          width: 18rem;
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
              font-size: 1rem;
              font-weight: 600;
              margin-bottom: 0.2rem;
              letter-spacing: 0.063rem;
            }
            .description,
            .colors {
              font-size: 1;
              font-weight: 400;
              letter-spacing: 0.063rem;
              margin-bottom: 0.2rem;
            }
            span {
              font-size: 1.25rem;
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
    height: 30rem;
    width: 100vw;
    margin-top: 4rem;
    margin-bottom: 7rem;

    h3 {
      position: absolute;
      top: -3rem;
      left: 1.5rem;
      font-size: 1.3rem;
      font-weight: 500;
      color: #2b2b2b;
      font-size: 1.8rem;
    }
    .btnLeft {
      position: absolute;
      left: 2.5rem;
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
      right: 2.5rem;
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
              font-size: 1.4rem;
              font-weight: 600;
              margin-bottom: 0.2rem;
              letter-spacing: 0.063rem;
            }
            .description,
            .colors {
              font-size: 1.1rem;
              font-weight: 400;
              letter-spacing: 0.063rem;
              margin-bottom: 0.2rem;
            }
            span {
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  }
  /* @media only screen and (min-device-width: 901px) and (max-device-width: 1300px) and (-webkit-min-device-pixel-ratio: 2) {
  } */
`;

export default ProductesSugested;
