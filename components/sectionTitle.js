import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${props.align === "left" ? "" : "items-center justify-center text-center"
        }`}>
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider  uppercase" style={{ fontSize: '70px', fontWeight: 'bold', padding:'0px 0px 20px' }}>
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tightlg:leading-tight py-4 lg:text-4xl dark:text-white" style={{ fontSize: '40px', fontWeight: 'bold' }}>
          {props.title}
        </h2>
      )}

      {props.children && (
        <p style={{
          fontSize: " 18px",
          fontWeight: '400',
          padding:'0px 0px 60px'
        }} className="">
          {props.children}
        </p>
      )}
    </Container>
  );
}

export default SectionTitle;