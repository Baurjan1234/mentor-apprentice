import React, { useState } from "react";
import { Button as Btn } from "../buttonElements";
import Button from "react-bootstrap/Button";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  ArrowForward,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowRight,
} from "./heroElements";
import Video from "../../video/video.mp4";
import ModalShow from "../modal";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div>
      <HeroContainer id={"home"}>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type={"video/mp4"} />
        </HeroBg>
        <HeroContent>
          <HeroH1>Mentor&Apprentice</HeroH1>
          <HeroP>
            ШУТИС-МХТС сургуулийн Mentor&Apprentice клуб. Клуб нь ШУТИС-МХТС
            оюутнууд өөрсдийгөө технологийн боловсролоор хөгжүүлэхэд
            зориулагдсан болно.
          </HeroP>
        </HeroContent>

        <HeroBtnWrapper>
          <ModalShow />
        </HeroBtnWrapper>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
