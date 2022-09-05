import React from "react";
import Collection from "../Collection";
import Hero from "../Hero";
import Specials from "../Specials";
import Banner from "../Banner";
import Blogs from "../Blogs";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Collection />
      <Specials />
      <Banner />
      <Blogs />
      <Footer />
    </>
  );
}
