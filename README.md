## <p align="center">O que foi a Imersão FrontEnd?</p>

<p align="center">
  A Imersão FrontEnd, realizada pela Alura, foi um projeto voltado para criar a landing page do Spotify usando HTML, CSS e Javascript, além de adentrar um pouco no framework React.
</p>

## <p align="center">Como vizualizar a página feita?</p>

<p align="center">
 Para vizualizar a página, serão necessários alguns passos.
</p>

**1. Instalar o Node:**
Acessar [Instalação do Node](https://nodejs.org/pt/download) e selecionar o seu sistema.

**2. Instalar pacotes e json-server:**
No terminal do seu sistema, você terá que baixar os ícones que aparecem referenciados na página com: 

    npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons 
e instalar o json-server (necessário para acessar a API falsa criada para mostrar os resultados de pesquisa) com:

    npm install -g json-server

**3. Clonar repositório:**
Para clonar este repositório, você irá usar o comando 

    git clone https://github.com/Sophia-lsts/imersaoFrontend

**4. Escolher entre JS e React:**
Como os dois forem feitos durante a Imersão, optei por separar e deixar os dois disponíveis.

- **JS:** Acessar a pasta _Api-artists_ que está em _spotify-js_, utilizar o comando abaixo e abrir o código HTML no navegador que já poderá ter acesso.

      json-server --watch artists.json --port 3000

- **React:** Acessando a pasta _spotify-react_ , você irá usar o comando
  
      npm install react react-dom
  para instalar React e React DOM e logo após abrir o projeto com

      npm start

## <p align="center">Página:</p>

![Foto da Página](https://github.com/user-attachments/assets/a77a3951-a611-4db4-86e9-3ef4ebf1753d)

