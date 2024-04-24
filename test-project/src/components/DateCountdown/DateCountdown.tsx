import Countdown, { CountdownRendererFn } from "react-countdown"
import "./DateCountdown.scss"

export const DateCountdown = () => {

    const currentDate = new Date();
    const targetDate = new Date('2024-07-24');
    const differenceInMilliseconds = targetDate.getTime() - currentDate.getTime();
    const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {

            return <p className="countdown__text">Finished!!!</p>;
        } else {

            return <div className="countdown"><span className="countdown__text">{days}:{hours}:{minutes}:{seconds}</span><div className="countdown__labels"></div></div>;
        }
    };
    return (
        <>  <Countdown date={Date.now() + differenceInMilliseconds}
            renderer={renderer}
        />,</>
    )
}
