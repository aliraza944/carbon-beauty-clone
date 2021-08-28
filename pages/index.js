import Head from "next/head";
import Navigation from "../Components/Navigation";
import Hero from "../Components/Hero";
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
    </div>
  );
}
