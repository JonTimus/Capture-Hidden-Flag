import React, { useState, useEffect } from "react";

const TypewriterFlag = () => {
  const [flag, setFlag] = useState(null);
  const [loading, setLoading] = useState(true);
  const [displayedChars, setDisplayedChars] = useState();
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    // Function to fetch the flag from the given URL
    const fetchFlag = async () => {
      try {
        const response = await fetch(
          "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/616e63"
        );
        const data = await response.text();
        setFlag(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the flag:", error);
        setLoading(false);
      }
    };

    fetchFlag();
  }, []);

  useEffect(() => {
    // Trigger the animation when the flag is loaded and animation hasn't been triggered yet
    if (flag && !animationTriggered) {
      setAnimationTriggered(true);

      // Set up the timer to increment the number of displayed characters
      const timer = setInterval(() => {
        setDisplayedChars((prevChars) => prevChars + 1);
      }, 500); // Half-second delay between each character

      // Clear the timer after all characters have been displayed
      return () => clearInterval(timer);
    }
  }, [flag, animationTriggered]);

  return (
    <div>
      {/* Render "Loading..." while fetching the flag */}
      {loading ? (
        "Loading..."
      ) : (
        // Render the flag as a list, with each character as a list item
        <ul>
          {flag &&
            flag
              .split("")
              .slice(0, displayedChars)
              .map((char, index) => <li key={index}>{char}</li>)}
        </ul>
      )}
    </div>
  );
};

export default TypewriterFlag;
