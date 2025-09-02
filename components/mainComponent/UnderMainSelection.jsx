import "./underMainSelection.css"
import {useEffect, useRef} from "react"
import NavButton from "../Buttons/NavButton";
import IntroductionCard from "./IntroductionCards/IntroductionCard.jsx";

const UnderMainSelection = () => {

    const animationRef = useRef(null); 
    const textToType = "Hi, I am Morph!";

  useEffect(() => {
    const element = document.getElementById("test");
    let i = 0;
    
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }

    element.innerHTML = '';
    element.style.borderRight = 'none';

    function type() {
      if (i < textToType.length) {
        element.innerHTML += textToType.charAt(i);
        i++;
        animationRef.current = setTimeout(type, 100);
      } else {
        element.style.borderRight = '.15em solid orange';
        animationRef.current = setTimeout(() => {
          element.style.borderRight = 'none';
        }, 500);
      }
    }

    type();

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []); 


    return (
    <>
      
        <div className="divMain">
            <div>
                <h1 style={{fontSize: "40px", fontWeight: "600"}} id="test"></h1>
                <small>Web3/Web2 programming, influencer, contracts developer</small>
            </div>
        </div>
        <IntroductionCard/>
    </>
    )

}

export default UnderMainSelection