import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useState, useContext } from "react";
import { listProduct } from "../../utils/APIArray";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { OpensignUpContext } from "../../contexts/OpenSigUpContext";

const SearchDropDown = () => {
  const [handleSearch, setHandleSearch] = useState(""); //query
  const [productQuery, setproductQuery] = useState(""); //APIquery

  const [sugestedOption, setSugestedOption] = useState(""); //sugestions
  const [data, setData] = useState([]);

  const [toggleAllProds, setToggleAllProds] = useState(true);

  //------------------------------ Handle search ---------------------------
  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setproductQuery(handleSearch);
    }, 400);
    return () => clearTimeout(timeOutID);
  }, [handleSearch]);

  const handleSearchFunction = (e) => {
    setHandleSearch(e.target.value);
  };

  const sugestedFunction = (e) => {
    const text = e.target.textContent;
    setSugestedOption(text);
  };

  useEffect(() => {
    const sugested = listProduct.filter((item) => {
      const sugestedLowerCase = sugestedOption.toLocaleLowerCase().replace(/\s/g, "");
      return item.title.toLocaleLowerCase().replace(/\s/g, "") === sugestedLowerCase;
    });
    setData(sugested);
  }, [sugestedOption]);

  //This context is to open and close dropDown container using the X icon when the screen is small.
  const { setTogglevisibilitySearch } = useContext(OpensignUpContext);

  return (
    <Wrapper>
      <div className="bodyContainer">
        <section className="search">
          <input
            type="text"
            onChange={handleSearchFunction}
            value={handleSearch}
            placeholder={"Search for products"}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Search for products")}
          />
          <BsSearch className="searchIcon" />
          <div className="closeBtnNav" onMouseEnter={() => setTogglevisibilitySearch(false)} onMouseLeave={() => setTogglevisibilitySearch(true)}>
            <IoIosCloseCircle className="close-icon" />
          </div>
        </section>

        <section className="suggestedSearch">
          <p className="pSugested">Suggested Search</p>
          <div className="innerSugested" onClick={() => setToggleAllProds(false)}>
            <div className="sugested" onClick={(e) => sugestedFunction(e)}>
              <p>Cloud Rock</p>
            </div>
            <div className="sugested" onClick={(e) => sugestedFunction(e)}>
              <p>Cloudswift</p>
            </div>
            <div className="sugested" onClick={(e) => sugestedFunction(e)}>
              <p>Cloud Vista</p>
            </div>
            <div className="sugested" onClick={(e) => sugestedFunction(e)}>
              <p>The Roger</p>
            </div>
            <div className="sugested" onClick={(e) => sugestedFunction(e)}>
              <p>Cloudx</p>
            </div>
            <div className="sugested" onClick={(e) => sugestedFunction(e)}>
              <p>Cloud Boom</p>
            </div>
          </div>
        </section>

        <section className="products">
          <div className="topOftheProducts">
            {toggleAllProds ? (
              <p className="pProd">Products</p>
            ) : (
              <div className="showAllItensIcon" onClick={() => setToggleAllProds(true)}>
                <p>Click for all products</p>
              </div>
            )}
          </div>
          {toggleAllProds ? (
            <div className="prodsContainer">
              {listProduct
                .filter((item) => {
                  const prodTitle = item.title.toLowerCase().replace(/\s/g, "");
                  const productQueryFinal = productQuery.toLowerCase().replace(/\s/g, "");

                  return prodTitle.includes(productQueryFinal);
                })
                .map((item) => {
                  return item.type ? (
                    ""
                  ) : (
                    <Link to={`/singleproduct/${item.id}`} key={item.id}>
                      <div className="prodContainer" key={item.id} onClick={() => setTogglevisibilitySearch(false)}>
                        <div className="upperPart">
                          <img src={item.img01} alt="" />
                        </div>
                        <div className="bottomPart">
                          <p className="name">{item.title}</p>
                          <p className="introduction">{item.introduction}</p>
                          <p className="colors">{item.colors} colors</p>
                          <p className="price">R$ {item.price},00</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : (
            data[0] && (
              <Link to={`/singleproduct/${data[0].id}`}>
                <div className="prodsContainer">
                  <div className="prodContainer" key={data[0].id} onClick={() => setTogglevisibilitySearch(false)}>
                    <div className="upperPart">
                      <img src={data[0].img01} alt="" />
                    </div>
                    <div className="bottomPart">
                      <p className="name">{data[0].title}</p>
                      <p className="introduction">{data[0].introduction}</p>
                      <p className="colors">{data[0].colors} colors</p>
                      <p className="price">R$ {data[0].price},00</p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-y: scroll;
  padding: 2rem;
  width: 100%;
  padding-bottom: 3rem;
  .bodyContainer {
    width: 100%;
    height: 55rem;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    align-items: center;
    overflow-x: hidden;
    .search {
      width: 100%;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      display: flex;
      justify-content: start;
      align-items: center;
      position: relative;
      padding-left: 3rem;
      input {
        width: 80%;
        height: 2.8rem;
        border-radius: 10rem;
        background-color: #e3e2e2;
        border: none;
        outline: none !important;
        font-size: 1.5rem;
        padding-left: 2rem;
        &::placeholder {
          font-size: 1.2rem;
          font-weight: 400;
          color: #454444;
        }
      }
      .searchIcon {
        position: absolute;
        right: 6rem;
        font-size: 1.2rem;
        cursor: pointer;
      }
      .closeBtnNav {
        display: none;
      }
    }

    .suggestedSearch {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 2rem;
      width: 100%;

      .pSugested {
        font-size: 1rem;
        margin-bottom: 1rem;
        margin-left: 3rem;
      }
      .innerSugested {
        width: 100%;
        height: 4rem;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 3rem;
        margin-left: 2rem;
        .sugested {
          margin: 0.9rem;
          width: 10rem;
          padding: 0.8rem 1.6rem 0.8rem 1.6rem;
          margin-bottom: 1rem;
          height: 3.2;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b3b3b;
          background-color: #e7e6e6;
          border-radius: 3rem;
          cursor: pointer;
          &:hover {
            background-color: #cfcece;
          }
        }
      }
    }

    .products {
      width: 100%;
      margin-top: 4.5rem;
      .topOftheProducts {
        padding-left: 3rem;
        .pProd {
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
        }
        .showAllItensIcon {
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
        }
      }

      .prodsContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        cursor: pointer;
        .prodContainer {
          width: 15rem;
          height: 20rem;
          margin: 0.5rem;
          display: flex;
          flex-direction: column;

          .upperPart {
            height: 57%;
            background-color: #e9e8e8;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 100%;
            }
          }
          .bottomPart {
            height: 43%;
            background-color: #fcf6f2;
            padding: 0.4rem;
            .name {
              font-size: 1rem;
              font-weight: 600;
              color: #535252;
              margin-bottom: 0.3rem;
            }
            .introduction,
            .price,
            .colors {
              font-size: 0.9rem;
              color: #4d4d4d;
              margin-bottom: 0.3rem;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 0;
    margin: 0;
    width: 100%;
    .bodyContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      height: 35rem;
      margin-bottom: 1rem;
      .search {
        width: 90%;
        margin-top: 1.5rem;
        margin-bottom: 1rem;

        input {
          margin-top: 0.5rem;
          width: 99%;
          height: 2.5rem;
          &::placeholder {
            font-size: 1rem;
          }
        }
        .searchIcon {
          top: 1.5rem;
          right: 4.5rem;
          font-size: 1rem;
          cursor: pointer;
        }
        .closeBtnNav {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 3rem;
          width: 3rem;
          right: 0rem;
          top: -2rem;
          .close-icon {
            color: #af0303;
            font-size: 1.8rem;
          }
        }
      }

      .suggestedSearch {
        margin-top: 1rem;
        width: 96%;
        height: 20rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .pSugested {
          font-size: 1rem;
          margin-bottom: 0;
          margin-left: 0;
        }
        .innerSugested {
          width: 100%;
          height: 10rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 0;
          margin-left: 0;

          .sugested {
            margin: 0.2rem 1.4rem;
            width: 7rem;
            height: 5.8;
            font-size: 0.9rem;
            padding: 0.5rem 0.6rem;
            margin-bottom: 0;

            cursor: pointer;
            &:hover {
            }
          }
        }
      }

      .products {
        width: 99%;
        margin-top: 1.5rem;
        .topOftheProducts {
          padding-left: 3rem;
          .pProd {
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
          }
          .showAllItensIcon {
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
          }
        }
        .prodsContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;

          cursor: pointer;
          .prodContainer {
            width: 11rem;
            height: 20rem;
            margin: 0.9rem 0.3rem;
            display: flex;
            flex-direction: column;

            .upperPart {
              height: 50%;
              background-color: #e9e8e8;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 11rem;
              }
            }
            .bottomPart {
              display: flex;
              flex-direction: column;
              align-items: start;
              justify-content: center;

              height: 50%;
              padding: 0.2rem 0.4rem;
              .name {
                font-size: 0.9rem;
                font-weight: 600;
                color: #535252;
                margin-bottom: 0.5rem;
              }
              .introduction,
              .price,
              .colors {
                text-align: start;
                font-size: 0.8rem;
                color: #4d4d4d;
                margin-bottom: 0.8rem;
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 0;
    width: 100%;
    .bodyContainer {
      width: 99%;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 45rem;
      margin-bottom: 1rem;
      .search {
        width: 80%;
        margin-top: 1.5rem;
        margin-bottom: 1rem;

        input {
          margin-top: 0.5rem;
          width: 99%;
          height: 2.5rem;
          &::placeholder {
            font-size: 1rem;
          }
        }
        .searchIcon {
          top: 1.5rem;
          right: 4.5rem;
          font-size: 1rem;
          cursor: pointer;
        }
        .closeBtnNav {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 3rem;
          width: 3rem;
          right: -2rem;
          top: -2rem;
          .close-icon {
            color: #af0303;
            font-size: 1.8rem;
          }
        }
      }

      .suggestedSearch {
        margin-top: 1rem;
        width: 96%;
        height: 20rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .pSugested {
          font-size: 1.6rem;
          margin-bottom: 0;
          margin-left: 0;
        }
        .innerSugested {
          width: 100%;
          height: 10rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 0;
          margin-left: 0;

          .sugested {
            margin: 0.8rem 1.4rem;
            width: 9rem;
            height: 6.2;
            font-size: 1.1rem;
            font-weight: 500;
            padding: 0.5rem 0.6rem;
            margin-bottom: 0;

            cursor: pointer;
            &:hover {
            }
          }
        }
      }

      .products {
        width: 99%;
        margin-top: 1.5rem;

        .pProd {
          margin-left: 1rem;
        }
        .prodsContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          cursor: pointer;
          .prodContainer {
            width: 12rem;
            height: 22rem;
            margin: 0.8rem 0.5rem;
            display: flex;
            flex-direction: column;
            .upperPart {
              width: 100%;
              height: 50%;
              background-color: #e9e8e8;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 100%;
              }
            }
            .bottomPart {
              display: flex;
              flex-direction: column;
              align-items: start;
              justify-content: center;
              width: 100%;
              height: 50%;
              padding: 0.5rem;
              .name {
                font-size: 1rem;
                font-weight: 600;
                color: #535252;
                margin-bottom: 0.5rem;
              }
              .introduction,
              .price,
              .colors {
                text-align: start;
                font-size: 0.9rem;
                color: #4d4d4d;
                margin-bottom: 0.8rem;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (min-device-width: 901px) and (max-device-width: 1300px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 0;
    width: 100%;
    .bodyContainer {
      width: 99%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .search {
        width: 75%;
        margin-top: 1.5rem;
        margin-bottom: 1rem;

        input {
          margin-top: 0.5rem;
          width: 99%;
          height: 2.5rem;
          &::placeholder {
            font-size: 1rem;
          }
        }
        .searchIcon {
          top: 1.5rem;
          right: 4.5rem;
          font-size: 1rem;
          cursor: pointer;
        }
        .closeBtnNav {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 3rem;
          width: 3rem;
          right: -3.5rem;
          top: -1.5rem;
          .close-icon {
            color: #af0303;
            font-size: 1.8rem;
          }
        }
      }
      .suggestedSearch {
        margin-top: 1rem;
        width: 96%;
        height: 20rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .pSugested {
          font-size: 1.6rem;
          margin-bottom: 0;
          margin-left: 0;
        }
        .innerSugested {
          width: 100%;
          height: 10rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 0;
          margin-left: 0;

          .sugested {
            margin: 0.8rem 1.4rem;
            width: 9rem;
            height: 6.2;
            font-size: 1.1rem;
            font-weight: 500;
            padding: 0.5rem 0.6rem;
            margin-bottom: 0;

            cursor: pointer;
            &:hover {
            }
          }
        }
      }

      .products {
        width: 99%;
        margin-top: 1.5rem;

        .pProd {
          margin-left: 1rem;
          font-size: 1.4rem;
          font-weight: 500;
        }
        .prodsContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin-bottom: 3rem;
          cursor: pointer;
          .prodContainer {
            width: 15rem;
            height: 24rem;
            margin: 2rem 0.5rem;
            display: flex;

            .upperPart {
              width: 100%;
              height: 50%;
              background-color: #e9e8e8;
              display: flex;
              justify-content: center;
              align-items: start;
              img {
                width: 100%;
              }
            }
            .bottomPart {
              display: flex;
              flex-direction: column;
              align-items: start;
              justify-content: center;
              width: 100%;
              height: 50%;
              padding: 0.5rem;
              .name {
                font-size: 1.1rem;
                font-weight: 600;
                color: #535252;
                margin-bottom: 0.4rem;
              }
              .introduction,
              .price,
              .colors {
                text-align: start;
                font-size: 1rem;
                color: #4d4d4d;
                margin-bottom: 0.8rem;
              }
            }
          }
        }
      }
    }
  }
`;
export default SearchDropDown;
