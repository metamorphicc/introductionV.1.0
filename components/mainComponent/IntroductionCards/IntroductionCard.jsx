import "./introductionCard.css";
import NavButton from "../../Buttons/NavButton.jsx";
import "./introductionCard.css";
import { useState } from "react";
import CardTwo from "../../Cards/CardTwo.jsx";
import CardThree from "../../Cards/CardThree.jsx";
import CardFour from "../../Cards/CardFour.jsx";

const IntroductionCard = () => {
  let [currentCard, setCurrentCard] = useState(0);
  let opacityLeft = currentCard != 0;
  let opacityRight = currentCard != 3;

  function handleOnclickButtonCardPlus() {
    setCurrentCard(currentCard + 1);
  }

  function handleOnclickButtonCardMinus() {
    setCurrentCard(currentCard - 1);
  }

  function CardOne() {
    return (
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px 0px",
          }}
        >
          Brief introduction
        </h1>
        <p style={{ fontSize: "20px" }}>
          I am an 18-year-old front-end developer from faraway lands, and I
          really enjoy the world of web3. I started my journey in 2023 and am
          still learning coding. Despite my focus, I am also suitable for other
          tasks. I am very familiar with cryptocurrency, both the basics and
          what goes on “under the hood.” You can see my stack, portfolio, and
          projects on my portfolio website, which I created using technologies
          such as React + vite + Javascript.
        </p>
      </div>
    );
  }

  const allCards = [<CardOne />, <CardTwo />, <CardThree />, <CardFour />];

  return (
    <>
      <div className="divMain">
        <div className="cardRight">
          {allCards[currentCard]}
          <div className="navButtons">
            <div style={{ display: "flex", alignItems: "end" }}>
              <NavButton
                onClick={handleOnclickButtonCardMinus}
                style={{ display: opacityLeft ? "block" : "none" }}
              >
                <img
                  src="../../src/assets/arrowLeft.svg"
                  alt=""
                  style={{ width: "30px" }}
                />
              </NavButton>
            </div>
            <div style={{ display: "flex", alignItems: "end" }}>
              <NavButton
                onClick={handleOnclickButtonCardPlus}
                style={{ display: opacityRight ? "block" : "none" }}
              >
                <img
                  src="../../src/assets/arrow.svg"
                  alt=""
                  style={{ width: "30px" }}
                />
              </NavButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroductionCard;
