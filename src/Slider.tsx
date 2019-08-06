import * as React from "react";
import { Frame, useMotionValue } from "framer";

export function Slider() {
  const position = useMotionValue(0);
  return (
    <Frame
      name={"Rail"}
      width={130}
      height={6}
      radius={3}
      background={"rgba(255, 255, 255, 0.5)"}
      center
    >
      <Frame
        name={"Fill"}
        width={position}
        height={6}
        radius={3}
        background={"#F2F"}
      />
      <Frame
        name={"Knob"}
        x={position}
        size={40}
        center={"y"}
        radius={"50%"}
        background={"#FFF"}
        left={-20}
        drag={"x"}
        dragConstraints={{ left: 0, right: 130 }}
        dragElastic={0}
        dragMomentum={false}
      />
    </Frame>
  );
}
