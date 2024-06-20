import styled from "styled-components";
import { FaCircleArrowUp } from "react-icons/fa6";
import { ScrollTopButtonStyle } from "./style";

const ScrollTopButton = () => {
  return (
    <ScrollTopButtonStyle>
      <FaCircleArrowUp
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
    </ScrollTopButtonStyle>
  );
};

export default ScrollTopButton;
