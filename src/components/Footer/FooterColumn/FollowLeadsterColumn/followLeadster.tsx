import Image from "next/image";
import Facebook from "../../../../assets/facebook.svg";
import Instagram from "../../../../assets/instagram.svg";
import Linkedin from "../../../../assets/linkedin.svg";
import { Container } from "./followLeadsterStyles";

export default function FollowLeadsterColumn() {
  return (
    <Container>
      <h3>Siga a Leadster</h3>
      <div style={{ display: "flex" }}>
        <a
          href="https://www.linkedin.com/company/leadster-platform/?originalSubdomain=br"
          target="_blank"
        >
          <Image src={Linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://www.facebook.com/leadsterplatform/?locale=pt_BR"
          target="_blank"
        >
          <Image src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/leadster.com.br/" target="_blank">
          <Image src={Instagram} alt="Instagram" />
        </a>
      </div>
      <span>
        <b>E-mail: </b>contato@leadster.com.br
      </span>
      <span>
        <b>Telefone: </b>(42) 98828-9851
      </span>
    </Container>
  );
}
