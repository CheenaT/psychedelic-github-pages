import React from "react";
import Slider from "react-slick";
import styled, { keyframes } from 'styled-components';

const Slide = styled.div`
  background-color: cyan;
  border: 1px solid black;
  margin-top: 12.5px
  margin-bottom: 12.5px

  height: 120px;
`

const rotate = keyframes`
  from {
    -webkit-transform: scale(1) !important;
    -moz-transform: scale(1) !important;
    transform: scale(1) !important;
  }

  to {
    -webkit-transform: scale(1.2) !important;
    -moz-transform: scale(1.2) !important;
    transform: scale(1.2) !important;
  }
`;

const Slide1 = styled.div`
  animation: ${rotate} 2s;
  background-color: white;
  border: 1px solid black;
  margin-top: 12.5px
  height: 120px;
`

export default class _Slider extends React.Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      dots: true,
      centerPadding: "100.5px", /* Длина слайдов слева и справа */
      speed: 2000
    };
    return (
      <div className="SliderCustom">
        <div className="slider__child">
        <Slider {...settings}>
          <Slide>
            <h3>1</h3>
          </Slide>
          <Slide1>
            <h3>2</h3>
          </Slide1>
          <Slide>
            <h3>3</h3>
          </Slide>
          <Slide style={{backgroundColor: 'white'}}>
            <h3>4</h3>
          </Slide>
          <Slide>
            <h3>5</h3>
          </Slide>
          <Slide>
            <h3>6</h3>
          </Slide>
        </Slider>
        </div>
      </div>
    );
  }
}

// export default Slider;
