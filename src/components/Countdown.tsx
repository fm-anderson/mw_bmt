import { useEffect } from "react";
import { CountdownProps } from "../utils/types";

function Countdown({ counter, setCounter }: CountdownProps) {
  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [counter, setCounter]);

  return (
    <div>
      <span
        className={`countdown text-lg ${counter === 0 ? "text-error" : ""}`}
      >
        <span style={{ "--value": counter } as React.CSSProperties}></span>
      </span>
    </div>
  );
}

export default Countdown;
