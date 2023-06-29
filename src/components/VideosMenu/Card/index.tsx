import Image from "next/image";
import { Container } from "./styles";
import Thumbnail from "../../../assets/thumbnail.png";
import Play from "../../../assets/play.png";
import Modal from "@/components/Modal";
import { useState } from "react";
import { YouTubePlayer } from "react-youtube";

export type VideoProps = {
  title: string;
  url: string;
  category?: string;
};

export default function Card({ data, category }: VideoProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleCloseModal() {
    setIsModalVisible(false);
  }
  if (category !== "all" && data.category !== category) {
    return null; // Não renderiza o componente
  }

  // alterar url do youtube para embed, exemplo: "https://www.youtube.com/embed/WAX8tDU5Alg"
  var url = data.url;
  var regex = /v=([^&]+)/;
  var match = url.match(regex);

  if (match) {
    var videoId = match[1];
    var videoUrl = `https://www.youtube.com/embed/${videoId}`;
  } else {
    console.log("Erro ao encontrar o vídeo.");
  }

  return (
    <Container key={data.url}>
      <button
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        <Image src={Play} alt="play" />{" "}
      </button>
      {/* div para imagem ficar azul no hover */}
      <div className="thumbnailContent">
        <Image className="thumbnail" src={Thumbnail} alt="thumbnail" />
      </div>
      <h4>{data.title}</h4>
      <Modal
        onCancel={handleCloseModal}
        visible={isModalVisible}
        title={data.title}
        url={data.url}
      >
        <iframe width="420" height="315" src={videoUrl}></iframe>
      </Modal>
    </Container>
  );
}
