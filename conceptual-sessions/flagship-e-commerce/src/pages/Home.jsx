import React from "react";
import Hero from "../components/Hero";
import PhoneContainer from "../components/PhoneContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const phones = useLoaderData();
  return (
    <>
      <Hero />
      <PhoneContainer phones={phones} />
    </>
  );
};

export default Home;
