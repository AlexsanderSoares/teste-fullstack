<h1>Projeto Teste Fullstack</h1>

<h3>Como testar este projeto</h3>

<p>
  1. Faça um clone
</p>
<code>
  $ git clone https://github.com/AlexsanderSoares/teste-fullstack.git
</code>

<p>
  2. Entre na pasta do projeto
</p>
<code>
  $ cd teste-fullstack
</code>

<p>
  3. Instale as dependências
</p>
<code>
  $ yarn install //Ou use o NPM se preferir
</code>

<p>
  4. Instale as dependências
</p>
<code>
  $ yarn dev
</code>

<p>Se tudo ocorrer bem, a seguinte frase deve ser exibida no terminal:</p>
<code>
  Server is running on PORT 3333
</code>

<h3>
    Rotas da API
</h3>
<p>Você pode usar um Cliente API REST (Postman, Insomnia...) para testar a API</p>
<p>1. Lista de estados (Nome e UF)</p>
<code>
  http://localhost:3333/estados
</code>

<p>2. População estimada de um estado específico</p>
<code>
  http://localhost:3333/estados/populacao/:uf //substitua :uf pela abreviação do nome do estado
</code>

<p>2. Lista de estados e população estimada (Nome, UF, População)</p>
<code>
  http://localhost:3333/estados/populacao/
</code>
