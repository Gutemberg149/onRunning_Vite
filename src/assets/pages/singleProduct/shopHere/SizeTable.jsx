//this component is tpo choose a size and keep the background color of the one that was picked

import styled from "styled-components";
import { useContext, useRef } from "react";
import { SizeChosenContext } from "../../../contexts/SizeChosenContex";
import { listProduct } from "../../../utils/APIArray";
import { useParams } from "react-router-dom";

const SizeTable = () => {
  const { id } = useParams();

  const { selectedIndex, setSelectedIndex, choseSizeFunction } =
    useContext(SizeChosenContext);
  return (
    <Wrapper>
      <article>
        {listProduct[id].sizesArray.map((size, index) => {
          return (
            <div key={index}>
              <>
                {index % 2 == 0 ? (
                  <div
                    key={index}
                    className="divNumber"
                    style={{
                      backgroundColor:
                        selectedIndex === index ? "white" : "#f0eeee",
                      transform:
                        selectedIndex === index ? "scale(1.1)" : "scale(1)",
                      zIndex: selectedIndex === index ? 99 : 87,
                    }}
                    onClick={(e) => choseSizeFunction(e, index)}
                  >
                    {size}
                  </div>
                ) : (
                  <div
                    className="divNumber"
                    key={index}
                    style={{
                      backgroundColor:
                        selectedIndex === index ? "white" : "#e2ccc692",
                      transform:
                        selectedIndex === index ? "scale(1.15)" : "scale(1)",
                      zIndex: selectedIndex === index ? 99 : 87,
                    }}
                    onClick={(e) => choseSizeFunction(e, index)}
                  >
                    {size}
                  </div>
                )}
              </>
            </div>
          );
        })}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  article {
    width: 35rem;
    max-height: 20rem;
    flex-wrap: wrap;
    display: flex;
    .divNumber {
      width: 8.2rem;
      height: 4.5rem;
      margin: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #323131;
      border-radius: 0.2rem;
      box-shadow: rgba(149, 157, 165, 0.204) 0px 8px 24px;
      cursor: pointer;
      &:hover {
        border: 1px solid #f7bd8e;
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    article {
      width: 100%;
      max-height: 50rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: start;

      .divNumber {
        width: 20vw;
        height: 8vh;
        margin: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #565555;
        border-radius: 0.2rem;
        box-shadow: rgba(149, 157, 165, 0.204) 0px 8px 24px;
        font-size: 1.2em;
        cursor: pointer;
        &:hover {
          border: 1px solid #f78e8e;
        }
      }
    }
  }
`;

export default SizeTable;
