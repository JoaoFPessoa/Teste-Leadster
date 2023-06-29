import Banner from "@/components/Banner";
import ComparativeBanner from "@/components/ComparativeBanner";
import Header from "@/components/Header";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Leadster - Marketing conversacional</title>
        <meta
          name="description"
          content="Marketing Conversacional: O Futuro da Geração de Leads"
        />
      </Head>
      <Header />
      <Banner />
      <ComparativeBanner />
    </>
  );
}
