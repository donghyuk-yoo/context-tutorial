import React, { useContext } from "react";
import ColorContext from "../contexts/color";

function ColorBox() {
  const { state } = useContext(ColorContext);
  return (
    // ColorContext 안에 있는 색상을 props로 받아오는 것이 아닌 Consumer라는 컴포넌트를 통해 색상을 조회
    // function as a child(Render Props) : 컴포넌트의 children이 있어야 할 자리에 JSX혹은 문자열이 아닌
    // 함수 전달
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
}

export default ColorBox;
