import styled from "styled-components";
import Activities from "./Activities";
import cards from "../../../../images/logoImg/cards.png";
import { IoIosCloseCircle } from "react-icons/io";
import { useContext } from "react";
import { OpensignUpContext } from "../../../../contexts/OpenSigUpContext";

const CartEmpty = () => {
  const { setTogglevisibilityCart } = useContext(OpensignUpContext);

  return (
    <Wrapper>
      <div className="cartBody">
        <div className="topContainer">
          <h3>Your cart is empty</h3>

          <div id="closeBtnNav" onMouseEnter={() => setTogglevisibilityCart(false)} onMouseLeave={() => setTogglevisibilityCart(true)}>
            <IoIosCloseCircle className="close-icon" />
          </div>
        </div>

        <Activities />
        <div className="paymentMethods">
          <p>Available payment methods</p>
          <img src={cards} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .cartBody {
    padding: 1rem 2rem;
    .topContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
        font-size: 2rem;
        color: #3a3939;
        font-weight: 500;
      }
      .searchIcon {
        position: absolute;
        right: 2rem;
        font-size: 1.4rem;
        cursor: pointer;
      }
      #closeBtnNav {
        display: none;
      }
    }

    .paymentMethods {
      margin-top: 2rem;
      p {
        margin-left: 0.7rem;
        margin-bottom: 0.4rem;
        font-size: 1rem;
      }
      img {
        width: 20rem;
      }
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    .cartBody {
      padding: 0.2rem;

      .topContainer {
        height: 2.5rem;
        h3 {
          font-size: 0.8rem;
          color: #3a3939;
          margin-left: 0.5rem;
          margin-bottom: 0rem;
          font-weight: 500;
        }
        #closeBtnNav {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2rem;
          width: 2rem;
          margin-left: 0rem;
          .close-icon {
            color: #af0303;
            font-size: 1.5rem;
          }
        }
      }

      .paymentMethods {
        margin-top: 0rem;
        p {
          margin-bottom: 0.1rem;
          font-size: 0.8rem;
        }
        img {
          margin-left: 0.5rem;
          width: 9rem;
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    .cartBody {
      padding: 0.5rem;

      .topContainer {
        height: 1.5rem;
        h3 {
          font-size: 1.1rem;
          color: #3a3939;
          margin-left: 0.5rem;
          margin-bottom: 0rem;
          font-weight: 500;
        }
        #closeBtnNav {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 3rem;
          width: 3rem;
          margin-left: 0rem;
          .close-icon {
            color: #af0303;
            font-size: 1.8rem;
          }
        }
      }

      .paymentMethods {
        margin-top: 0rem;
        p {
          margin-bottom: 0.1rem;
          font-size: 1rem;
        }
        img {
          margin-left: 0.5rem;
          width: 14rem;
        }
      }
    }
  }

  @media only screen and (min-device-width: 601px) and (max-device-width: 950px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100%;
    .cartBody {
      padding: 0.3rem;
      .topContainer {
        h3 {
          width: 100%;
          font-size: 1.3rem;
          color: #3a3939;
          margin-left: 0.5rem;
          margin-bottom: 0rem;
          font-weight: 500;
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
      .paymentMethods {
        margin-top: 4rem;
        p {
          margin-left: 0.5rem;
          margin-bottom: 0.6rem;
          font-size: 0.9rem;
        }
        img {
          width: 20rem;
        }
      }
    }
  }
  @media only screen and (min-device-width: 951px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100%;
    .cartBody {
      margin: 0.5rem;
      .topContainer {
        h3 {
          width: 100%;
          font-size: 1.5rem;
          color: #3a3939;
          margin-left: 0.5rem;
          margin-bottom: 0rem;
          font-weight: 500;
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
      .paymentMethods {
        margin-top: 2rem;
        p {
          margin-left: 0.5rem;
          margin-bottom: 0.6rem;
          font-size: 1.3rem;
        }
        img {
          width: 25rem;
        }
      }
    }
  }
`;
export default CartEmpty;
