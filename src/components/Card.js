import React from "react";
import { Motion, spring, presets } from "react-motion";

const Card = ({ description, number, isChecked = false, handleClick }) => {
  return (
    <Motion
      defaultStyle={{ opacity: 0.5, x: 0, y: 1, z: 0 }}
      style={{
        opacity: spring(isChecked ? 1 : 0.5),
        x: spring(isChecked ? 0 : 150, presets.wobbly),
        y: spring(isChecked ? 1.2 : 1),
        z: spring(isChecked ? 0 : 360)
      }}
    >
      {style => (
        <div
          className="card"
          style={{
            opacity: style.opacity,
            transform: `translateY(${style.x}px) scale(${style.y}) rotateX(${style.z}deg)`
          }}
        >
          <button onClick={() => handleClick(number)} disabled={!isChecked}>Link {number}</button> {description}
        </div>
      )}
    </Motion>
  );
};

export default Card;
