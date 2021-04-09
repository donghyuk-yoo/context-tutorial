import { createContext, useState } from "react";

// createContext의 파라미터 : Provider를 사용하지 않을 떄만 사용되는 기본값
const ColorContext = createContext({
  state: { color: "balck", subcolor: "red" },
  action: {
    setColor: () => {},
    setsubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setsubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setsubcolor },
  };

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
