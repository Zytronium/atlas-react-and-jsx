import dayIcon from "../assets/day.svg";
import eveningIcon from "../assets/evening.svg";
import nightIcon from "../assets/night.svg";

export function Greeting() {
  const hour = new Date().getHours();
  const greetings = {
    morning: (
      <>
        <img src={dayIcon} alt="Good Day"/>
        Good Morning!
      </>
    ),
    afternoon: (
      <>
        <img src={dayIcon} alt="Good Day"/>
        Good Afternoon!
      </>
    ),
    evening: (
      <>
        <img src={eveningIcon} alt="Good Evening"/>
        Good Evening!
      </>
    ),
    night: (
      <>
        <img src={nightIcon} alt="Good Night"/>
        Good Night!
      </>
    )
  }
  const timeOfDay =
    hour >= 6 && hour < 12 ? 'morning'
      : hour >= 12 && hour < (12 + 5) ? 'afternoon'
        : hour >= (12 + 5) && hour < (12 + 9) ? 'evening'
          : 'night';
  const greeting = greetings[timeOfDay];

  return (
    <h1 className="greeting">{greeting}</h1>
  );
}
