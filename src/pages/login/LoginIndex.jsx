import React from "react";
import Container from "../../components/common/Container";
import BreadCrumb from "../../components/common/BreadCrumb";
import Paragraph from "../../components/ui/Paragraph";
import Line from "../../components/common/Line";

const LoginIndex = () => {
  return (
    <section className="mt-[124px] pb-[140px]">
      <Container>
        <BreadCrumb label="Login" rootUrl="/" rootLabel="Home" />
        <Paragraph className='mt-[127px] max-w-[644px]' text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the." />
        <Line className="mt-[62px] mb-[57px]"/>
      </Container>
    </section>
  );
};

export default LoginIndex;
