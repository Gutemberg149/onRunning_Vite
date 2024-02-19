import styled from "styled-components";
import { useUserAuth } from "../../../contexts/UserAuthContext";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { signUp } = useUserAuth();

  let { errorSignUp } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(name, email, password);
    } catch (error) {
      setErrorMessage(error.message, "BIG ERROR CATCHED");
      console.error("Error signing in: ", error.message, errorMessage);
      setEmail("");
      setPassword("");
      setName("");
    }
  };

  return (
    <Wrapper>
      <div className="innerUserContainer">
        <h4>Create your On account</h4>
        <p>Join the On community for early access to new products, faster checkout and easier returns.</p>

        <form onSubmit={handleSubmit}>
          <div className="fildeHolder">
            <input className="inputRegister" type="email" id="email" required onChange={(e) => setEmail(e.target.value)} value={email} />
            <label htmlFor="email">Email *</label>
          </div>
          <div className="fildeHolder">
            <input className="inputRegister" type="password" id="password" required onChange={(e) => setPassword(e.target.value)} value={password} />
            <label htmlFor="password">Password *</label>
          </div>
          <div className="fildeHolder noMargimBottom">
            <input className="inputRegister" type="text" id="name" required onChange={(e) => setName(e.target.value)} value={name} />
            <label htmlFor="text">Primeiro Nome *</label>
          </div>

          <div className="subscribeContainer">
            <div className="subscribeCheckbox" onClick={() => setIsChecked(!isChecked)}></div>
            <p>Subscribe to the On newsletter to receive email updates about new product releases, exclusive events and athlete stories.</p>
          </div>
          <div className="errorMessageContainerSignUp" style={{ display: errorSignUp ? "block" : " none" }}>
            <p className="errorMessageSignUp">At least one of the fields is wrong.</p>
          </div>
          <div className="btnContainer">
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .innerUserContainer {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 0 2rem;
    h4 {
      font-size: 1.5rem;
      font-weight: 500;
      color: #302f2f;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1.1rem;
      font-weight: 500;
      color: #302f2f;
      margin-bottom: 2rem;
    }
    form {
      .fildeHolder {
        position: relative;
        margin-bottom: 2.5rem;
        border-bottom: 1px solid gray;
        width: 100%;

        .inputRegister {
          position: relative;
          width: 100%;
          outline: none !important;
          border: 0;
          font-size: 1.2rem;
          &:focus ~ label,
          &:valid ~ label {
            position: absolute;
            left: 0;
            bottom: 2rem;
          }
        }
        label {
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
      .noMargimBottom {
        margin-bottom: 1rem;
      }
      .subscribeContainer {
        display: flex;
        justify-content: space-between;
        margin-top: 0rem;
        height: 4rem;
        .subscribeCheckbox {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 1.4rem;
          border: 2px solid gray;
          border-radius: 0.3rem;
          margin-right: 1rem;
          margin-top: 0.3rem;

          cursor: pointer;
          .blackBox {
            width: 1.1rem;
            height: 1.1rem;
            background-color: #302f2f;
            transition: all ease 0.4s;
          }
        }
        p {
          font-size: 1rem;
          color: #393737;
          font-weight: 400;
        }
      }
      .errorMessageContainerSignUp {
        margin-bottom: 1rem;
        height: 2rem;
        .errorMessageSignUp {
          color: #ce0303;
          font-size: 1.2rem;
        }
      }
      .btnContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 0.5rem;
        button {
          width: 15rem;
          height: 3.5rem;
          border: none;
          background-color: black;
          color: white;
          font-size: 1.1rem;
          border-radius: 3rem;
          cursor: pointer;
        }
      }
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
    .innerUserContainer {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      width: 100vw;
      height: 100%;
      padding: 0 0.6rem;

      h4 {
        font-size: 0.8rem;
        font-weight: 500;
        color: #302f2f;
        margin-bottom: 0.2rem;
      }
      p {
        font-size: 0.7rem;
        font-weight: 400;
        color: #302f2f;
        margin-bottom: 1rem;
      }
      form {
        .fildeHolder {
          position: relative;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid gray;
          width: 95vw;

          .inputRegister {
            position: relative;
            width: 100%;
            outline: none !important;
            border: 0;
            font-size: 0.7rem;
            &:focus ~ label,
            &:valid ~ label {
              position: absolute;
              left: 0;
              bottom: 1.5rem;
            }
          }
          label {
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 0.8rem;
            font-weight: 500;
          }
        }

        .subscribeContainer {
          margin-top: 0rem;
          width: 100%;
          height: 4rem;

          .subscribeCheckbox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2.8rem;
            height: 1rem;
            border: 2px solid gray;
            border-radius: 0.3rem;
            margin-right: 0.5rem;
            margin-top: 0.3rem;

            cursor: pointer;
            .blackBox {
              width: 1.1rem;
              height: 1.1rem;
              background-color: #302f2f;
              transition: all ease 0.4s;
            }
          }
          p {
            font-size: 0.7rem;
            color: #393737;
            font-weight: 400;
            height: fit-content;
          }
        }

        .errorMessageContainerSignUp {
          margin-top: 2rem;
          margin-bottom: 0.5rem;
          height: 1.5rem;
          .errorMessageSignUp {
            color: #ce0303;
            font-size: 0.7rem;
          }
        }
        .btnContainer {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 3rem;

          button {
            width: 6rem;
            height: 2rem;
            margin-bottom: 0.6rem;
            border: none;
            background-color: black;
            color: white;
            font-size: 1rem;
            border-radius: 3rem;
            cursor: pointer;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    .innerUserContainer {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      width: 100vw;
      height: 100%;
      padding: 0 0.6rem;

      h4 {
        font-size: 1rem;
        font-weight: 500;
        color: #302f2f;
        margin-bottom: 0.2rem;
      }
      p {
        font-size: 0.8rem;
        font-weight: 400;
        color: #302f2f;
        margin-bottom: 2rem;
      }
      form {
        .fildeHolder {
          position: relative;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid gray;
          width: 95vw;

          .inputRegister {
            position: relative;
            width: 100%;
            outline: none !important;
            border: 0;
            font-size: 1.2rem;
            &:focus ~ label,
            &:valid ~ label {
              position: absolute;
              left: 0;
              bottom: 1.5rem;
            }
          }
          label {
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 0.8rem;
            font-weight: 500;
          }
        }

        .subscribeContainer {
          margin-top: 0rem;
          width: 100%;
          height: 4rem;

          .subscribeCheckbox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2.8rem;
            height: 1.2rem;
            border: 2px solid gray;
            border-radius: 0.3rem;
            margin-right: 0.5rem;
            margin-top: 0.3rem;

            cursor: pointer;
            .blackBox {
              width: 1.1rem;
              height: 1.1rem;
              background-color: #302f2f;
              transition: all ease 0.4s;
            }
          }
          p {
            font-size: 0.8rem;
            color: #393737;
            font-weight: 400;
            height: fit-content;
          }
        }

        .errorMessageContainerSignUp {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          height: 1.5rem;
          .errorMessageSignUp {
            color: #ce0303;
            font-size: 1rem;
          }
        }
        .btnContainer {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 0.5rem;

          button {
            width: 8rem;
            height: 2.5rem;
            margin-bottom: 0.8rem;
            border: none;
            background-color: black;
            color: white;
            font-size: 1rem;
            border-radius: 3rem;
            cursor: pointer;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    .innerUserContainer {
      margin: 0;
      margin-top: 1rem;
      padding: 0 1.5rem;

      h4 {
        font-size: 1.1rem;
        font-weight: 500;
        color: #302f2f;
        margin-bottom: 0.3rem;
      }
      p {
        font-size: 0.9rem;
        font-weight: 400;
        color: #302f2f;
        margin-bottom: 1.5rem;
      }
      form {
        .fildeHolder {
          position: relative;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid gray;
          width: 100%;

          .inputRegister {
            border: 0;
            font-size: 1.2rem;
            &:focus ~ label,
            &:valid ~ label {
              position: absolute;
              left: 0;
              bottom: 1.5rem;
            }
          }
          label {
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 0.9rem;
          }
        }
        .subscribeContainer {
          display: flex;
          justify-content: space-between;
          margin-top: 0rem;
          width: 100%;
          height: 4.2rem;

          .subscribeCheckbox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2.4rem;
            height: 1.2rem;
            border: 2px solid gray;
            border-radius: 0.3rem;
            margin-right: 0.5rem;
            margin-top: 0.3rem;
            cursor: pointer;
            .blackBox {
              width: 1.1rem;
              height: 1.1rem;
              background-color: #302f2f;
              transition: all ease 0.4s;
            }
          }
          p {
            font-size: 0.9rem;
            color: #393737;
            font-weight: 400;
          }
        }

        .errorMessageContainerSignUp {
          margin-top: 0.3rem;
          margin-bottom: 0.5rem;
          height: 1.5rem;
          .errorMessageSignUp {
            color: #ce0303;
            font-size: 1rem;
          }
        }
        .btnContainer {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 0.5rem;

          button {
            width: 8rem;
            height: 2.5rem;
            margin-bottom: 0.8rem;
            border: none;
            background-color: black;
            color: white;
            font-size: 1rem;
            border-radius: 3rem;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    .innerUserContainer {
      margin: 0;
      margin-top: 1rem;
      width: null;
      height: 100%;
      padding: 0 1.5rem;

      h4 {
        font-size: 1.2rem;
        font-weight: 500;
        color: #302f2f;
        margin-bottom: 0.3rem;
      }
      p {
        font-size: 1rem;
        font-weight: 400;
        color: #302f2f;
        margin-bottom: 1.4rem;
      }
      form {
        .fildeHolder {
          position: relative;
          margin-bottom: 1.2rem;
          border-bottom: 1px solid gray;
          width: 100%;
          .inputRegister {
            position: relative;
            width: 100%;
            outline: none !important;
            border: 0;
            font-size: 1.1rem;
            &:focus ~ label,
            &:valid ~ label {
              position: absolute;
              left: 0;
              bottom: 1.5rem;
            }
          }
          label {
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 0.9rem;
          }
        }
        .subscribeContainer {
          display: flex;
          justify-content: space-between;
          margin-top: 0rem;
          width: 100%;
          height: 3.5rem;
          .subscribeCheckbox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2rem;
            height: 1.2rem;
            border: 2px solid gray;
            border-radius: 0.3rem;
            margin-right: 0.5rem;
            margin-top: 0.3rem;
            cursor: pointer;
            .blackBox {
              width: 1.1rem;
              height: 1.1rem;
              background-color: #302f2f;
              transition: all ease 0.4s;
            }
          }
          p {
            font-size: 1rem;
            color: #393737;
            font-weight: 400;
          }
        }

        .errorMessageContainerSignUp {
          margin-top: 0rem;
          margin-bottom: 0.2rem;
          height: 1.5rem;
          .errorMessageSignUp {
            color: #ce0303;
            font-size: 1rem;
          }
        }
        .btnContainer {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 0.9rem;

          button {
            width: 11rem;
            height: 3rem;
            margin-bottom: 0.8rem;
            border: none;
            background-color: black;
            color: white;
            font-size: 1.1rem;
            border-radius: 3rem;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
export default SignUp;
// export function checkUserAndRetrieveInfo() {
//   onSnapshot(collection(db, "myCollection"), (snapshot) => {
//     console.log(snapshot.docs.map((doc) => ({ ...doc.data() })));
//   });
// }
