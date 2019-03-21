import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 84px;
  width: 796px;
  @media screen and (max-width: 1280px) {
    width: 676px;
  }
  @media screen and (max-width: 1024px) {
    width: 496px;
  }
  @media screen and (max-width: 768px) {
    width: 668px !important;
  }
  @media screen and (max-width: 320px) {
    width: 248px !important;
    left: 56px;
  }
  height: 2px;
  background-color: #e6eaf0;
`;

const EventSeparator = props => (
  <Wrapper className="event__separator" style={ props.style } />
);

export default EventSeparator;
