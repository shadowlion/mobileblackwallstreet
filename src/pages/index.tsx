import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import LogoImage from "../../public/logo.webp";
import { fetchEntries } from "../lib/contentful";

export const getStaticProps = async () => {
  const [events, error] = await fetchEntries();
  if (error) {
    throw new Error(error);
  }
  console.log(events);
  return {
    props: {
      events,
    },
  };
};

const Home = ({ events }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Mobile Black Wallstreet</title>
        <meta name="description" content="Connecting community and culture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>

      <main>
        <Image src={LogoImage} alt="Mobile Black Wallstreet Logo" />
        <p>{JSON.stringify(events)}</p>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
