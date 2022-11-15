import React, { useState } from "react";
import InfoSection from "../components/infoSection";
import CollapsibleExample from "../components/offConvas";
import HeroSection from "../components/heroSection";
import GroupCart from "../components/cart";
import IndividualIntervalsExample from "../components/carousel";
import ModalShow from "../components/modal";
import Footer from "../components/footer";

import "./style.css";
import FormSection from "../components/formSection";
import VerticalLinearStepper from "../components/stepper";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dark">
      <CollapsibleExample />
      <HeroSection />
      {/* <div className="about">
        <h1>Бидний тухай</h1>
        <h3>
          Хүрээ МХТДС-ийн Компьютерийн ухааны тэнхимийн дэргэдэх клуб бөгөөд
          манай клубийн үйл ажиллагаа бол оюутнуудад чиглэсэн сургалт, бусад үйл
          ажиллагааг тогтмол зохион байгуулах юм.
        </h3>
      </div> */}
      <VerticalLinearStepper />
      <GroupCart />
      <IndividualIntervalsExample />
      <FormSection />
      <Footer />
    </div>
  );
};

export default Home;
