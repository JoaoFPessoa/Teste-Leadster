import Image from "next/image";
import { Container } from "./styles";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Container>
      <Image src={Logo} alt="leadster-logo" />
    </Container>
  );
}
