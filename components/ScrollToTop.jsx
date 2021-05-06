import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretSquareUp} from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

//scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div className="toTop">
      {isVisible && (
        <div onClick={scrollToTop}>
          <a>
          <i><FontAwesomeIcon icon={faCaretSquareUp}></FontAwesomeIcon></i>
          </a>
        </div>
      )}
      <style jsx>{`
      .toTop{
        position: fixed;
        right: 360px;
        top: 895px;
        font-size: 2em;
        color:#f20f0f;
        text-decoration: none;
    }
    
    .toTop a{
        text-decoration: none;
        color:#f20f0f;
    }
    
    @media only screen and (max-width: 640px) {
        .toTop{
            top: 700px;
            right: 57px;
        }
    }

    @media only screen and (min-width: 641px) {
      .toTop{
        position: fixed;
        right: 55px;
        top: 895px;
    }  
      `}</style>
    </div>
  );
}