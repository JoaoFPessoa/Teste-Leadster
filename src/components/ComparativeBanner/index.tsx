import Image from "next/image";
import { Container, Content, Rating } from "./styles";
import Comparativo from "../../assets/comparativo_img_CTA.png";
import SeloRd from "../../assets/selo_RD.png";
import RatingImage from "../../assets/rating.webp";
import NoCard from "../../assets/no-card-dark.webp";

import Button from "../Button";

export default function ComparativeBanner() {
  return (
    <Container>
      {/* div para fazer a sombra que fica no elemento à esquerda do container */}
      <div className="_home_shape"></div>
      {/* primeira columna */}
      <Image src={Comparativo} alt="comparativo" />
      {/* segunda columna */}
      <Content>
        <h2>
          Pronto para triplicar sua <b>Geração de Leads?</b>
        </h2>
        <span>
          Criação e ativação em <b>4 minutos.</b>
        </span>
        <Rating>
          <div className="upperContent">
            <Button title="Ver demonstração" width="200px" padding="1rem 1rem">
              <b>VER DEMONSTRAÇÃO</b>
            </Button>
            <Image src={SeloRd} alt="selo-rd" />
          </div>
          <div className="lowerContent">
            <div>
              <Image src={NoCard} alt="noCard" className="noCardImage" />
              <span>
                {" "}
                <b>Não</b> é necessário Cartão de Crédito
              </span>
            </div>
            <div>
              <Image
                src={RatingImage}
                alt="ratingImage"
                className="ratingImage"
              />
              <span>4.9/5 média de satisfação</span>
            </div>
          </div>
        </Rating>
      </Content>
    </Container>
  );
}
