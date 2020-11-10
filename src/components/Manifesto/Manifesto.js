import React from 'react';
import './styles.css';
import Selo from '../../assets/selobrasa.png'

//stateless components
//pode criar componentes apenas por funções -->

const Manifesto = () => (
    <main className="main">
        <section>
          <div className="tab-row">
            <div className="col-12">
              <h1 className="title1">
                Como Brasa, estamos em constante movimento.</h1>
              <p className="resume">
                O fogo foi uma tecnologia tão potente, que tudo que veio depois
                dele se marca pela sua presença. Construímos quem somos como
                resposta a um ardente chamado ancestral.
              </p>
              <p className="resume">
                O aquilombamento nos trouxe aqui e agora somos potência de 
                transformação!
              </p>

              <h1 className="title2">Nascemos como Brasa Mag a partir de uma
                história esculpida por fogo. Enxergamos seu poder como um espelho - e é
                preciso coragem para olhar para uma chama e sentir o calor dela olhar de volta.
              </h1>

              <p className="resume"> A chama da revolução, que nasceu no primeiro contato com o 
                Hip Hop, cresceu em nossos corações. Suas batidas, rimas e flow nos envolvem.
                Como um ídolo distante, mas tão presente no nosso cotidiano, seu ardor aponta
                quem queremos ser com um único propósito:
                tomar a nossa narrativa de volta. Como? Por meio de informação,
                apuração, opnião, notícia, crítica, reflexão e arte.
              </p>

              <h1 className="title1">Brasa é uma revista digital sobre HIP HOP.</h1>
              <p className="resume">Marcado pela excelência, esse movimento cultural tornou-se uma 
                filosofia: um jeito de pensar, agir, ver e ouvir. Acima de tudo: existir.
                Para isso, é preciso absorver e ecoar o Hip Hop em cada célula.</p>

              <p className="resume"> Com todo respeito, não nos encaixamos nas formas velhas. Por 
                nós e para nós, olhamos para o futuro sem deixar de sentir o passado
                nas veias.
              </p>

            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div>
                <img  className="selo" src={Selo}/>
              </div>
            </div>
        </div>  
      </section>
    </main>

);


export default Manifesto