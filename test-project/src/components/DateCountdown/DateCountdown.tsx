import Countdown, { CountdownRendererFn } from "react-countdown";
import "./DateCountdown.scss";
import { useEffect, useState } from "react";

export const DateCountdown = () => {
  const currentDate = new Date();
  const targetDate = new Date("2024-07-24");
  const differenceInMilliseconds = targetDate.getTime() - currentDate.getTime();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderer: CountdownRendererFn = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    const dateLabels =
      windowWidth > 768
        ? [
            { label: "Days", time: days },
            { label: "Hours", time: hours },
            { label: "Minutes", time: minutes },
            { label: "Seconds", time: seconds },
          ]
        : [
            { label: "DD", time: days },
            { label: "HH", time: hours },
            { label: "MM", time: minutes },
            { label: "SS", time: seconds },
          ];
    if (completed) {
      return <p className="countdown__text">Finished!!!</p>;
    } else {
      return (
        <div className="countdown animate__animated animate__fadeInDown animate__delay-2s">
          <div className="countdown__box">
            {dateLabels.map((item, index) =>
              index !== dateLabels.length - 1 ? (
                <div
                  key={Date.now() * Math.random()}
                  className="countdown__box"
                >
                  <div
                    className="countdown__item "
                    key={Date.now() * Math.random()}
                  >
                    <div
                      className="countdown__time"
                      key={Date.now() * Math.random()}
                    >
                      {item.time}
                    </div>
                    <div
                      className="countdown__label"
                      key={Date.now() * Math.random()}
                    >
                      {item.label}
                    </div>
                  </div>
                  <span
                    className="countdown__gap"
                    key={Date.now() * Math.random()}
                  >
                    :
                  </span>
                </div>
              ) : (
                <div
                  key={Date.now() * Math.random()}
                  className="countdown__box"
                >
                  <div
                    className="countdown__item"
                    key={Date.now() * Math.random()}
                  >
                    <div
                      className="countdown__time"
                      key={Date.now() * Math.random()}
                    >
                      {item.time}
                    </div>
                    <div
                      className="countdown__label"
                      key={Date.now() * Math.random()}
                    >
                      {item.label}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      );
    }
  };
  return (
    <>
      {" "}
      <Countdown
        date={Date.now() + differenceInMilliseconds}
        renderer={renderer}
      />
    </>
  );
};
