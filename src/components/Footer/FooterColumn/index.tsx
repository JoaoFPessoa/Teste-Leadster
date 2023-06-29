import { Container } from "./styles";

type FooterProps = {
  title: string;
  links: string[];
};

export default function FooterColumn({ title, links }: FooterProps) {
  return (
    <Container>
      <h3>{title}</h3>
      <ul>
        {links.map((link) => {
          {
            return <li key={link}>{link}</li>;
          }
        })}
      </ul>
    </Container>
  );
}
