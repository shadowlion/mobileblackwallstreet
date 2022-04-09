import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import LogoImage from "../../public/logo.webp";
import { fetchEntry } from "../lib/contentful";
import type { Event } from "../types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

export const getStaticProps = async () => {
  const [event, error] = await fetchEntry();
  return {
    props: {
      event: (event as Event).fields,
    },
  };
};

const Home = ({ event }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { eventName, timeStart, location } = event;
  return (
    <div>
      <Head>
        <title>Mobile Black Wallstreet</title>
        <meta name="description" content="Connecting community and culture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>

      <main className="flex justify-center items-center h-screen">
        <div className="text-center">
          <Image src={LogoImage} alt="Mobile Black Wallstreet Logo" />
          <p>Starts: {timeStart}</p>
          <p>{eventName}</p>
          <address>{documentToReactComponents(location as Document)}</address>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
