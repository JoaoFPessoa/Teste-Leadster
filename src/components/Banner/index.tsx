import { Container, Tag } from "./styles";
import AssetHeader from "../../assets/asset-header.png";
import Image from "next/image";
export default function Banner() {
  return (
    <Container>
      <Tag>Webinars exclusivos</Tag>
      <h2>Menos conversinha,</h2>
      <h1>
        Mais conversão{" "}
        <Image className="assetHeader" src={AssetHeader} alt="asset-header" />
      </h1>
      <span className="subtitle">
        Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las em
        seu negócio.
      </span>
    </Container>
  );
}
