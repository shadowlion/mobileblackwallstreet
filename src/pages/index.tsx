import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import LogoImage from "../../public/logo.webp";
import CountdownTimer from "../components/CountdownTimer";
import Navbar from "../components/Navbar";
import { fetchEntry } from "../lib/contentful";
import type { Event } from "../types";

export const getStaticProps = async () => {
  const [event, error] = await fetchEntry();
  return {
    props: {
      event: (event as Event).fields,
    },
  };
};

const Home = ({ event }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { eventName, timeStart, location, formLink, map } = event;
  return (
    <Fragment>
      <Head>
        <title>Mobile Black Wallstreet</title>
        <meta name="description" content="Connecting community and culture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar formLink={formLink} mapLink={map} />
      </header>
      <main>
        <div className="flex justify-center items-center h-5/6 text-center">
          <Image src={LogoImage} alt="Mobile Black Wallstreet Logo" />
        </div>
        <div className="flex justify-center items-center text-center">
          <div className="container">
            <p>{eventName}</p>
            <CountdownTimer targetDate={timeStart} />
            <address>{documentToReactComponents(location as Document)}</address>
            {/* <p>{JSON.stringify(event)}</p> */}
          </div>
        </div>
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default Home;
