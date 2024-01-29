import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../../../componentes/navbar/Navbar";
import logo from "../../../../images/logoImg/logo.jpeg";
import Footer from "../../../../componentes/footer/Footer";
import atmosheric from "./atmosheric-run-beyond__1_.mp4";

const TheRunBeyond = () => {
  return (
    <Wrapper>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>

        <Navbar />
      </nav>
      <section className="sec1">
        <h1 className="h1Sec1">
          The Run Beyond series: The power of running as therapy
        </h1>
        <p className="pSec1">
          In a three-part short documentary series, we travelled to some of the
          world’s most unusually named places to explore how runners run beyond
          hardship.
        </p>
      </section>

      <section className="secvideo">
        <video src={atmosheric} width="1920" loop muted autoPlay />
      </section>

      <section className="sectionText">
        <div className="containerSec3">
          <p className="pSec3_botton" style={{ fontSize: "1.7rem" }}>
            For every place named “Lost” and “Anguish”, there’s a town called
            “Hope”. Just like there’s always a way to turn darkness into light.{" "}
            <br /> <br />
            In a series of short documentaries, we meet the runners who did just
            that. Who followed the light that running provided for them during
            darker times. And how they seized their opportunity to Run Beyond.
          </p>
          <h4 className="containerSec3_h4">
            Lost – How Jimmy Watkins found himself
          </h4>
          <p className="pSec3_botton">
            In the penultimate chapter of our five-part video series 26.2 Miles:
            The Runners’ Story, the two remaining runners, Corbin Shaw and
            Hélène Selam Kleih, discuss this so-called “maranoia” with those
            who’ve already experienced crossing the finish line.
            <br /> <br />
            Talking to fashion designer Charles Jeffrey, Corbin shares his hope
            that a focus on mindset throughout his training will help him
            embrace the marathon experience, even when things inevitably get
            tough. “Through this whole journey of training for a marathon, I’ve
            focused on myself mentally,” Corbin explains. “I want to succumb to
            the event and be completely immersed in it.”
            <br /> <br />
            In her search to find the right headspace on race day, Hélene speaks
            with triathlete and running coach Olivia Ross-Hurst, who doesn’t
            sugarcoat the challenge ahead. “Expect the hard times – the marathon
            is a real journey,” is Olivia’s advice. “It’s a mental game, but the
            training is going to give you confidence, and that’s how we tap into
            mental strength.”
            <br /> <br />
            Find out how Corbin and Hélène’s preparations pay off on marathon
            day in the final episode of the series. Olivia sums it up well:
            “It’s going to be a rollercoaster.”
          </p>
        </div>
      </section>

      <section className="IframeSection">
        <iframe
          src={`https://www.youtube.com/embed/21x92GkzaU4`}
          frameBorder={0}
          allowFullScreen
          allow="autoplay"
        />
      </section>

      <section className="sectionText">
        <div className="containerSec3">
          <h4 className="containerSec3_h4">
            Hope – Sydney Allen-Ash on what running can be
          </h4>

          <p className="pSec3_botton">
            “Can you describe the feeling?” Sydney Allen-Ash asks the runners
            she speaks to. Her ambition is to create a space to highlight and
            encourage the simplicity, accessibility and mental benefits of
            running.
            <br /> <br />
            “When I run, I become part of the whole universe,” one runner
            shares. “It saved me,” another reflects. In the town of Hope in
            Canada, Sydney looks beyond time pressure and the competitive nature
            of sport and encourages candid dialog around the joy of running and
            the impact it can have on our lives.
            <br /> <br />
          </p>
        </div>
      </section>

      <section className="IframeSection">
        <iframe
          src={`https://www.youtube.com/embed/8tusqlgi90g`}
          frameBorder={0}
          allowFullScreen
          allow="autoplay"
        />
      </section>

      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: black;
  nav {
    padding: 0 4rem;
    .logo {
      width: 5.25rem;
      margin: 2.55rem 3.75rem;
    }
  }
  .sec1 {
    padding: 2rem 5rem;
    margin-bottom: 5rem;
    .h1Sec1 {
      color: white;
      font-size: 6rem;
      width: 80%;
      font-weight: 500;
      line-height: 7rem;
      margin-bottom: 2rem;
    }
    .pSec1 {
      color: white;
      font-size: 3rem;
      width: 90%;
      font-weight: 300;
      line-height: 4rem;
    }
  }

  .secvideo {
  }
  .sectionText {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
    margin-top: 2rem;
    .containerSec3 {
      width: 95rem;
      .containerSec3_h4 {
        color: #e6e6e6;
        font-size: 3.5rem;
        margin-top: 5rem;
        margin-bottom: 2rem;
      }
      .pSec3_top {
        color: #e6e6e6;
        font-size: 2rem;
        margin-bottom: 3rem;
      }
      .pSec3_botton {
        color: #e6e6e6;
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
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    background-color: black;
    nav {
      padding: 0 0rem;
      .logo {
        width: 3.25rem;
        margin: 0;
        margin-top: 7rem;
      }
    }
    .sec1 {
      padding: 0rem 1rem;
      margin-bottom: 2rem;
      width: 100vw;
      .h1Sec1 {
        color: white;

        font-size: 1.6rem;
        width: 99%;
        font-weight: 500;
        line-height: 2rem;
        margin-bottom: 1rem;
      }
      .pSec1 {
        color: white;
        font-size: 1rem;
        width: 90%;
        font-weight: 300;
        line-height: 2rem;
      }
    }
    .secvideo {
      width: 100vw;
      video {
        width: 100vw;
      }
    }
    .sectionText {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;

      .containerSec3 {
        width: 100vw;
        .containerSec3_h4 {
          color: #e6e6e6;

          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .pSec3_top {
          color: #e6e6e6;
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }
        .pSec3_botton {
          color: #e6e6e6;
          font-size: 1rem;
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
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      padding: 0 0rem;
      .logo {
        width: 4rem;
        margin: 0;
        margin-top: 7rem;
      }
    }
    .sec1 {
      padding: 0rem 1rem;
      margin-bottom: 2rem;
      width: 100vw;
      .h1Sec1 {
        color: white;

        font-size: 1.9rem;
        width: 99%;
        font-weight: 500;
        line-height: 2rem;
        margin-bottom: 1rem;
      }
      .pSec1 {
        color: white;
        font-size: 1.3rem;
        width: 90%;
        font-weight: 300;
        line-height: 2rem;
      }
    }
    .secvideo {
      width: 100vw;
      video {
        width: 100vw;
      }
    }
    .sectionText {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;

      .containerSec3 {
        width: 100vw;
        .containerSec3_h4 {
          color: #e6e6e6;

          font-size: 1.8rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .pSec3_top {
          color: #e6e6e6;
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
        }
        .pSec3_botton {
          color: #e6e6e6;
          font-size: 1.3rem;
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
  }

  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      padding: 0 0rem;
      .logo {
        width: 5rem;
        margin: 0;
        margin-top: 7rem;
      }
    }
    .sec1 {
      padding: 0rem 1rem;
      margin-bottom: 2rem;
      width: 100vw;
      .h1Sec1 {
        color: white;
        font-size: 2.2rem;
        width: 99%;
        font-weight: 500;
        line-height: 2rem;
        margin-bottom: 1rem;
      }
      .pSec1 {
        color: white;
        font-size: 1.6rem;
        width: 90%;
        font-weight: 200;
        line-height: 2rem;
      }
    }
    .secvideo {
      width: 100vw;
      video {
        width: 100vw;
      }
    }
    .sectionText {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;

      .containerSec3 {
        width: 100vw;
        .containerSec3_h4 {
          color: #e6e6e6;

          font-size: 1.9rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .pSec3_top {
          color: #e6e6e6;
          font-size: 1.7rem;
          margin-bottom: 1.5rem;
        }
        .pSec3_botton {
          color: #e6e6e6;
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
  }
`;
export default TheRunBeyond;
