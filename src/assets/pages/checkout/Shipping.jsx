import styled from "styled-components";
import { useState, useContext } from "react";
import { ShippingContext } from "../../contexts/ShippingContext";
import { useEffect } from "react";

const Shipping = () => {
  const [disabledButton, setDisabledButton] = useState(true);
  const [warningSignalHandle, setWarningSignalHandle] = useState(true); //this is to able or disable the warning signal.
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    docnumber: "",
    street: "",
    neighbohood: "",
    city: "",
    state: "",
    postCode: "",
    country: "",
  });

  // ------------------------------------------------------------------------------------
  //fill up the form

  // Allow letters, spaces, and apostrophe symbol
  const handleKeyDownLetter = (e) => {
    if (!e.key.match(/^[A-Za-z\s']$/) && e.key.length === 1) {
      e.preventDefault(); // Prevent the key press if it's not an allowed character
    }
  };

  // Allow only number keys, backspace, arrow keys, and other control keys
  const handleKeyDownNumber = (e) => {
    if (!e.key.match(/^\d+$/) && e.key !== "Backspace" && e.key !== "ArrowLeft" && e.key !== "ArrowRight" && e.key !== "Tab") {
      e.preventDefault(); // Prevent the key press if it's not a number or a control key
    }
  };

  const handleUserData = (e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const settigngLocalStorage = (e) => {
    localStorage.setItem("UserDatas", JSON.stringify(userData));
  };
  // ----------------------------------------------------------------------------------------------
  const handleUsedataFill = () => {
    const userDataValues = Object.values(userData);
    const userDataEmpty = userDataValues.filter((elem) => {
      return elem === "";
    });

    if (userDataEmpty.length === 1 && userData.docnumber.length === 10 && userData.postCode.length === 8) {
      setDisabledButton(false);
      setWarningSignalHandle(true); //if all form is filled warning is disabled
    } else {
      return setDisabledButton(true);
    }
  };

  // every time one of the form's field be changed it will call the handleUsedataFill
  useEffect(() => {
    handleUsedataFill();
  }, [userData]);

  function changeTheBlockBtnGoToPayment() {
    setWarningSignalHandle(false); //if any of the box is not fill the bottom will be disabled, when user press the disabled btn the warning will pop up.

    if (userData.docnumber.length < 10) {
      setredBorderWarningDocNumber(true);
    }
  }

  //context to change checout from shipping details to payment details, line 108
  const { setMovetoPayment } = useContext(ShippingContext);

  return (
    <Wrapper>
      <div className="shippingContainer">
        <form>
          <div className="inputContainer">
            <div className="inputBox margimRight">
              <input type="text" name="firstname" onChange={handleUserData} onKeyDown={handleKeyDownLetter} maxLength="15" required />
              <span>First name</span>
            </div>

            <div className="inputBox">
              <input type="text" name="lastname" onChange={handleUserData} onKeyDown={handleKeyDownLetter} maxLength="15" required />
              <span>Last name</span>
            </div>
          </div>

          <div className="inputContainer ">
            <div className="inputBox ">
              <input
                type="text"
                name="docnumber"
                onChange={handleUserData}
                onKeyDown={handleKeyDownNumber}
                maxLength="10"
                autoComplete="off"
                placeholder="10 digits"
                required
              />
              <span>Document Number</span>
            </div>
          </div>

          <div className="inputContainer ">
            <div className="inputBox ">
              <input type="text" name="street" onChange={handleUserData} onKeyDown={handleKeyDownLetter} maxLength="25" required />
              <span>Street Adress</span>
            </div>
          </div>

          <div className="inputContainer ">
            <div className="inputBox ">
              <input type="text" name="neighbohood" onChange={handleUserData} onKeyDown={handleKeyDownLetter} maxLength="15" required />
              <span>Neighborhood</span>
            </div>
          </div>

          <div className="inputContainer ">
            <div className="inputBox ">
              <input type="text" name="city" onChange={handleUserData} onKeyDown={handleKeyDownLetter} maxLength="15" required />
              <span>City</span>
            </div>
          </div>

          <div className="inputContainer">
            <div className="inputBox margimRight">
              <input type="text" name="state" onChange={handleUserData} onKeyDown={handleKeyDownLetter} maxLength="2" required />
              <span>State</span>
            </div>

            <div className="inputBox">
              <input type="text" name="postCode" onChange={handleUserData} onKeyDown={handleKeyDownNumber} maxLength="8" placeholder="8 digits" required />
              <span>Post Code</span>
            </div>
          </div>

          <div className="inputContainer ">
            <div className="inputBox ">
              <span className="selectSpan">Country</span>
              <select defaultValue={"brasil"}>
                <option value="andora">Andora</option>
                <option value="brasil">Brazil</option>
                <option value="canada">Canada</option>
                <option value="denmark">Denmark</option>
                <option value="estonia">Estonia</option>
                <option value="finlandia">Finlandia</option>
                <option value="france">France</option>
                <option value="germany">Germany</option>
                <option value="hungary">Hungary</option>
                <option value="ireland">Ireland</option>
                <option value="singapore">Singapore</option>
                <option value="spain">Spain</option>
                Brasil
                <option value="uruguai">Uruguai</option>
              </select>
            </div>
          </div>

          <div className="warningSignal" style={{ display: `${warningSignalHandle ? "none" : "block"}` }}>
            Os campos acima devem estar preenchidos.
          </div>

          <div className="btnContainer">
            {/*disabledButton makes this dic cover the btn making it disabled also the user can click here and able the warning. */}
            <div className="layOverBlock" style={{ display: `${disabledButton ? "block" : "none"}` }} onClick={() => changeTheBlockBtnGoToPayment()}></div>

            <button className="goPayment" onClick={() => setMovetoPayment(true) + settigngLocalStorage()} disabled={disabledButton}>
              Go to payment
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .shippingContainer {
    width: 100%;

    form {
      width: 100%;
      margin-top: 2rem;

      .inputContainer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: relative;
        .inputBox {
          position: relative;
          width: 100%;
          height: 5rem;
          display: flex;
          justify-content: center;
          align-items: center;

          input {
            width: 100%;
            height: 3.5rem;
            outline: none;
            background-color: transparent;
            border: none;
            border: 1px solid lightgray;
            font-size: 1.1rem;
            color: #504f4f;
            font-weight: 300;
            padding-left: 1rem;
          }
          .documentNumber {
            width: 100%;
          }
          span {
            position: absolute;
            left: 0;
            padding: 20px;
            pointer-events: none;
            font-size: 1rem;
            color: gray;
            font-weight: 300;
            transition: all 0.3s;
          }
          .selectSpan {
            transform: translateX(10px) translateY(-25px);
            font-size: 0.7rem;
            padding: 0 10px;
            background-color: white;
          }
          select {
            width: 100%;
            height: 3.5rem;
            outline: none;
            background-color: transparent;
            appearance: none;
            border: none;
            border: 1px solid lightgray;
            font-size: 1.1rem;
            color: #504f4f;
            font-weight: 300;
            padding-left: 1rem;
          }
        }
        input::-webkit-input-placeholder {
          color: transparent;
        }
        input:focus::placeholder {
          color: gray;
        }
        .margimRight {
          margin-right: 1rem;
        }
        .inputBox input:valid ~ span,
        .inputBox input:focus ~ span {
          transform: translateX(10px) translateY(-25px);
          font-size: 0.7rem;
          padding: 0 10px;
          background-color: white;
        }

        .inputBox input:valid,
        .inputBox input:focus {
          border: 0.5px solid #3e3e3e;
        }
      }
      .btnContainer {
        position: relative;
        height: 3.5rem;
        margin-top: 1.2rem;
        border-radius: 0.5rem;
        .layOverBlock {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3.5rem;
          border-radius: 0.5rem;
          background-color: #b3b5b379;
          z-index: 100;
        }
        .goPayment {
          width: 100%;
          height: 3.5rem;
          color: #d8d6d6;
          font-size: 1.1rem;
          background-color: #2b2a2a;
          border: none;
          border-radius: 0.5rem;
          z-index: 99;
          cursor: pointer;
          &:hover {
            background-color: black;
          }
        }
      }
    }

    .warningSignal {
      background-color: #9e0404;
      color: white;
      font-size: 0.8rem;
      padding: 0.3rem 0.4rem;
      border-radius: 1rem;
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    .shippingContainer {
      width: 100%;
      form {
        width: 100%;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        .inputContainer {
          width: 100%;
          display: flex;
          justify-content: space-between;
          position: relative;
          .inputBox {
            position: relative;
            width: 100%;
            height: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;

            input {
              width: 100%;
              height: 3.5rem;
              outline: none;
              background-color: transparent;
              border: none;
              border: 1px solid lightgray;
              font-size: 1.1rem;
              color: #504f4f;
              font-weight: 300;
              padding-left: 1rem;
            }
            .documentNumber {
              width: 100%;
            }
            span {
              position: absolute;
              left: 0;
              padding: 20px;
              pointer-events: none;
              font-size: 1rem;
              color: gray;
              font-weight: 300;
              transition: all 0.3s;
            }
            .selectSpan {
              transform: translateX(10px) translateY(-25px);
              font-size: 0.7rem;
              padding: 0 10px;
              background-color: white;
            }
            select {
              width: 100%;
              height: 3.5rem;
              outline: none;
              background-color: transparent;
              appearance: none;
              border: none;
              border: 1px solid lightgray;
              font-size: 1.1rem;
              color: #504f4f;
              font-weight: 300;
              padding-left: 1rem;
            }
          }
          .margimRight {
            margin-right: 1rem;
          }
          .inputBox input:valid ~ span,
          .inputBox input:focus ~ span {
            transform: translateX(10px) translateY(-25px);
            font-size: 0.7rem;
            padding: 0 10px;
            background-color: white;
          }
          .inputBox input:valid,
          .inputBox input:focus {
            border: 0.5px solid #3e3e3e;
          }
        }
        .btnContainer {
          position: relative;
          margin-top: 1.2rem;
          border-radius: 0.5rem;
          height: 2.5rem;
          width: 8rem;
          .layOverBlock {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2.5rem;
            border-radius: 0.5rem;
            z-index: 100;
          }
          .goPayment {
            width: 100%;
            height: 2.5rem;
            color: #d8d6d6;
            font-size: 1rem;
            background-color: #2b2a2a;
            border: none;
            border-radius: 0.5rem;
            z-index: 99;
            cursor: pointer;
            &:hover {
              background-color: black;
            }
          }
        }
      }

      .warningSignal {
        font-size: 0.7rem;
        padding: 0.3rem 0.3rem;
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    .shippingContainer {
      width: 100%;
      form {
        width: 100%;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        .inputContainer {
          width: 100%;
          display: flex;
          justify-content: space-between;
          position: relative;
          .inputBox {
            position: relative;
            width: 100%;
            height: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;

            input {
              width: 100%;
              height: 3.5rem;
              outline: none;
              background-color: transparent;
              border: none;
              border: 1px solid lightgray;
              font-size: 1.1rem;
              color: #504f4f;
              font-weight: 300;
              padding-left: 1rem;
            }
            .documentNumber {
              width: 100%;
            }
            span {
              position: absolute;
              left: 0;
              padding: 20px;
              pointer-events: none;
              font-size: 1rem;
              color: gray;
              font-weight: 300;
              transition: all 0.3s;
            }
            .selectSpan {
              transform: translateX(10px) translateY(-25px);
              font-size: 0.7rem;
              padding: 0 10px;
              background-color: white;
            }
            select {
              width: 100%;
              height: 3.5rem;
              outline: none;
              background-color: transparent;
              appearance: none;
              border: none;
              border: 1px solid lightgray;
              font-size: 1.1rem;
              color: #504f4f;
              font-weight: 300;
              padding-left: 1rem;
            }
          }
          .margimRight {
            margin-right: 1rem;
          }
          .inputBox input:valid ~ span,
          .inputBox input:focus ~ span {
            transform: translateX(10px) translateY(-25px);
            font-size: 0.7rem;
            padding: 0 10px;
            background-color: white;
          }
          .inputBox input:valid,
          .inputBox input:focus {
            border: 0.5px solid #3e3e3e;
          }
        }
        .btnContainer {
          position: relative;
          margin-top: 1.2rem;
          border-radius: 0.5rem;
          height: 2.5rem;
          width: 8rem;
          .layOverBlock {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2.5rem;
            border-radius: 0.5rem;
            z-index: 100;
          }
          .goPayment {
            width: 100%;
            height: 2.5rem;
            color: #d8d6d6;
            font-size: 1rem;
            background-color: #2b2a2a;
            border: none;
            border-radius: 0.5rem;
            z-index: 99;
            cursor: pointer;
            &:hover {
              background-color: black;
            }
          }
        }
      }

      .warningSignal {
        font-size: 0.7rem;
        padding: 0.3rem 0.3rem;
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1500px) and (-webkit-min-device-pixel-ratio: 2) {
    .shippingContainer {
      width: 100%;
      form {
        width: 100%;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        .inputContainer {
          width: 100%;
          display: flex;
          justify-content: space-between;
          position: relative;
          .inputBox {
            position: relative;
            width: 100%;
            height: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;

            input {
              width: 100%;
              height: 3.5rem;
              outline: none;
              background-color: transparent;
              border: none;
              border: 1px solid lightgray;
              font-size: 1.1rem;
              color: #504f4f;
              font-weight: 300;
              padding-left: 1rem;
            }
            .documentNumber {
              width: 100%;
            }
            span {
              position: absolute;
              left: 0;
              padding: 20px;
              pointer-events: none;
              font-size: 1rem;
              color: gray;
              font-weight: 300;
              transition: all 0.3s;
            }
            .selectSpan {
              transform: translateX(10px) translateY(-25px);
              font-size: 0.7rem;
              padding: 0 10px;
              background-color: white;
            }
            select {
              width: 100%;
              height: 3.5rem;
              outline: none;
              background-color: transparent;
              appearance: none;
              border: none;
              border: 1px solid lightgray;
              font-size: 1.1rem;
              color: #504f4f;
              font-weight: 300;
              padding-left: 1rem;
            }
          }
          .margimRight {
            margin-right: 1rem;
          }
          .inputBox input:valid ~ span,
          .inputBox input:focus ~ span {
            transform: translateX(10px) translateY(-25px);
            font-size: 0.7rem;
            padding: 0 10px;
            background-color: white;
          }
          .inputBox input:valid,
          .inputBox input:focus {
            border: 0.5px solid #3e3e3e;
          }
        }
        .btnContainer {
          position: relative;
          margin-top: 1.2rem;
          border-radius: 0.5rem;
          height: 2.5rem;
          width: 8rem;
          .layOverBlock {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2.5rem;
            border-radius: 0.5rem;
            z-index: 100;
          }
          .goPayment {
            width: 100%;
            height: 2.5rem;
            color: #d8d6d6;
            font-size: 1rem;
            background-color: #2b2a2a;
            border: none;
            border-radius: 0.5rem;
            z-index: 99;
            cursor: pointer;
            &:hover {
              background-color: black;
            }
          }
        }
      }

      .warningSignal {
        font-size: 0.7rem;
        padding: 0.3rem 0.3rem;
      }
    }
  }
`;
export default Shipping;
