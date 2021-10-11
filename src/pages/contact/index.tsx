import React from "react";
import dynamic from "next/dynamic";
import Seo from "components/Seo";

const ContactTop = dynamic(() => import("components/ContactTop"), {
  ssr: false,
});

function Contact(): JSX.Element {
  return (
    <>
      <Seo title="ご依頼等" />
      <ContactTop />
    </>
  );
}

export default Contact;
