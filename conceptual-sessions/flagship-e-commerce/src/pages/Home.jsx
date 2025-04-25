import React from "react";
import Hero from "../components/Hero";
import PhoneContainer from "../components/PhoneContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <Hero />
      <PhoneContainer data={data} />
    </>
  );
};

export default Home;
