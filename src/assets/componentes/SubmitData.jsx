import styled from "styled-components";
import { useState } from "react";
const SubmitData = () => {
  const [orderNumber, setOrderNumber] = useState(""); //set the numbers inside or the order number

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const [userOrderData, setUserOrderData] = useState({}); //store and search for the user order

  //validate email
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmailChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };
  //------------------------------------------------------------------
  //accept only numbers inside the input and max 10 numbers.
  const handleChangeOrderNumber = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) {
      return;
    } else {
      setOrderNumber(value);
    }
  };

  //------------------------------------------------------------------
  //get the order data to search for the order.
  const onFromSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target[0].value,
      orderNumber: e.target[1].value,
    };
    setOrderNumber("");
    setEmail("");
    setUserOrderData(data);
    console.log(userOrderData);
  };
  return (
    <Wrapper>
      <form onSubmit={onFromSubmit}>
        <div className="inputs">
          <div className="inputDiv">
            <label>Order number*</label>
            <input type="text" value={orderNumber} onChange={handleChangeOrderNumber} />
          </div>

          <div className="inputDiv">
            <label>Email*</label>
            <input type="email" maxLength={70} value={email} onChange={handleEmailChange} />
            {error && <h5 className="error">{error}</h5>}
          </div>
          <input type="submit" value={"submit"} className="btn" />
        </div>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  form {
    margin-bottom: 4rem;
    .inputs {
      display: flex;
      margin-bottom: 3rem;
      .inputDiv {
        position: relative;
        width: 25rem;
        height: 2.5rem;
        font-size: 1.4rem;
        border-bottom: 1px solid gray;
        margin-right: 3rem;
        height: 4.5rem;
        .error {
          position: absolute;
          bottom: -2rem;
          color: red;
          font-weight: 400;
        }
        input {
          position: absolute;
          border: none;
          background-color: transparent;
          font-size: 1.4rem;
          bottom: 0.7rem;
          width: 100%;
          &:focus {
            outline: none;
          }
        }

        label {
          position: absolute;
          bottom: 3rem;
          font-size: 1.1rem;
        }
      }
    }
    .btn {
      width: 11rem;
      height: 4.2rem;
      background-color: black;
      color: white;
      border: none;
      border-radius: 2.5rem;
      font-size: 1.3rem;
      cursor: pointer;
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    form {
      margin: 0.3rem 0;

      .inputs {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.4rem;
        .inputDiv {
          position: relative;
          width: 100%;
          height: 1.5rem;
          font-size: 1rem;
          border-bottom: 1px solid gray;
          margin-right: 0.2rem;
          height: 3.5rem;

          .error {
            position: absolute;
            bottom: -2rem;
            color: red;
            font-weight: 400;
          }
          input {
            position: absolute;
            border: none;
            background-color: transparent;
            font-size: 0.8rem;
            bottom: 0.2rem;
            width: 100%;
            &:focus {
              outline: none;
            }
          }

          label {
            position: absolute;
            bottom: 1.1rem;
            font-size: 0.7rem;
          }
        }
      }
      .btn {
        width: 4rem;
        height: 2.2rem;
        background-color: black;
        color: white;
        border: none;
        border-radius: 1.5rem;
        font-size: 1rem;
        margin-top: 2rem;

        cursor: pointer;
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    form {
      margin: 0.3rem 0;

      .inputs {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.4rem;
        .inputDiv {
          position: relative;
          width: 100%;
          height: 1.5rem;
          font-size: 1rem;
          border-bottom: 1px solid gray;
          margin-right: 0.2rem;
          height: 3.5rem;

          .error {
            position: absolute;
            bottom: -2.5rem;
            color: red;
            font-weight: 400;
            font-size: 1.1rem;
          }
          input {
            position: absolute;
            border: none;
            background-color: transparent;
            font-size: 1.1rem;
            bottom: 0.2rem;
            width: 100%;
            &:focus {
              outline: none;
            }
          }

          label {
            position: absolute;
            bottom: 1.8rem;
            font-size: 1rem;
          }
        }
      }
      .btn {
        width: 5rem;
        height: 2.8rem;
        background-color: black;
        color: white;
        border: none;
        border-radius: 1.5rem;
        font-size: 1rem;
        margin-top: 3rem;

        cursor: pointer;
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    form {
      margin-top: 2rem;
      margin-bottom: 2rem;
      .inputs {
        display: flex;
        margin-bottom: 3rem;
        .inputDiv {
          position: relative;
          width: 22rem;
          height: 2rem;
          font-size: 1.2rem;
          border-bottom: 1px solid gray;
          margin-right: 3rem;
          height: 4.5rem;
          .error {
            position: absolute;
            bottom: -2rem;
            color: red;
            font-weight: 400;
          }
          input {
            position: absolute;
            border: none;
            background-color: transparent;
            font-size: 1.2rem;
            bottom: 0.2rem;
            width: 100%;
            &:focus {
              outline: none;
            }
          }

          label {
            position: absolute;
            bottom: 2rem;
            font-size: 1rem;
          }
        }
      }
      .btn {
        width: 10rem;
        height: 3rem;
        background-color: black;
        color: white;
        border: none;
        border-radius: 2.5rem;
        font-size: 0.8rem;
        margin-top: 2rem;
        cursor: pointer;
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1300px) and (-webkit-min-device-pixel-ratio: 2) {
    form {
      margin-top: 2rem;
      margin-bottom: 2rem;
      .inputs {
        display: flex;
        margin-bottom: 3rem;
        .inputDiv {
          position: relative;
          width: 22rem;
          height: 2rem;
          font-size: 1.2rem;
          border-bottom: 1px solid gray;
          margin-right: 3rem;
          height: 4.5rem;
          .error {
            position: absolute;
            bottom: -2rem;
            color: red;
            font-weight: 400;
          }
          input {
            position: absolute;
            border: none;
            background-color: transparent;
            font-size: 1.2rem;
            bottom: 0.2rem;
            width: 100%;
            &:focus {
              outline: none;
            }
          }

          label {
            position: absolute;
            bottom: 2rem;
            font-size: 1rem;
          }
        }
      }
      .btn {
        width: 10rem;
        height: 3rem;
        background-color: black;
        color: white;
        border: none;
        border-radius: 2.5rem;
        font-size: 0.8rem;
        margin-top: 2rem;
        cursor: pointer;
      }
    }
  }
`;
export default SubmitData;
