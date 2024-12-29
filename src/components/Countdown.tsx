import { useState, useEffect } from "react";

function Countdown() {
  const [counter, setCounter] = useState(90);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [counter]);

  return (
    <div>
      <span
        className={`countdown text-lg ${counter === 0 ? "text-error" : ""}`}
      >
        <span style={{ "--value": counter }}></span>
      </span>
    </div>
  );
}

export default Countdown;
