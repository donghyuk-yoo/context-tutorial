import React from "react";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";

function App() {
  return (
    // Provider 사용시 기본값을 명시해 주어야 한다 = value
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
