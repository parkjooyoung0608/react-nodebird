import React, { useState } from "react";
import { PropTypes } from "prop-types";
import Slick from "react-slick";
import {
  Overlay,
  Global,
  Header,
  CloseBtn,
  SlickWrapper,
  ImgWrapper,
  Indicator,
} from "./styles";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드 번호 저장

  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose}>X</CloseBtn>
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0} // 첫 번째 나올 이미지는 index 몇번으로 할 것인지
            afterChange={(slide) => setCurrentSlide(slide)} // 페이지를 넘기면 slide 번호를 state로 저장
            infinite // 무한 반복
            arrows={false} // 화살표 지우기 (손으로만 슬라이드 가능)
            slidesToShow={1} // 한번에 하나씩만 보이도록
            slidesToScroll={1} // 한번에 하나씩만 넘길 수 있도록
          >
            {/* Slick이 자동으로 Slick안에 있는 div들을 캐러셀로 만들어준다. */}
            {images.map((v) => (
              <ImgWrapper key={v.src}>
                <img src={v.src} alt={v.src} />
              </ImgWrapper>
            ))}
          </Slick>
          <Indicator>
            <div>
              {currentSlide + 1} / {images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

ImagesZoom.PropTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
