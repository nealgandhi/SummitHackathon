import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import InfoCards from "./InfoCards";

export default function Landingpage() {
  return (
    <div class="hscreen">
      <Header />
      <Hero />
      <InfoCards />
      <Footer />
    </div>
  );
}
