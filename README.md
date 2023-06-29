# Teste-Leadster

<h1>Teste de frontend para empresa de Marketing Conversacional chamada Leadster</h1>

<h4>Decisões tomadas</h4>

- <b>Escolher entre SSG, SSR ou CSR:</b>
  Por ser um projeto com só 1 página, e não muito dinâmico, optei por seguir com SSG, pois é a melhor estratégia para SEO, por proporcionar pré-renderização do HTML e melhorar a performance da página (melhorando o ranking em SEO).

- <b>Tecnologias a utilizar:</b>

  - obrigratório
    <b>Next.js</b>
    <b>Typescript</b>
    <b>Styled components</b>
    <b>Cypress para testes</b>

- <b>Escolher entre SSG, SSR ou CSR:</b>
  decidi ir ao site oficial da Leaster para captar as cores e medidas e utilizá-las no <b>Global Styles</b>

<h4> Organização do código </h4>

Por se tratar de uma landingPage desenvolvi o código em uma página só, dividindo os componentes em src/components, funções utilitárias em src/utils, teste em /cypress, e estilos globais em /styles.
Contei com a ajuda do ESlint e Typescript para melhora do código.

<h4>Funcionalidades</h4>

- Apresentação da empresa com ótima visualização
- Amostra de artigos com vídeos embutidos
- Filtragem dos arquivos
- Paginação
- Redirecionamento para redes sociais
- Testes e2e
- SEO
- Código desacoplado para fácil manutenção
- Alta dinamicidade em componentes para serem reutilizados
- Pouquíssimas libs usadas, tornando-o mais leve e independente

<h4> Instruções para rodar o projeto </h4>

- Abra seu terminal
- Rode esta lista de comandos:
  git clone https://github.com/JoaoFPessoa/Teste-Leadster
  cd Teste-Leadster
  yarn install (para instalar todas dependências do projeto)
  yarn dev
- Pronto! Abra o navegaor em: http://localhost:3000/

<h4> Instruções para rodar os testes </h4>

Com o projeto já instalado, abra o terminal na pasta do projeto e digite:
yarn test

- Clique em "E2E Testing"
- Clique em "Start E2E Testing in Electron"
- Depois clique em "Home"
