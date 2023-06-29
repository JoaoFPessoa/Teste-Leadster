import Button from "@/components/Button";
import { ButtonsContainer, Container, OrdinationContainer } from "./styles";
import { useEffect, useState } from "react";

type Props = {
  getFilterValue: (value: string) => void;
};

export default function Filter({ getFilterValue }: Props) {
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    getFilterValue(filter);
  }, [filter, getFilterValue]);

  return (
    <Container>
      <ButtonsContainer>
        <Button
          padding="10px 15px"
          title="Todas"
          variant="secondary"
          onClick={() => {
            setFilter("all");
          }}
        />
        <Button
          padding="10px 15px"
          title="Agências"
          variant="secondary"
          onClick={() => {
            setFilter("agencias");
          }}
        />
        <Button
          padding="10px 15px"
          title="Chatbot"
          variant="secondary"
          onClick={() => {
            setFilter("chatbot");
          }}
        />
        <Button
          padding="10px 15px"
          title="Marketing Digital"
          variant="secondary"
          onClick={() => {
            setFilter("marketingDigital");
          }}
        />
        <Button
          padding="10px 15px"
          title="Geração de Leads"
          variant="secondary"
          onClick={() => {
            setFilter("leads");
          }}
        />
        <Button
          padding="10px 15px"
          title="Mídia Paga"
          variant="secondary"
          onClick={() => {
            setFilter("midiaPaga");
          }}
        />
      </ButtonsContainer>
      <OrdinationContainer>
        <h3>Ordernar por </h3>
        <select>
          <option>Data de publicação</option>
          <option>Data de lançamento</option>
        </select>
      </OrdinationContainer>
    </Container>
  );
}
