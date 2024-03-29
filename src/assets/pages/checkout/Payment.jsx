import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { BsCreditCard2Back } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckingCardContext } from "../../contexts/CheckCartContext";
const Payment = () => {
  const [cardContainerOpen, setCardContainerOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumbValido, setCardNumbValido] = useState(false);
  const [numberValueMonth, setNumberValueMonth] = useState("");
  const [numberValueYear, setNumberValueYear] = useState("");
  const [numberValueSecurityNumber, setNumberValueSecurityNumber] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [warningErrorState, setWarningErrorState] = useState(false);

  // This usedContext bellow was necessary bcs the "checkCard" is been used in OrderPlaced page to reload the page and clear the Cart, before that, despite the localstorage has been cleared as the Paymentent is complited, the cart would not automatically clear.
  const { checkCard, setCheckCard } = useContext(CheckingCardContext);

  //The codes bellow are to handle the  max length of value in month and year input. The last one is to restrict input name only to letters no numbers.
  const handleInputCardNumber = (e) => {
    const inputValue = e.target.value;
    const isValidInput = /^\d{0,15}$/.test(inputValue);

    if (isValidInput) {
      const formattedValue = inputValue.slice(0, 16);
      setCardNumber(formattedValue);
      setCardNumbValido(false);
    } else {
      setCardNumbValido(true);
    }
  };

  const handleInputMonth = (e) => {
    const inputValue = e.target.value;
    const parsedValue = parseInt(inputValue, 10);

    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 12) {
      const formattedValue = parsedValue < 10 ? `0${parsedValue}` : parsedValue.toString();
      setNumberValueMonth(formattedValue);
      console.log(parsedValue);
    }
  };

  const handleInputYear = (e) => {
    const inputValue = e.target.value;
    const parsedValue = parseInt(inputValue, 10);

    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 40) {
      const formattedValue = parsedValue < 10 ? `0${parsedValue}` : parsedValue.toString();
      setNumberValueYear(formattedValue);
    }
  };

  const handleInputSecurityNumber = (e) => {
    const inputValue = e.target.value;
    const parsedValue = parseInt(inputValue, 10);

    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 999) {
      const formattedValue = parsedValue < 10 ? `00${parsedValue}` : parsedValue < 100 ? `0${parsedValue}` : parsedValue.toString();

      setNumberValueSecurityNumber(formattedValue);
    }
  };

  const handleInputName = (e) => {
    const value = e.target.value;
    if (!/\d/.test(value)) {
      setNameValue(value);
    }
  };
  //The codes bellow is to assure all inputs are filled out after that the user can finalize the purchase.
  useEffect(() => {
    if (numberValueMonth >= 1 && numberValueYear >= 1 && numberValueSecurityNumber >= 1 && cardNumbValido === true && nameValue != "") {
      setCheckCard(true);
    } else {
      setCheckCard(false);
    }
  }, [numberValueMonth, numberValueYear, numberValueSecurityNumber, cardNumbValido, nameValue]);
  //This function is to clear the local storage once the payment is finalized.
  function clearLocalStorage() {
    if (checkCard) {
      localStorage.removeItem("cartItems");
    }
  }

  let UserDatas = JSON.parse(localStorage.getItem("UserDatas")) || [];
  return (
    <Wrapper>
      <div className="shipping">
        <p className="pShipping">Shipping</p>
        <div className="userInfo">
          <p className="pName">{UserDatas.firstname}</p>
          <p className="pAddress">{UserDatas.street}</p>
          <p className="pCity">
            {UserDatas.city}, {UserDatas.state} {UserDatas.postCode}
          </p>
        </div>
      </div>
      <div className="payment">
        <h5>Payment</h5>
        <div className={`${cardContainerOpen ? "credcardContainer" : "credcardContainer credcardContainerOpen"}`}>
          <div className="credCarttop">
            <div
              className="checkCircle"
              onClick={() => setCardContainerOpen(!cardContainerOpen)}
              style={{ backgroundColor: cardContainerOpen ? "#7fc655" : "white" }}
            >
              <div className="smallCircle"></div>
            </div>
            <div className="credCardBox">
              <BsCreditCard2Back className="creditCard" />
            </div>
            <p>Pay with card</p>
          </div>
          <form>
            <div className="cardInfoContainer">
              <label htmlFor="">Card number</label>

              <input
                id="cCardnumber"
                type="number"
                placeholder="xxxx xxxx xxxx xxxx"
                value={cardNumber}
                onChange={handleInputCardNumber}
                pattern="\d{0,5}"
                required
              />
            </div>
            <div className="cardInfoContainerDouble">
              <div className="infoCardExpireDate ">
                <label>Expiry date</label>
                <div className="inputDate">
                  <input
                    className="expireDate expireDate1"
                    type="number"
                    placeholder="MM"
                    value={numberValueMonth}
                    onChange={handleInputMonth}
                    pattern="\d{0,2}"
                    required
                  />

                  <input className="expireDate" type="number" placeholder="YY" value={numberValueYear} onChange={handleInputYear} pattern="\d{0,2}" required />
                </div>
              </div>
              <div className="infoCard">
                <label>Security number</label>
                <input type="number" placeholder="3 digts" value={numberValueSecurityNumber} onChange={handleInputSecurityNumber} pattern="\d{0,3}" required />
              </div>
            </div>
            <div className="cardInfoContainer">
              <label htmlFor="">Name on the card</label>
              <input type="text" placeholder="Name" value={nameValue} onChange={handleInputName} />
            </div>
          </form>

          {/* This code bellow checks if the warningErrorState is set true or false to display the warning.  */}
          <div className="warningError">
            <p className="warningError_P" style={{ display: `${warningErrorState ? "block" : "none"}` }}>
              Um dos campos acima não está correto.
            </p>
          </div>
          <Link to={`${checkCard ? "/orderplaced" : ""}`}>
            {/* This code bellow checks if the checkCard is set true or false when clicked so it will change the setWarningErrorStat*/}
            <div className="btnPlaceOrder" onClick={() => `${checkCard ? setWarningErrorState(false) : setWarningErrorState(true)}`}>
              <button className={`${checkCard ? "PlaceOrder cardInfoChecked" : "PlaceOrder"}`} onClick={clearLocalStorage}>
                Place your order
              </button>
            </div>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .shipping {
    display: flex;
    width: 36rem;
    justify-content: space-between;
    margin-top: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 0.5px solid #a2a0a0;
    .pShipping {
      font-weight: 500;
      font-size: 1.3rem;
    }
    .userInfo {
      p {
        font-weight: 300;
        font-size: 1.15rem;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 0.3rem;
      }
    }
  }
  .payment {
    margin-top: 3rem;
    height: 37rem;
    h5 {
      font-size: 1.8rem;
      font-weight: 400;
    }
    .credcardContainer {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      border: #c3c1c1 1px solid;
      height: 100%;
      margin-top: 3rem;
      overflow: hidden;

      .credCarttop {
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
        .checkCircle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.5rem;
          height: 1.5rem;
          border: #323131 1px solid;
          border-radius: 50%;
          margin: 0 1rem;
          cursor: pointer;
          .smallCircle {
            width: 0.6rem;
            height: 0.6rem;
            border-radius: 50%;
            background-color: white;
          }
        }
        .credCardBox {
          border: #323131 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.5rem;
          height: 2.2rem;
          border-radius: 0.3rem;
          margin-right: 1rem;
          .creditCard {
            font-size: 1.5rem;
          }
        }
        p {
          font-size: 1.2rem;
          font-weight: 500;
        }
      }
      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 0;
        .cardInfoContainer {
          width: 30rem;
          height: 5rem;
          margin: 0.5rem 0rem;

          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
          }
          input {
            border: #b9b9b9 1px solid;
            width: 30rem;
            height: 3.5rem;
            outline: none;
            padding-left: 2rem;
            font-size: 1.2rem;

            &:focus {
              border: #575656 1px solid;
            }
          }
          label {
            font-size: 0.8rem;
          }
        }
        .cardInfoContainerDouble {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 95%;

          .infoCardExpireDate {
            .inputDate {
              border: 1px solid #b9b9b9;
              height: 3rem;
              width: 12rem;
              margin-right: 1rem;
              margin-bottom: 0.3rem;
              display: flex;
              input::-webkit-outer-spin-button,
              input::-webkit-inner-spin-button {
                -webkit-appearance: none;
              }
              .expireDate {
                border: none;
                width: 50%;
                padding-left: 15%;
                outline: none;
                font-size: 1.1rem;
              }
              .expireDate1 {
                border-right: 1px solid #b9b9b9;
              }
            }
          }
          .infoCard {
            width: 100%;
            height: 5rem;
            margin: 1rem 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 2rem;
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
            }
            input {
              border: #b9b9b9 1px solid;
              width: 15rem;
              height: 3rem;
              outline: none;
              padding-left: 2rem;
              font-size: 1.2rem;
              &:focus {
                border: #575656 1px solid;
              }
            }
          }

          label {
            font-size: 0.8rem;
          }
        }
      }
      .btnPlaceOrder {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0rem;

        .PlaceOrder {
          width: 10rem;
          height: 3rem;
          color: white;
          font-size: 1rem;
          background-color: #616060;
          border: none;
          border-radius: 3rem;
          cursor: pointer;
        }
        .cardInfoChecked {
          background-color: black;
        }
      }
    }

    .credcardContainerOpen {
      height: 33rem;
    }
    .warningError {
      height: 3rem;
      margin-top: 0.5rem;
      padding-left: 1.1rem;
      .warningError_P {
        color: red;
      }
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 2rem;
    .shipping {
      display: flex;
      width: 100vw;
      padding: 0.3rem;
      justify-content: space-between;
      margin-top: 2rem;
      padding-bottom: 0.5rem;
      border-bottom: 0.5px solid #a2a0a0;

      .pShipping {
        font-weight: 500;
        font-size: 0.8rem;
      }
      .userInfo {
        p {
          font-weight: 300;
          font-size: 0.9rem;
          display: flex;
          justify-content: flex-start;
          margin-bottom: 0.3rem;
          margin-left: 0.9rem;
        }
      }
    }
    .payment {
      padding: 0 1rem;
      margin-top: 0.5rem;
      width: 100vw;

      h5 {
        font-size: 1rem;
        font-weight: 400;
      }
      .credcardContainer {
        display: flex;
        flex-direction: column;
        border: transparent 1px solid;
        margin-top: 1rem;
        width: 100%;
        overflow: hidden;
        padding: 0;
        overflow: visible;

        .credCarttop {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          .checkCircle {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.2rem;
            height: 1.2rem;
            border: #323131 1px solid;
            border-radius: 50%;
            margin: 0rem;
            margin-right: 0.6rem;
            cursor: pointer;
            .smallCircle {
              width: 0.6rem;
              height: 0.6rem;
              border-radius: 50%;
              background-color: white;
            }
          }
          .credCardBox {
            border: #323131 1px solid;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3.5rem;
            height: 2.2rem;
            border-radius: 0.3rem;
            margin-right: 0.5rem;
            .creditCard {
              font-size: 1.5rem;
            }
          }
          p {
            font-size: 0.7rem;
            font-weight: 500;
          }
        }
        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .cardInfoContainer {
            width: 100%;
            height: 3rem;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 1rem;
            input {
              border: #b9b9b9 1px solid;
              width: 100%;
              height: 3rem;
              outline: none;
              padding-left: 1rem;
              margin-left: 0.1rem;
              font-size: 0.8rem;
              &:focus {
                border: #575656 1px solid;
              }
            }
            label {
              font-size: 0.8rem;
            }
          }
          .cardInfoContainerDouble {
            flex-direction: column;
            align-items: start;

            .infoCardExpireDate {
              margin-bottom: 1rem;
              .inputDate {
                height: 2rem;
                width: 10rem;
                margin-right: 0rem;
                margin-bottom: 0.6rem;
                border: 1px solid gray;
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                  -webkit-appearance: none;
                }
                .expireDate {
                  height: 2rem;
                  border-bottom: 1px solid gray;
                  font-size: 0.8rem;
                }
                .expireDate1 {
                  height: 2rem;
                }
              }
            }
            .infoCard {
              width: 80%;
              height: 3rem;
              margin: 0;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: start;
              padding-left: 0rem;
              margin-bottom: 1rem;
              input {
                border: #b9b9b9 1px solid;
                width: 99%;
                height: 3rem;
                outline: none;
                padding-left: 1rem;
                font-size: 0.8rem;
                &:focus {
                  border: #575656 1px solid;
                }
              }
            }

            label {
              font-size: 0.9rem;
            }
          }
        }
        .btnPlaceOrder {
          margin-top: 0rem;

          .PlaceOrder {
            margin: 0.5rem 0;
            width: 8rem;
            height: 2.5rem;
            font-size: 0.7rem;
          }
          .cardInfoChecked {
            background-color: black;
          }
        }
      }
      height: 33rem;
    }
    .warningError {
      height: 2rem;
      margin-top: 0.2rem;
      padding-left: 0.6rem;

      .warningError_P {
        color: red;
        font-size: 0.7rem;
      }

      .credcardContainerOpen {
        height: 65vh;
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    .shipping {
      display: flex;
      width: 100vw;
      padding: 0.5rem 1rem;
      justify-content: space-between;
      margin-top: 2rem;
      padding-bottom: 0.5rem;
      border-bottom: 0.5px solid #a2a0a0;
      .pShipping {
        font-weight: 500;
        font-size: 1.3rem;
      }
      .userInfo {
        p {
          font-weight: 300;
          font-size: 1.15rem;
          display: flex;
          justify-content: flex-end;
          margin-bottom: 0.3rem;
        }
      }
    }
    .payment {
      margin-top: 1rem;
      width: 100vw;
      padding: 1rem;

      h5 {
        font-size: 1.2rem;
        font-weight: 400;
      }
      .credcardContainer {
        display: flex;
        flex-direction: column;
        border: transparent 1px solid;
        margin-top: 1rem;
        width: 100%;
        overflow: hidden;
        padding: 0;
        overflow: visible;

        .credCarttop {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          .checkCircle {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.2rem;
            height: 1.2rem;
            border: #323131 1px solid;
            border-radius: 50%;
            margin: 0rem;
            margin-right: 0.5rem;
            cursor: pointer;
            .smallCircle {
              width: 0.6rem;
              height: 0.6rem;
              border-radius: 50%;
              background-color: white;
            }
          }
          .credCardBox {
            border: #323131 1px solid;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3.5rem;
            height: 2.2rem;
            border-radius: 0.3rem;
            margin-right: 1rem;
            .creditCard {
              font-size: 1.5rem;
            }
          }
          p {
            font-size: 1.2rem;
            font-weight: 500;
          }
        }
        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .cardInfoContainer {
            width: 100%;
            height: 4rem;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;

            input {
              border: #b9b9b9 1px solid;
              width: 100%;
              height: 3rem;
              outline: none;
              padding-left: 1rem;
              margin-left: 0.1rem;
              font-size: 1.1rem;
              &:focus {
                border: #575656 1px solid;
              }
            }
            label {
              font-size: 0.8rem;
            }
          }
          .cardInfoContainerDouble {
            .infoCardExpireDate {
              .inputDate {
                height: 3rem;
                width: 10rem;
                margin-right: 0rem;
                margin-bottom: 0.3rem;

                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                  -webkit-appearance: none;
                }
                .expireDate {
                }
                .expireDate1 {
                }
              }
            }
            .infoCard {
              width: 100%;
              height: 5rem;
              margin: 1rem 0;
              display: flex;
              flex-direction: column;
              justify-content: center;

              input {
                border: #b9b9b9 1px solid;
                width: 99%;
                height: 3rem;
                outline: none;
                padding-left: 2rem;
                font-size: 1.2rem;
                &:focus {
                  border: #575656 1px solid;
                }
              }
            }

            label {
              font-size: 0.9rem;
            }
          }
        }
        .btnPlaceOrder {
          margin-top: 1rem;

          .PlaceOrder {
            margin: 1rem 0;
            width: 10rem;
            height: 3rem;
            font-size: 0.9rem;
          }
          .cardInfoChecked {
            background-color: black;
          }
        }
      }

      .credcardContainerOpen {
        height: 65vh;
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1300px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100%;
    .shipping {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 2rem;
      padding-bottom: 0.5rem;
      border-bottom: 0.5px solid #a2a0a0;

      .pShipping {
        font-weight: 500;
        font-size: 1.1rem;
      }
      .userInfo {
        p {
          font-weight: 300;
          font-size: 0.9rem;
          display: flex;
          justify-content: flex-end;
          margin-bottom: 0.3rem;
        }
      }
    }
    .payment {
      margin-top: 0.5rem;
      width: 100%;

      h5 {
        font-size: 1.3rem;
        font-weight: 500;
      }
      .credcardContainer {
        padding: 0.5rem 0;
        display: flex;
        flex-direction: column;
        border: none;
        height: 6rem;
        margin-top: 0.5rem;
        overflow: null;
        width: 100%;
        .credCarttop {
          display: flex;
          align-items: center;
          justify-content: start;
          margin-bottom: 2rem;
          width: 100%;
          padding: 0;
          height: 3rem;
          .checkCircle {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.5rem;
            height: 1.5rem;
            border: #323131 1px solid;
            border-radius: 50%;
            margin: 0;
            margin-right: 0.5em;
            cursor: pointer;
            .smallCircle {
              width: 0.6rem;
              height: 0.6rem;
              border-radius: 50%;
              background-color: white;
            }
          }
          .credCardBox {
            border: #323131 1px solid;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3.5rem;
            height: 2.2rem;
            border-radius: 0.3rem;
            margin-right: 1rem;
            .creditCard {
              font-size: 1.5rem;
            }
          }
          p {
            font-size: 1.2rem;
            font-weight: 500;
          }
        }
        form {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .cardInfoContainer {
            width: 100%;
            height: 5rem;
            margin: 0;
            margin-bottom: 1rem;
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
            }
            input {
              border: #b9b9b9 1px solid;
              width: 100%;
              height: 2.5rem;
              outline: none;
              padding-left: 0.5rem;
              font-size: 1rem;

              &:focus {
                border: #575656 1px solid;
              }
            }
            label {
              font-size: 0.7rem;
            }
          }
          .cardInfoContainerDouble {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 1rem;
            .infoCardExpireDate {
              width: 50%;
              margin: 0;
              height: 5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              .inputDate {
                border: 1px solid #b9b9b9;
                height: 2.4rem;
                width: 9rem;
                margin-right: 0.5rem;
                margin-bottom: 0.3rem;
                display: flex;
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                  -webkit-appearance: none;
                }
                .expireDate {
                  border: none;
                  width: 50%;
                  padding-left: 15%;
                  outline: none;
                  font-size: 1rem;
                }
                .expireDate1 {
                  border-right: 1px solid #b9b9b9;
                }
              }
            }

            .infoCard {
              width: 50%;
              height: 5rem;
              margin: 0;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding-left: 0.5rem;
              input::-webkit-outer-spin-button,
              input::-webkit-inner-spin-button {
                -webkit-appearance: none;
              }
              input {
                border: #b9b9b9 1px solid;
                width: 8rem;
                height: 2.4rem;
                outline: none;
                padding-left: 2rem;
                font-size: 1.2rem;
                &:focus {
                  border: #575656 1px solid;
                }
              }
            }

            label {
              font-size: 0.8rem;
            }
          }
        }
        .btnPlaceOrder {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0rem;

          .PlaceOrder {
            width: 10rem;
            height: 3rem;
            color: white;
            font-size: 1rem;
            background-color: #616060;
            border: none;
            border-radius: 3rem;
            cursor: pointer;
            cursor: pointer;
          }
          .cardInfoChecked {
            background-color: black;
          }
        }
      }

      .credcardContainerOpen {
        height: 33rem;
      }
    }
  }
`;
export default Payment;
