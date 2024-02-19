import styled from "styled-components";
import hiking from "../../../../images/cartEmpty/hiking.avif";
import lifestyle from "../../../../images/cartEmpty/lifeStyle.avif";
import roadRunning from "../../../../images/cartEmpty/roadRunning.avif";
import tennis from "../../../../images/cartEmpty/tennis.avif";
import trail from "../../../../images/cartEmpty/trail.avif";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { OpensignUpContext } from "../../../../contexts/OpenSigUpContext";
const Activities = () => {
  useContext;
  const { togglevisibilityCart, setTogglevisibilityCart } = useContext(OpensignUpContext);
  return (
    <Wrapper>
      <span>Activities</span>
      <article>
        <Link to={"/singleproduct/0"}>
          <div className="container" onClick={() => setTogglevisibilityCart(false)}>
            <img src={roadRunning} alt="" />
            <p>Road Running</p>
          </div>
        </Link>
        <Link to={"/singleproduct/3"}>
          <div className="container" onClick={() => setTogglevisibilityCart(false)}>
            <img src={trail} alt="" />
            <p>Trail Running</p>
          </div>
        </Link>
        <Link to={"/singleproduct/7"}>
          <div className="container" onClick={() => setTogglevisibilityCart(false)}>
            <img src={lifestyle} alt="" />
            <p>Lifestyle</p>
          </div>
        </Link>
        <Link to={"/singleproduct/10"}>
          <div className="container" onClick={() => setTogglevisibilityCart(false)}>
            <img src={hiking} alt="" />
            <p> Outdoor</p>
          </div>
        </Link>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;

  span {
    margin-left: 0.5rem;
    font-size: 1.4rem;
    font-weight: 400;
  }
  article {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0.3rem;
      width: 11rem;
      border-radius: 10px;
      cursor: pointer;

      img {
        width: 100%;
        margin-bottom: 0.4rem;
        border-radius: 10px;
      }
      p {
        font-size: 1.2rem;
        font-weight: 500;
        color: #302f2f;
      }
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 0rem;

    span {
      margin-left: 0.5rem;
      font-size: 0.9rem;
      font-weight: 400;
    }
    article {
      margin-top: 1rem;
      margin-bottom: 1rem;
      justify-content: null;
      align-items: null;
      display: grid;
      grid-template-columns: repeat(2, 2fr);
      gap: 3px;

      .container {
        margin: 0rem;
        width: 6rem;
        margin-bottom: 0.5rem;
        img {
          width: 100%;
          margin-bottom: 0.2rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 0rem;
    span {
      margin-left: 0.5rem;
      font-size: 0.9rem;
      font-weight: 400;
    }
    article {
      margin-top: 0.4rem;
      justify-content: null;
      align-items: null;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3px;

      .container {
        margin: 0rem;
        width: 7rem;
        margin-bottom: 0.5rem;
        img {
          width: 100%;
          margin-bottom: 0.2rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 950px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 3rem;
    span {
      margin-left: 0.5rem;
      font-size: 1rem;
      font-weight: 400;
    }
    article {
      flex-direction: null;
      margin: 0rem;
      border-radius: 10px;
      width: 100%;

      .container {
        width: 7rem;

        margin-bottom: 0rem;
        margin: 0rem;
        img {
          width: 100%;
          margin-bottom: 0.2rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
  @media only screen and (min-device-width: 951px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    span {
      margin-left: 0.5rem;
      font-size: 1.7rem;
      font-weight: 400;
    }
    article {
      justify-content: null;
      align-items: null;
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.5rem;
      .container {
        width: 8.5rem;
        margin-bottom: 0rem;
        margin: 0rem;
        img {
          width: 100%;
          margin-bottom: 0.2rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
export default Activities;
