import styled from "styled-components";
import hiking from "../../../../images/cartEmpty/hiking.avif";
import lifestyle from "../../../../images/cartEmpty/lifeStyle.avif";
import roadRunning from "../../../../images/cartEmpty/roadRunning.avif";
import tennis from "../../../../images/cartEmpty/tennis.avif";
import trail from "../../../../images/cartEmpty/trail.avif";

const Activities = () => {
  return (
    <Wrapper>
      <span>Activities</span>
      <article>
        <div className="container">
          <img src={roadRunning} alt="" />
          <p>Road Running</p>
        </div>
        <div className="container">
          <img src={trail} alt="" />
          <p>Trail Running</p>
        </div>
        <div className="container">
          <img src={lifestyle} alt="" />
          <p>Lifestyle</p>
        </div>
        <div className="container">
          <img src={hiking} alt="" />
          <p> Outdoor</p>
        </div>
        <div className="container">
          <img src={tennis} alt="" />
          <p>Tennis</p>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 4rem;

  span {
    margin-left: 1.5rem;
    font-size: 1.7rem;
    font-weight: 400;
  }
  article {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 1rem;
      width: 12rem;
      border-radius: 10px;
      cursor: pointer;
      img {
        width: 180px;
        margin-bottom: 0.4rem;
        border-radius: 10px;
      }
      p {
        font-size: 1.4rem;
        font-weight: 500;
        color: #302f2f;
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 729px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 0rem;
    span {
      margin-left: 0.5rem;
      font-size: 1.3rem;
      font-weight: 400;
    }
    article {
      justify-content: null;
      align-items: null;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
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
  @media only screen and (min-device-width: 730px) and (max-device-width: 950px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 3rem;

    span {
      margin-left: 0.5rem;
      font-size: 1.3rem;
      font-weight: 400;
    }
    article {
      justify-content: null;
      align-items: null;
      display: flex;
      flex-wrap: wrap;
      margin-top: 0.5rem;
      .container {
        width: 19%;
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
    margin-top: 2rem;

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
`;
export default Activities;
