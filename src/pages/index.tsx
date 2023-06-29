import Banner from "@/components/Banner";
import ComparativeBanner from "@/components/ComparativeBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideosMenu from "@/components/VideosMenu";
import Head from "next/head";
import videosJson from "../components/VideosMenu/videos.json";
import { InferGetStaticPropsType, GetStaticProps } from "next";

export async function getStaticProps() {
  const allPostsData = videosJson;
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({
  allPostsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
      <VideosMenu data={allPostsData} />
      <ComparativeBanner />
      <Footer />
    </>
  );
}
