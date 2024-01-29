import React from "react";
import styled from "styled-components";
import logo from "../../images/logoImg/logo.jpeg";
import Navbar from "../../componentes/navbar/Navbar";
import { Link } from "react-router-dom";
import image1 from "../../images/AboutOn/image1.avif";
import image2 from "../../images/AboutOn/image2.avif";
import image3 from "../../images/AboutOn/image3.avif";
import Footer from "../../componentes/footer/Footer";
const About_On = () => {
  return (
    <Wrapper>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>

        <Navbar />
      </nav>

      <section className="sec1">
        <div className="IframeSection">
          <iframe
            src={`https://www.youtube.com/embed/ILN99_PZzko`}
            frameBorder={0}
            allowFullScreen
            allow="autoplay"
          />
        </div>

        <div className="boxText">
          <h4>Dream On.</h4>
          <p>The On mission: To ignite the human spirit through movement.</p>
        </div>
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="containerText_h4">Welcome to the On Lab</div>
          <p className="pSecText2">
            Technological innovation lies at the heart of On. ‘Better’ is
            achieved through continual experimentation. Never being afraid to
            start again different or break the mold. Dreaming up ground-breaking
            new ideas isn’t enough – we want to make them a physical reality.
            Today, our world-class team of scientists and technicians continue
            to cook up trailblazing innovations within our Zurich-based On Lab.
          </p>
        </div>
      </section>

      <section className="secImage">
        <img src={image1} alt="" />
      </section>

      <section className="sectionText">
        <div
          className="containerSecText"
          style={{
            backgroundColor: "black",
          }}
        >
          <p className="pSecText2" style={{ color: "white" }}>
            The Athlete Spirit guides everyone at On. And like our athletes, we
            are always recalibrating and reengineering toward better. Our goal
            is to make high-performance products with the lowest possible
            footprint – engineered for circularity, designed with preferred
            materials, using enhanced manufacturing methods and distribution
            models. By working from our own On Lab, alongside our most close and
            trusted partners, we can control our manufacturing processes down to
            the details. After all – saving the planet is a team sport.
          </p>
        </div>
      </section>

      <section className="secImage">
        <img src={image2} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="containerText_h4">
            Created by athletes, for athletes
          </div>
          <p className="pSecText2">
            From elite athletes to those just starting out, movement is the
            thread that unites us. Driven by performance. In the On Lab, gold
            medallists work with our engineers to develop the next generation of
            shoe tech. Then the wider On community shows us what we’re working
            for – out in the streets and on the track, all across the world.
          </p>
        </div>
      </section>

      <section className="secImage">
        <img src={image3} alt="" />
      </section>

      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  nav {
    padding: 0 4rem;
    .logo {
      width: 5.25rem;
      margin: 2.55rem 3.75rem;
      border-radius: 50%;
    }
  }
  .sec1 {
    position: relative;
    height: 90vh;
    .IframeSection {
      overflow: hidden;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
    }

    .boxText {
      position: absolute;
      top: 58%;
      left: 5rem;
      width: 50rem;
      h4 {
        font-size: 5rem;
        color: white;
      }
      p {
        font-size: 3rem;
        color: white;
      }
    }
  }
  .sectionText {
    display: flex;
    align-items: center;
    justify-content: center;
    .containerSecText {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 0 4rem;
      .containerText_h4 {
        color: black;
        font-size: 5rem;
        margin-top: 5rem;
        margin-bottom: 2rem;
        font-weight: 500;
      }

      .pSecText2 {
        color: #222121;
        font-size: 2.5rem;
        margin: 3rem 1rem;
        font-weight: 400;
        line-height: 5rem;
      }
    }
  }

  .secImage {
    background-color: black;
    img {
      width: 100%;
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      padding: 0;
      width: 100vw;
      .logo {
        width: 3.25rem;
        margin: 0;
        margin-top: 7rem;
        margin-bottom: 1rem;
      }
    }
    .sec1 {
      position: relative;
      height: 50vh;
      .IframeSection {
        overflow: hidden;
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }
      }

      .boxText {
        position: absolute;
        top: 54%;
        left: 1rem;
        width: 50%;
        h4 {
          font-size: 1.4rem;
          color: white;
        }
        p {
          font-size: 0.9rem;
          color: white;
        }
      }
    }
    .sectionText {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      .containerSecText {
        width: 100%;
        padding: 0 1rem;
        .containerText_h4 {
          color: black;
          font-size: 1.5rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .pSecText2 {
          color: black;
          font-size: 0.9rem;
          margin: 1rem 0.5rem;
          font-weight: 400;
          line-height: 2rem;
          text-align: justify;
        }
      }
    }

    .secImage {
      img {
        width: 100%;
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      padding: 0;
      width: 100vw;
      .logo {
        width: 4rem;
        margin: 0;
        margin-top: 7rem;
        margin-bottom: 1rem;
      }
    }
    .sec1 {
      position: relative;
      height: 55vh;
      .IframeSection {
        overflow: hidden;
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }
      }

      .boxText {
        position: absolute;
        top: 54%;
        left: 1rem;
        width: 50%;
        h4 {
          font-size: 1.7rem;
          color: white;
        }
        p {
          font-size: 1.1rem;
          color: white;
        }
      }
    }
    .sectionText {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      .containerSecText {
        width: 100%;
        padding: 0 1rem;
        .containerText_h4 {
          color: black;
          font-size: 1.8rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .pSecText2 {
          color: black;
          font-size: 1.4rem;
          margin: 1rem 0.5rem;
          font-weight: 400;
          line-height: 2rem;
          text-align: justify;
        }
      }
    }

    .secImage {
      img {
        width: 100%;
      }
    }
  }

  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      padding: 0;
      width: 100vw;
      .logo {
        width: 5rem;
        margin: 7rem 0 1rem 2rem;
      }
    }
    .sec1 {
      position: relative;
      min-height: 60vh;
      .IframeSection {
        overflow: hidden;
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }
      }

      .boxText {
        position: absolute;
        top: 54%;
        left: 1rem;
        width: 50%;
        h4 {
          font-size: 2rem;
          color: white;
        }
        p {
          font-size: 1.2rem;
          color: white;
        }
      }
    }
    .sectionText {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 20rem;
      max-height: 50vh;
      .containerSecText {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0 1rem;
        .containerText_h4 {
          color: black;
          font-size: 1.7rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .pSecText2 {
          color: black;
          font-size: 1.3rem;
          margin: 1rem 0.5rem;
          font-weight: 400;
          line-height: 2.6rem;
          text-align: justify;
        }
      }
    }
    .secImage {
      img {
        width: 100%;
      }
    }
  }
`;
export default About_On;
