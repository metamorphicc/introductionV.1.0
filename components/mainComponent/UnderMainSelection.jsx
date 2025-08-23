import "./underMainSelection.css"
import {useEffect, useRef} from "react"

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
        <div className="divMain">
            <div className="cardRight">
                <h1 style={{display: "flex", justifyContent: "center", padding: "10px 0px"}}>Brief introduction</h1>
            I am an 18-year-old front-end developer from faraway lands, and I really enjoy the world of web3. 
            I started my journey in 2023 and am still learning coding. Despite my focus, I am also suitable for other tasks. 
            I am very familiar with cryptocurrency, both the basics and what goes on “under the hood.” 
            You can see my stack, portfolio, and projects on my portfolio website, which I created using technologies such as React + vite + Javascript.
                <div>
                    {/* <NavButton/> */}
                </div>
            </div>
        </div>
    </>
    )

}

export default UnderMainSelection