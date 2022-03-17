import { useState } from "react";
import Welcome from "./Welcome";

const deck = [
    { questionsDeck: "Nome do professor?", answers: "Emmett Brown" },
    { questionsDeck: "Modelo do veiculo/máquina do tempo", answers: "DeLorean" },
    { questionsDeck: "Data que Martin chega no futuro no segundo filme", answers: "21 de outubro" },
    { questionsDeck: "Marca da cueca de Martin?", answers: "Calvin Klein" },
    { questionsDeck: "Velocidade necessária para se utilizar a máquina do tempo?", answers: "88 milhas p hora" },
    { questionsDeck: "Nome do cachorro do professor?", answers: "Einstein" },
    { questionsDeck: "Esporte preferido de martin?", answers: "Skate" },
    { questionsDeck: "Acidente natural que permite martin voltar para o futuro?", answers: "Raio na torre" }
]

const questions = ["pergunta 1", "pergunta 2", "pergunta 3", "pergunta 4", "pergunta 5", "pergunta 6", "pergunta 7", "pergunta 8"];

const deckrandom = deck.sort(() => {
    return (Math.random() * 0.5);
})


export default function CardQuestion() {

    const [visible, setVisible] = useState(true);

    return (
        visible === true ?
            <nav className="screen deck">
                <Header />
                <Question />
            </nav>
            : <></>
    )
}

function Header() {
    return (
        <header className="top">
            <img className="light" src="./assets/light.png" />
            <h1 className="zaprecall">ZapRecall</h1>
        </header>
    )
}

function Question(props) {
    const [visible, setVisible] = useState(true);
    return (
        <>
            {questions.map(question => {
                return (
                    visible === true ?
                        <div className="questions">
                            <p>{question}</p>
                            <ion-icon onClick={() => setVisible(false)} name="play-outline"></ion-icon>
                        </div>
                        :<section className="card">
                            <div className="question face">
                                <p>{deck.questionsDeck}</p>
                            </div>
                            <div className="answer face">
                                <p>{deck.answers}</p>
                            </div>
                         </section>
                )
            })}
        </>
    )
}

// function Card(props) {


//     return (
//         visible === true ?
//             <section className="card">
//                 <div className="question face">
//                     <p>{props.deck.questionsDeck}</p>
//                 </div>
//                 <div className="answer face">
//                     <p>{props.deck.answers}</p>
//                 </div>
//             </section>
//             : <></>
//     )
// }