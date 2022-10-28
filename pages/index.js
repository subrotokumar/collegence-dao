import Head from "next/head";
import Header from "../components/Header";
import HomeBody from "../components/HomeBody";

export default function Home() {
  return (
    <>
      <Head>
        <title>DAO</title>
        <meta
          name="description"
          content="Our Decentralized Autonomous Organisation"
        />
        <link rel="icon" href="/earth.png" />
      </Head>
      <>
        <HomeBody />
      </>
    </>
  );
}
