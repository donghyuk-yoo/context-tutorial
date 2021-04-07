import { createContext } from "react";
// createContext의 파라미터 : Provider를 사용하지 않을 떄만 사용되는 기본값
const ColorContext = createContext({ color: "black" });

export default ColorContext;
