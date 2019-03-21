import React from "react";
import styled from "styled-components";

const Line = styled.div`
  width: 24px;
  height: 3px;
  background-color: black;
  margin: 4px 0;
`;

export default function MenuButton(props) {
  return (
    <div className="menu-button">
      <Line />
      <Line />
      <Line />
    </div>
  );
}
