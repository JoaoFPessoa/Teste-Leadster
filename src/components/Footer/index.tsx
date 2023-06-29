import { ColumnsContainer, Container } from "./styles";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import FooterColumn from "./FooterColumn";
import FollowLeadsterColumn from "./FooterColumn/FollowLeadsterColumn/followLeadster";
import Copyright from "./Copyright";

const mainLinks = ["Home", "Ferramenta", "Preços", "Contato"];

const cases = [
  "Geração de Leads B2B",
  "Geração de Leads em Software",
  "Geração de Leads Imobiliária",
  "Cases de sucesso",
];

const material = [
  "Blog",
  "Parceria com Agências",
  "Guia definitivo do Marketing",
  "Materiais Gratuitos",
];

export default function Footer() {
  return (
    <Container>
      <header>
        <Image src={Logo} alt="logo" />
        <span>Transormando visitantes em clientes.</span>
      </header>
      <ColumnsContainer>
        <FooterColumn title="Links Principais" links={mainLinks} />
        <FooterColumn title="Cases" links={cases} />
        <FooterColumn title="Materiais" links={material} />
        <FollowLeadsterColumn />
      </ColumnsContainer>
      <Copyright />
    </Container>
  );
}
