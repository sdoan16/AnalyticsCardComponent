import React from "react";
import "./index.css";
import Divider from "@material-ui/core/Divider";
import { useSpring, animated } from "react-spring";
import BarGraph from "../BarGraph";
import LineGraph from "../LineGraph";

const calc = (x, y) => [0, 0, 1.05];
const trans = (x, y, s) =>
  `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const AnalyticsCard = ({ name, data, type }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 300, friction: 10 },
  }));

  return (
    <animated.div
      class="cardComponent"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div className="title">
        <h2>{name}</h2>
      </div>
      <Divider variant="middle" />
      <div className="graph">
        {type === "bar" && <BarGraph data={data} />}
        {type === "line" && <LineGraph data={data} />}
      </div>
    </animated.div>
  );
};

export default AnalyticsCard;
