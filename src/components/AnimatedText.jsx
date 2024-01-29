import React from "react";
import { useState, useEffect } from "react";
import "./AnimatedTexts.css";

const Character = ({ char, i, offset }) => (
  <div
    key={i}
    className="character"
    data-offset={offset}
    style={{ animationDelay: `-${i * (4000 / 16) - offset}ms` }}
  >
    {char}
  </div>
);

const AnimatedText = () => {
  let isFirefox = typeof InstallTrigger !== "undefined";
  const words = "innovativeconnexions";

  let ANGLE = 360;
  const ANIMATION_DURATION = 4000;

  const [spiralContent, setSpiralContent] = useState([]);

  useEffect(() => {
    const animation = () => {
      ANGLE -= 1;

      document.querySelectorAll(".spiral *").forEach((el, i) => {
        const translateY = Math.sin((ANGLE * Math.PI) / 120) * 100;
        const scale = Math.cos((ANGLE * Math.PI) / 120) * 0.5 + 0.5;

        const offset = parseInt(el.dataset.offset);
        const delay = i * (ANIMATION_DURATION / 16) - offset;

        setTimeout(() => {
          el.style.transform = `translateY(${translateY}px) scale(${scale})`;
        }, delay);
      });

      requestAnimationFrame(animation);
    };

    const characters = words.split("").map((char, i) => {
      const offset = (isFirefox ? 1 : -1) * (ANIMATION_DURATION / 2);
      return <Character key={i} char={char} i={i} offset={offset} />;
    });

    setSpiralContent(characters);

    // @property CSS doesn't work in Firefox, so it must be animated using JavaScript.
    if (isFirefox) {
      animation();
    }

    return () => {
      // Cleanup or clear any resources if needed
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      <div className="container">
        <div className="spiral" id="spiral2">
          {spiralContent}
        </div>
      </div>
    </>
  );
};

export default AnimatedText;
