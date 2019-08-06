import * as React from "react";
import { render } from "react-dom";
import { Frame } from "framer";
import { Slider } from "./Slider";

export function App() {
  return (
    <Frame
      name={"SliderApp"}
      width={"100%"}
      height={"100%"}
      background={"#242424"}
    >
      <Frame />
      <Slider />
    </Frame>
  );
}

render(<App />, document.getElementById("root"));
