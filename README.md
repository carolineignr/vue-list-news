# list-articles

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Sobre o app

De acordo com o que interpretei no README da API, objetivo principal da aplicação é realizar um request para a API disponibilizada, onde retornará uma lista com diversos artigos. Esta lista deve ser apresentada para o usuário, que poderá ler os detalhes do artigo clicando no botão 'Read more' do card correspondente. 

A ideia inicial foi que a aplicação fosse simples e fácil de usar, sem "features" desnecessárias dentro do tempo disponível para o desenvolvimento. Levando isso em consideração, alguma coisas como cores e tipografia foram mantidas já que possuem um impacto leve porém com contraste entre o background e os textos.

O fluxo comum de utilização da aplicação seria:
1 - Acessar a aplicação;
2 - O request para a API é feito e uma animação de loading aparece na seção da esquerda até que a requisição esteja completa e a lista de artigos tenha sido salva no estado da aplicação.
3 - Caso ocorra um erro na requisição, o componente de empty section é chamado e renderiza um emoji e uma mensagem;
4 - Caso tudo ocorra bem com a requisição, a lista é renderizada e a seção da direita permanece em branco, apenas com a animação de 'emoji' com expressão neutra, e uma mensagem informativa guiando o usuário a clicar em um dos artigos.
5 - Ao clicar no artigo, este deve ser salvo no estado da aplicação como currentArticle e então o componente ArticleDetail é renderizado com as informações do artigo.
6 - Se o usuário buscar por outro artigo através do search filter, o valor de currentArticle é definido novamente como null para que a seção da direita fique em branco até que outro artigo seja selecionado, conforme solicitado no README do desafio.

### Como rodar

- Inicialmente é preciso que a API esteja rodando localmente para receber os requests da aplicação:
    cd api -> yarn install -> yarn api
- Em outro terminal, acessar o diretório correspondente à aplicação:
    cd app -> npm install -> npm run serve

### Processo de desenvolvimento

Para iniciar o desenvolvimento do projeto, incialmente tentei fazer um levantamento de todos os requisitos obrigatórios que consegui encontrar no README do projeto e criei um checklist com isso, dessa forma pude organizar melhor minhas tomadas de decições e quebrar algumas tarefas em pedaços menores e mais simples. 

Nesse processo comecei realizando um scketch manual de como o layout da aplicação poderia ficar, e então criei um Moadboard simples apenas para salvar e usar como referência imagens de outros projetos de contexto similar a este. Também decidi usar SASS por ser o pré processador com o qual mais trabalhei e conheço.

Como gosto bastante de fazer animações em CSS, pesquisei por referências em sites como o CodePen para utilizar a animação de 'emoji' que aparece no componente de seção vazia.

Apesar de a requisição sempre ser realizada quando a página é aberta, foi adicionado um botão para realizar o refresh da lista caso o usuário deseje. 

Além disso, é possível realizar uma busca pelo títutlo dos artigos através do search filter que está logo no início da seção da esquerda (em cima da lista de artigos).

Escolhi realizar o teste com Vue pela afinidade que venho construindo com o framework e também porque faz parte da stack solicitada pela Xhocware. 

Como desenvolvi a aplicação em Vue 3 e estou acostumada a trabalhar com a versão 2, algumas coisas foram diferentes de manipular, como por exemplo o setup de testes. Tentei utilizar o test-utils e o vue-testing-library, porém ambos falharam no momento de rederizar o componente. Devido ao tempo para a entrega do desafio, decidi seguir com a entrega sem os testes a princípio, mas continuo tentando realizar a configuração aqui para entender como resolver o problema e posso atualizar o repositório futuramente :). De forma geral, não houveram outros grandes impedimentos durante o desenvolvimento.

### Melhorias que gostaria de fazer

- Conforme citado no README, gostaria de adicionar paginação à lista de artigos principalmente em função do número total de artigos armazenados.
- Adicionar os testes para os seguintes pontos:
    - Quando alterar o valor do input de pesquisa, o current article deve ser null
    - Quando clicar no Read More, o current article deve ser diferente de null
    - Quando preencher um valor no input, o número de cards na tela deve ser igual ao filteredList length