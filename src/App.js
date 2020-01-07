import React from 'react';
//import logo from './logo.svg';
import { Link } from "react-router-dom";
import './App.css';
import seta from "./img/seta.png";
import pagina2 from "./components/pagina2.js"
function App() {
  return (
    <div className="App pageStyle">
     {/*  <header className="App-header">
        <h1>CONTEUDO</h1>
        <h2>PÁGINA 1</h2>

        <h1> COMO ESTRUTURAR UMA REDE DE ATENCAO AS PESSOAS EM SITUAÇÃO DE VIOLENCIA</h1>
       


      </header> */}
      {/*    <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <h1>CONTEUDO</h1>
        <h2>PÁGINA 1</h2>

        <h1> COMO ESTRUTURAR UMA REDE DE ATENCAO AS PESSOAS EM SITUAÇÃO DE VIOLENCIA</h1>
      <div className="body">
       <p>
       Inicialmente é fundamental destacar que uma rede para ser instrumento de intervenção precisa ser construída e dimensionada a partir da realidade local, 
       e é essencial que o atendimento seja realizado de forma articulada multiprofissional, interdisciplinar e interinstitucional. Parte-se do pressuposto de que cada instituição isoladamente não é capaz de dar conta da atenção integral devido 
       à complexidade do problema.

       </p>
       <p>
       A equipe de saúde precisa identificar as organizações, 
       serviços e todo o aparato social, que possam contribuir 
       com a atenção e tenham disponibilidade de atuação em sua área de abrangência. Um serviço a ser identificado no município é a atenção as pessoas em situação de violência sexual. Este tem normativa publicada pelo Ministério da Saúde desde 1999 e envolve principalmente os serviços hospitalares.

       </p>
       <p>
       Na sequência é necessário definir o fluxo, os me canismos de acesso e o manejo dos casos em cada ponto da rede. Esses elementos devem ser deba tidos e planejados periodicamente de modo a implantar uma cultura de monitoramento e avaliação.

       </p>
       <p>
       Reconhecer seu território, realizar o diagnóstico de serviços e conhecer como funcionam seus fluxos é um passo importante na definição e construção do que irá constituir a rede. Como mencionado anteriormente, a construção de redes pressupõe que as decisões sejam adotadas de forma horizontal nos princípios de igualdade, 
       democracia, cooperação e solidariedade (BRASIL, 2010b). Desta forma, 
       uma rede deve envolver propósitos comuns de equipes com discussões e implementações de processos para o alcance dos resultados.
       </p>
       <p>
       A elaboração de um manual ou guia de orientação da rede de atenção a pessoas em situação de violência com os en-dereços, telefones, e-mails dos componentes e os serviços que estes oferecem é imprescindível para o conhecimento e divulgação da rede. 
       Este manual/guia precisa estar disponível e atualizado.
       </p>
       <p>
       Todas as informações acima são importantes para a estruturação e funcionamento de uma rede de atenção as pessoas em situação de violência. A rede precisa ser construída a partir da realidade de cada município e a partir daí é necessário que se faça a pactuação de como será o funcionamento e
        as responsabilidades de cada serviço precisam ficar documentadas.
       </p>
       <p>
       Um grupo de gestão colegiada deve ser instituído com representação dos serviços envolvidos, que necessitamde um cronograma 
       de reuniões periódicas para avaliação e monitoramento da atuação da rede de atenção e do alcance dos objetivos propostos. É importante salientar que um usuário que esteja sendo acompanhado dentro da rede de atenção a pessoas em situação de violência pode estar também sendo seguido dentro da rede de atenção a saúde mental (por exemplo) e vice-versa. A complexidade destas situações demanda aos profissionais de saúde um entendimento “sobmedida” do conceito de rede, colocando o usuário no centro e evitando a redução do conceito a mera operacionalização de um fluxo rígido de cuidado entre serviços e setores.

       </p>
      {/*  <img>  src={seta}  <Link to="/pagina2"></Link>    </img> */}
       <div> 
       <Link to="/pagina2"></Link> 
       <img src={seta}  className="logo" alt='logo' href={pagina2} /> 
       </div>
        
      </div>
    </div>
  );
}


export default App;
