import Image from "next/image";
import { Container } from "./styles";
import Thumbnail from "../../../assets/thumbnail.png";
import Play from "../../../assets/play.png";

export type VideoProps = {
  title: string;
  url: string;
  category?: string;
};
export default function Card({ data, category }: VideoProps) {
  if (category !== "all" && data.category !== category) {
    return null; // Não renderiza o componente
  }

  return (
    <Container key={data.url}>
      <button>
        <Image src={Play} alt="play" />{" "}
      </button>
      {/* div para imagem ficar azul no hover */}
      <div className="thumbnailContent">
        <Image className="thumbnail" src={Thumbnail} alt="thumbnail" />
      </div>
      <h4>{data.title}</h4>
    </Container>
  );
}
