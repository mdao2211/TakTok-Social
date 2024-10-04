import Head from "next/head";

import Header from "../components/Header";
import LeftHandSide from "../components/LeftHandSide";
import RightHandSide from "../components/RightHandSide";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Taktok</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/TaktokLogo.png" />
      </Head>
      <Header isShow={true} />
      <main>
        <LeftHandSide />
        <RightHandSide />
      </main>
    </div>
  );
}
