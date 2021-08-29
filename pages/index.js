import Head from "next/head";
import Navigation from "../Components/Navigation";
import Hero from "../Components/Hero";
import HomeSmallCardSection from "../Components/HomeSmallCardSection";
import IngredientSection from "../Components/IngredientSection";
import { data } from "../Components/IngredientSection/data";
import { branddata } from "../Components/IngredientSection/branddata";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Hero />
      <HomeSmallCardSection />
      <IngredientSection data={data} />
      <IngredientSection brand data={branddata} />
    </div>
  );
}
