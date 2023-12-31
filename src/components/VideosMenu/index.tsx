import { useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import { CardWrapper, Container, PaginationContainer } from "./styles";

type Item = {
  title: string;
  category?: string;
  url: string;
};

export default function VideosMenu({ data }: { data: Item[] }) {
  const [filter, setFilter] = useState("all");
  function getFilterValue(value: string) {
    setFilter(value);
  }
  const [currentPage, setCurrentPage] = useState(1);

  const itensPerPage = 9;

  // Calcule o índice de início e fim dos itens da página atual
  const startIndex = (currentPage - 1) * itensPerPage;
  const finalIndex = startIndex + itensPerPage;

  // Use a função slice para obter os itens da página atual
  const itensDaPagina = data.slice(startIndex, finalIndex);

  return (
    <Container>
      <Filter getFilterValue={getFilterValue} />
      <CardWrapper>
        {itensDaPagina.map((video: Item) => {
          return <Card data={video} category={filter} key={Math.random()} />;
        })}
      </CardWrapper>
      <PaginationContainer>
        <h3>Página</h3>
        <button onClick={() => setCurrentPage(1)}>1</button>
        <button onClick={() => setCurrentPage(2)}>2</button>
        <button onClick={() => setCurrentPage(2)}>3</button>
        <button onClick={() => setCurrentPage(2)}>4</button>
      </PaginationContainer>
    </Container>
  );
}
